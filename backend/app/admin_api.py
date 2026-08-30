# -*- coding: utf-8 -*-
"""Admin endpoints and the panel itself.

    GET    /admin                      the panel (single HTML file)
    POST   /api/admin/login            password  → session token
    GET    /api/admin/schema           what is editable
    GET    /api/admin/content          the current document (auth)
    PUT    /api/admin/content          replace it
    PATCH  /api/admin/content          replace named sections
    GET    /api/admin/revisions        history
    POST   /api/admin/rollback/{id}    restore a revision
    POST   /api/admin/media            upload an image
    GET    /api/admin/media            what has been uploaded
    DELETE /api/admin/media/{id}       remove one
    GET    /api/content                the document, public, CORS — the site reads this
    GET    /media/{id}                 uploaded files, public
    GET    /api/admin/publish          what a publish would commit
    POST   /api/admin/publish          commit and push, so the host rebuilds

Auth is a password in an environment variable exchanged for a signed, expiring
token. That is the right weight for a small organisation with a handful of
editors and no user database. If Quantum Africa later needs several accounts
with different rights, replace `_issue`/`require_admin` and nothing else moves.
"""
from __future__ import annotations

import hashlib
import hmac
import json
import os
import secrets
import time

from fastapi import APIRouter, Body, Depends, File, Header, HTTPException, UploadFile
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse

from . import schema
from .config import settings
from .content import ContentStore

router = APIRouter()
store = ContentStore()

SESSION_HOURS = 12
# Signing key for session tokens. Set QA_SECRET in production so tokens survive
# a restart; without it one is generated per process and everyone logs in again.
SECRET = os.environ.get('QA_SECRET') or secrets.token_hex(32)
ADMIN_PASSWORD = os.environ.get('QA_ADMIN_PASSWORD', '')


def _issue() -> str:
    expiry = int(time.time()) + SESSION_HOURS * 3600
    body = f'admin:{expiry}'
    sig = hmac.new(SECRET.encode(), body.encode(), hashlib.sha256).hexdigest()[:32]
    return f'{body}:{sig}'


def _valid(token: str | None) -> bool:
    if not token or token.count(':') != 2:
        return False
    who, expiry, sig = token.split(':')
    body = f'{who}:{expiry}'
    good = hmac.new(SECRET.encode(), body.encode(), hashlib.sha256).hexdigest()[:32]
    if not hmac.compare_digest(sig, good):
        return False
    try:
        return int(expiry) > time.time()
    except ValueError:
        return False


def require_admin(x_admin_session: str | None = Header(None)):
    if not ADMIN_PASSWORD:
        raise HTTPException(503, 'admin is disabled — set QA_ADMIN_PASSWORD and restart')
    if not _valid(x_admin_session):
        raise HTTPException(401, 'not signed in')
    return True


# --------------------------------------------------------------------- auth
@router.post('/api/admin/login')
def login(payload: dict = Body(...)):
    if not ADMIN_PASSWORD:
        raise HTTPException(503, 'admin is disabled — set QA_ADMIN_PASSWORD and restart')
    given = str(payload.get('password', ''))
    # constant-time, so a wrong password cannot be found by timing the response
    if not hmac.compare_digest(given, ADMIN_PASSWORD):
        time.sleep(0.4)
        raise HTTPException(401, 'wrong password')
    return {'token': _issue(), 'expires_in': SESSION_HOURS * 3600}


@router.get('/api/admin/session')
def session(x_admin_session: str | None = Header(None)):
    return {'valid': _valid(x_admin_session), 'enabled': bool(ADMIN_PASSWORD)}


# ------------------------------------------------------------------ content
@router.get('/api/content')
def public_content():
    """What the website reads. Public on purpose — it is the site's own copy."""
    return {'updated': None, 'content': store.get()}


@router.get('/api/admin/schema')
def admin_schema(_: bool = Depends(require_admin)):
    return schema.public_schema()


@router.get('/api/admin/content')
def admin_content(_: bool = Depends(require_admin)):
    return {'content': store.get()}


@router.put('/api/admin/content')
def put_content(payload: dict = Body(...), _: bool = Depends(require_admin)):
    doc = store.save(payload.get('content', payload), note=payload.get('note', ''))
    store.export()
    return {'saved': True, 'content': doc}


@router.patch('/api/admin/content')
def patch_content(payload: dict = Body(...), _: bool = Depends(require_admin)):
    doc = store.patch(payload.get('content', payload), note=payload.get('note', ''))
    store.export()
    return {'saved': True, 'content': doc}


