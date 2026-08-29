# -*- coding: utf-8 -*-
"""Background refresh.

A thread with a timer, not a task queue. The job runs twice a day, takes about a
minute, and there is exactly one of it — Celery would be more moving parts than
the work justifies. If you later need retries and a dashboard, swap this file;
nothing else imports it.
"""
from __future__ import annotations

import logging
import threading

from .config import settings
from .service import export, refresh_all
from .store import Store

log = logging.getLogger(__name__)
_timer: threading.Timer | None = None
_lock = threading.Lock()


def _cycle(store: Store):
    global _timer
    try:
        refresh_all(store)
        export(store)
        removed = store.prune()
        if removed:
            log.info('pruned %d long-gone listings', removed)
    except Exception:                                   # noqa: BLE001
        log.exception('refresh cycle failed; will try again next tick')
    finally:
        with _lock:
            _timer = threading.Timer(settings.refresh_minutes * 60, _cycle, (store,))
            _timer.daemon = True
            _timer.start()
            log.info('next refresh in %d minutes', settings.refresh_minutes)


def start(store: Store | None = None):
    global _timer
    store = store or Store()
    with _lock:
        if _timer is not None:
            return
    delay = 5 if settings.refresh_on_start else settings.refresh_minutes * 60
    with _lock:
        _timer = threading.Timer(delay, _cycle, (store,))
        _timer.daemon = True
        _timer.start()
    log.info('scheduler started; first refresh in %ds', delay)


def stop():
    global _timer
    with _lock:
        if _timer is not None:
            _timer.cancel()
            _timer = None
