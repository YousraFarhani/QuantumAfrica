# -*- coding: utf-8 -*-
"""The editable content document, its history, and uploaded media.

One JSON document holds everything the admin panel edits. Every save writes a
new revision rather than overwriting, so a bad edit is one click from undone —
which matters when the person editing is also the person who runs the
organisation and has no staging site to practise on.
"""
from __future__ import annotations

import datetime as dt
import hashlib
import json
import mimetypes
import os
import re
import sqlite3
from contextlib import contextmanager

from . import schema
from .config import settings
from .seeds import apply_seeds

SCHEMA_SQL = """
CREATE TABLE IF NOT EXISTS revision (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  doc      TEXT NOT NULL,
  author   TEXT,
  note     TEXT,
  created  TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS media (
  id       TEXT PRIMARY KEY,
  filename TEXT NOT NULL,
  mime     TEXT NOT NULL,
  bytes    INTEGER NOT NULL,
  created  TEXT NOT NULL,
  alt      TEXT DEFAULT ''
);
"""

# Pictures and documents stay small. Video gets more room, but not much: every
# upload is committed to the repository and served from it, so a large file
# makes the site slower for everyone and the repository heavier forever. For a
# full talk, paste a YouTube or Vimeo link instead — the admin panel offers that
# on the same form.
MAX_UPLOAD = 12 * 1024 * 1024          # 12 MB for images and PDFs
MAX_VIDEO_UPLOAD = 25 * 1024 * 1024    # 25 MB for a short clip

ALLOWED_MIME = {
    'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp',
    'image/gif': '.gif', 'image/svg+xml': '.svg', 'application/pdf': '.pdf',
    'video/mp4': '.mp4', 'video/webm': '.webm', 'video/quicktime': '.mp4',
}
VIDEO_MIME = {'video/mp4', 'video/webm', 'video/quicktime'}


def _now():
    return dt.datetime.now(dt.timezone.utc).isoformat(timespec='seconds')


