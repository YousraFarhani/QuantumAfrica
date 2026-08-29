# -*- coding: utf-8 -*-
"""Turning messy listings into one shape.

Every collector emits raw dicts; everything here decides what a listing *means*:
which continent it belongs to, what kind of thing it is, and whether it is still
worth showing. Keeping that judgement in one file means the three job boards and
the two event sources stay consistent, and it is the only file with real tests.
"""
from __future__ import annotations

import datetime as dt
import hashlib
import re

# --------------------------------------------------------------------- Africa

AFRICA_COUNTRIES = {
    'algeria', 'angola', 'benin', 'botswana', 'burkina faso', 'burundi',
    'cabo verde', 'cape verde', 'cameroon', 'central african republic', 'chad',
    'comoros', 'congo', 'djibouti', 'dr congo', 'egypt', 'equatorial guinea',
    'eritrea', 'eswatini', 'ethiopia', 'gabon', 'gambia', 'ghana', 'guinea',
    'guinea-bissau', 'ivory coast', "côte d'ivoire", "cote d'ivoire", 'kenya',
    'lesotho', 'liberia', 'libya', 'madagascar', 'malawi', 'mali', 'mauritania',
    'mauritius', 'morocco', 'mozambique', 'namibia', 'niger', 'nigeria',
    'rwanda', 'senegal', 'seychelles', 'sierra leone', 'somalia', 'south africa',
    'south sudan', 'sudan', 'swaziland', 'tanzania', 'togo', 'tunisia', 'uganda',
    'zambia', 'zimbabwe',
}

# Cities and institutions that identify an African listing even when the country
# field is blank — which is the common case on these boards.
AFRICA_HINTS = {
    # South Africa
    'stellenbosch', 'cape town', 'johannesburg', 'pretoria', 'durban',
    'witwatersrand', 'kwazulu', 'ithemba', 'unisa', 'nithep', 'csir',
    # Morocco
    'rabat', 'casablanca', 'kenitra', 'kénitra', 'marrakech', 'marrakesh',
    'agadir', 'al-hoceima', 'al hoceima', 'tetouan', 'tétouan', 'oujda',
    'el jadida', 'ibn tofail', 'abdelmalek essaadi', 'mohammed v', 'mohamed v',
    'cadi ayyad', 'ibn zohr', 'chouaib doukkali', 'hassan ii', 'um6p',
    'mohammed vi polytechnic',
    # Egypt / North Africa
    'cairo', 'alexandria', 'giza', 'al-azhar', 'zewail',
    'tunis', 'sfax', 'carthage', 'el manar', 'algiers', 'oran', 'constantine',
    # West / East / Southern
    'lagos', 'abuja', 'ibadan', 'nsukka', 'accra', 'kumasi', 'dakar',
    'nairobi', 'kigali', 'addis ababa', 'kampala', 'dar es salaam', 'lusaka',
    'gaborone', 'windhoek', 'maputo', 'harare',
    # Pan-African institutions
    'aims', 'african institute for mathematical sciences', 'eaifr',
    'african leadership university', 'nepad', 'african academy of sciences',
}

# Words that would otherwise trip the hints above.
FALSE_FRIENDS = (
    ('aims', re.compile(r'\baims?\s+(to|at|for)\b')),      # "aims to advance…"
)


def _blob(*fields) -> str:
    return ' '.join(str(f or '') for f in fields).lower()


def is_africa(*fields) -> bool:
    """True when the listing is hosted in Africa.

    Checks country first, then city and institution names, so a posting whose
    country field is empty still gets caught by "Stellenbosch" or "Ibn Tofail".
    """
    text = _blob(*fields)
    for country in AFRICA_COUNTRIES:
        if re.search(r'\b' + re.escape(country) + r'\b', text):
            return True
    for hint in AFRICA_HINTS:
        if hint not in text:
            continue
        skip = False
        for word, pattern in FALSE_FRIENDS:
            if hint == word and pattern.search(text):
                skip = True
        if not skip:
            return True
    return False


# ------------------------------------------------------------------ job types

