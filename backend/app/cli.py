# -*- coding: utf-8 -*-
"""Command line.

    python -m app.cli refresh            collect everything, then export
    python -m app.cli refresh --kind event
    python -m app.cli export             re-export from the database only
    python -m app.cli seed snapshot.json load a captured snapshot (no network)
    python -m app.cli status             what is in the database and how it went
    python -m app.cli serve              run the API with the scheduler

The refresh/export pair is all a cron job or GitHub Action needs; `serve` is for
running it as a service instead.
"""
from __future__ import annotations

import argparse
import json
import logging
import sys

from . import service
from .config import settings
from .store import Store


def _log(verbose: bool):
    logging.basicConfig(
        level=logging.DEBUG if verbose else logging.INFO,
        format='%(asctime)s %(levelname)-7s %(name)s: %(message)s',
        datefmt='%H:%M:%S')


def cmd_refresh(a):
    store = Store()
    kinds = ('job', 'event') if a.kind == 'all' else (a.kind,)
    failed = 0
    for kind in kinds:
        r = service.refresh(kind, store)
        print(f"{kind}: {r['found']} found, {r['new']} new"
              + (f", errors: {r['errors']}" if r['errors'] else ''))
        if not r['ok']:
            failed += 1
    service.export(store, a.out)
    return 1 if failed == len(kinds) else 0


def cmd_export(a):
    for path, n in service.export(Store(), a.out).items():
        print(f'{path}: {n} items')
    return 0


def cmd_seed(a):
    """Load a JSON snapshot into the database — useful offline, and in tests."""
    store = Store()
    data = json.load(open(a.file, encoding='utf-8'))
    items = data['items'] if isinstance(data, dict) else data
    by_kind = {}
    for it in items:
        by_kind.setdefault(it.get('kind', 'job'), []).append(it)
    for kind, group in by_kind.items():
        run = store.start_run(kind)
        store.upsert(kind, group, {i['source'] for i in group})
        store.finish_run(run, len(group), {}, True)
        print(f'{kind}: seeded {len(group)}')
    service.export(store, a.out)
    return 0


def cmd_status(a):
    store = Store()
    print(json.dumps({'stats': store.stats(),
                      'job_run': store.last_run('job'),
                      'event_run': store.last_run('event')},
                     indent=2, default=str))
    return 0


def cmd_serve(a):
    import uvicorn
    uvicorn.run('app.api:app', host=settings.host, port=settings.port,
                log_level='debug' if a.verbose else 'info')
    return 0


def main(argv=None):
    p = argparse.ArgumentParser(prog='quantum-africa-feed', description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('-v', '--verbose', action='store_true')
    p.add_argument('--out', default=settings.export_dir, help='export directory')
    sub = p.add_subparsers(dest='cmd', required=True)

    r = sub.add_parser('refresh', help='collect from the sources, then export')
    r.add_argument('--kind', choices=['all', 'job', 'event'], default='all')
    r.set_defaults(fn=cmd_refresh)

    sub.add_parser('export', help='write JSON from the database').set_defaults(fn=cmd_export)

    s = sub.add_parser('seed', help='load a snapshot JSON without touching the network')
    s.add_argument('file')
    s.set_defaults(fn=cmd_seed)

    sub.add_parser('status', help='database and last-run summary').set_defaults(fn=cmd_status)
    sub.add_parser('serve', help='run the API and scheduler').set_defaults(fn=cmd_serve)

    a = p.parse_args(argv)
    _log(a.verbose)
    return a.fn(a)


if __name__ == '__main__':
    sys.exit(main())
