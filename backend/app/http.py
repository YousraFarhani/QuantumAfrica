# -*- coding: utf-8 -*-
"""A polite HTTP client.

Every request goes through here so the rules are enforced in one place rather
than remembered in five collectors:

  * robots.txt is read once per host and obeyed. If robots.txt cannot be
    reached, the host is treated as disallowed — the safe direction.
  * Crawl-delay is honoured per host (Quantiki asks for 10 seconds).
  * A descriptive User-Agent carries a contact address, so a site owner who is
    unhappy can email you instead of silently blocking the whole range.

If you are tempted to bypass this class for "just one quick request", don't.
"""
from __future__ import annotations

import logging
import time
import urllib.parse
import urllib.robotparser as robotparser

import requests

from .config import settings

log = logging.getLogger(__name__)


class RobotsDisallowed(PermissionError):
    """The site's robots.txt says no. Not an error to retry — a rule to respect."""


class Fetcher:
    def __init__(self, user_agent: str | None = None, timeout: int | None = None):
        self.ua = user_agent or settings.user_agent
        self.timeout = timeout or settings.http_timeout
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': self.ua,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en',
        })
        self._robots: dict[str, robotparser.RobotFileParser] = {}
        self._last_hit: dict[str, float] = {}

    # ------------------------------------------------------------- robots
    def _robots_for(self, url: str) -> robotparser.RobotFileParser:
        parts = urllib.parse.urlsplit(url)
        host = parts.netloc
        if host not in self._robots:
            rp = robotparser.RobotFileParser()
            robots_url = urllib.parse.urlunsplit((parts.scheme, host, '/robots.txt', '', ''))
            try:
                r = self.session.get(robots_url, timeout=self.timeout)
                if r.status_code >= 400:
                    # No robots.txt published at all means everything is allowed.
                    rp.parse([])
                else:
                    rp.parse(r.text.splitlines())
            except requests.RequestException as exc:
                log.warning('robots.txt unreachable for %s (%s) — treating as disallowed',
                            host, exc)
                rp.disallow_all = True
            self._robots[host] = rp
        return self._robots[host]

    def allowed(self, url: str) -> bool:
        return self._robots_for(url).can_fetch(self.ua, url)

    def crawl_delay(self, url: str) -> float:
        rp = self._robots_for(url)
        for agent in (self.ua, '*'):
            try:
                d = rp.crawl_delay(agent)
            except Exception:
                d = None
            if d:
                return float(d)
        return settings.default_crawl_delay

    # ---------------------------------------------------------------- get
    def get(self, url: str) -> requests.Response:
        if not self.allowed(url):
            raise RobotsDisallowed(url)
        host = urllib.parse.urlsplit(url).netloc
        wait = self.crawl_delay(url) - (time.monotonic() - self._last_hit.get(host, 0.0))
        if wait > 0:
            log.debug('waiting %.1fs before %s', wait, url)
            time.sleep(wait)
        log.debug('GET %s', url)
        try:
            r = self.session.get(url, timeout=self.timeout)
        finally:
            self._last_hit[host] = time.monotonic()
        r.raise_for_status()
        return r

    def soup(self, url: str):
        from bs4 import BeautifulSoup
        return BeautifulSoup(self.get(url).text, 'html.parser')

    def close(self):
        self.session.close()

    def __enter__(self):
        return self

    def __exit__(self, *exc):
        self.close()
