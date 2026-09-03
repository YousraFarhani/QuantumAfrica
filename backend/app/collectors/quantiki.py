# -*- coding: utf-8 -*-
"""Quantiki — https://www.quantiki.org

Drupal. Two things we want:

  /jobs                              paginated table of positions, deadline in a column
  /calendar-node-field-dates/month/YYYY-MM   the conference calendar

robots.txt permits both and asks for a 10-second crawl delay, which the Fetcher
applies automatically. Be patient with it: three pages of jobs plus four months
of events is about a minute of wall time, by design.
"""
from __future__ import annotations

import datetime as dt
import re
import urllib.parse

from ..config import settings
from ..normalise import event, job, parse_date

BASE = 'https://www.quantiki.org'
DATE_RE = re.compile(r'\b(\d{2}/\d{2}/\d{4})\b')


def _abs(href: str) -> str:
    return urllib.parse.urljoin(BASE, href)


def jobs(f, today: dt.date | None = None, pages: int | None = None):
    pages = pages or settings.pages_per_source
    out = []
    for page in range(pages):
        url = f'{BASE}/jobs' + (f'?page={page}' if page else '')
        soup = f.soup(url)
        for a in soup.select('a[href*="/position/"]'):
            title = a.get_text(' ', strip=True)
            href = _abs(a.get('href', ''))
            if len(title) < 8 or '/position/' not in href:
                continue
            row = (a.find_parent('tr')
                   or a.find_parent('div', class_=re.compile(r'views-row'))
                   or a.parent)
            deadline = None
            if row is not None:
                m = DATE_RE.search(row.get_text(' ', strip=True))
                if m:
                    deadline = parse_date(m.group(1))
            org, city, country = _split_location(title)
            out.append(job('quantiki', title, href, org=org, city=city,
                           country=country, deadline=deadline, today=today))
    return out


# Quantiki packs the institution and place into the title itself, e.g.
# "Postdoc Position ... , Stellenbosch University, South Africa".
# Pulling those out is what lets the Africa tagger see them.
_TAIL = re.compile(r',\s*([^,]{3,60})\s*,\s*([A-Z][A-Za-z .\'-]{3,40})\s*$')

# Alternative pattern: "... at the University of X [, ...]" / "... at ETH Zurich ..."
# OR "… (University of X)" at the end of a title.
# Used on many recent Quantiki postings where the trailing comma form is not present.
# Groups: 1 = institution, 2 = extra (optional city/country after comma)
_AT = re.compile(
    r'\bat\s+(?:the\s+)?'
    r'([^,.—–\-()]{0,80}?\b(?:'
    r'Universit|Institute|College|Laborator|Centre|Center|School|Polytechnic|'
    r'ETH|EPFL|CERN|MIT|Caltech|Stanford|Harvard|Oxford|Cambridge'
    r')[^,.—–\-()]{0,40})'
    r'(?:\s*[,./—–]\s*([^,.—–()]{2,50}))?'
    r'(?=\s*[,./—–\-)]|\s*$|\s*\()',
    re.I)

# Fallback: grab an institution out of a trailing parenthesis.
_PAREN_INST = re.compile(
    r'\(\s*([^()]{0,80}?\b(?:'
    r'Universit|Institute|College|Laborator|Centre|Center|School|Polytechnic|'
    r'ETH|EPFL|CERN|MIT|Caltech|Stanford|Harvard|Oxford|Cambridge'
    r')[^()]{0,40})\s*\)\s*$',
    re.I)

# Final fallback: a SINGLE trailing comma followed directly by a
# university/institution/organisation name (no country after it).
# Catches the "..., National University of Singapore" style used on
# many non-South-African Quantiki postings (Singapore, Europe, USA, ...).
_COMMA_INST_TAIL = re.compile(
    r',\s*([^,]{4,90}?\b(?:'
    r'Universit|Institute|College|Laborator|Centre|Center|School|Polytechnic|'
    r'ETH|EPFL|CERN|MIT|Caltech|Stanford|Harvard|Oxford|Cambridge|NUS|NTU|KAIST|'
    r'TUM|Tsinghua|Peking|IIT|Imperial|KIT|Inria|CNRS|RIKEN|FZ Juelich|PSI|'
    r'University|Universiteit|Université|Universität|Università|Universidade'
    r')[^,—–]{0,60})\s*$',
    re.I)


def _strip_leading_article(s: str) -> str:
    s = (s or '').strip()
    for prefix in ('the ', 'The ', 'THE '):
        if s.startswith(prefix):
            s = s[len(prefix):].strip()
    return s


def _split_location(title: str):
    org, city, country = '', '', ''
    # First, try the classic trailing comma form: ", Institution, Country"
    m = _TAIL.search(title)
    if m:
        org_or_city, country = m.group(1).strip(), m.group(2).strip()
        if re.search(r'universit|institute|college|laborator|centre|center|school',
                     org_or_city, re.I):
            return _strip_leading_article(org_or_city), '', country
        return '', org_or_city, country
    # Fallback: the "… at [The] University/Institute of … [, City/Country?]"
    # form that many recent German/non-Anglophone Quantiki postings use.
    m = _AT.search(title)
    if not m:
        m = _PAREN_INST.search(title)
    if m:
        inst = _strip_leading_article(m.group(1).strip().rstrip(' ,.—–'))
        tail = (m.group(2) or '').strip() if m.lastindex and m.lastindex >= 2 else ''
        tc, tco = '', ''
        if tail:
            parts = [p.strip() for p in re.split(r'\s*,\s*', tail) if p.strip()]
            if len(parts) == 1:
                tco = parts[0]
            elif len(parts) >= 2:
                tc, tco = parts[-2], parts[-1]
        org = inst
        city = tc
        country = tco
        return org, city, country
    # Final fallback: single trailing comma followed by a university/institution
    # (no explicit country).  E.g. "…, National University of Singapore".
    m = _COMMA_INST_TAIL.search(title)
    if m:
        inst = _strip_leading_article(m.group(1).strip().rstrip(' ,.—–'))
        return inst, '', ''
    return org, city, country


def events(f, today: dt.date | None = None, months: int | None = None):
    """Walk the calendar month by month, starting with the current month."""
    today = today or dt.date.today()
    months = months or settings.event_months_ahead
    out = []
    y, m = today.year, today.month
    for _ in range(months):
        url = f'{BASE}/calendar-node-field-dates/month/{y:04d}-{m:02d}'
        try:
            soup = f.soup(url)
        except Exception:
            # A month with nothing in it can 404; that is not a run failure.
            y, m = (y + 1, 1) if m == 12 else (y, m + 1)
            continue
        for a in soup.select('a[href*="/conference/"]'):
            title = a.get_text(' ', strip=True)
            href = _abs(a.get('href', ''))
            if len(title) < 6:
                continue
            cell = a.find_parent(['td', 'li', 'div']) or a.parent
            dates = DATE_RE.findall(cell.get_text(' ', strip=True)) if cell else []
            start = parse_date(dates[0]) if dates else None
            end = parse_date(dates[1]) if len(dates) > 1 else start
            out.append(event('quantiki', title, href, start=start, end=end,
                             today=today))
        y, m = (y + 1, 1) if m == 12 else (y, m + 1)
    return out
