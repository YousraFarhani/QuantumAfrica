# Quantum Africa

The Quantum Africa website, the editor behind it, and the service that keeps its
listings current.

**Start here → [DEPLOY.md](DEPLOY.md)** — putting it online and editing it.

```
site/        the website's source. Edit these, run site/build.py.
public/      what gets published. Netlify serves this folder.
backend/     the listings collector and the admin panel (runs on your computer)
admin.sh     macOS / Linux: open the editor
admin.bat    Windows: same
```

## The three moving parts

**The website** is one self-contained HTML file, built from `site/` by
`site/build.py`. No framework, no build tooling beyond Python, nothing to keep
up to date. It reads two things at runtime: your content, and the collected
listings.

**The admin panel** (`backend/admin/`) is where every placeholder gets filled in
— team, chapters, events, projects, partners, news, the hero and its photos and
videos, the front-page highlight carousel, the numbers. It
runs on your own computer only, writes into `public/`, and pushes to GitHub when
you press Publish. See [backend/ADMIN.md](backend/ADMIN.md).

**The collector** (`backend/app/`) gathers quantum jobs and events from three
public boards every morning, tags anything hosted in Africa, and writes
`public/data/`. It runs as a GitHub Action; you never touch it. See
[backend/README.md](backend/README.md).

## Everyday jobs

```bash
./admin.sh                  # edit the site, preview it, publish it
python3 site/build.py       # rebuild after editing anything in site/
```

## Two things worth knowing

**Empty means empty.** Any field you have not filled in shows a visible
placeholder saying what belongs there. The site never invents a number, a
partner, or an achievement — that was a rule from the start and the code holds
to it.

**Gotham is not included.** It is a licensed typeface and cannot be shipped.
Drop `Gotham-Book.woff2`, `Gotham-Medium.woff2` and `Gotham-Bold.woff2` into
`public/assets/fonts/` and the whole site switches to it. Until then it renders
in Poppins, the closest free match.

## Tests

```bash
python3 backend/tests/test_normalise.py
```
