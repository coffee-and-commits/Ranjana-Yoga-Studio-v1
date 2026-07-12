<?php
require __DIR__ . '/../includes/helpers.php';
require __DIR__ . '/../includes/db.php';
require __DIR__ . '/../includes/auth.php';

$config = require __DIR__ . '/../config.php';
start_admin_session($config);

if (is_logged_in()) {
    redirect('index.php');
}

if (empty($config['admin_username'])) {
    redirect('../setup.php');
}

$pdo = db($config);
$ip = client_ip();
$error = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!csrf_verify()) {
        $error = 'Your session expired. Please try again.';
    } elseif (is_locked_out($pdo, $config, $ip)) {
        $error = 'Too many failed attempts. Please wait ' . (int) $config['lockout_minutes'] . ' minutes and try again.';
    } else {
        $username = trim($_POST['username'] ?? '');
        $password = $_POST['password'] ?? '';
        $ok = attempt_login($config, $username, $password);
        record_login_attempt($pdo, $ip, $ok);

        if ($ok) {
            session_regenerate_id(true);
            $_SESSION['admin_logged_in'] = true;
            $_SESSION['admin_username'] = $username;
            redirect('index.php');
        }
        $error = 'Invalid username or password.';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Login — Ranjana Yoga Studio Admin</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="assets/style.css">
</head>
<body class="auth-page">
  <div class="auth-card">
    <h1>Admin Login</h1>
    <p class="muted">Ranjana Yoga Studio — Content &amp; Enquiries</p>

    <?php if ($error): ?>
      <p class="notice notice-error"><?= e($error) ?></p>
    <?php endif; ?>

    <form method="post">
      <?= csrf_field() ?>
      <label>Username
        <input type="text" name="username" required autofocus>
      </label>
      <label>Password
        <input type="password" name="password" required>
      </label>
      <button type="submit" class="btn">Log In</button>
    </form>
  </div>
</body>
</html>
