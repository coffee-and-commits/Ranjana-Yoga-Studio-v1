<?php
/**
 * One-time setup wizard. Adds an admin username and a bcrypt password hash
 * (computed by PHP itself via password_hash, so no password ever needs to
 * be hand-typed into a config file) to config.local.php — merging with
 * whatever is already there (e.g. db_* credentials), rather than
 * overwriting the file.
 *
 * Once an admin account exists, this page refuses to run again. To reset
 * it, remove the admin_username / admin_password_hash lines from
 * php-backend/config.local.php and reload this page.
 */

require __DIR__ . '/includes/helpers.php';
require __DIR__ . '/includes/db.php';

$config = require __DIR__ . '/config.php';
session_start();

$localConfigFile = __DIR__ . '/config.local.php';
$alreadyConfigured = !empty($config['admin_username']) && !empty($config['admin_password_hash']);

$errors = [];
$success = false;
$dbError = null;

try {
    db($config);
} catch (Throwable $e) {
    $dbError = $e->getMessage();
}

if (!$alreadyConfigured && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($dbError !== null) {
        $errors[] = 'Could not connect to the database, so the admin account was not created: ' . $dbError;
    } elseif (!hash_equals($_SESSION['setup_csrf'] ?? '', $_POST['csrf_token'] ?? '')) {
        $errors[] = 'Your session expired. Please reload the page and try again.';
    } else {
        $username = trim($_POST['username'] ?? '');
        $password = $_POST['password'] ?? '';
        $confirm  = $_POST['confirm'] ?? '';

        if ($username === '' || strlen($username) < 3) {
            $errors[] = 'Username must be at least 3 characters.';
        }
        if (strlen($password) < 8) {
            $errors[] = 'Password must be at least 8 characters.';
        }
        if ($password !== $confirm) {
            $errors[] = 'Password and confirmation do not match.';
        }

        if (empty($errors)) {
            $existing = file_exists($localConfigFile) ? (require $localConfigFile) : [];
            if (!is_array($existing)) {
                $existing = [];
            }
            $existing['admin_username'] = $username;
            $existing['admin_password_hash'] = password_hash($password, PASSWORD_DEFAULT);

            $php = "<?php\nreturn " . var_export($existing, true) . ";\n";
            $written = @file_put_contents($localConfigFile, $php);
            if ($written === false) {
                $errors[] = "Could not write to $localConfigFile — the web server user does not have permission to write to " . __DIR__ . '. Fix the directory permissions and try again.';
            } else {
                @chmod($localConfigFile, 0640);
                $success = true;
            }
        }
    }
}

if (!$alreadyConfigured) {
    $_SESSION['setup_csrf'] = $_SESSION['setup_csrf'] ?? bin2hex(random_bytes(32));
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Setup — Ranjana Yoga Studio Admin</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="admin/assets/style.css">
</head>
<body class="auth-page">
  <div class="auth-card">
    <h1>Admin Setup</h1>

    <?php if ($alreadyConfigured && !$success): ?>
      <p class="notice">Setup has already been completed.</p>
      <p><a class="btn" href="admin/login.php">Go to login</a></p>
      <p class="muted">To reset the admin account, remove the <code>admin_username</code> / <code>admin_password_hash</code> lines from <code>php-backend/config.local.php</code> on the server and reload this page.</p>

    <?php elseif ($success): ?>
      <p class="notice notice-success">Admin account created successfully.</p>
      <p><a class="btn" href="admin/login.php">Go to login</a></p>

    <?php else: ?>
      <p class="muted">Create the admin account used to log in to the dashboard and content editor.</p>

      <?php if ($dbError !== null): ?>
        <p class="notice notice-error">Could not connect to the database: <?= e($dbError) ?>. Fix the <code>db_*</code> settings in <code>php-backend/config.local.php</code> (or create the database) before continuing.</p>
      <?php endif; ?>

      <?php foreach ($errors as $error): ?>
        <p class="notice notice-error"><?= e($error) ?></p>
      <?php endforeach; ?>

      <form method="post">
        <input type="hidden" name="csrf_token" value="<?= e($_SESSION['setup_csrf']) ?>">
        <label>Username
          <input type="text" name="username" required minlength="3" autofocus>
        </label>
        <label>Password
          <input type="password" name="password" required minlength="8">
        </label>
        <label>Confirm Password
          <input type="password" name="confirm" required minlength="8">
        </label>
        <button type="submit" class="btn">Create Admin Account</button>
      </form>
    <?php endif; ?>
  </div>
</body>
</html>
