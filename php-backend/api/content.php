<?php
/**
 * Public read-only endpoint the React site fetches at runtime for site
 * copy (see frontend/src/i18n/i18n.js), instead of bundling it at build
 * time. This is what lets edits made in the admin content editor go live
 * immediately, with no frontend rebuild/redeploy.
 */

require __DIR__ . '/../includes/helpers.php';

$config = require __DIR__ . '/../config.php';

// --- CORS ---------------------------------------------------------------
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['allowed_origins'], true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: GET, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    json_response(['error' => 'Method not allowed'], 405);
}

$key = $_GET['key'] ?? '';
$file = $config['editable_json_files'][$key] ?? null;

if ($file === null || !file_exists($file['path'])) {
    json_response(['error' => 'Unknown content key'], 404);
}

$decoded = json_decode(file_get_contents($file['path']), true);
if (json_last_error() !== JSON_ERROR_NONE) {
    json_response(['error' => 'Stored content is not valid JSON'], 500);
}

header('Cache-Control: no-cache');
json_response($decoded);
