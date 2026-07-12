<?php
/**
 * PDO MySQL connection + schema bootstrap. Requires the target database
 * (see config.php 'db_name') to already exist — create it once via
 * phpMyAdmin or the mysql CLI; this file only creates the tables inside it.
 */

function db(array $config): PDO
{
    static $pdo = null;
    if ($pdo !== null) {
        return $pdo;
    }

    if (!is_dir($config['backups_dir'])) {
        mkdir($config['backups_dir'], 0775, true);
    }

    $dsn = sprintf(
        'mysql:host=%s;port=%d;dbname=%s;charset=utf8mb4',
        $config['db_host'],
        $config['db_port'],
        $config['db_name']
    );

    $pdo = new PDO($dsn, $config['db_user'], $config['db_pass'], [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);

    $pdo->exec('
        CREATE TABLE IF NOT EXISTS submissions (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(200) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            email VARCHAR(255) NULL,
            interest VARCHAR(100) NULL,
            batch_time VARCHAR(100) NULL,
            message TEXT NULL,
            ip_address VARCHAR(45) NULL,
            user_agent VARCHAR(255) NULL,
            status VARCHAR(20) NOT NULL DEFAULT \'new\',
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            INDEX idx_status (status),
            INDEX idx_ip_created (ip_address, created_at)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ');

    $pdo->exec('
        CREATE TABLE IF NOT EXISTS login_attempts (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            ip_address VARCHAR(45) NOT NULL,
            success TINYINT(1) NOT NULL DEFAULT 0,
            attempted_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            INDEX idx_ip_time (ip_address, attempted_at)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ');

    return $pdo;
}
