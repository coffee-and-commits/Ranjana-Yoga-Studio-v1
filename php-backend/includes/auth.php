<?php
/** Session bootstrap + auth helpers for the admin panel. */

function start_admin_session(array $config): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }
    session_name($config['session_name']);
    session_set_cookie_params([
        'lifetime' => 0,
        'path'     => '/',
        'secure'   => (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'),
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
}

function is_logged_in(): bool
{
    return !empty($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true;
}

function require_login(): void
{
    if (!is_logged_in()) {
        redirect('login.php');
    }
}

function is_locked_out(PDO $pdo, array $config, string $ip): bool
{
    $cutoff = date('Y-m-d H:i:s', strtotime('-' . (int) $config['lockout_minutes'] . ' minutes'));
    $stmt = $pdo->prepare('
        SELECT COUNT(*) as fails FROM login_attempts
        WHERE ip_address = :ip AND success = 0 AND attempted_at > :cutoff
    ');
    $stmt->execute([':ip' => $ip, ':cutoff' => $cutoff]);
    $row = $stmt->fetch();
    return ((int) $row['fails']) >= (int) $config['max_login_attempts'];
}

function record_login_attempt(PDO $pdo, string $ip, bool $success): void
{
    $stmt = $pdo->prepare('INSERT INTO login_attempts (ip_address, success) VALUES (:ip, :success)');
    $stmt->execute([':ip' => $ip, ':success' => $success ? 1 : 0]);
}

function attempt_login(array $config, string $username, string $password): bool
{
    if (empty($config['admin_username']) || empty($config['admin_password_hash'])) {
        return false;
    }
    $usernameOk = hash_equals($config['admin_username'], $username);
    $passwordOk = password_verify($password, $config['admin_password_hash']);
    return $usernameOk && $passwordOk;
}
