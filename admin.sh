#!/usr/bin/env bash
# Quantum Africa — open the admin panel.
#
#   ./admin.sh
#
# Starts the editor on this computer only, and opens it in your browser.
# Nothing is exposed to the internet: it listens on 127.0.0.1, which the
# operating system will not accept connections to from anywhere else.
#
# Press Ctrl-C in this window when you have finished editing.

set -euo pipefail
cd "$(dirname "$0")"          # the repository root — paths below depend on it

PORT="${QA_PORT:-8000}"

# ---- the password ---------------------------------------------------------
# Kept in a file that git ignores, so it never reaches GitHub.
if [ -f .env.admin ]; then
  set -a; . ./.env.admin; set +a
fi

if [ -z "${QA_ADMIN_PASSWORD:-}" ]; then
  echo
  echo "  First run — let's set your admin password."
  echo "  It is stored in .env.admin on this computer and is never committed."
  echo
  read -r -s -p "  Choose a password: " pw1; echo
  read -r -s -p "  Type it again:     " pw2; echo
  if [ "$pw1" != "$pw2" ] || [ -z "$pw1" ]; then
    echo "  They did not match. Nothing was saved — run ./admin.sh again."; exit 1
  fi
  secret="$(head -c 32 /dev/urandom | od -An -tx1 | tr -d ' \n')"
  printf 'QA_ADMIN_PASSWORD=%s\nQA_SECRET=%s\n' "$pw1" "$secret" > .env.admin
  chmod 600 .env.admin
  set -a; . ./.env.admin; set +a
  echo "  Saved. Change it any time by deleting .env.admin and running this again."
  echo
fi

# ---- dependencies ---------------------------------------------------------
PY="${PYTHON:-python3}"
if ! "$PY" -c "import fastapi, uvicorn" 2>/dev/null; then
  echo "  Installing what the editor needs (one time)…"
  "$PY" -m pip install --quiet -r backend/requirements.txt
fi

# ---- build the page if it has never been built -----------------------------
[ -f public/index.html ] || "$PY" site/build.py

# ---- go -------------------------------------------------------------------
# Run from the repository root so that public/data, public/media and
# backend/data all resolve, and point Python at the backend package.
export PYTHONPATH="backend${PYTHONPATH:+:$PYTHONPATH}"
export QA_HOST=127.0.0.1
export QA_PORT="$PORT"
export QA_REFRESH_ON_START="${QA_REFRESH_ON_START:-0}"   # don't scrape on every launch

URL="http://127.0.0.1:${PORT}/admin"
echo
echo "  Admin panel:  $URL"
echo "  Preview:      http://127.0.0.1:${PORT}/preview"
echo "  Stop with Ctrl-C."
echo

( sleep 2
  if command -v open  >/dev/null 2>&1; then open "$URL"
  elif command -v xdg-open >/dev/null 2>&1; then xdg-open "$URL"
  fi ) &

exec "$PY" -m app.cli serve
