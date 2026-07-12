<?php
require __DIR__ . '/../includes/helpers.php';
require __DIR__ . '/../includes/db.php';
require __DIR__ . '/../includes/auth.php';
require __DIR__ . '/../includes/admin_layout.php';

$config = require __DIR__ . '/../config.php';
start_admin_session($config);
require_login();

$files = $config['editable_json_files'];
$fileKey = $_GET['file'] ?? array_key_first($files);
if (!isset($files[$fileKey])) {
    $fileKey = array_key_first($files);
}
$filePath = $files[$fileKey]['path'] ?? null;

$error = null;
$saved = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postedKey = $_POST['file'] ?? '';
    if (!isset($files[$postedKey])) {
        $error = 'Unknown file.';
    } elseif (!csrf_verify()) {
        $error = 'Your session expired. Please reload and try again.';
    } else {
        $fileKey = $postedKey;
        $filePath = $files[$fileKey]['path'];
        $newContent = $_POST['content'] ?? '';

        $decoded = json_decode($newContent, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            $error = 'Invalid JSON: ' . json_last_error_msg();
        } elseif (!is_array($decoded)) {
            $error = 'Top-level JSON must be an object or array.';
        } elseif (!is_dir(dirname($filePath))) {
            $error = 'Target directory does not exist on the server.';
        } elseif (file_exists($filePath) && !is_writable($filePath)) {
            $error = "File is not writable by the web server: $filePath. Fix its permissions and try again.";
        } else {
            if (file_exists($filePath)) {
                $backupName = basename($filePath) . '.' . date('Ymd-His') . '.bak';
                @copy($filePath, $config['backups_dir'] . '/' . $backupName);
            }
            $pretty = json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            $written = @file_put_contents($filePath, $pretty . "\n", LOCK_EX);
            if ($written === false) {
                $error = "Could not write to $filePath — check web server file permissions.";
            } else {
                flash_set('Saved ' . $files[$fileKey]['label'] . '. Remember to rebuild the frontend for changes to go live.');
                redirect('content.php?file=' . urlencode($fileKey));
            }
        }
    }
}

$currentContent = '';
$fileExists = $filePath && file_exists($filePath);
if ($fileExists) {
    $currentContent = file_get_contents($filePath);
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        $decoded = json_decode($currentContent, true);
        if (json_last_error() === JSON_ERROR_NONE) {
            $currentContent = json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        }
    } else {
        $currentContent = $_POST['content'] ?? $currentContent;
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $currentContent = $_POST['content'] ?? '';
}

admin_header('Content Editor', 'content');
?>

<div class="page-head">
  <h1>Content Editor</h1>
  <p class="muted">Edit site copy stored as JSON. <strong>Changes here only take effect on the live site after the frontend is rebuilt</strong> (<code>yarn build</code>) and redeployed.</p>
</div>

<div class="filters">
  <?php foreach ($files as $key => $f): ?>
    <a href="content.php?file=<?= urlencode($key) ?>" class="<?= $key === $fileKey ? 'active' : '' ?>"><?= e($f['label']) ?></a>
  <?php endforeach; ?>
</div>

<?php if ($error): ?>
  <p class="notice notice-error"><?= e($error) ?></p>
<?php endif; ?>

<?php if (!$fileExists && $_SERVER['REQUEST_METHOD'] !== 'POST'): ?>
  <p class="notice notice-error">File not found on disk: <?= e($filePath ?? '') ?></p>
<?php else: ?>
  <p class="muted file-meta">
    <?= e($filePath) ?><?php if ($fileExists && file_exists($filePath)): ?>
      · last modified <?= e(date('Y-m-d H:i:s', filemtime($filePath))) ?>
    <?php endif; ?>
  </p>

  <form method="post">
    <?= csrf_field() ?>
    <input type="hidden" name="file" value="<?= e($fileKey) ?>">
    <textarea name="content" class="json-editor" spellcheck="false" rows="30"><?= e($currentContent) ?></textarea>
    <div class="editor-actions">
      <button type="submit" class="btn">Save Changes</button>
    </div>
  </form>
<?php endif; ?>

<?php admin_footer(); ?>
