# -*- coding: utf-8 -*-
"""Tests for the only file that makes judgements.

    python -m pytest backend/tests -q
    python backend/tests/test_normalise.py      (no pytest needed)
"""
import datetime as dt
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))

from app import normalise as N  # noqa: E402

TODAY = dt.date(2026, 8, 28)


def test_africa_by_country():
    assert N.is_africa('Postdoc', 'Some Lab', 'Cape Town', 'South Africa')
    assert N.is_africa('', '', '', 'Morocco')
    assert N.is_africa('', '', '', 'Rwanda')


def test_africa_by_institution_when_country_missing():
    # The common case on these boards: a blank country field.
    assert N.is_africa('PostDoc Position, QuPhotonics Lab', 'Stellenbosch University', '', '')
    assert N.is_africa('MSc Quantum Science', 'FST Al-Hoceima, Abdelmalek Essaadi University', '', '')
    assert N.is_africa('Researcher', 'iThemba LABS', '', '')
    assert N.is_africa('Fellow', 'EAIFR', '', '')


def test_not_africa():
    assert not N.is_africa('Postdoc', 'Imperial College London', 'London', 'United Kingdom')
    assert not N.is_africa('Engineer', 'IonQ', '', 'Germany')
    assert not N.is_africa('Researcher', 'University of Nice', 'Nice', 'France')


def test_africa_false_friend():
    # "aims to" must not match the AIMS institute.
    assert not N.is_africa('A programme that aims to advance quantum theory', '', '', 'Japan')


def test_substring_countries_do_not_leak():
    # "Niger" inside "Nigeria" is fine (both African), but a word-boundary bug
    # would also match e.g. "Chad" inside another word.
    assert N.is_africa('', '', 'Abuja', 'Nigeria')
    assert not N.is_africa('Chadwick Laboratory', '', 'Liverpool', 'United Kingdom')


def test_classify_job():
    assert N.classify_job('PhD Position in Quantum Metrology') == 'PhD'
    assert N.classify_job('Postdoctoral Research Associate') == 'Postdoc'
    assert N.classify_job('W3 Professorship Experimental Physics') == 'Faculty'
    assert N.classify_job('MSc Quantum Science and Technology') == 'MSc'
    assert N.classify_job('Senior Electronics Engineer') == 'Industry'
    assert N.classify_job('Research Associate in Quantum Computation') == 'Research fellow'


def test_classify_event():
    assert N.classify_event('Q-Camp: Quantum Summer School 2026') == 'Summer school'
    assert N.classify_event('FullStaQD Community Workshop') == 'Workshop'
    assert N.classify_event('Symposium FTQC4NSc') == 'Symposium'
    assert N.classify_event('Q2B Tokyo') == 'Conference'
    assert N.classify_event('Anything', given='Hackathon') == 'Hackathon'
    # A source's own label wins, whatever its capitalisation — the case that
    # silently mislabelled QALYPSO as a conference.
    assert N.classify_event('QALYPSO 2026', given='Summer School') == 'Summer school'
    assert N.classify_event('QALYPSO 2026', given='summer school') == 'Summer school'
    assert N.classify_event('Some Talk', given='Webinar') == 'Seminar'
    assert N.classify_event('Q2B Tokyo', given='Nonsense') == 'Conference'


def test_parse_date_formats():
    assert N.parse_date('31/08/2026') == '2026-08-31'
    assert N.parse_date('2026-08-31') == '2026-08-31'
    assert N.parse_date('April 5, 2026') == '2026-04-05'
    assert N.parse_date('Sunday, August 2, 2026') == '2026-08-02'
    assert N.parse_date('') is None
    assert N.parse_date('sometime soon') is None


def test_job_status():
    assert N.job_status('2026-07-01', TODAY) == 'Closed'
    assert N.job_status('2026-09-05', TODAY) == 'Closing soon'
    assert N.job_status('2026-12-31', TODAY) == 'Open'
    assert N.job_status(None, TODAY) == 'Open'


def test_event_status():
    assert N.event_status('2026-08-24', '2026-08-30', TODAY) == 'Running now'
    assert N.event_status('2026-09-10', '2026-09-12', TODAY) == 'Upcoming'
    assert N.event_status('2026-04-05', '2026-04-05', TODAY) == 'Past'
    assert N.event_status(None, None, TODAY) == 'Upcoming'


def test_event_swaps_reversed_dates():
    e = N.event('x', 'Backwards', 'u', start='2026-09-10', end='2026-09-01', today=TODAY)
    assert e['start'] == '2026-09-01' and e['end'] == '2026-09-10'


def test_sort_puts_africa_first_then_urgency():
    items = [
        N.job('s', 'Faraway', 'u1', country='Germany', deadline='2026-09-01', today=TODAY),
        N.job('s', 'Home', 'u2', country='Morocco', deadline='2026-12-01', today=TODAY),
        N.job('s', 'Expired', 'u3', country='France', deadline='2026-01-01', today=TODAY),
    ]
    out = N.sort_jobs(items)
    assert out[0]['title'] == 'Home'          # Africa wins over urgency
    assert out[-1]['title'] == 'Expired'      # closed sinks


def test_dedupe_by_url_and_by_title():
    a = N.event('quantiki', 'QALYPSO 2026', 'https://a/1', start='2026-08-31', today=TODAY)
    b = N.event('qjoblist', 'QALYPSO 2026!', 'https://b/2', start='2026-08-31', today=TODAY)
    c = N.event('quantiki', 'QALYPSO 2026', 'https://a/1', start='2026-08-31', today=TODAY)
    out = N.dedupe([a, b, c])
    assert len(out) == 1 and out[0]['source'] == 'quantiki'


def test_ids_are_stable_and_url_derived():
    j1 = N.job('s', 'Title one', 'https://x/1', today=TODAY)
    j2 = N.job('s', 'Title changed later', 'https://x/1', today=TODAY)
    assert j1['id'] == j2['id']       # a re-titled listing is still the same listing


if __name__ == '__main__':
    fails = 0
    for name, fn in sorted(globals().items()):
        if name.startswith('test_') and callable(fn):
            try:
                fn()
                print(f'  ok   {name}')
            except AssertionError as e:
                fails += 1
                print(f'  FAIL {name}  {e}')
    print(f'\n{"all passed" if not fails else str(fails) + " FAILED"}')
    sys.exit(1 if fails else 0)
