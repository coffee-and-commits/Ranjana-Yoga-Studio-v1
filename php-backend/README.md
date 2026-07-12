# Ranjana Yoga Studio — PHP Backend

A small, dependency-free PHP backend for the contact form and an admin panel
to review enquiries and edit site content. No Composer, no framework — just
plain PHP with the `pdo_mysql` extension (enabled by default on almost all
shared hosting / cPanel PHP builds and on XAMPP/MAMP), talking to a MySQL /
MariaDB database.

## What this is

- `api/contact.php` — public endpoint the React contact form submits to.
  Stores each enquiry in MySQL (`submissions` table, created automatically).
- `api/content.php` — public read-only endpoint the React site fetches at
  runtime to get its copy (see `data/content/en.json`). Because content
  lives here and is fetched over HTTP instead of bundled into the frontend
  at build time, admin edits go live immediately with no rebuild needed.
- `admin/` — a small password-protected panel to:
  - view, mark read/archived, and delete contact form submissions
  - edit the site's JSON content files (`data/content/en.json`)
- `setup.php` — one-time wizard to create the admin login.

## Deploying

1. Create a MySQL database (the tables inside it are created automatically
   by the app, but the database itself needs to exist first):
   ```sql
   CREATE DATABASE ranjana_yoga CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   CREATE USER 'ranjana_app'@'localhost' IDENTIFIED BY 'choose-a-strong-password';
   GRANT ALL PRIVILEGES ON ranjana_yoga.* TO 'ranjana_app'@'localhost';
   ```
2. Upload the whole `php-backend/` folder to your PHP host — it's
   self-contained (content lives in `php-backend/data/content/`), so it
   doesn't matter whether it sits next to a `frontend/` source folder or
   just the built `public_html/` output.
3. Set your real DB credentials in `config.local.php` (git-ignored — never
   commit real credentials), e.g.:
   ```php
   <?php
   return [
       'db_host' => '127.0.0.1',
       'db_name' => 'ranjana_yoga',
       'db_user' => 'ranjana_app',
       'db_pass' => 'choose-a-strong-password',
   ];
   ```
   (`setup.php` in the next step will add `admin_username` /
   `admin_password_hash` to this same file — safe to create it yourself
   first with just the `db_*` keys.)
4. Make sure `php-backend/data/` is writable by PHP (used for JSON content
   backups, see below).
5. Visit `https://yourdomain.com/php-backend/setup.php` and create the admin
   username/password.
6. Log in at `https://yourdomain.com/php-backend/admin/login.php`.
7. In `config.php`, add your production site's origin to `allowed_origins`
   so the contact form on that domain is allowed to POST to the API, e.g.:
   ```php
   'allowed_origins' => [
       'https://ranjanayogastudio.com',
   ],
   ```

To reset the admin account, remove the `admin_username` / `admin_password_hash`
lines from `config.local.php` (keep your `db_*` lines) and reload `setup.php`.

## Content editor

The React site fetches its copy at **runtime** from `api/content.php`
(`frontend/src/i18n/i18n.js`, via `i18next-http-backend`) instead of
bundling it into the JS at build time. So editing a JSON file in the admin
panel takes effect immediately — no frontend rebuild or redeploy needed.

Every save also writes a timestamped backup to `data/backups/` before
overwriting, so you can recover a previous version if needed.

## Connecting the React frontend

The frontend posts contact form submissions to `REACT_APP_API_URL`, and
fetches site copy from `REACT_APP_CONTENT_URL` (see `frontend/.env.example`).
Point both at wherever this backend is deployed, e.g.:

```
REACT_APP_API_URL=https://yourdomain.com/php-backend/api/contact.php
REACT_APP_CONTENT_URL=https://yourdomain.com/php-backend/api/content.php
```

If unset, they default to `/php-backend/api/contact.php` and
`/php-backend/api/content.php` on the same origin as the frontend — fine if
both are served from the same domain.

## Security notes

- Admin sessions use PHP's built-in session handling with `httponly`,
  `samesite=Lax`, and (when served over HTTPS) `secure` cookies.
- Login is protected by a per-IP lockout after 5 failed attempts within 15
  minutes (tune in `config.php`).
- The contact API is rate-limited per IP (5 submissions / hour by default)
  and includes a honeypot field (`website`) — the React form should keep
  that field hidden from real users.
- `config.local.php`, `includes/`, and `data/` are denied by `.htaccess` on
  Apache. **If you're on nginx**, add the equivalent yourself, e.g.:
  ```nginx
  location ~ ^/php-backend/(includes|data)/ { deny all; }
  location = /php-backend/config.local.php { deny all; }
  ```