JOB_TYPE_RULES = [
    (re.compile(r'\bph\.?\s?d\b|doctoral candidate|doctorate'),          'PhD'),
    (re.compile(r'\bpost[-\s]?doc|postdoctoral'),                        'Postdoc'),
    (re.compile(r'professorship|\bprofessor\b|faculty|lecturer|\bchair\b'), 'Faculty'),
    (re.compile(r'\bm\.?sc\b|\bmaster'),                                 'MSc'),
    (re.compile(r'\bintern(ship)?\b'),                                   'Internship'),
    (re.compile(r'summer school|winter school|\bschool\b'),              'Summer school'),
    (re.compile(r'fellow(ship)?|research associate|research scientist|research assistant'),
                                                                         'Research fellow'),
]

JOB_TYPES = ['PhD', 'Postdoc', 'MSc', 'Faculty', 'Research fellow',
             'Internship', 'Summer school', 'Industry']


def classify_job(title: str) -> str:
    t = (title or '').lower()
    for pattern, label in JOB_TYPE_RULES:
        if pattern.search(t):
            return label
    return 'Industry'


# ---------------------------------------------------------------- event types

EVENT_TYPE_RULES = [
    (re.compile(r'summer school|winter school|spring school|\bschool\b|\bcamp\b'), 'Summer school'),
    (re.compile(r'\bworkshop\b'),                                'Workshop'),
    (re.compile(r'\bsymposium\b'),                               'Symposium'),
    (re.compile(r'\bseminar\b|\bwebinar\b|\bcolloquium\b'),      'Seminar'),
    (re.compile(r'hackathon|\bchallenge\b|\bcompetition\b'),     'Hackathon'),
    (re.compile(r'\bmsc\b|\bmaster'),                            'Programme'),
]

EVENT_TYPES = ['Conference', 'Workshop', 'Summer school', 'Symposium',
               'Seminar', 'Hackathon', 'Programme']


_EVENT_TYPE_LOOKUP = {t.lower(): t for t in EVENT_TYPES}
_EVENT_TYPE_LOOKUP.update({'summer school': 'Summer school', 'school': 'Summer school',
                           'winter school': 'Summer school', 'webinar': 'Seminar',
                           'talk': 'Seminar', 'competition': 'Hackathon'})


def classify_event(title: str, given: str | None = None) -> str:
    # A label the source gave us wins, but match it case-insensitively —
    # "Summer School" and "summer school" must both land on "Summer school".
    if given:
        hit = _EVENT_TYPE_LOOKUP.get(given.strip().lower())
        if hit:
            return hit
    t = (title or '').lower()
    for pattern, label in EVENT_TYPE_RULES:
        if pattern.search(t):
            return label
    return 'Conference'


# ------------------------------------------------------------------- date bits

_DATE_FORMATS = (
    '%d/%m/%Y', '%Y-%m-%d', '%d-%m-%Y', '%d.%m.%Y',
    '%A, %B %d, %Y', '%B %d, %Y', '%d %B %Y', '%b %d, %Y', '%d %b %Y',
)


def parse_date(text) -> str | None:
    """Best-effort date parse → ISO string, or None. Never raises."""
    if not text:
        return None
    if isinstance(text, dt.date):
        return text.isoformat()
    text = re.sub(r'\s+', ' ', str(text)).strip().strip(',')
    for fmt in _DATE_FORMATS:
        try:
            return dt.datetime.strptime(text, fmt).date().isoformat()
        except ValueError:
            pass
    m = re.search(r'\b(\d{4})-(\d{2})-(\d{2})\b', text)
    if m:
        return m.group(0)
    m = re.search(r'\b(\d{1,2})/(\d{1,2})/(\d{4})\b', text)
    if m:
        d, mo, y = m.groups()
        try:
            return dt.date(int(y), int(mo), int(d)).isoformat()
        except ValueError:
            return None
    return None


CLOSING_SOON_DAYS = 21


def job_status(deadline: str | None, today: dt.date) -> str:
    if not deadline:
        return 'Open'
    try:
        d = dt.date.fromisoformat(deadline)
    except (TypeError, ValueError):
        return 'Open'
    if d < today:
        return 'Closed'
    return 'Closing soon' if (d - today).days <= CLOSING_SOON_DAYS else 'Open'


