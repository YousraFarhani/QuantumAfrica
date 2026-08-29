@echo off
REM Quantum Africa - open the admin panel.
REM
REM Double-click this file. It starts the editor on this computer only and
REM opens it in your browser. Nothing is exposed to the internet: it listens
REM on 127.0.0.1, which Windows will not accept outside connections to.
REM
REM Close this window when you have finished editing.

setlocal enabledelayedexpansion
cd /d "%~dp0"

if not defined QA_PORT set QA_PORT=8000

REM ---- the password --------------------------------------------------------
REM Kept in .env.admin, which git ignores, so it never reaches GitHub.
if exist .env.admin (
  for /f "usebackq tokens=1,* delims==" %%A in (".env.admin") do set "%%A=%%B"
)

if not defined QA_ADMIN_PASSWORD (
  echo.
  echo   First run - let's set your admin password.
  echo   It is stored in .env.admin on this computer and is never committed.
  echo.
  set /p pw1=  Choose a password:
  if "!pw1!"=="" (
    echo   Nothing entered. Run admin.bat again.
    pause
    exit /b 1
  )
  for /f %%S in ('powershell -NoProfile -Command "[guid]::NewGuid().ToString('N')+[guid]::NewGuid().ToString('N')"') do set "secret=%%S"
  ^> .env.admin echo QA_ADMIN_PASSWORD=!pw1!
  ^>^> .env.admin echo QA_SECRET=!secret!
  set "QA_ADMIN_PASSWORD=!pw1!"
  set "QA_SECRET=!secret!"
  echo   Saved. Change it any time by deleting .env.admin and running this again.
  echo.
)

REM ---- dependencies --------------------------------------------------------
python -c "import fastapi, uvicorn" 2>nul
if errorlevel 1 (
  echo   Installing what the editor needs ^(one time^)...
  python -m pip install --quiet -r backend\requirements.txt
)

REM ---- build the page if it has never been built ----------------------------
if not exist public\index.html python site\build.py

REM ---- go ------------------------------------------------------------------
REM Run from the repository root so public\data, public\media and backend\data
REM all resolve, and point Python at the backend package.
set PYTHONPATH=backend;%PYTHONPATH%
set QA_HOST=127.0.0.1
if not defined QA_REFRESH_ON_START set QA_REFRESH_ON_START=0

echo.
echo   Admin panel:  http://127.0.0.1:%QA_PORT%/admin
echo   Preview:      http://127.0.0.1:%QA_PORT%/preview
echo   Stop by closing this window.
echo.

start "" http://127.0.0.1:%QA_PORT%/admin
python -m app.cli serve
