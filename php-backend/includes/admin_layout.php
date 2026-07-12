<?php
/** Shared header/nav/footer for logged-in admin pages. */

function admin_header(string $title, string $active = ''): void
{
    $flash = flash_get();
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title><?= e($title) ?> — Admin</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<header class="admin-header">
  <div class="admin-header-inner">
    <span class="brand">Ranjana Yoga Studio</span>
    <nav>
      <a href="index.php" class="<?= $active === 'dashboard' ? 'active' : '' ?>">Enquiries</a>
      <a href="content.php" class="<?= $active === 'content' ? 'active' : '' ?>">Content Editor</a>
      <a href="logout.php">Log Out</a>
    </nav>
  </div>
</header>
<main class="admin-main">
  <?php if ($flash): ?>
    <p class="notice notice-<?= e($flash['type']) ?>"><?= e($flash['message']) ?></p>
  <?php endif; ?>
<?php
}

function admin_footer(): void
{
?>
</main>
</body>
</html>
<?php
}
