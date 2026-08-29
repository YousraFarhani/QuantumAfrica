# Putting this online

Two things get deployed, and only one of them goes on the internet.

| | Where it lives | Who can reach it |
|---|---|---|
| **The website** | Netlify, built from your GitHub repo | everyone |
| **The admin panel** | your own computer, when you run it | only you |

The panel never gets a public address. That is the whole point: there is no
login page on the internet for anyone to find, guess at, or attack. You edit
locally, press **Publish**, and the live site updates a minute later.

```
your computer                        GitHub                    Netlify
┌──────────────────┐   git push   ┌──────────┐   webhook   ┌──────────────┐
│ admin panel      │ ───────────► │  repo    │ ──────────► │ quantum-     │
│ (localhost only) │              │          │             │ africa.org   │
└──────────────────┘              └──────────┘             └──────────────┘
        │                              ▲
        └── writes public/data/ ───────┘         GitHub Action, every morning:
            and public/media/                    refreshes the job & event feeds
```

---

## 1 · Put this code in your GitHub repository

Your repo already has the old site. These steps replace it while keeping the
history, so nothing is lost and you can always look back.

```bash
# somewhere sensible on your computer
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git quantum-africa
cd quantum-africa

# keep the old version, in case you ever want to look at it
git checkout -b old-site
git push -u origin old-site
git checkout main            # or master, whichever your repo uses
```

Now delete the old files and copy in the new ones:

```bash
# from the repo folder, remove the old site but keep .git
find . -maxdepth 1 ! -name . ! -name .git -exec rm -rf {} +

# copy everything from the folder you unzipped
cp -R /path/to/unzipped/* /path/to/unzipped/.github /path/to/unzipped/.gitignore .
```

Check it, then commit:

```bash
python3 site/build.py        # rebuilds public/index.html
git add -A
git commit -m "New website: rebuilt site, feeds backend and admin panel"
git push
```

> **If anything looks wrong**, `git checkout old-site` puts the old version back
> in front of you. Nothing is deleted from GitHub by any of this.

---

## 2 · Connect Netlify

1. Sign in at [netlify.com](https://netlify.com) with your GitHub account.
2. **Add new site → Import an existing project → GitHub**, and pick your repo.
3. Netlify reads `netlify.toml` and fills in the settings itself:
   - build command `python3 site/build.py`
   - publish directory `public`
   Leave them as they are.
4. **Deploy**. About a minute later you have a live URL like
   `quantum-africa-xyz.netlify.app`.

### Your own domain

Site configuration → Domain management → **Add a domain**, enter
`quantum-africa.org`, and follow the DNS instructions Netlify gives you. Then
turn on **Force HTTPS** — the certificate is free and automatic.

Every push to `main` republishes. There is nothing else to run.

*(Vercel works identically — `vercel.json` is there if you prefer it. Use one or
the other, not both.)*

---

## 3 · Run the admin panel

**macOS or Linux**

```bash
cd quantum-africa
./admin.sh
```

**Windows** — double-click `admin.bat`.

The first run asks you to choose a password and installs what it needs. It saves
the password in `.env.admin`, which `.gitignore` keeps out of GitHub — so your
password never leaves your computer, not even into your own repository.

Your browser opens at `http://127.0.0.1:8000/admin`.

### The three buttons

- **Save** — stores your work on this computer. Safe to do constantly.
- **Publish to the website** — commits and pushes; Netlify rebuilds. The sidebar
  tells you how many changes are waiting.
- **Open the website** — a preview served from your machine, showing exactly what
  visitors will see, *before* you publish.

Edit over several sittings and publish once when you are happy. Every save is a
revision, and **Revision history** restores any of them.

### The first time you publish

Git needs to know it may push on your behalf. Once, ever:

```bash
gh auth login          # the GitHub CLI, easiest option
```

or set up an SSH key the usual way. If it is not set up, the panel tells you so
and your work stays committed locally — nothing is lost, you just push later.

---

## 4 · The daily feed refresh

`.github/workflows/feeds.yml` already runs every morning at 05:17 UTC: it
collects the job and event listings, rebuilds the page and commits. You do not
have to do anything.

One thing to change: open that file and put a real address in `QA_CONTACT`. It
identifies the collector to the sites it reads, so they can email you instead of
blocking you if they ever object.

Actions tab → **Refresh listings** → *Run workflow* triggers it by hand.

---

## Why the admin panel is safe

- **It only accepts connections from your own machine.** Two independent locks:
  the server binds to `127.0.0.1` so your operating system refuses outside
  connections, and a middleware rejects any admin request whose client is not
  loopback, in case the bind address is ever changed by accident.
- **It is not deployed.** Netlify only ever receives `public/`. The `backend/`
  folder is in the repo so you have the code, but nothing runs it in the cloud.
- **The password never reaches GitHub.** It lives in `.env.admin`, which is
  ignored.
- **Uploads are checked.** Only images and PDFs, 12 MB each, and an SVG carrying
  script is refused — an SVG is a document that can contain code, and one on your
  own domain would run in your visitors' browsers.
- **Publishing can only touch content.** It stages `public/data`, `public/media`
  and `public/index.html`. It cannot commit source code or secrets.

If you ever *do* want to edit from your phone, set `QA_ALLOW_REMOTE_ADMIN=1` and
host it — but then it is a login form on the open internet, so use a long unique
password and put it behind HTTPS. Local-only is the better default and it costs
you nothing but being at your own computer.

---

## Troubleshooting

**Netlify build fails: "python3: not found"** — set `PYTHON_VERSION` to `3.12`
under Site configuration → Environment variables. `netlify.toml` sets it, but an
older site created before the file existed may need it added by hand.

**The site shows placeholders after publishing** — check that
`public/data/content.json` is in the repo on GitHub. If the file is missing,
`.gitignore` may have caught it; `git add -f public/data/content.json` once.

**"Publish" says it cannot authenticate** — git has no credentials yet. Run
`gh auth login`. Your changes are already committed, so nothing is lost.

**The panel will not start: "port already in use"** — something else is on 8000.
`QA_PORT=8010 ./admin.sh`.

**Images do not appear on the live site** — they live in `public/media/`, which
is committed by Publish. Confirm the files are on GitHub; if you added them
outside the panel, `git add public/media && git commit && git push`.

**You want to change the admin password** — delete `.env.admin` and run the
launcher again.
