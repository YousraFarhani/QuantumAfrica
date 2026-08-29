# -*- coding: utf-8 -*-
"""Quantum Jobs List — https://www.quantumjobslist.com

Two feeds worth having:

  /                 industry roles, paginated
  /quantum-events   a hand-curated calendar of conferences, workshops and
                    summer schools, each linking out to the organiser's own site

robots.txt permits everything and publishes a sitemap.
"""
from __future__ import annotations

import datetime as dt
import re
import urllib.parse

from ..config import settings
from ..normalise import clean, event, job, parse_date

BASE = 'https://www.quantumjobslist.com'

# "April 5, 2026" / "5 April 2026" / "Apr 5, 2026"
DATE_TEXT = re.compile(
    r'\b(?:\d{1,2}\s+)?'
    r'(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*'
    r'\.?\s+\d{1,2},?\s+\d{4}\b|\b\d{1,2}\s+'
    r'(?:January|February|March|April|May|June|July|August|September|October|November|December)'
    r'\s+\d{4}\b', re.I)


def _abs(href):
    return urllib.parse.urljoin(BASE, href)


def _card_bits(a, title):
    card = a.find_parent(['article', 'li', 'tr']) or a.find_parent('div')
    if card is None:
        return []
    bits = [clean(x.get_text(' ', strip=True))
            for x in card.select('span, p, small, td, h3, h4, div')]
    out, seen = [], set()
    for b in bits:
        if not b or b == title or b in seen or len(b) > 90:
            continue
        seen.add(b)
        out.append(b)
    return out[:5]


def jobs(f, today: dt.date | None = None, pages: int | None = None):
    pages = pages or settings.pages_per_source
    out = []
    for page in range(1, pages + 1):
        url = BASE + ('' if page == 1 else f'/?page={page}')
        soup = f.soup(url)
        for a in soup.select('a[href*="/job/"]'):
            title = clean(a.get_text(' ', strip=True))
            href = _abs(a.get('href', ''))
            if len(title) < 6:
                continue
            bits = _card_bits(a, title)
            org = bits[0] if bits else ''
            place = bits[1] if len(bits) > 1 else ''
            out.append(job('qjoblist', title, href, org=org,
                           country=place, today=today))
    return out


def events(f, today: dt.date | None = None):
    """/quantum-events — name, type, date and location per row."""
    out = []
    soup = f.soup(f'{BASE}/quantum-events')
    seen = set()
    for a in soup.select('a[href]'):
        href = a.get('href', '')
        title = clean(a.get_text(' ', strip=True))
        # Event rows link out to the organiser, not to a page on this site.
        if len(title) < 6 or href.startswith('#') or '/job/' in href:
            continue
        if not href.startswith('http') or BASE in href:
            continue
        row = a.find_parent(['article', 'li', 'tr', 'div'])
        text = row.get_text(' ', strip=True) if row is not None else title
        m = DATE_TEXT.search(text)
        if not m:                       # no date in the row → not an event row
            continue
        if href in seen:
            continue
        seen.add(href)
        etype = None
        for label in ('Summer School', 'Workshop', 'Symposium', 'Hackathon',
                      'Conference', 'Seminar'):
            if re.search(r'\b' + label + r'\b', text, re.I):
                etype = label
                break
        city = country = ''
        tail = clean(text[m.end():])
        if tail:
            parts = [p.strip() for p in tail.split(',') if p.strip()]
            if len(parts) >= 2:
                city, country = parts[0], parts[1]
            elif parts:
                country = parts[0]
        start = parse_date(m.group(0))
        out.append(event('qjoblist', title, href, start=start, end=start,
                         city=city, country=country, etype=etype, today=today))
    return out
