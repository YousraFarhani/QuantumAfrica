# -*- coding: utf-8 -*-
"""Collectors: one module per source, each returning normalised dicts.

Adding a source means writing one function and adding a line to REGISTRY.
Removing a source — because it asks you to, or changes its terms — means
deleting one line. Nothing else in the backend knows the sources exist.
"""
from __future__ import annotations

import datetime as dt
import logging

from . import qjoblist, quantiki, quantum_jobs

log = logging.getLogger(__name__)

SOURCES = {
    'quantiki': {
        'name': 'Quantiki',
        'url': 'https://www.quantiki.org/',
        'note': 'Academic positions and the conference calendar. Crawl-delay 10s.',
    },
    'qjobs': {
        'name': 'quantum.jobs',
        'url': 'https://quantum.jobs/',
        'note': 'Industry roles. Its robots.txt disallows /rss/, so listing pages are used.',
    },
    'qjoblist': {
        'name': 'Quantum Jobs List',
        'url': 'https://www.quantumjobslist.com/',
        'note': 'Industry roles plus a curated events calendar.',
    },
}

# kind -> [(source key, callable(fetcher, today) -> list[dict])]
REGISTRY = {
    'job': [
        ('quantiki', quantiki.jobs),
        ('qjobs',    quantum_jobs.jobs),
        ('qjoblist', qjoblist.jobs),
    ],
    'event': [
        ('quantiki', quantiki.events),
        ('qjoblist', qjoblist.events),
    ],
}


def collect(kind: str, fetcher, today: dt.date | None = None):
    """Run every collector for a kind. Returns (items, errors).

    A failing source never takes the others down — it lands in `errors` and the
    caller decides what to carry over.
    """
    today = today or dt.date.today()
    items, errors = [], {}
    for key, fn in REGISTRY[kind]:
        try:
            got = fn(fetcher, today=today)
            if not got:
                raise RuntimeError('no items parsed — the page markup probably changed')
            log.info('%s/%s: %d items', kind, key, len(got))
            items.extend(got)
        except Exception as exc:                      # noqa: BLE001 — deliberate
            log.warning('%s/%s FAILED: %s', kind, key, exc)
            errors[key] = f'{type(exc).__name__}: {exc}'
    return items, errors
