# -*- coding: utf-8 -*-
"""The refresh cycle and the JSON export — the two things the backend does."""
from __future__ import annotations

import datetime as dt
import json
import logging
import os

from . import normalise
from .collectors import SOURCES, collect
from .config import settings
from .http import Fetcher
from .store import Store

log = logging.getLogger(__name__)

FILENAMES = {'job': 'opportunities.json', 'event': 'events.json'}


def refresh(kind: str, store: Store | None = None, today: dt.date | None = None) -> dict:
    """Collect one kind from every source and fold the result into the store."""
    store = store or Store()
    today = today or dt.date.today()
    run_id = store.start_run(kind)
    with Fetcher() as f:
        items, errors = collect(kind, f, today=today)

    items = normalise.dedupe(items)
    ok_sources = {s for s, _ in _registry_pairs(kind)} - set(errors)
    result = store.upsert(kind, items, ok_sources)

    ok = len(errors) < len(_registry_pairs(kind))
    store.finish_run(run_id, len(items), errors, ok)
    log.info('refresh %s: %d found, %d new, errors=%s', kind,
             len(items), result['new'], errors or 'none')
    return {'kind': kind, 'found': len(items), 'new': result['new'],
            'errors': errors, 'ok': ok}


def _registry_pairs(kind: str):
    from .collectors import REGISTRY
    return REGISTRY[kind]


def refresh_all(store: Store | None = None) -> dict:
    store = store or Store()
    return {kind: refresh(kind, store) for kind in ('job', 'event')}


def _restatus(items, kind, today):
    """Deadlines and dates move relative to today even when nothing was fetched."""
    for it in items:
        if kind == 'job':
            it['status'] = normalise.job_status(it.get('deadline'), today)
        else:
            it['status'] = normalise.event_status(it.get('start'), it.get('end'), today)
    return items


def payload(kind: str, store: Store | None = None, today: dt.date | None = None) -> dict:
    """The exact JSON the website consumes, for one kind."""
    store = store or Store()
    today = today or dt.date.today()
    items = _restatus(store.items(kind), kind, today)
    items = (normalise.sort_jobs if kind == 'job' else normalise.sort_events)(items)
    run = store.last_run(kind) or {}
    return {
        'updated': run.get('finished') or dt.datetime.now(dt.timezone.utc)
                     .isoformat(timespec='seconds'),
        'generated_by': 'quantum-africa-backend',
        'kind': kind,
        'sources': SOURCES,
        'errors': run.get('errors', {}),
        'count': len(items),
        'africa': sum(1 for i in items if i['africa']),
        'items': items,
    }


def export(store: Store | None = None, out_dir: str | None = None,
           today: dt.date | None = None) -> dict:
    """Write the static JSON files a plain web host can serve."""
    store = store or Store()
    out_dir = out_dir or settings.export_dir
    os.makedirs(out_dir, exist_ok=True)
    written = {}
    for kind, name in FILENAMES.items():
        data = payload(kind, store, today)
        path = os.path.join(out_dir, name)
        tmp = path + '.tmp'
        with open(tmp, 'w', encoding='utf-8') as fh:
            json.dump(data, fh, ensure_ascii=False, indent=1)
        os.replace(tmp, path)          # atomic: a reader never sees half a file
        written[path] = data['count']
        log.info('wrote %s (%d items, %d Africa)', path, data['count'], data['africa'])
    return written
