# -*- coding: utf-8 -*-
"""quantum.jobs — https://quantum.jobs

Industry roles.

NOTE ON ROBOTS: this site's robots.txt disallows /rss/. There is a tempting RSS
feed there and we do not touch it. The public listing pages are permitted, so
that is what this collector reads. The Fetcher would refuse the feed anyway —
please leave it that way rather than "fixing" it.

The site lists no events, so it contributes to the jobs feed only.
"""
from __future__ import annotations

import datetime as dt
import re
import urllib.parse

from ..config import settings
from ..normalise import clean, job

BASE = 'https://quantum.jobs'
JOB_HREF = re.compile(r'/jobs/\d+')


def jobs(f, today: dt.date | None = None, pages: int | None = None):
    pages = pages or settings.pages_per_source
    out = []
    for page in range(1, pages + 1):
        url = BASE + ('/' if page == 1 else f'/?page={page}')
        soup = f.soup(url)
        for a in soup.select('a[href*="/jobs/"]'):
            href = urllib.parse.urljoin(BASE, a.get('href', ''))
            if not JOB_HREF.search(href):
                continue
            title = clean(a.get_text(' ', strip=True))
            if len(title) < 6:
                continue
            card = a.find_parent(['article', 'li', 'tr']) or a.find_parent('div')
            org = place = ''
            if card is not None:
                bits = [clean(x.get_text(' ', strip=True))
                        for x in card.select('span, p, small, td')]
                bits = [b for b in bits if b and b != title and len(b) < 80]
                if bits:
                    org = bits[0]
                if len(bits) > 1:
                    place = bits[1]
            city, country = '', place
            if ',' in place:
                city, country = [p.strip() for p in place.rsplit(',', 1)]
            out.append(job('qjobs', title, href, org=org, city=city,
                           country=country, today=today))
    return out
