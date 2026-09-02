# -*- coding: utf-8 -*-
"""Settings. Everything is overridable by environment variable, nothing needs to be."""
from __future__ import annotations

import os
from dataclasses import dataclass, field

BACKEND_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REPO_ROOT = os.path.dirname(BACKEND_ROOT)


def _abs(rel_or_abs: str) -> str:
    """Turn a repository-relative path (or absolute path) into an absolute path.

    This keeps paths stable regardless of what the caller's current working
    directory happens to be. Paths that are already absolute are returned
    unchanged; relative paths are resolved against the repository root
    (``quantum-africa/``, two levels up from this file).
    """
    if os.path.isabs(rel_or_abs):
        return rel_or_abs
    return os.path.normpath(os.path.join(REPO_ROOT, rel_or_abs))


def _env(name: str, default):
    v = os.environ.get(name)
    if v is None or v == '':
        return default
    if isinstance(default, bool):
        return v.strip().lower() in ('1', 'true', 'yes', 'on')
    if isinstance(default, int):
        try:
            return int(v)
        except ValueError:
            return default
    if isinstance(default, float):
        try:
            return float(v)
        except ValueError:
            return default
    return v


@dataclass
class Settings:
    # Who we say we are. Put a real inbox here before deploying.
    contact: str = _env('QA_CONTACT', 'hello@quantum-africa.org')
    site: str = _env('QA_SITE', 'https://quantum-africa.org')

    # Storage and output. Always resolved relative to the repository root so
    # running the server from ``backend/`` vs the repo root is identical.
    db_path: str = _abs(_env('QA_DB', 'backend/data/feed.sqlite3'))
    export_dir: str = _abs(_env('QA_EXPORT_DIR', 'public/data'))
    media_dir: str = _abs(_env('QA_MEDIA_DIR', 'public/media'))

    # HTTP manners
    http_timeout: int = _env('QA_HTTP_TIMEOUT', 30)
    default_crawl_delay: float = _env('QA_CRAWL_DELAY', 1.5)
    pages_per_source: int = _env('QA_PAGES', 3)
    event_months_ahead: int = _env('QA_EVENT_MONTHS', 4)

    # Scheduling — how often the collectors run, in minutes
    refresh_minutes: int = _env('QA_REFRESH_MINUTES', 720)     # twice a day
    refresh_on_start: bool = _env('QA_REFRESH_ON_START', True)

    # API. The default bind is loopback: the admin panel is meant to run on
    # your own computer and nowhere else. Set QA_HOST=0.0.0.0 only for a
    # deliberately hosted, feed-only deployment.
    host: str = _env('QA_HOST', '127.0.0.1')
    port: int = _env('QA_PORT', 8000)
    # Which origins may read the API from a browser. "*" is fine here: the data
    # is public and there is nothing to authorise.
    cors_origins: list[str] = field(
        default_factory=lambda: [o.strip() for o in _env('QA_CORS', '*').split(',')])
    # Guards POST /api/refresh. Unset means the endpoint is disabled.
    admin_token: str = _env('QA_ADMIN_TOKEN', '')

    # Housekeeping
    keep_past_days: int = _env('QA_KEEP_PAST_DAYS', 60)

    @property
    def user_agent(self) -> str:
        return (f'QuantumAfricaFeedBot/1.0 (+{self.site}; {self.contact}) '
                'python-requests')


settings = Settings()
