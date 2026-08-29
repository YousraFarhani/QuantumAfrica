# -*- coding: utf-8 -*-
"""SQLite store.

Why a database at all, when the output is a JSON file? Three reasons that only
show up after a few weeks of running:

  * `first_seen` — so the site can say "new this week", which a stateless
    scraper can never know.
  * Survival. When a source breaks or a listing briefly disappears from a
    paginated page, the row is still here; the export carries it rather than the
    page going half-empty.
  * `last_seen` and `gone` — a listing that stops appearing is marked, not
    deleted, so you can tell "the site removed it" from "our parser broke".

SQLite because this is a few thousand rows that one process writes. Postgres
would be ceremony.
"""
from __future__ import annotations

import datetime as dt
import json
import os
import sqlite3
from contextlib import contextmanager

from .config import settings

SCHEMA = """
CREATE TABLE IF NOT EXISTS listing (
  id          TEXT NOT NULL,
  kind        TEXT NOT NULL,              -- 'job' | 'event'
  source      TEXT NOT NULL,
  url         TEXT NOT NULL,
  title       TEXT NOT NULL,
  payload     TEXT NOT NULL,              -- the full normalised dict as JSON
  africa      INTEGER NOT NULL DEFAULT 0,
  first_seen  TEXT NOT NULL,
  last_seen   TEXT NOT NULL,
  gone        INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (kind, id)
);
CREATE INDEX IF NOT EXISTS listing_kind_seen ON listing(kind, last_seen);
CREATE INDEX IF NOT EXISTS listing_africa    ON listing(kind, africa);

CREATE TABLE IF NOT EXISTS run (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  kind        TEXT NOT NULL,
  started     TEXT NOT NULL,
  finished    TEXT,
  found       INTEGER DEFAULT 0,
  errors      TEXT DEFAULT '{}',
  ok          INTEGER DEFAULT 0
);
"""


def _now() -> str:
    return dt.datetime.now(dt.timezone.utc).isoformat(timespec='seconds')


class Store:
    def __init__(self, path: str | None = None):
        self.path = path or settings.db_path
        d = os.path.dirname(os.path.abspath(self.path))
        if d:
            os.makedirs(d, exist_ok=True)
        with self.conn() as c:
            c.executescript(SCHEMA)

    @contextmanager
    def conn(self):
        c = sqlite3.connect(self.path, timeout=30)
        c.row_factory = sqlite3.Row
        try:
            c.execute('PRAGMA journal_mode=WAL')
            yield c
            c.commit()
        finally:
            c.close()

    # ------------------------------------------------------------- writing
    def upsert(self, kind: str, items: list[dict], seen_sources: set[str]) -> dict:
        """Insert or refresh items; mark vanished ones from the same sources.

        Only sources that were successfully collected this run take part in the
        "vanished" sweep — otherwise a single broken parser would mark its whole
        source as gone.
        """
        now = _now()
        added = 0
        with self.conn() as c:
            for it in items:
                row = c.execute('SELECT first_seen FROM listing WHERE kind=? AND id=?',
                                (kind, it['id'])).fetchone()
                first = row['first_seen'] if row else now
                if not row:
                    added += 1
                c.execute(
                    """INSERT INTO listing (id,kind,source,url,title,payload,africa,
                                            first_seen,last_seen,gone)
                       VALUES (?,?,?,?,?,?,?,?,?,0)
                       ON CONFLICT(kind,id) DO UPDATE SET
                         source=excluded.source, url=excluded.url,
                         title=excluded.title, payload=excluded.payload,
                         africa=excluded.africa, last_seen=excluded.last_seen,
                         gone=0""",
                    (it['id'], kind, it['source'], it['url'], it['title'],
                     json.dumps(it, ensure_ascii=False), int(bool(it['africa'])),
                     first, now))
            if seen_sources:
                q = ','.join('?' * len(seen_sources))
                c.execute(
                    f"""UPDATE listing SET gone=1
                        WHERE kind=? AND source IN ({q}) AND last_seen<>?""",
                    (kind, *sorted(seen_sources), now))
        return {'stored': len(items), 'new': added}

    def start_run(self, kind: str) -> int:
        with self.conn() as c:
            cur = c.execute('INSERT INTO run (kind, started) VALUES (?,?)', (kind, _now()))
            return cur.lastrowid

    def finish_run(self, run_id: int, found: int, errors: dict, ok: bool):
        with self.conn() as c:
            c.execute('UPDATE run SET finished=?, found=?, errors=?, ok=? WHERE id=?',
                      (_now(), found, json.dumps(errors), int(ok), run_id))

    # ------------------------------------------------------------- reading
    def items(self, kind: str, include_gone: bool = False) -> list[dict]:
        sql = 'SELECT payload, first_seen, gone FROM listing WHERE kind=?'
        if not include_gone:
            sql += ' AND gone=0'
        with self.conn() as c:
            rows = c.execute(sql, (kind,)).fetchall()
        out = []
        for r in rows:
            it = json.loads(r['payload'])
            it['first_seen'] = r['first_seen']
            if r['gone']:
                it['gone'] = True
            out.append(it)
        return out

    def last_run(self, kind: str) -> dict | None:
        with self.conn() as c:
            r = c.execute(
                'SELECT * FROM run WHERE kind=? AND finished IS NOT NULL '
                'ORDER BY id DESC LIMIT 1', (kind,)).fetchone()
        if not r:
            return None
        d = dict(r)
        d['errors'] = json.loads(d['errors'] or '{}')
        d['ok'] = bool(d['ok'])
        return d

    def stats(self) -> dict:
        with self.conn() as c:
            out = {}
            for kind in ('job', 'event'):
                row = c.execute(
                    'SELECT COUNT(*) n, SUM(africa) af, SUM(gone) gone '
                    'FROM listing WHERE kind=?', (kind,)).fetchone()
                out[kind] = {'total': row['n'] or 0,
                             'africa': row['af'] or 0,
                             'gone': row['gone'] or 0}
            return out

    def prune(self, days: int | None = None) -> int:
        """Forget listings that vanished a long time ago."""
        days = days or settings.keep_past_days
        cutoff = (dt.datetime.now(dt.timezone.utc)
                  - dt.timedelta(days=days)).isoformat(timespec='seconds')
        with self.conn() as c:
            cur = c.execute('DELETE FROM listing WHERE gone=1 AND last_seen < ?', (cutoff,))
            return cur.rowcount