def event_status(start: str | None, end: str | None, today: dt.date) -> str:
    """Upcoming / Running now / Past, from whichever dates we have."""
    s = e = None
    try:
        s = dt.date.fromisoformat(start) if start else None
        e = dt.date.fromisoformat(end) if end else None
    except (TypeError, ValueError):
        pass
    if s is None and e is None:
        return 'Upcoming'
    last = e or s
    first = s or e
    if last < today:
        return 'Past'
    if first <= today <= last:
        return 'Running now'
    return 'Upcoming'


# ----------------------------------------------------------------- assembling

def make_id(url: str) -> str:
    return hashlib.sha1((url or '').encode()).hexdigest()[:10]


def clean(text) -> str:
    return re.sub(r'\s+', ' ', str(text or '')).strip()


def job(source, title, url, org='', city='', country='', deadline=None, today=None):
    today = today or dt.date.today()
    deadline = parse_date(deadline)
    title, org, city, country = map(clean, (title, org, city, country))
    return {
        'id': make_id(url),
        'kind': 'job',
        'title': title,
        'org': org,
        'city': city,
        'country': country,
        'africa': is_africa(title, org, city, country),
        'type': classify_job(title),
        'deadline': deadline,
        'status': job_status(deadline, today),
        'source': source,
        'url': url,
    }


def event(source, title, url, start=None, end=None, city='', country='',
          etype=None, today=None):
    today = today or dt.date.today()
    start, end = parse_date(start), parse_date(end)
    if start and end and end < start:
        start, end = end, start
    title, city, country = map(clean, (title, city, country))
    return {
        'id': make_id(url),
        'kind': 'event',
        'title': title,
        'start': start,
        'end': end,
        'city': city,
        'country': country,
        'online': 'online' in _blob(city, country, title),
        'africa': is_africa(title, city, country),
        'type': classify_event(title, etype),
        'status': event_status(start, end, today),
        'source': source,
        'url': url,
    }


# --------------------------------------------------------------------- sorting

_JOB_RANK = {'Closing soon': 0, 'Open': 1, 'Closed': 2}
_EVENT_RANK = {'Running now': 0, 'Upcoming': 1, 'Past': 2}


def sort_jobs(items):
    return sorted(items, key=lambda i: (
        not i['africa'],
        _JOB_RANK.get(i['status'], 3),
        i['deadline'] or '9999-99-99',
        i['title'].lower(),
    ))


def sort_events(items):
    return sorted(items, key=lambda i: (
        not i['africa'],
        _EVENT_RANK.get(i['status'], 3),
        i['start'] or '9999-99-99',
        i['title'].lower(),
    ))


def dedupe(items):
    """Drop repeats by URL, then by near-identical title + start/deadline.

    Sources overlap — QALYPSO 2026 is on both Quantiki and Quantum Jobs List —
    and the first entry wins, which is the one from the earlier collector.
    """
    seen_urls, out = set(), []
    for it in items:
        if it['url'] in seen_urls:
            continue
        seen_urls.add(it['url'])
        out.append(it)

    # Second pass: the same event listed under a longer name on another board.
    # "QALYPSO 2026" and "QALYPSO 2026: Quantum Optimisation Techniques" are one
    # event, so treat a title that is a prefix of another as the same listing
    # when the dates agree. Requiring the date match keeps unrelated events with
    # a shared prefix — "Q2B Tokyo" and "Q2B Chicago" — apart.
    def slug(t):
        return re.sub(r'[^a-z0-9]', '', (t or '').lower())

    def when(i):
        return i.get('start') or i.get('deadline') or ''

    kept = []
    for it in out:
        a, wa = slug(it['title']), when(it)
        drop = False
        for other in kept:
            b, wb = slug(other['title']), when(other)
            if not a or not b or wa != wb:
                continue
            if a == b or a.startswith(b) or b.startswith(a):
                # Keep whichever carries more detail: a place beats no place.
                mine = bool(it.get('city') or it.get('country') or it.get('org'))
                theirs = bool(other.get('city') or other.get('country') or other.get('org'))
                if mine and not theirs:
                    kept[kept.index(other)] = it
                drop = True
                break
        if not drop:
            kept.append(it)
    return kept
