<?php
/**
 * Central configuration. Do not put secrets directly in this file since it
 * is committed to git — real admin credentials live in config.local.php,
 * which is created by setup.php and is git-ignored.
 */

date_default_timezone_set('Asia/Kolkata');

$config = [
    // Filesystem paths (only used for JSON content backups now — the
    // submissions/login-attempt data lives in MySQL, see db_* below)
    'data_dir'     => __DIR__ . '/data',
    'backups_dir'  => __DIR__ . '/data/backups',

    // MySQL connection. Override these in config.local.php on any real
    // server — do not put production credentials in this file, since it
    // is committed to git.
    'db_host' => '127.0.0.1',
    'db_port' => 3306,
    'db_name' => 'ranjana_yoga',
    'db_user' => 'root',
    'db_pass' => '',

    // Session
    'session_name' => 'ryss_admin', // Ranjana Yoga Studio Session

    // CORS: domains allowed to POST to api/contact.php.
    // Add your production domain(s) here, e.g. 'https://ranjanayogastudio.com'.
    'allowed_origins' => [
        'http://localhost:3000',
        'http://localhost:3001',
    ],

    // Login brute-force protection
    'max_login_attempts' => 5,
    'lockout_minutes'    => 15,

    // Contact form rate limiting (per IP)
    'contact_rate_limit'        => 5,   // max submissions
    'contact_rate_limit_window' => 60,  // minutes

    // JSON files the admin panel is allowed to view/edit. Content files live
    // entirely inside php-backend/ (not under frontend/) so this works no
    // matter how frontend/ is deployed — the frontend fetches them at
    // runtime from api/content.php instead of bundling them at build time.
    // Keys are used in the URL (?file=site-content-en) so keep them simple.
    'editable_json_files' => [
        'site-content-en' => [
            'label' => 'Site Content — English (en.json)',
            'path'  => __DIR__ . '/data/content/en.json',
        ],
        'design-guidelines' => [
            'label' => 'Design Guidelines',
            'path'  => __DIR__ . '/../design_guidelines.json',
        ],
    ],

    // Admin credentials — filled in by setup.php on first run.
    'admin_username'      => null,
    'admin_password_hash' => null,
];

$localConfigFile = __DIR__ . '/config.local.php';
if (file_exists($localConfigFile)) {
    $local = require $localConfigFile;
    if (is_array($local)) {
        $config = array_merge($config, $local);
    }
}

return $config;
