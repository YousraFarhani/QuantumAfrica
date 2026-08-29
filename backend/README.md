# Quantum Africa feed backend

Collects quantum **jobs** and **events** from public community boards, tags what
is relevant to Africa, and serves the result to the website — either as two
static JSON files or from a small HTTP API.

```
quantiki.org  ─┐
quantum.jobs  ─┼─→  collectors → normalise → SQLite ─┬→ data/*.json  (static host)
qjobslist.com ─┘                                     └→ /api/*       (with CORS)
```

## Why this exists at all

The obvious implementation — fetch the three boards from JavaScript in the page
— cannot work. None of them sends an `Access-Control-Allow-Origin` header, so
the browser refuses to hand the response to your code. That is CORS, it is
enforced by the browser, and there is no front-end trick around it.

So the fetching happens here, server-side, where CORS does not apply. The result
is re-served from your own origin (a JSON file) or from this API (which *does*
send the header). That is the entire reason the backend exists.

## Quick start

```bash
pip install -r requirements.txt

python -m app.cli refresh          # collect everything, write data/*.json
python -m app.cli status           # what's in the database, how the last run went
python -m app.cli serve            # API on :8000 + background refresh
```

Or with Docker:

```bash
docker compose up -d
curl localhost:8000/api/health
```

## The two ways to deploy

**A · Static files — no server.** Run `python -m app.cli refresh` on a schedule;
it writes `data/opportunities.json` and `data/events.json`. Serve those next to
the site and the page reads them from its own origin. A GitHub Action
(`.github/workflows/opportunities.yml`) or a cron line is enough:

```
17 5 * * *  cd /srv/quantum-africa && python -m app.cli refresh --out public/data
```

**B · The API — a running service.** `python -m app.cli serve`, or the Docker
image, or the included systemd unit. It refreshes on its own schedule and serves
the data with CORS, so the site can live on a different host entirely. Point the
page at it with one line in the HTML:

```html
<meta name="qa-feed" content="https://feed.quantum-africa.org/api">
```

The site needs no other change: with no meta tag it reads the JSON files, with
one it reads the API, and if neither answers it keeps the snapshot compiled into
the page and says so under the heading.

## Editing the site

The backend also serves an admin panel at `/admin` where every placeholder on the
website can be filled in — team, chapters, events, projects, partners, news, the
hero, the numbers, and more. Set `QA_ADMIN_PASSWORD` and `QA_SECRET`, then see
**ADMIN.md**. Saves are versioned and the site picks them up on the next load.

## Endpoints

| Endpoint | What it does |
|---|---|
| `GET /api/health` | last run per kind, counts, any collector errors. 503 if a run failed |
| `GET /api/opportunities` | jobs · `?africa=1&type=PhD&status=Open&source=quantiki&q=…&limit=50` |
| `GET /api/events` | events · `?africa=1&type=Workshop&when=upcoming&q=…` |
| `GET /api/sources` | who the data comes from |
| `POST /api/refresh` | collect now · header `X-Admin-Token`, disabled unless `QA_ADMIN_TOKEN` is set |
| `GET /api/content` | the editable site content — public, this is what the website reads |
| `/admin` + `/api/admin/*` | the admin panel and its endpoints — see ADMIN.md |

Interactive docs at `/docs`.

## Configuration

Every setting is an environment variable; none is required.

| Variable | Default | Notes |
|---|---|---|
| `QA_CONTACT` | `hello@quantum-africa.org` | **Set this.** It goes in the User-Agent so a site owner can email you instead of blocking you |
| `QA_SITE` | `https://quantum-africa.org` | also in the User-Agent |
| `QA_DB` | `data/feed.sqlite3` | |
| `QA_EXPORT_DIR` | `data` | where the JSON files are written |
| `QA_PAGES` | `3` | listing pages per job source |
| `QA_EVENT_MONTHS` | `4` | months of calendar to walk |
| `QA_REFRESH_MINUTES` | `720` | twice a day |
| `QA_CORS` | `*` | comma-separated origins |
| `QA_ADMIN_TOKEN` | *(unset)* | unset disables `POST /api/refresh` |
| `QA_KEEP_PAST_DAYS` | `60` | how long vanished listings are kept |

## Layout

```
app/
  config.py       settings, all env-overridable
  http.py         the polite fetcher — robots.txt, crawl-delay, User-Agent
  normalise.py    every judgement: Africa tagging, type, dates, status, sorting
  store.py        SQLite: first_seen, last_seen, gone
  service.py      the refresh cycle and the JSON export
  scheduler.py    a background timer
  api.py          FastAPI + CORS
  cli.py          refresh / export / seed / status / serve
  collectors/
    quantiki.py       jobs + the conference calendar
    quantum_jobs.py   jobs
    qjoblist.py       jobs + /quantum-events
tests/test_normalise.py
```

Adding a source is one function plus one line in `collectors/__init__.py`.
Removing one — because it asks you to — is deleting that line.

## Why SQLite, when the output is a JSON file

Three things a stateless scraper cannot do:

* **`first_seen`** — lets the site say "new this week".
* **Survival.** When a source breaks or a listing drops off a paginated page for
  a run, the row is still here and the export carries it. The page never goes
  half-empty because someone changed their HTML.
* **`gone`** — a listing that stops appearing is marked, not deleted, so you can
  tell "they removed it" from "our parser broke".

## Manners, and the one rule not to break

`app/http.py` reads each site's `robots.txt` before the first request, obeys it,
and honours crawl-delay — Quantiki asks for 10 seconds, so a full run takes about
a minute. That is deliberate. If robots.txt cannot be fetched at all, the host is
treated as **disallowed**.

**quantum.jobs disallows `/rss/`.** There is a convenient RSS feed sitting there
and this code does not touch it; it reads the permitted listing pages instead.
The fetcher would refuse the feed anyway. Please leave that alone rather than
"fixing" it.

## Rights

None of these boards has granted redistribution rights. The site shows only what
is needed to find a posting — title, institution, location, type, dates — credits
the source on every row, and links to the original, where the application or
registration happens. It never reproduces the advert or event description.

## Tests

```bash
python tests/test_normalise.py      # no pytest needed
python -m pytest tests -q
```

`normalise.py` is the only file that makes judgements, so it is the only one with
real tests — 15 of them, covering Africa tagging (including institution-only
matches and the "aims to" false friend), type classification, date parsing,
status transitions, sorting and de-duplication.

## When a source changes its HTML

Scrapers break. This one fails loudly and safely: the run logs `FAILED` for that
source, the previous rows stay in the database and still export, and
`/api/health` returns 503 with the reason. Fix the selector in that one
`from_*`/collector function — the three are independent, so a break in one never
touches the others.

## What the data currently says

At the 28 Aug 2026 snapshot: **58 jobs, 2 hosted in Africa** — both already past
their deadline — and **46 events, none in Africa**. That is the honest state of
these boards, and it is the argument for the pinned Africa panels on the site and
for the two submission forms. Quantum Africa's own network will hear about
African positions and events long before any of these three sites do.
