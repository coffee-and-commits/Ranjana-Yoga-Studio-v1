#!/usr/bin/env bash
# Builds the frontend (if needed) and serves it locally so you can view it in a browser.
set -e

cd "$(dirname "$0")"
PORT=5050

if [ ! -d "build" ]; then
  echo "==> No build found, building..."
  yarn build
fi

echo "==> Serving build/ at http://localhost:${PORT}"
npx --yes serve -s build -l "$PORT"