# ------------------------------------------------------------------ history
@router.get('/api/admin/revisions')
def revisions(_: bool = Depends(require_admin)):
    return {'revisions': store.revisions()}


@router.post('/api/admin/rollback/{rev_id}')
def rollback(rev_id: int, _: bool = Depends(require_admin)):
    doc = store.rollback(rev_id)
    if doc is None:
        raise HTTPException(404, 'no such revision')
    store.export()
    return {'restored': rev_id, 'content': doc}


# ---------------------------------------------------------------- submissions
@router.get('/api/admin/submissions')
def admin_submissions(limit: int = 500, _: bool = Depends(require_admin)):
    from . import forms as _forms
    items = _forms.list_all(limit=max(1, min(5000, int(limit))))
    from .config import settings
    return {
        'items': items,
        'count': len(items),
        'inbox': _forms._to_inbox(),
        'contact_default': settings.contact,
        'forward_smtp_configured': bool(os.environ.get('QA_SMTP_HOST')),
        'forward_resend_configured': bool(os.environ.get('QA_RESEND_KEY')),
    }


@router.post('/api/admin/submissions/{row_id}/forward')
def forward_submission(row_id: str, _: bool = Depends(require_admin)):
    """Re-forward a stored submission (e.g. after configuring mail after the fact)."""
    from . import forms as _forms
    for r in _forms.list_all(limit=10000):
        if r.get('id') == row_id:
            res = _forms.try_forward(r)
            if res:
                _forms._mark_forwarded(row_id)
                return {'ok': True, 'id': row_id, 'forwarded': True}
            if res is False:
                return {'ok': False, 'id': row_id, 'error': 'Mail transport failed; transport configured but send failed'}
            return {'ok': False, 'id': row_id,
                    'error': 'No mail transport configured.'
                             ' Set QA_SMTP_* or QA_RESEND_* env vars.'}
    raise HTTPException(404, 'no such submission')



# -------------------------------------------------------------------- media
@router.post('/api/admin/media')
async def upload(file: UploadFile = File(...), _: bool = Depends(require_admin)):
    data = await file.read()
    try:
        return store.put_media(file.filename or 'upload', data, file.content_type)
    except ValueError as e:
        raise HTTPException(400, str(e))


@router.get('/api/admin/media')
def list_media(_: bool = Depends(require_admin)):
    return {'media': store.media()}


@router.delete('/api/admin/media/{media_id}')
def delete_media(media_id: str, _: bool = Depends(require_admin)):
    if not store.delete_media(media_id):
        raise HTTPException(404, 'no such file')
    return {'deleted': media_id}


@router.get('/media/{media_id}')
def serve_media(media_id: str):
    p = store.media_path(media_id)
    if not p:
        raise HTTPException(404, 'not found')
    return FileResponse(p, headers={'Cache-Control': 'public, max-age=31536000, immutable'})


# ------------------------------------------------------------------ publish
@router.get('/api/admin/publish')
def publish_status(_: bool = Depends(require_admin)):
    from . import publish as pub
    return pub.status()


@router.post('/api/admin/publish')
def publish_now(payload: dict = Body(default={}), _: bool = Depends(require_admin)):
    """Commit the content and media, and push. Netlify rebuilds from there."""
    from . import publish as pub
    store.export()
    return pub.publish(str(payload.get('message') or 'Update site content'))


# -------------------------------------------------------------------- panel
ADMIN_HTML = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                          'admin', 'index.html')


@router.get('/preview', response_class=HTMLResponse)
def preview():
    """The real website, served locally, reading the content you just saved.

    Look at this before publishing. It is the same file Netlify serves, and it
    reads public/data and public/media from this machine.
    """
    root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    page = os.path.join(root, 'public', 'index.html')
    if not os.path.exists(page):
        return HTMLResponse(
            '<h1 style="font:600 20px system-ui;padding:40px">The site has not been built yet.'
            '</h1><p style="font:15px system-ui;padding:0 40px">Run '
            '<code>python site/build.py</code> once, then reload.</p>', status_code=404)
    with open(page, encoding='utf-8') as f:
        return HTMLResponse(f.read())


@router.get('/admin', response_class=HTMLResponse)
@router.get('/admin/', response_class=HTMLResponse)
def admin_panel():
    if not os.path.exists(ADMIN_HTML):
        return HTMLResponse('<h1>admin/index.html is missing</h1>', status_code=500)
    with open(ADMIN_HTML, encoding='utf-8') as f:
        return HTMLResponse(f.read())
