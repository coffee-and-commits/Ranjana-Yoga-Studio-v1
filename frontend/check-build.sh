#!/usr/bin/env bash
# Builds the frontend and verifies the static output serves correctly,
# including client-side routes (simulating the Hostinger .htaccess rewrite).
set -e

cd "$(dirname "$0")"

ROUTES=(
  "/"
  "/about"
  "/services"
  "/schedule"
  "/gallery"
  "/contact"
  "/upcoming-event"
)

echo "==> Building..."
yarn build

if [ ! -f "build/index.html" ]; then
  echo "FAIL: build/index.html not found"
  exit 1
fi

echo "==> Starting local static server (SPA mode) on port 5050..."
npx --yes serve -s build -l 5050 >/tmp/serve.log 2>&1 &
SERVER_PID=$!
trap 'kill $SERVER_PID 2>/dev/null' EXIT

# wait for server to come up
for i in $(seq 1 20); do
  if curl -s -o /dev/null "http://localhost:5050"; then
    break
  fi
  sleep 0.5
done

FAILED=0
for route in "${ROUTES[@]}"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:5050${route}")
  if [ "$STATUS" = "200" ]; then
    echo "OK    $route ($STATUS)"
  else
    echo "FAIL  $route ($STATUS)"
    FAILED=1
  fi
done

if [ "$FAILED" -eq 0 ]; then
  echo "==> All routes OK. Build is good to deploy."
else
  echo "==> Some routes failed."
  exit 1
fi
