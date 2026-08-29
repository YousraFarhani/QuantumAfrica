# The admin panel

Everything on the website that is currently a `[ placeholder ]` can be filled in
here, and appears on the site as soon as you press **Save & publish**.

    http://your-server/admin

## Getting in

The password is an environment variable, not a database row. Set two things
before you start the server:

```bash
export QA_ADMIN_PASSWORD='something long and not reused'
export QA_SECRET='a second long random string'      # keeps you signed in across restarts
python -m app.cli serve
```

Without `QA_ADMIN_PASSWORD` the admin panel refuses every request — that is the
safe default, so an accidentally exposed server cannot be edited by anyone.
Sessions last 12 hours.

With Docker, put both in `docker-compose.yml` under `environment:`.

## How it works

```
you → /admin → PUT /api/admin/content → SQLite (a new revision each save)
                                          ├→ data/content.json   (static hosts)
                                          └→ GET /api/content    (the API)
                                                    ↓
                                          the website, on next load
```

The website asks for the content document every time it loads. Anything you have
filled in replaces the placeholder; anything still empty keeps showing the
placeholder that says what is needed. **The site is never blank because a field
is empty, and never invents a value you did not supply.**

## What you can edit

| Section | What it controls |
|---|---|
| Site basics | Name, tagline, contact details, social links |
| Homepage hero | The rotating statements, their paragraphs, and the photos **and videos** behind them |
| Front page highlight | Your latest event, with a carousel mixing photos and video |
| Numbers | Every counter on the homepage and Impact page |
| About | Story, mission, vision |
| Team | Everyone on the Team page — photo, role, bio, profile links |
| Chapters | National chapters, their leads and the map pins |
| Our events | Quantum Africa's own webinars, workshops and chapter events |
| Research projects | Projects, objectives, repositories, contributors |
| Partners | Only organisations with a real agreement |
| News & articles | Announcements and write-ups |
| Our opportunities | Positions you know about — **pinned above the collected job feed** |
| Conference series | Quantum Africa's role, edition photographs, speaker portraits and profile links |
| AI Tutor | Introduction, status and screenshots |
| Pledge your support | Donation details, where support goes |
| Legal | Privacy, terms, code of conduct |

The worldwide job and event listings are **not** edited here — they are collected
automatically twice a day. See `README.md`.

## Things worth knowing

**Nothing is destroyed.** Every save writes a new revision. *Revision history* in
the sidebar restores any earlier version, and restoring itself creates a new
save, so you can undo an undo. The last 100 revisions are kept.

**Photos and videos.** The hero and the front-page highlight take either. On each
slide, pick *Photo* or *Video*, then give it one of three things:

- an **uploaded photo** — also used as the still frame for a video;
- an **uploaded clip** — MP4 or WebM, under 25 MB, good for a few seconds of
  atmosphere. Use H.264 MP4; every browser plays it;
- a **link to YouTube or Vimeo** — the right choice for a full talk. It costs
  your site nothing, and the player only loads when someone presses play.

Uploaded files live in your repository and are served from it, so a large video
makes the site slower for everyone and the repository heavier forever. That is
why the limit is 25 MB and why the link option exists. In the hero, a linked
video shows its still frame rather than autoplaying — nobody should have a third
party loaded into every visit to your front page.

**Images.** Upload from any image field. Files are stored under `data/media/`
and served from `/media/…`. JPEG, PNG, WebP, GIF, SVG and PDF, up to 12 MB. An
SVG containing script is refused — SVGs are documents that can carry code, and
one uploaded to your own site would run on your visitors' machines.

**Reordering.** Drag the ⋮⋮ handle on repeatable rows. The order you set is the
order on the site — the hero images, the objectives, the edition photographs.

**Conference portraits** are matched to the official line-ups **by name**. Type
the name exactly as it appears on the edition page and the portrait and profile
link attach to that person.

**Unsaved changes** are flagged in the top bar, and the browser will warn you if
you try to close the tab with work outstanding. *Revert* throws away your
unsaved edits.

**Only what the schema knows is stored.** Anything else in a request is
discarded, so the panel cannot push unexpected keys into the website.

## Adding a new editable field later

`app/schema.py`, one line:

```python
F('newsletter', 'Newsletter note', 'text', help='Shown above the sign-up box.'),
```

The admin panel grows the field by itself — it renders from the schema. Then read
it on the site with `cx('site.newsletter', 'fallback placeholder')`.

Field types: `text` `textarea` `markdown` `url` `email` `date` `time` `number`
`select` (with `options`) `image` `tags` `list` (repeatable, with `fields`).

## If you are not running a server

The panel needs the backend. If the site is on plain static hosting, run the
backend anywhere (your laptop, a small VPS, a free container host), edit there,
and copy the generated `data/content.json` next to the site — or point the site
at the API with one line in the HTML:

```html
<meta name="qa-feed" content="https://feed.quantum-africa.org/api">
```

## Security, honestly stated

This is one shared password, a signed session token, and a schema that rejects
unknown fields. That is proportionate for a small team editing its own public
website — there is nothing private in the content, and the worst case is a
defaced page you can restore from history in two clicks.

It is **not** enough if you later have several editors who should see different
things, or if you start storing anything personal beyond what people have agreed
to publish about themselves. At that point replace `_issue`/`require_admin` in
`app/admin_api.py` with real accounts. Nothing else in the codebase needs to
change.

Serve it over HTTPS. A password over plain HTTP is a password given away.
