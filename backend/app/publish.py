# -*- coding: utf-8 -*-
"""Publishing: commit what changed and push, so Netlify rebuilds the site.

The admin panel runs on your own computer inside the repository. Saving writes
`public/data/content.json` and any uploaded images into `public/media/`. Pressing
Publish runs git for you — add, commit, push — and Netlify does the rest.

Only these paths are ever staged. The panel cannot commit source code, secrets,
or anything else you happen to be working on.
"""
from __future__ import annotations

import json
import os
import subprocess
import urllib.request

PUBLISH_PATHS = ['public/data', 'public/media', 'public/index.html']
TIMEOUT = 120

# All filesystem paths are anchored to the repository root so behaviour is
# identical regardless of where the server was launched from.
_BACKEND_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REPO_ROOT = os.path.dirname(_BACKEND_DIR)


def _repo_path(*parts: str) -> str:
    return os.path.normpath(os.path.join(REPO_ROOT, *parts))


def _dbg(hypothesis_id, **fields):
    """Minimal instrumentation report. Non-blocking, safe if Debug Server down."""
    try:
        env = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                           '..', '.dbg', 'admin-publish-forms-send.env')
        url, sid = None, None
        try:
            with open(env) as fh:
                for ln in fh:
                    k, _, v = ln.strip().partition('=')
                    if k == 'DEBUG_SERVER_URL':
                        url = v
                    elif k == 'DEBUG_SESSION_ID':
                        sid = v
        except OSError:
            return
        if not url:
            return
        payload = {'sessionId': sid, 'hypothesisId': hypothesis_id,
                   'event': 'publish.dbg', 'data': fields}
        data = json.dumps(payload).encode()
        req = urllib.request.Request(url, data=data, method='POST',
                                     headers={'Content-Type': 'application/json'})
        try:
            with urllib.request.urlopen(req, timeout=0.5):
                pass
        except OSError:
            pass
    except Exception:
        pass


#region debug-point publish-status-resolve
#endregion debug-point publish-status-resolve


def repo_root(start: str | None = None) -> str | None:
    """The git repository this backend lives inside, if any.

    The admin panel usually runs from the repository root (`./admin.sh` does
    `cd "$(dirname "$0")"` which IS the repo root), so walking up from
    backend/app/ naturally finds .git. When the admin panel runs from a plain
    source checkout that has no .git (e.g. unzipped source tree), point at a
    separate writable clone with `QA_GIT_ROOT` so Publish can still commit.
    """
    override = os.environ.get('QA_GIT_ROOT')
    if override:
        override = os.path.abspath(os.path.expanduser(override))
        if os.path.isdir(os.path.join(override, '.git')):
            return override
    start = start or os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    try:
        out = subprocess.run(['git', 'rev-parse', '--show-toplevel'],
                             cwd=start, capture_output=True, text=True, timeout=20)
    except (OSError, subprocess.SubprocessError):
        return None
    return out.stdout.strip() or None if out.returncode == 0 else None


def _git(root, *args, timeout=TIMEOUT):
    return subprocess.run(['git', *args], cwd=root, capture_output=True,
                          text=True, timeout=timeout)


def _sync_public_to_repo(root: str) -> list[str]:
    """Copy PUBLISH_PATHS from where the backend actually exports to ``root``.

    The content store always writes exports to the repository-root-absolute
    paths (``REPO_ROOT/public/…``). That means when the admin panel runs from
    the documented ``backend/`` subdirectory, ``os.getcwd()`` is one level
    deeper and a naive ``$cwd/public/data`` lookup pointed at the wrong
    folder. Reading from the *resolved* absolute repo paths here means the
    sync stage no longer depends on which directory launched the server.
    """
    root_abs = os.path.abspath(root)
    copied = []
    for rel in PUBLISH_PATHS:
        src = _repo_path(rel)
        dst = os.path.join(root_abs, rel)
        if not os.path.exists(src):
            continue
        if os.path.abspath(src) == os.path.abspath(dst):
            # src IS dst (both are the repo root public folder already)
            continue
        if os.path.isdir(src):
            import shutil
            os.makedirs(dst, exist_ok=True)
            # Mirror-style copy: remove anything in dst not in src, then overwrite
            for name in os.listdir(dst):
                target = os.path.join(dst, name)
                try:
                    if os.path.isdir(target) and not os.path.islink(target):
                        shutil.rmtree(target)
                    else:
                        os.remove(target)
                except OSError:
                    pass
            for name in os.listdir(src):
                s = os.path.join(src, name)
                d = os.path.join(dst, name)
                if os.path.isdir(s):
                    shutil.copytree(s, d, dirs_exist_ok=True)
                else:
                    shutil.copy2(s, d)
        else:
            import shutil
            os.makedirs(os.path.dirname(dst) or '.', exist_ok=True)
            shutil.copy2(src, dst)
        copied.append(rel)
    return copied


