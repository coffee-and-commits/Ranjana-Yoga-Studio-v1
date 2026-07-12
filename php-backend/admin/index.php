<?php
require __DIR__ . '/../includes/helpers.php';
require __DIR__ . '/../includes/db.php';
require __DIR__ . '/../includes/auth.php';
require __DIR__ . '/../includes/admin_layout.php';

$config = require __DIR__ . '/../config.php';
start_admin_session($config);
require_login();

$pdo = db($config);

// --- Handle actions (mark read, archive, delete) ------------------------
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!csrf_verify()) {
        flash_set('Your session expired, please try again.', 'error');
        redirect('index.php');
    }

    $id = (int) ($_POST['id'] ?? 0);
    $action = $_POST['action'] ?? '';

    if ($id > 0 && in_array($action, ['mark_read', 'archive', 'delete'], true)) {
        if ($action === 'delete') {
            $stmt = $pdo->prepare('DELETE FROM submissions WHERE id = :id');
            $stmt->execute([':id' => $id]);
            flash_set('Enquiry deleted.');
        } else {
            $status = $action === 'mark_read' ? 'read' : 'archived';
            $stmt = $pdo->prepare('UPDATE submissions SET status = :status WHERE id = :id');
            $stmt->execute([':status' => $status, ':id' => $id]);
            flash_set('Enquiry updated.');
        }
    }
    redirect('index.php' . (!empty($_GET['status']) ? '?status=' . urlencode($_GET['status']) : ''));
}

// --- Filters + pagination -------------------------------------------------
$statusFilter = $_GET['status'] ?? '';
$allowedStatuses = ['new', 'read', 'archived'];
$page = max(1, (int) ($_GET['page'] ?? 1));
$perPage = 20;
$offset = ($page - 1) * $perPage;

$where = '';
$params = [];
if (in_array($statusFilter, $allowedStatuses, true)) {
    $where = 'WHERE status = :status';
    $params[':status'] = $statusFilter;
}

$countStmt = $pdo->prepare("SELECT COUNT(*) as total FROM submissions $where");
$countStmt->execute($params);
$total = (int) $countStmt->fetch()['total'];
$totalPages = max(1, (int) ceil($total / $perPage));

$stmt = $pdo->prepare("
    SELECT * FROM submissions
    $where
    ORDER BY created_at DESC
    LIMIT :limit OFFSET :offset
");
foreach ($params as $key => $value) {
    $stmt->bindValue($key, $value);
}
$stmt->bindValue(':limit', $perPage, PDO::PARAM_INT);
$stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
$stmt->execute();
$submissions = $stmt->fetchAll();

$newCount = $pdo->query('SELECT COUNT(*) as c FROM submissions WHERE status = "new"')->fetch()['c'];

admin_header('Enquiries', 'dashboard');
?>

<div class="page-head">
  <h1>Enquiries</h1>
  <p class="muted"><?= (int) $newCount ?> new · <?= (int) $total ?> total<?= $statusFilter ? ' (filtered: ' . e($statusFilter) . ')' : '' ?></p>
</div>

<div class="filters">
  <a href="index.php" class="<?= $statusFilter === '' ? 'active' : '' ?>">All</a>
  <a href="index.php?status=new" class="<?= $statusFilter === 'new' ? 'active' : '' ?>">New</a>
  <a href="index.php?status=read" class="<?= $statusFilter === 'read' ? 'active' : '' ?>">Read</a>
  <a href="index.php?status=archived" class="<?= $statusFilter === 'archived' ? 'active' : '' ?>">Archived</a>
</div>

<?php if (empty($submissions)): ?>
  <p class="empty-state">No enquiries here yet.</p>
<?php else: ?>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Interest</th>
          <th>Batch</th>
          <th>Message</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($submissions as $s): ?>
          <tr class="status-<?= e($s['status']) ?>">
            <td><?= e($s['created_at']) ?></td>
            <td><?= e($s['name']) ?></td>
            <td><a href="tel:<?= e($s['phone']) ?>"><?= e($s['phone']) ?></a></td>
            <td><?= $s['email'] ? '<a href="mailto:' . e($s['email']) . '">' . e($s['email']) . '</a>' : '—' ?></td>
            <td><?= e($s['interest']) ?: '—' ?></td>
            <td><?= e($s['batch_time']) ?: '—' ?></td>
            <td>
              <?php if (!empty($s['message'])): ?>
                <details>
                  <summary>View</summary>
                  <p class="message-text"><?= nl2br(e($s['message'])) ?></p>
                </details>
              <?php else: ?>
                —
              <?php endif; ?>
            </td>
            <td><span class="badge badge-<?= e($s['status']) ?>"><?= e($s['status']) ?></span></td>
            <td class="actions">
              <?php if ($s['status'] !== 'read'): ?>
                <form method="post">
                  <?= csrf_field() ?>
                  <input type="hidden" name="id" value="<?= (int) $s['id'] ?>">
                  <input type="hidden" name="action" value="mark_read">
                  <button type="submit" class="link-btn">Mark read</button>
                </form>
              <?php endif; ?>
              <?php if ($s['status'] !== 'archived'): ?>
                <form method="post">
                  <?= csrf_field() ?>
                  <input type="hidden" name="id" value="<?= (int) $s['id'] ?>">
                  <input type="hidden" name="action" value="archive">
                  <button type="submit" class="link-btn">Archive</button>
                </form>
              <?php endif; ?>
              <form method="post" onsubmit="return confirm('Delete this enquiry permanently?');">
                <?= csrf_field() ?>
                <input type="hidden" name="id" value="<?= (int) $s['id'] ?>">
                <input type="hidden" name="action" value="delete">
                <button type="submit" class="link-btn link-btn-danger">Delete</button>
              </form>
            </td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>

  <?php if ($totalPages > 1): ?>
    <div class="pagination">
      <?php for ($p = 1; $p <= $totalPages; $p++): ?>
        <a href="index.php?page=<?= $p ?><?= $statusFilter ? '&status=' . urlencode($statusFilter) : '' ?>"
           class="<?= $p === $page ? 'active' : '' ?>"><?= $p ?></a>
      <?php endfor; ?>
    </div>
  <?php endif; ?>
<?php endif; ?>

<?php admin_footer(); ?>
