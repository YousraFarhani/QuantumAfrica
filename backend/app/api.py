# -*- coding: utf-8 -*-
"""HTTP API.

    GET  /api/health          is it alive, when did it last collect, what broke
    GET  /api/opportunities   jobs feed  (?africa=1&type=PhD&status=Open&q=…&limit=)
    GET  /api/events          events feed (?africa=1&type=Workshop&when=upcoming)
    GET  /api/sources         who the data comes from
    GET  /api/content         the editable site content (public — the site reads it)
    POST /api/refresh         collect now (needs QA_ADMIN_TOKEN)

The admin panel and its endpoints are in admin_api.py and mounted below.

CORS is wide open on purpose: the data is public, there is nothing to authorise,
and the whole point is that a browser on any origin can read it. That is also
what makes this backend necessary — the source sites send no CORS headers, so a
page cannot read them directly. This service reads them server-side and re-serves
the result with headers a browser will accept.
"""
from __future__ import annotations

import datetime as dt
import logging

from fastapi import FastAPI, Header, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from . import service
from .collectors import SOURCES
from .config import settings
from .store import Store

log = logging.getLogger(__name__)
app = FastAPI(
    title='Quantum Africa feed',
    version='1.0',
    description='Quantum jobs and events, collected from public boards and '
                'served with CORS so the website can read them.',
)
# The admin panel is refused for anything that is not a loopback client.
from .local_guard import local_only  # noqa: E402
app.middleware('http')(local_only)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allow_headers=['*'],
)

store = Store()

# Content editing and the admin panel live in their own module; everything they
# add is mounted here so there is still one app to run.
from .admin_api import router as admin_router  # noqa: E402
app.include_router(admin_router)

# Serve the folder the website is published from, so /preview behaves exactly
# like the deployed site: same page, same data files, same uploaded images.
import os as _os  # noqa: E402
from fastapi.staticfiles import StaticFiles  # noqa: E402
_root = _os.path.dirname(_os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))))
for _url, _dir in (('/data', 'public/data'), ('/media', 'public/media'),
                   ('/assets', 'public/assets')):
    _path = _os.path.join(_root, _dir)
    if _os.path.isdir(_path):
        app.mount(_url, StaticFiles(directory=_path), name=_dir.replace('/', '_'))


def _filtered(kind, africa, type_, status, source, q, limit):
    data = service.payload(kind, store)
    items = data['items']
    if africa:
        items = [i for i in items if i['africa']]
    if type_:
        items = [i for i in items if i['type'].lower() == type_.lower()]
    if status:
        items = [i for i in items if i['status'].lower() == status.lower()]
    if source:
        items = [i for i in items if i['source'] == source]
    if q:
        words = q.lower().split()
        def hay(i):
            return ' '.join(str(i.get(k, '')) for k in
                            ('title', 'org', 'city', 'country', 'type', 'source')).lower()
        items = [i for i in items if all(w in hay(i) for w in words)]
    data['count'] = len(items)
    data['africa'] = sum(1 for i in items if i['africa'])
    data['items'] = items[:limit] if limit else items
    return data


@app.get('/api/health')
def health():
    out = {'ok': True, 'stats': store.stats(), 'runs': {}}
    for kind in ('job', 'event'):
        run = store.last_run(kind)
        if run:
            out['runs'][kind] = {'finished': run['finished'], 'found': run['found'],
                                 'ok': run['ok'], 'errors': run['errors']}
            if not run['ok']:
                out['ok'] = False
        else:
            out['runs'][kind] = None
            out['ok'] = False
    return JSONResponse(out, status_code=200 if out['ok'] else 503)


@app.get('/api/sources')
def sources():
    return {'sources': SOURCES}


@app.get('/api/opportunities')
def opportunities(
    africa: bool = Query(False, description='only listings hosted in Africa'),
    type: str | None = Query(None, description='PhD, Postdoc, MSc, Faculty, …'),
    status: str | None = Query(None, description='Open, Closing soon, Closed'),
    source: str | None = Query(None, description='quantiki, qjobs, qjoblist'),
    q: str | None = Query(None, description='keyword search'),
    limit: int | None = Query(None, ge=1, le=1000),
):
    return _filtered('job', africa, type, status, source, q, limit)


@app.get('/api/events')
def events(
    africa: bool = Query(False),
    type: str | None = Query(None, description='Conference, Workshop, Summer school, …'),
    when: str | None = Query(None, description='upcoming | past | now'),
    source: str | None = Query(None),
    q: str | None = Query(None),
    limit: int | None = Query(None, ge=1, le=1000),
):
    status = {'upcoming': 'Upcoming', 'past': 'Past', 'now': 'Running now'}.get(
        (when or '').lower())
    return _filtered('event', africa, type, status, source, q, limit)


@app.post('/api/refresh')
def refresh(kind: str = Query('all', pattern='^(all|job|event)$'),
            x_admin_token: str | None = Header(None)):
    if not settings.admin_token:
        raise HTTPException(404, 'refresh endpoint disabled — set QA_ADMIN_TOKEN')
    if x_admin_token != settings.admin_token:
        raise HTTPException(401, 'bad admin token')
    result = (service.refresh_all(store) if kind == 'all'
              else {kind: service.refresh(kind, store)})
    service.export(store)
    return result


@app.on_event('startup')
def _startup():
    from .scheduler import start
    start(store)