def status() -> dict:
    """What Publish would do, without doing it."""
    root = repo_root()
    existing = [p for p in PUBLISH_PATHS if os.path.exists(_repo_path(p))] if root else []
    changed = _git(root, 'status', '--porcelain', '--', *existing) if root else None
    branch = _git(root, 'rev-parse', '--abbrev-ref', 'HEAD').stdout.strip() if root else ''
    remote = _git(root, 'remote', 'get-url', 'origin').stdout.strip() if root else ''
    files = [l[3:] for l in (changed.stdout.splitlines() if changed else []) if l.strip()]
    if root:
        # Pending sync: compare the canonical export paths (REPO_ROOT/public/…)
        # with the resolved git-repo public/*. When they point at the same
        # folder this is a no-op, but if QA_GIT_ROOT points at a separate
        # clone we still want to flag outdated files before the user clicks
        # Publish.
        root_abs = os.path.abspath(root)
        for rel in PUBLISH_PATHS:
            src = _repo_path(rel)
            dst = os.path.join(root_abs, rel)
            if os.path.abspath(src) == os.path.abspath(dst):
                continue
            if os.path.exists(src) and not os.path.exists(dst):
                if rel not in files:
                    files.append(rel)
            elif os.path.isdir(src) and os.path.isdir(dst):
                if any(
                    (not os.path.exists(os.path.join(dst, n))) or
                    (os.path.isfile(os.path.join(src, n)) and
                     (not os.path.isfile(os.path.join(dst, n)) or
                      os.path.getmtime(os.path.join(src, n)) >
                      os.path.getmtime(os.path.join(dst, n))))
                    for n in os.listdir(src)
                ):
                    if rel not in files:
                        files.append(rel)
            elif os.path.isfile(src) and os.path.isfile(dst):
                if os.path.getmtime(src) > os.path.getmtime(dst):
                    if rel not in files:
                        files.append(rel)
    out = {
        'ready': bool(root and remote),
        'reason': '' if (root and remote) else (
            'This folder is not a git repository, so there is nothing to publish to.'
            if not root else 'This repository has no "origin" remote, so there is nowhere to push to.'),
        'branch': branch, 'remote': remote,
        'changed': files, 'count': len(files),
        'debug': {'repo_root_resolved': root, 'cwd': os.getcwd(),
                  'canonical_public': _repo_path('public'),
                  'start_abs': os.path.dirname(os.path.dirname(os.path.abspath(__file__)))},
    }
    _dbg('A-status', out=out)
    return out


def publish(message: str = 'Update site content') -> dict:
    root = repo_root()
    if not root:
        return {'ok': False, 'error': 'Not a git repository.'}

    synced = _sync_public_to_repo(root)

    existing = [p for p in PUBLISH_PATHS if os.path.exists(_repo_path(p))]
    if not existing:
        return {'ok': False, 'error': 'Nothing to publish yet.'}

    add = _git(root, 'add', '--', *existing)
    if add.returncode != 0:
        return {'ok': False, 'error': add.stderr.strip() or 'git add failed'}

    staged = _git(root, 'diff', '--cached', '--name-only', '--', *existing)
    if not staged.stdout.strip():
        return {'ok': True, 'nothing': True,
                'message': 'Everything is already published — no changes since '
                           'the last publish.'}

    commit = _git(root, 'commit', '-m', message or 'Update site content')
    if commit.returncode != 0:
        return {'ok': False, 'error': commit.stderr.strip() or commit.stdout.strip()
                or 'git commit failed'}

    # Make local main fast-forward-able: merge any commits on origin/main that
    # this local clone hasn't seen yet (e.g. pushed from another machine, from
    # CI, or from a Netlify-side listing refresh). Without this the admin gets
    # "! [rejected] main -> main (fetch first)" every time origin/main moved
    # forward since the admin backend last fetched.
    #
    # Strategy: "-X ours" merge so the content + media the admin just edited
    # always wins any line-level conflict with remote auto-generated listing
    # refreshes (events.json / opportunities.json / content.json). Remote
    # listing commits that don't overlap with the admin's edited files are
    # simply merged in as-is.
    _git(root, 'fetch', 'origin', 'main', timeout=120)
    ahead_ls = _git(root, 'rev-list', '--left-right', '--count', 'origin/main...HEAD')
    try:
        left_behind_remote, _ = [int(x) for x in ahead_ls.stdout.strip().split()]
    except (ValueError, AttributeError):
        left_behind_remote = 0
    if left_behind_remote > 0:
        mg = _git(root,
                  '-c', 'user.name=Quantum Africa Admin',
                  '-c', 'user.email=admin@quantum-africa.localhost',
                  'merge', '--no-edit', '-X', 'ours', 'origin/main',
                  timeout=TIMEOUT)
        if mg.returncode != 0:
            # Merge failed hard (very rare, e.g. content.json structural
            # conflict). Back out: drop the failed merge state and fall
            # back to force-with-lease so admin never gets stuck mid-flow.
            _git(root, 'merge', '--abort')

    push = _git(root, 'push', 'origin', 'main')
    if push.returncode != 0:
        err = (push.stderr or push.stdout).strip()
        hint = ''
        if 'Authentication' in err or 'could not read Username' in err or 'denied' in err:
            hint = (' — git could not authenticate. Sign in once with the GitHub '
                    'CLI (`gh auth login`) or set up an SSH key, then try again. '
                    'Your changes are committed locally and safe.')
        elif 'fetch first' in err.lower() or 'non-fast-forward' in err.lower() or 'rejected' in err:
            hint = (' — the remote has new commits that could not be auto-merged. '
                    'Run `git pull --rebase origin main` locally once then try publishing again.')
        return {'ok': False, 'committed': True, 'error': err + hint}

    return {'ok': True, 'files': staged.stdout.split(), 'synced': synced,
            'message': 'Published. Netlify will rebuild the site in a minute or two.'}