class ContentStore:
    def __init__(self, path: str | None = None, media_dir: str | None = None):
        self.path = path or os.path.join(os.path.dirname(settings.db_path) or '.',
                                         'content.sqlite3')
        # content.json lives beside the other data the site reads
        self.media_dir = media_dir or settings.media_dir
        for d in (os.path.dirname(os.path.abspath(self.path)), self.media_dir):
            os.makedirs(d, exist_ok=True)
        with self.conn() as c:
            c.executescript(SCHEMA_SQL)

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

    # ------------------------------------------------------------ document
    def get(self) -> dict:
        with self.conn() as c:
            row = c.execute('SELECT doc FROM revision ORDER BY id DESC LIMIT 1').fetchone()
        if not row:
            doc = schema.blank_doc()
        else:
            try:
                doc = schema.clean(json.loads(row['doc']))
            except json.JSONDecodeError:
                doc = schema.blank_doc()
        return apply_seeds(doc)

    def save(self, doc: dict, author: str = 'admin', note: str = '') -> dict:
        cleaned = schema.clean(doc)
        with self.conn() as c:
            c.execute('INSERT INTO revision (doc, author, note, created) VALUES (?,?,?,?)',
                      (json.dumps(cleaned, ensure_ascii=False), author, note, _now()))
        self.prune_revisions()
        return cleaned

    def patch(self, partial: dict, author: str = 'admin', note: str = '') -> dict:
        """Merge one or more sections into the current document.

        Sections are replaced wholesale, not deep-merged: the admin panel always
        sends a complete section, and a deep merge would make deleting a row
        impossible.
        """
        doc = self.get()
        for key, value in (partial or {}).items():
            if key in schema.SECTION_BY_KEY:
                doc[key] = value
        return self.save(doc, author, note)

    # ------------------------------------------------------------ history
    def revisions(self, limit: int = 30):
        with self.conn() as c:
            rows = c.execute(
                'SELECT id, author, note, created, length(doc) AS size '
                'FROM revision ORDER BY id DESC LIMIT ?', (limit,)).fetchall()
        return [dict(r) for r in rows]

    def revision(self, rev_id: int) -> dict | None:
        with self.conn() as c:
            row = c.execute('SELECT doc FROM revision WHERE id=?', (rev_id,)).fetchone()
        return schema.clean(json.loads(row['doc'])) if row else None

    def rollback(self, rev_id: int, author: str = 'admin') -> dict | None:
        doc = self.revision(rev_id)
        if doc is None:
            return None
        return self.save(doc, author, note=f'rolled back to revision {rev_id}')

    def prune_revisions(self, keep: int = 100):
        with self.conn() as c:
            c.execute('DELETE FROM revision WHERE id NOT IN '
                      '(SELECT id FROM revision ORDER BY id DESC LIMIT ?)', (keep,))

    # ------------------------------------------------------------ media
    def put_media(self, filename: str, data: bytes, mime: str | None = None) -> dict:
        mime = (mime or mimetypes.guess_type(filename)[0] or '').lower()
        if mime not in ALLOWED_MIME:
            raise ValueError(f'{mime or "unknown type"} is not an allowed upload '
                             f'({", ".join(sorted(ALLOWED_MIME))})')
        cap = MAX_VIDEO_UPLOAD if mime in VIDEO_MIME else MAX_UPLOAD
        if len(data) > cap:
            hint = (' — for a video this long, put it on YouTube or Vimeo and paste '
                    'the link instead') if mime in VIDEO_MIME else ''
            raise ValueError(f'that file is {len(data)/(1024*1024):.0f} MB and the '
                             f'limit is {cap // (1024*1024)} MB{hint}')
        if mime == 'image/svg+xml' and re.search(rb'<script|javascript:|onload\s*=',
                                                 data, re.I):
            # An SVG is a document that can carry script. Refuse the scriptable ones.
            raise ValueError('this SVG contains script and was not accepted')

        digest = hashlib.sha256(data).hexdigest()[:16]
        ext = ALLOWED_MIME[mime]
        stored = digest + ext
        with open(os.path.join(self.media_dir, stored), 'wb') as f:
            f.write(data)
        safe = re.sub(r'[^A-Za-z0-9._-]', '_', os.path.basename(filename))[:120]
        with self.conn() as c:
            c.execute('INSERT OR REPLACE INTO media (id, filename, mime, bytes, created) '
                      'VALUES (?,?,?,?,?)', (stored, safe, mime, len(data), _now()))
        return {'id': stored, 'url': f'media/{stored}', 'filename': safe,
                'mime': mime, 'bytes': len(data)}

    def media(self, limit: int = 300):
        with self.conn() as c:
            rows = c.execute('SELECT * FROM media ORDER BY created DESC LIMIT ?',
                             (limit,)).fetchall()
        return [dict(r, url=f'media/{r["id"]}') for r in rows]

    def media_path(self, media_id: str) -> str | None:
        if not re.fullmatch(r'[0-9a-f]{16}\.[a-z]{2,4}', media_id or ''):
            return None                      # no traversal, no surprises
        p = os.path.join(self.media_dir, media_id)
        return p if os.path.exists(p) else None

    def delete_media(self, media_id: str) -> bool:
        p = self.media_path(media_id)
        if not p:
            return False
        os.remove(p)
        with self.conn() as c:
            c.execute('DELETE FROM media WHERE id=?', (media_id,))
        return True

    # ------------------------------------------------------------ export
    def export(self, out_dir: str | None = None) -> str:
        """Write content.json for hosts that serve static files."""
        out_dir = out_dir or settings.export_dir
        os.makedirs(out_dir, exist_ok=True)
        path = os.path.join(out_dir, 'content.json')
        payload = {'updated': _now(), 'content': self.get()}
        tmp = path + '.tmp'
        with open(tmp, 'w', encoding='utf-8') as f:
            json.dump(payload, f, ensure_ascii=False, indent=1)
        os.replace(tmp, path)
        return path
