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


def _split_location(title: str):
    m = _TAIL.search(title)
    if not m:
        return '', '', ''
    org_or_city, country = m.group(1).strip(), m.group(2).strip()
    if re.search(r'universit|institute|college|laborator|centre|center|school',
                 org_or_city, re.I):
        return org_or_city, '', country
    return '', org_or_city, country


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
