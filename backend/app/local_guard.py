# -*- coding: utf-8 -*-
"""Keeping the admin panel off the internet.

The panel is meant to run on Yousra's own computer and nowhere else. Two locks,
because either one alone can be defeated by a mistake:

  1. The server binds to 127.0.0.1, so the operating system will not accept a
     connection from another machine at all.
  2. This middleware refuses any admin request whose client address is not
     loopback — which catches the case where someone later changes the bind
     address, or puts it behind a proxy without thinking it through.

Set QA_ALLOW_REMOTE_ADMIN=1 only if you deliberately want a hosted panel, and
then put it behind HTTPS and a strong password.
"""
from __future__ import annotations

import ipaddress
import logging
import os

from fastapi import Request
from fastapi.responses import JSONResponse

log = logging.getLogger(__name__)

PROTECTED_PREFIXES = ('/admin', '/api/admin')
ALLOW_REMOTE = os.environ.get('QA_ALLOW_REMOTE_ADMIN', '').strip().lower() in (
    '1', 'true', 'yes', 'on')


def _is_local(host: str | None) -> bool:
    if not host:
        return False
    if host in ('localhost', 'testclient'):
        return True
    try:
        return ipaddress.ip_address(host).is_loopback
    except ValueError:
        return False


async def local_only(request: Request, call_next):
    path = request.url.path
    if not ALLOW_REMOTE and path.startswith(PROTECTED_PREFIXES):
        client = request.client.host if request.client else None
        if not _is_local(client):
            log.warning('refused admin request from %s for %s', client, path)
            return JSONResponse(
                {'detail': 'The admin panel only accepts connections from this '
                           'computer. Open http://127.0.0.1:8000/admin locally.'},
                status_code=403)
    return await call_next(request)
