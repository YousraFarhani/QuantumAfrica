# -*- coding: utf-8 -*-
"""Publishing: commit what changed and push, so Netlify rebuilds the site.

The admin panel runs on your own computer inside the repository. Saving writes
`public/data/content.json` and any uploaded images into `public/media/`. Pressing
Publish runs git for you — add, commit, push — and Netlify does the rest.

Only these paths are ever staged. The panel cannot commit source code, secrets,
or anything else you happen to be working on.
"""
from __future__ import annotations

import os
import subprocess

PUBLISH_PATHS = ['public/data', 'public/media', 'public/index.html']
TIMEOUT = 120


def repo_root(start: str | None = None) -> str | None:
    """The git repository this backend lives inside, if any."""
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


def status() -> dict:
    """What Publish would do, without doing it."""
    root = repo_root()
    if not root:
        return {'ready': False, 'reason': 'This folder is not a git repository, '
                                          'so there is nothing to publish to.'}
    existing = [p for p in PUBLISH_PATHS if os.path.exists(os.path.join(root, p))]
    changed = _git(root, 'status', '--porcelain', '--', *existing)
    branch = _git(root, 'rev-parse', '--abbrev-ref', 'HEAD').stdout.strip()
    remote = _git(root, 'remote', 'get-url', 'origin').stdout.strip()
    files = [l[3:] for l in changed.stdout.splitlines() if l.strip()]
    return {
        'ready': bool(remote),
        'reason': '' if remote else 'This repository has no "origin" remote, so '
                                    'there is nowhere to push to.',
        'branch': branch, 'remote': remote,
        'changed': files, 'count': len(files),
    }


def publish(message: str = 'Update site content') -> dict:
    root = repo_root()
    if not root:
        return {'ok': False, 'error': 'Not a git repository.'}

    existing = [p for p in PUBLISH_PATHS if os.path.exists(os.path.join(root, p))]
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

    push = _git(root, 'push')
    if push.returncode != 0:
        err = (push.stderr or push.stdout).strip()
        hint = ''
        if 'Authentication' in err or 'could not read Username' in err or 'denied' in err:
            hint = (' — git could not authenticate. Sign in once with the GitHub '
                    'CLI (`gh auth login`) or set up an SSH key, then try again. '
                    'Your changes are committed locally and safe.')
        return {'ok': False, 'committed': True, 'error': err + hint}

    return {'ok': True, 'files': staged.stdout.split(),
            'message': 'Published. Netlify will rebuild the site in a minute or two.'}
