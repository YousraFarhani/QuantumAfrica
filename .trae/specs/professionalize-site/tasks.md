# Quantum Africa — Professionalize site copy, hero, and information architecture
## Implementation Plan (tasks.md)

## Task 1: Remove hero typing animation and replace with institutional static headline
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Replace the three-part `<span id="typeA"><span id="typeB" class="tl-p"><span class="caret">` with a plain `<h1>` containing a single static authoritative headline.
  - Rewrite `HERO_LINES` array to a single entry — a headline and lede that match the new institutional framing (Africa's quantum representative; education · research · policy · events · talent).
  - Rewrite hero eyebrow from "Quantum research · education · innovation, built across Africa" (comma splice, informal) to a formal eyebrow (e.g. "Pan-African institution · Quantum science & technology").
  - Rewrite the hero CTAs: primary from "See what we build" → something institutional like "Our programmes" (or similar); keep secondary "Join Quantum Africa".
  - Rewrite or remove `initTyping()` function so it no longer drives a setTimeout/setInterval loop. Simplest path: keep the function but convert it to a one-shot fill (so existing hooks in `initHero` don't throw), and remove the `.caret` element and blink keyframes from the CSS. Remove the `min-height:3.12em` on `.hero h1` in shell.html's inline styles (L591).
  - Update `<meta description>`, og:description, and schema.org `description` in `site/shell.html` head to match.
- **Acceptance Criteria Addressed**: AC-1, AC-9, NFR-1, NFR-2, NFR-3
- **Test Requirements**:
  - `rule` TR-1.1: No `typeA`, `typeB`, or `caret` ids exist in PAGES.home hero HTML template. Grep `site/app.js` for `typeA` — 0 matches after edit.
  - `rule` TR-1.2: `initTyping()` body either: (a) uses no `setTimeout`/`setInterval` loop (only static DOM assignment), or (b) is not reachable from initHero. Confirm by reading function and counting setTimeout calls inside initTyping: 0 if no-ops to 1 total, NOT >= the number required to cycle all characters.
  - `rule` TR-1.3: `.hero h1` CSS block in `site/shell.html` styles does not contain `min-height`; L591's old `min-height:3.12em` line deleted.
  - `rubric` TR-1.4: Hero headline tone; scale 1-5; anchors 1=startup pitch ("we are building", "join us"); 3=clear mission statement; 5=institutional mission of record representing Africa globally. Threshold >=4.
- **Notes**: Keep the background slide cycling (photos) because it signals institutional activity; only strip the text typewriter and its layout artifacts.

## Task 2: Rewrite top-level navigation NAV + add Policy pillar route
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Restructure `NAV` array (site/app.js L8–L49) to remove duplicate "Research" top-level entry (Research currently appears both top-level AND inside Programs dropdown → only keep one, top-level).
  - Insert new **Policy** top-level nav item → `#/policy` route with sensible drop-down: "Policy & Advocacy Overview", "National Quantum Strategies", "Education Policy", "Representation in Global Standards", "Policy Briefs & Publications" → can point to anchor sections on #/policy page.
  - Reorder top-level items to institutional order: About, Programs, Research, Policy, Community, Events, Opportunities, **Contact/Get Involved** (merge the loose Conference & Partners under About More).
  - Create a new `PAGES.policy = () => { ... }` page function following the pattern of PAGES.impact: phero (eyebrow "Policy & Advocacy") + hero title ("Representing Africa in the global quantum policy agenda") + lede + three policy pillars (Education & workforce policy; Research & innovation policy; Digital, industry, and national quantum strategies) + pointer to publications/policy briefs.
  - Add a route handler in the SPA router (the `ROUTES` map or hashchange listener) that resolves `#/policy` → `PAGES.policy()`.
- **Acceptance Criteria Addressed**: AC-3, AC-5
- **Test Requirements**:
  - `rule` TR-2.1: Count of label=="Research" in top-level NAV array entries === 1.
  - `rule` TR-2.2: NAV array contains label=="Policy" with `href:"#/policy"`.
  - `rule` TR-2.3: `PAGES.policy` function exists and exports/renders a valid HTML template (non-empty string return). If the app has a routes table, it must include policy; if hash changes by convention, test by calling `PAGES.policy()` returning a string that includes `<h1>`.
  - `rubric` TR-2.4: Navigation clarity; scale 1-5; anchors 1=chaotic duplicate labels; 3=standard; 5=intuitive institutional ordering matching quantum.sun.ac.za / IQST / university-style menu structure. Threshold >=4.
- **Notes**: Leave all existing sub-routes (#/research/projects, #/events/webinars) working; the router supports them if routes are convention-based.

## Task 3: Rewrite home page section order and copy (pillars, stats, Tutor block dedupe) + add Policy pillar card
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 2
- **Description**:
  - Rewrite stats numbers, labels and ordering on home stats-band (L1613): make "Community members / National chapters / Countries reached / Research projects / Events delivered / Policy briefs" — tighten wording.
  - Rewrite `pillarCard()` Educate / Research / Connect / Lead: add a new 5th `05 Policy & Advocacy` pillar card → 5 total or keep the grid at 4 and surface policy on the Programs/Research section; follow the AC-5 rule (>= 3 of: NAV / pillars / section / route).
  - Reorder home `<section>` blocks in PAGES.home:
    1. Hero
    2. Stats band
    3. Pillars 4/5-up grid (Our work → "From Learning to Leadership" → rename eyebrow/title/lede for tone: "Our pillars" / "Education · Research · Policy · Community · Global leadership" etc.)
    4. Research spotlight (projects cards, above Tutor) — swap with current Tutor section, which sits BEFORE pillars incorrectly.
    5. Education + AI Tutor feature block (the inv-section with Tutor mock, only ONE occurrence — remove the duplicate Highlight tutor block that precedes pillars).
    6. Chapters / Africa map
    7. Events
    8. Opportunities
    9. News & Articles
    10. Community Voices
    11. Partners (rewrite the header to fix grammar: "Collaborators, partners and supporting institutions")
    12. CTA band
  - Rewrite section header fallback copy throughout PAGES.home to institutional tone, especially: opportunities ("Your Quantum Journey Starts Here" → "Open opportunities for African quantum talent" or similar), events ("What is happening next" → "Upcoming events and recent gatherings"), news eyebrow "Latest from the network" → "News, analysis & publications", community "Voices from the network" → "Community & leadership profiles", partners headline grammar fix.
- **Acceptance Criteria Addressed**: AC-4, AC-5, AC-2 (partially — pillar and header copy)
- **Test Requirements**:
  - `rule` TR-3.1: The tokenized order of sections in PAGES.home (from first `<section class="hero">` to last `<section class="cta-band">` — as raw HTML string) satisfies: Pillars token appears strictly BEFORE Tutor token; Research token appears strictly BEFORE Tutor token; Highlight token does not exist.
  - `rule` TR-3.2: Count of "Quantum AI Tutor" in PAGES.home HTML (case-insensitive) === 2 or fewer (no duplicate tutor blocks).
  - `rule` TR-3.3: Part headline `pages.home.partnersTitle` does NOT contain the phrase "Collaborators partners, and organisations". Grep replacement confirms new phrasing (no comma splice).
  - `rule` TR-3.4: Policy visibly appears in pillars grid OR in a dedicated home policy section: grep "policy" in `PAGES.home` output text, count >=2 occurrences, NOT only in nav.
  - `rubric` TR-3.5: Home section narrative flow; scale 1-5; anchors 1=jumbled sections, repeats; 3=reasonable; 5=strategic institutional story that a visitor reads linearly. Threshold >=4.

## Task 4: Rewrite copy across all pillar pages (About/Education/Research/Impact/Chapters/Events/Opportunities/News/People/Conference) + fix known punctuation bugs
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None (independent from home reorder, but touches the same cx fallbacks — coordinate carefully to avoid edit conflicts; since every page is in the same file these are merged in one Edit)
- **Description**:
  - About page [L1784–L1887](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L1784-L1887): Rewrite hero eyebrow/title/lede ("About Quantum Africa" → "About the organisation"; "We build people, not just programmes" → "Africa's quantum institution, for the continent"); rewrite mission, vision, objectives list to serious institutional wording; rewrite philosophy panel to 4/5-pillar model. Fix any placeholder prose.
  - Impact page [L1890–L1919](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L1890-L1919): Fix leading space in hero title " Our Impact in Numbers"; rewrite kpi keys and descriptions, remove any wording like "Institutions that trust our vision" → tighten.
  - Education page [L1922–L1950](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L1922-L1950): Rewrite hero eyebrow/title/lede, rewrite the six program cards descriptions to formal program language.
  - Tutor page: Rewrite marketing language ("For free." headline split → "Quantum AI Tutor: Structured, free quantum computing education for Africa"), keep function but elevate tone.
  - Research page [L2028–L2089](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L2028-L2089): Rewrite titles from "Collaborate. Research. Build." → "Open research programmes & publications"; rewrite body ledes throughout.
  - Chapters page [L2186–L2207](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L2186-L2207): Fix double period at end of heroLede "...collaboration..". Rewrite to formal: "National chapters advancing quantum education, research, and community engagement across Africa — with local leadership and continental coordination."
  - Events page [L2277 onward](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L2277-L2277): Change hero from fragment sentence to formal: "Conferences, workshops, webinars, and chapter events convening Africa's quantum community."
  - Opportunities page: Rewrite hero title to remove "Your Quantum Journey Starts Here" tone → "Scholarships, fellowships, roles, and programmes for African quantum talent."
  - News page header: Change types "All / News / Chapter update / Member story / Report" → add "In the press" (since we added that type in the last article task — the UI should include it). Also make sure type button labelled "Report" → "Policy brief & reports" or similar to match policy framing.
  - People page: Reorder leadership card groups by role hierarchy (Directors/Board → Advisors → Programme leads → Chapter leads → Community) for professionalism; rewrite the hero eyebrow/title/lede. Don't add the 3 new directors yet.
  - Conference page: Review and tighten hero/copy if loose.
  - Any remaining `cx(key, fallback)` fallbacks that contain placeholder English (`pht(...)`) — leave them; they render visually distinct. Focus on the actual rendered strings that currently show to users.
  - Also update the `<title>` in shell.html and shell copy (`<meta name="keywords">` already good; just description + og + schema as in AC-9).
- **Acceptance Criteria Addressed**: AC-2 (full coverage now), AC-6 (keep out directors), AC-9
- **Test Requirements**:
  - `rule` TR-4.1: The specific punctuation/grammar defects mentioned in spec Background are all absent after edit:
    - Grep in `site/app.js` for: `Collaborators partners,` → 0 matches.
    - Grep for ` Our Impact in Numbers` (leading space) → 0 matches.
    - Grep for `collaboration..` (double period) → 0 matches.
    - Grep for `Your Quantum Journey Starts Here` → 0 matches.
    - Grep for `Hackathons, workshops, webinars and chapter events.` (fragment event hero) → 0 matches.
    - Grep for `What is happening next` (events home header) → 0 matches.
  - `rule` TR-4.2: News type filter chips on `/news` page include "In the press" (which matches our TQI feature article from previous task) — grep `pages.news.type` chip strings in PAGES.news.
  - `rule` TR-4.3: People director guard — search PEOPLE array literal and all `clist('people')`-ingested CMS sinks for "Petruccione", "Ismail", "Schuld" outside CONF.loc: 0 matches. (This validates AC-6 explicitly.)
  - `rubric` TR-4.4: Overall copy formality on About + pillar pages; scale 1-5; anchors 1=conversational "we are building", "start here"; 3=acceptable, mostly formal, few startup words; 5=language consistent with university annual report / institutional About page. Threshold >=4.
- **Notes**: This task touches every page, all in the same `site/app.js` file + mirrored strings in index.html/CONTENT_INLINE/sqlite/content.json in Task 7 below.

## Task 5: Minor CSS polish to remove typing artifacts + enhance visual professionalism (no palette changes)
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 1
- **Description**:
  - `site/shell.html`: Delete `min-height:3.12em` on `.hero h1` (L591). Delete the `.caret` CSS rule and `@keyframes blink` at shell L594-595.
  - Improve section header underline on scroll reveal (already present with `scaleX(0) → scaleX(1)`, check if IntersectionObserver initializes it).
  - Improve card shadows and border-radius consistency to look less "startup playful" — border-radius `--r:14px` in design system is fine; just make sure pillars have consistent rule lines; reduce any excessive hover-scale on the choice chooser tiles (L729) if it feels too playful.
  - Ensure the inv-section tutor hero mock block has the same vertical rhythm specs as others.
- **Acceptance Criteria Addressed**: NFR-1, NFR-4, AC-11
- **Test Requirements**:
  - `rule` TR-5.1: `.hero h1 {` block in shell does not contain string "min-height"; `.caret {` block absent; `@keyframes blink {` block absent.
  - `rule` TR-5.2: No hover scale transforms exceed `translateY(-4px)` / `scale(1.05)` on cards; if any tile has `translateY(-6px)` keep; ensure cards still elevate but don't "bounce".
  - `rubric` TR-5.3: Visual professionalism (CSS changes subset); scale 1-5; anchors 1=whitespace jank from removed min-height; 3=clean; 5=the CSS changes improve perceived seriousness with no regressions in responsive layout. Threshold >=4.

## Task 6: Implement new PAGES.policy route + hook into hash router + add policy section on About
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 2
- **Description**:
  - Implement `PAGES.policy` with:
    - Crumb: Home / Policy & Advocacy
    - Phero: eyebrow "Policy & Advocacy", title "Representing Africa in the global quantum policy agenda", lede "Quantum Africa convenes African perspectives on quantum education, research, workforce, and national strategy policy; connects governments, universities, and global bodies; and publishes policy research grounded in continental priorities."
    - Section 1: 3-pillar grid: (Education & workforce policy, Research & innovation policy, National quantum strategies, industry engagement and regulation) — 3 or 4 cards.
    - Section 2: Publications & policy briefs teaser grid (reuse 2-3 news articles tagged "Report" / "In the press").
    - Section 3: CTA "Partner with us on policy" → #/contact
  - Add the policy anchor/page to About page side panel or a separate section so About also frames policy as core.
  - Find the hash-router switch or function (likely a `hashchange` handler or `ROUTES` object in app.js) and add the case `#/policy` -> `PAGES.policy()`. If no explicit router (just convention), the render function already walks PAGES.* by name — just verify.
- **Acceptance Criteria Addressed**: AC-3, AC-5
- **Test Requirements**:
  - `rule` TR-6.1: `PAGES.policy` function returns a string containing `</h1>` and 3+ policy pillar cards (count occurrences of `<h3>` in its return).
  - `rule` TR-6.2: NAV Policy top-level link's href matches target of policy route; clicking the link in hash-routed SPA updates hash to `#/policy` and shows the content.
  - `rubric` TR-6.3: Policy narrative quality; scale 1-5; anchors 1=just a stub; 3=ok but generic; 5=seriously-framed policy pillar comparable to a think-tank about page. Threshold >=4.

## Task 7: Mirror all changes across all 5 ingestion sinks (the standard layered propagation)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Tasks 1,2,3,4,5,6 completed first (all text and structure edits applied to source `site/app.js` + `site/shell.html`)
- **Description**:
  - Build step: run `site/build.py` if it handles the publish pipeline (see ASSETS-TO-SUPPLY.md or read build.py first to confirm). If build.py refreshes `public/index.html`, `public/data/content.json`, sqlite revision automatically — perfect.
  - If build.py does NOT handle publishing the cx fallback changes to CONTENT_INLINE/sqlite/content.json, then follow the same 5-layer helper script pattern used for the TQI news article task:
    1. `site/app.js` literal → already Task 1-6 done.
    2. Mirror updated NAV/HERO_LINES/cx strings into inline mirrors in `public/index.html` (the inline literal section).
    3. Patch the `CONTENT_INLINE` JSON object literal inside `public/index.html` — update `pages.home.*`, `pages.about.*`, `pages.education.*`, `pages.research.*`, `pages.policy.*`, `pages.chapters.*`, `pages.events.*`, `pages.opportunities.*`, `pages.impact.*`, `site.description`, `hero.statements` (flatten to 1 entry with plain lede). Use balanced-brace extraction like the previous script.
    4. Insert a new revision row (id = current max + 1) into `backend/data/content.sqlite3`: read revision 85 doc, apply all the same key updates to the content object, insert new row id=86 with created=NOW in UTC ISO.
    5. Overwrite `public/data/content.json` with the freshly patched revision doc (wrapper preserved, same heuristic as previous task).
  - Do NOT leak any helper python scripts into the working tree after this task — delete any temp scripts.
- **Acceptance Criteria Addressed**: AC-2, AC-7
- **Test Requirements**:
  - `rule` TR-7.1: Choose 6 representative new strings (hero headline; mission statement; research page lede "Open research programmes & publications"; policy route copy snippet; updated partners headline; opportunities hero title). For each, grep across each of the 5 sinks individually: count >= 1 per sink per string. Total 30 passing checks.
  - `rule` TR-7.2: `sqlite3 backend/data/content.sqlite3 "SELECT max(id) FROM revision"` returns >= 86 (assuming starting max was 85 after prior task).
  - `rule` TR-7.3: No `_*.py` helper files in the working tree after task completion. `ls _*.py 2>/dev/null` returns empty.
  - `rubric` TR-7.4: Layered propagation robustness; scale 1-5; anchors 1=only app.js updated; 3=3 of 5 sinks updated; 5=all 5 sinks verified with documented grep output, matching previous task pattern. Threshold >=4.

## Task 8: Independent verification (lint / grep / optional local build / confirm no regressions)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: All tasks 1–7
- **Description**:
  - Run GetDiagnostics across the repository for any JS/HTML/JSON diagnostics (TypeScript LSP likely won't run on plain JS, but at least a syntax sanity check).
  - Run the site through a quick sanity of the standard command `python3 -m py_compile site/build.py` or similar.
  - Confirm the news list still sorts correctly (TQI at #2, uganda still featured on home, policy brief leader at #1 on /news — from previous task should be untouched; sanity sort script).
  - Optionally start a local HTTP server and open the page in the integrated browser tool for a visual check (home above-fold + about + policy route). If browser tools aren't used, evidence from grep/linters/copy-check is sufficient.
- **Acceptance Criteria Addressed**: All ACs, via final evidence aggregation
- **Test Requirements**:
  - `rule` TR-8.1: `git status -sb` shows a clean set of changed files that matches the scope of tasks 1-7 (no stray helper files, no changes to project-level files outside the scope).
  - `rule` TR-8.2: Article sort order for DEFAULT_ARTICLES is unchanged from Task 7 baseline: `policy brief (2026-09-05)`, `insider (2026-09-04)`, `uganda (2026-09-03)` are the top 3 sorted DESC by date. Sort sanity from grep of slug+date pairs.
  - `rule` TR-8.3: No new people entries for the three blocked names (re-verify after sink propagation).
  - `rubric` TR-8.4: No-regression overall polish; scale 1-5; anchors 1=broken routes or broken nav; 3=works, nav works, no visible regressions; 5=every page renders, nav renders, policy route works, news sort intact, console clean. Threshold >=4.

## Task 9: Commit + push origin/main (user: "push everything live")
- **Status**: `pending`
- **Priority**: high
- **Depends On**: All tasks 1-8 passed self-verification
- **Description**:
  - Commit message: descriptive institutional-refresh summary, scope list: "feat(site): professionalize copy, hero, nav and architecture; add Policy pillar and route".
  - Stage only the relevant files: `site/app.js`, `site/shell.html` if touched, `public/index.html`, `backend/data/content.sqlite3`, `public/data/content.json`, and any changed media/assets only (no .trae/ specs committed).
  - Push to `origin/main` and confirm upstream advanced.
- **Acceptance Criteria Addressed**: User instruction "push everything live"
- **Test Requirements**:
  - `rule` TR-9.1: `git log --oneline -1` contains the commit message.
  - `rule` TR-9.2: `git status -sb` shows `## main...origin/main` with no ahead/behind divergence.
  - `rule` TR-9.3: No `_*.py` or `.trae/` tracked in the same commit.
