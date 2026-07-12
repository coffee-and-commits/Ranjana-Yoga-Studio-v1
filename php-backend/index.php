<?php
/** Convenience entry point: sends visitors to the right place. */

$config = require __DIR__ . '/config.php';

if (!empty($config['admin_username']) && !empty($config['admin_password_hash'])) {
    header('Location: admin/login.php');
} else {
    header('Location: setup.php');
}
exit;
