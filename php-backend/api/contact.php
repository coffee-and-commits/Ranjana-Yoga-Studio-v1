<?php
/**
 * Public endpoint the React contact form POSTs to. No authentication —
 * protected instead by CORS origin allowlist, a honeypot field, and a
 * per-IP rate limit.
 */

require __DIR__ . '/../includes/helpers.php';
require __DIR__ . '/../includes/db.php';

$config = require __DIR__ . '/../config.php';

// --- CORS ---------------------------------------------------------------
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['allowed_origins'], true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['success' => false, 'error' => 'Method not allowed'], 405);
}

$raw = file_get_contents('php://input');
$input = json_decode($raw, true);
if (!is_array($input)) {
    // Also accept classic form-encoded submissions.
    $input = $_POST;
}

// Honeypot: a hidden field named "website" that real users never fill in.
if (!empty($input['website'])) {
    json_response(['success' => true]); // pretend success, drop silently
}

$name      = trim((string) ($input['name'] ?? ''));
$phone     = trim((string) ($input['phone'] ?? ''));
$email     = trim((string) ($input['email'] ?? ''));
$interest  = trim((string) ($input['interest'] ?? ''));
$batchTime = trim((string) ($input['batchTime'] ?? ''));
$message   = trim((string) ($input['message'] ?? ''));

$errors = [];
if ($name === '' || mb_strlen($name) > 200) {
    $errors[] = 'Name is required.';
}
if ($phone === '' || !preg_match('/^[0-9+\-\s()]{6,20}$/', $phone)) {
    $errors[] = 'A valid phone number is required.';
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email address is invalid.';
}
if (mb_strlen($message) > 5000) {
    $errors[] = 'Message is too long.';
}

if (!empty($errors)) {
    json_response(['success' => false, 'errors' => $errors], 422);
}

$pdo = db($config);
$ip = client_ip();

// --- Rate limit -----------------------------------------------------------
$cutoff = date('Y-m-d H:i:s', strtotime('-' . (int) $config['contact_rate_limit_window'] . ' minutes'));
$stmt = $pdo->prepare('
    SELECT COUNT(*) as recent FROM submissions
    WHERE ip_address = :ip AND created_at > :cutoff
');
$stmt->execute([':ip' => $ip, ':cutoff' => $cutoff]);
$row = $stmt->fetch();
if ((int) $row['recent'] >= (int) $config['contact_rate_limit']) {
    json_response(['success' => false, 'error' => 'Too many submissions. Please try again later.'], 429);
}

$stmt = $pdo->prepare('
    INSERT INTO submissions (name, phone, email, interest, batch_time, message, ip_address, user_agent)
    VALUES (:name, :phone, :email, :interest, :batch_time, :message, :ip, :ua)
');
$stmt->execute([
    ':name'       => $name,
    ':phone'      => $phone,
    ':email'      => $email,
    ':interest'   => $interest,
    ':batch_time' => $batchTime,
    ':message'    => $message,
    ':ip'         => $ip,
    ':ua'         => substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 255),
]);

json_response(['success' => true]);
