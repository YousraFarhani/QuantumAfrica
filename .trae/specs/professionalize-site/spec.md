# Quantum Africa — Professionalize site copy, hero, and information architecture
## Product Requirements Document (PRD)

## Overview
- **Summary**: Refresh the Quantum Africa public-facing website to project a more authoritative, credible, and serious organizational identity that reflects the calibre of the incoming directors (Francesco Petruccione, Yaseera Ismail, Maria Schuld — added at a later date only after consent). Rewrite copy across all pages, remove the hero typewriter animation, and refine the information architecture / visual hierarchy so the site reads as the flagship institution representing Africa in the global quantum ecosystem.
- **Purpose**: User reports the current site "doesn't look very professional and serious" despite the organization now attracting world-class academic directors and positioning itself as Africa's front-facing representative in quantum (education, events, policy, research). The site must match the credibility of the leadership and the mission.
- **Target Users**: Academic partners and university leadership; policymakers and funding bodies; prospective directors, advisors, and collaborators; global quantum ecosystem stakeholders; prospective members and students.

## Goals
1. Rewrite page copy, labels, mission/vision text, hero lede, stats, and section headers to be formal, mission-driven, and institution-grade.
2. Remove the hero typewriter/carousel animation and replace it with a single, authoritative, instantly-visible headline and supporting lede.
3. Refine the information architecture: streamline the top-level navigation so it presents Quantum Africa as a structured institution (Programs / Research / Policy / Community / Events / About / …), clean up section ordering on the homepage, and ensure each pillar page has a coherent narrative arc.
4. Elevate the visual hierarchy of core content so it reads as "serious flagship institution" rather than "community website" — sharper section headers, better section order, cleaner CTAs, institutional tone in microcopy.
5. Add "Policy" as a clear focus area in navigation and content, since the user explicitly called out policy as a focus alongside education and events.

## Non-Goals
1. **Do NOT add new director profiles (Francesco Petruccione, Yaseera Ismail, Maria Schuld) to the people page / leadership section in this round.** User explicitly requires consent first — scoped out.
2. No rebrand of the logo or core palette (navy / gold / teal). The palette is retained; visual sophistication comes through layout and copy, not brand swap.
3. No new backend features, CMS schema changes, or data schema migrations beyond copying text strings into hardcoded fallbacks + regenerating serialized content blobs via the existing build/publish pipeline pattern.
4. No new media production (photo, video, illustration) — only the existing assets are used.
5. No addition of new pages or routes that do not already exist, unless a "Policy" pillar stub page is required and maps to an existing route pattern.
6. No touch to the admin panel, backend tests, feed service, Docker, or partner list from previous tasks.

## Background & Context
Site lives at `/Users/njg125/Desktop/quantum-africa`, single-page SPA in `public/index.html` with source in `site/app.js` + `site/shell.html` (styles) + `site/build.py` (publishes into index.html + sqlite content revision + public/data/content.json — the same 5-layer ingestion pattern used in the previous Quantum Insider article task, and before that the partner-logo task).

Current observed problems that drive the user request:
- Hero headline `#typeA + #typeB caret` on [app.js L1593](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L1593-L1593) drives a typewriter carousel at [app.js L4972–L5031](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L4972-L5031) that visibly types and deletes text — this is a "startup landing page" pattern and undermines institutional credibility.
- `HERO_LINES` at [app.js L1013–L1020](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L1013-L1020) contains informal / lightly promotional phrasing ("We are building … quantum ecosystem", "…what it takes to contribute is curiosity, not an invitation"). Needs to be institutional-grade mission statement.
- Top-level `NAV` at [app.js L8–L49](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L8-L49) has overlapping buckets — "Research" appears both under Programs drop-down and as its own top-level entry; Programs + Opportunities + Conference + Research + Community + Events + About + 7 total top-levels = ~8 is too many for a credible institutional nav. Also no Policy bucket despite the user naming policy as a focus.
- Page titles and ledes mix person-first casual language ("Make quantum computing accessible" / "Meet the Quantum AI Tutor") with institutional language. About page [app.js L1784–L1887](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L1784-L1887) still has placeholder fallback copy.
- Microcopy examples of non-serious tone: `heroEyebrow = "Quantum research · education · innovation, built across Africa"` (comma splice, awkward), pillar body "Webinars, workshops, resources and the AI Tutor." (abbreviated), partner headline "Collaborators partners, and organisations we worked with" (grammar error at [app.js L1761](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L1761-L1761)), opportunities hero "Your Quantum Journey Starts Here" (startup pitch tone), impact page title has leading space " Our Impact in Numbers" at [app.js L1894](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L1894-L1894), chapters lede has double period at [app.js L2191](file:///Users/njg125/Desktop/quantum-africa/site/app.js#L2191-L2191), events hero "Hackathons, workshops, webinars and chapter events." (incomplete sentence tone).
- Homepage section ordering now: Hero → Stats → Highlight (tutor/single) → Pillars → Tutor feature → Pattern band → Chapters → Research → Opportunities → Events → News → Voices → Partners → CTA-band. The "Tutor" feature block appears *twice* (Pillars Educate + then standalone Tutor section) — a duplicate that dilutes serious tone; also Highlight/tutor block should not sit above pillars/strategy.
- Visual: `min-height:3.12em` on `.hero h1` at shell L591 reserves vertical space for the typing animation; after removing it, this must collapse to natural text height to avoid awkward whitespace.

## Functional Requirements
- **FR-1**: Hero headline and lede are static text on first paint — no interval-based typing/erasing animation, no carousel of headline variants. Single authoritative statement.
- **FR-2**: Hero headline, eyebrow, lede, CTA button labels, statistics, section headers, pillar card copy, and all `cx(key, fallback)` default strings in the Home, About, Education, Research, Impact, Chapters, Events, Opportunities, Conference and People page render paths are rewritten for institutional tone with no grammar issues, no leading whitespace artifacts, and no informal phrasing.
- **FR-3**: Top-level navigation (desktop drop-down `NAV` + mobile `drawer`) is restructured into a smaller, clearer set of institutional buckets: "About", "Programs", "Research", "Policy" (new, even if a stub that points to the relevant policy-focused content on/about or research), "Community", "Events", "Opportunities", and "Contact" / "Get involved". No duplicate Research menu. Ordering is consistent with a standard institution (About first, then core pillars, then community/events, then engagement).
- **FR-4**: Homepage section layout is reordered to follow a strategic narrative: Hero → Mission/Impact band (stats) → Pillars (what we do, 4-card grid) → Research spotlight → Education/Tutor feature → Chapters map → Events → Opportunities → News & analysis → Leadership/Community voices → Partners → CTA band. Duplicate Tutor block is resolved (single Tutor feature under Education pillar section, not before Pillars).
- **FR-5**: A clear "Policy & Advocacy" focus area appears as a navigable pillar — either as a new Pillar card #5 in the pillars grid (with policy-focused body copy) alongside the existing Educate/Research/Connect/Lead, or a new entry in Programs dropdown + a dedicated Policy section header on About/Home. The site must visibly frame policy as a core focus per user request.
- **FR-6**: All text changes must propagate to the same five ingestion sinks used in prior tasks: (a) `site/app.js` hardcoded fallbacks, (b) inline mirror in `public/index.html` DEFAULT_ARTICLES / NAV / HERO_LINES literals, (c) `CONTENT_INLINE` object literal in `public/index.html`, (d) `backend/data/content.sqlite3` new revision row, (e) `public/data/content.json` regenerated from the new revision. This matches the previous task pattern to avoid any load-path dropping copy.
- **FR-7**: No new person entries added to PEOPLE list or `pages.people` content. Explicitly: Francesco Petruccione, Yaseera Ismail, and Maria Schuld are NOT added in this work.

## Non-Functional Requirements
- **NFR-1**: Typographic and visual polish. Hero `h1` uses natural content height (no `min-height` for type animation); section header underline animations fire; no jank from setInterval left running.
- **NFR-2**: Accessibility. Removing a `setInterval` animation inherently improves a11y (reduced-motion respected without special paths). Any new navigation item must be keyboard-navigable through the existing drop-down pattern.
- **NFR-3**: Perf & stability. `initTyping` is not scheduled; if the HTML still renders `#typeA/#typeB/#caret`, they should be statically filled once with no timer references, and caret `.caret` element hidden. Preferably, the HTML markup collapses to `<h1>${static_headline}</h1>` and `<p class="lede">${static_lede}</p>` with no `id` hooks for animation.
- **NFR-4**: Consistency. Copy tone is constant across home, subpages, microcopy, buttons, labels, meta description, og:description, and schema.org description. Use the same framing: "Quantum Africa is the pan-African institution advancing quantum science, technology, education, policy, and talent across the continent and representing Africa in the global quantum ecosystem."
- **NFR-5**: Build-safe. `site/build.py` and sqlite/CONTENT_INLINE/content.json publish pipeline continue to work unchanged — the existing helper pattern from the previous task (inserting into 5 sinks via Python script) can be used, OR pure grep+edit of the JS/HTML fallback strings without any new helper script leaking into the working tree.

## Constraints
- **Technical**: Single-page hash-route SPA. All routes are functions in `PAGES` object. Styles live in `<style>` blocks in `site/shell.html` and inlined into `public/index.html`. Data fallback pattern is `cx(key, default)` — only changing the 2nd arg (and mirrored CMS data) is necessary for copy changes. SQLite revisions are append-only; the previous pattern is insert new revision id=N+1, preserve N.
- **Business**: The three incoming directors' profiles are out of scope — only the framing and copy need to signal the institution's seriousness, not to literally list them now.
- **Dependencies**: Build pipeline `site/build.py` must still function correctly after string rewrites. SQLite schema untouched; media directory untouched.
- **Browser compatibility**: Remove of `setInterval` must not leave orphan timers. For safety, `initTyping` should be either rewritten as a single one-shot fill on DOM-ready, or not wired into the `initHero()` call at all.

## Assumptions
- All copy rewrites can be done by editing `cx(key, fallback)` fallback defaults + a small number of direct string literals (NAV array, HERO_LINES array, pillarCard() bodies), because the CMS for those keys is currently empty. The previous task's layered "patch everything" approach is still required to guarantee no load-path falls back to old text.
- The user accepts that the pillars grid grows from 4 cards to 5 when adding Policy, or that Policy appears in navigation and About sections without rearranging the pillars grid; we choose the least layout-breaking option that still visibly satisfies "policy focus" (5th pillar card + new top-level NAV entry + home/About policy section content).
- Section reordering on the homepage is limited to `<section>` blocks in `PAGES.home` template literal; no CSS grid/flex rework.
- "Professional" is a rubric-based criterion (see AC-10), not a pixel rule; the team uses its best editorial judgement to mirror the tone of comparable institutional quantum centres (e.g., quantum.sun.ac.za, IQST, etc.).

## Open Questions
1. Do we want the top-level navigation to drop to exactly 7 entries (About, Programs, Research, **Policy**, Community, Events, **More**) with a More drop-down for Opportunities, Conference, Partners, Contact? Or 8 with Opportunities explicit? — **Default choice: 8 explicit entries, reordered, with Policy inserted at rank 4 between Research and Community.**
2. Do we keep the hero background slideshow (media carousel behind the scrim) but just remove the *text* typewriter, or remove the whole carousel (dots/arrows/foot progress)? — **Default choice: keep background image cycling (it still signals institutional activity with photos) but remove only the text typewriter, leaving a single crisp headline statically overlaid.**
3. Is there an existing `/policy` route we need to create, or is pointing the NAV Policy entry to a "#policy" anchor on the About page or Home section acceptable? — **Default choice: create a new lightweight `PAGES.policy = () => …` route following the same pattern as impact, with eyebrow/hero/three policy pillars (education policy, research policy, industry & government policy), and hook it into nav.**

## Acceptance Criteria

### AC-1: Hero text is static, no typewriter animation
- **Type**: `rule`
- **Given**: A user loads the homepage and waits 30 seconds.
- **When**: They observe the hero `h1` paragraph.
- **Then**: There is exactly one headline rendered instantly, no character-by-character typing, no text erasure, no flashing `<span class="caret">`, and no `setInterval`-driven DOM mutations targeting the hero headline.
- **Pass Condition**: `document.querySelectorAll('#typeA, #typeB, #caret').length === 0` AND no orphan timers left that touch hero text (confirmed by reading initTyping / initHero code paths: `initTyping` either no-ops or fills content once without scheduling `setTimeout` loops). AND hero h1 has no CSS `min-height` reserving vertical space for a typewriter.
- **Evidence**: DOM snapshot + grep for `setTimeout`/`setInterval` calls that match hero-headline timer IDs.

### AC-2: Site-wide copy rewritten for institutional, serious tone (sinks 1–5 updated)
- **Type**: `rule`
- **Given**: The five ingestion sinks.
- **When**: Each sink is searched for known issues (leading-space-in-impact-title, double-period-in-chapters, grammar-in-partners-headline, informal "journey starts here", typing HERO_LINES text with type A/B split, old "built across Africa" eyebrow, old "Meet the Quantum AI Tutor" conversational framing).
- **Then**: None of the old non-institutional strings exist in ANY of the 5 sinks; the new formal replacement strings exist in all 5 sinks.
- **Pass Condition**: Grep for the 7+ specific "old bad strings" listed above across `site/app.js`, `public/index.html` (both DEFAULT_ARTICLES inline and CONTENT_INLINE blob), `public/data/content.json`, and `backend/data/content.sqlite3` latest revision returns **zero matches**. New correct strings each match >= 1 per sink.
- **Evidence**: `grep -nE` bash command output across all 5 sinks.

### AC-3: Navigation restructured, no duplicates, Policy added
- **Type**: `rule`
- **Given**: `NAV` array in site/app.js, mirrored inline in index.html, rendered drawer nav in SPA.
- **When**: Top-level labels are enumerated and Programs dropdown is expanded.
- **Then**: Top-level items are ordered roughly `About, Programs, Research, Policy, Community, Events, Opportunities, More/Contact`. Programs dropdown contains Education + AI Tutor + University Programs; Research is standalone; no second top-level or nested "Research" label duplication exists. Policy is present as an accessible navigation target (either a section-anchor or route).
- **Pass Condition**: Count of "Research" occurrences in NAV top-level labels === 1; `NAV.find(n => n.label === 'Policy')` exists; route '#/policy' resolves OR home page has a visible id="policy" section reachable from nav anchor click.
- **Evidence**: `node -e` or grep of NAV array shape.

### AC-4: Homepage section order re-narrativized, no duplicate tutor block
- **Type**: `rule`
- **Given**: `PAGES.home` template literal.
- **When**: The order of `<section>` (or named section) tags inside PAGES.home is enumerated.
- **Then**: Order is Hero → stats/impact band → pillars grid → Research spotlight → Education/Tutor single feature → Chapters → Events → Opportunities → News → Community voices → Partners → CTA. The tutor-split pattern (Pillars "01 Educate" followed immediately by a full-width standalone Tutor feature immediately after pillars and before chapters) is moved **below** pillars, not above pillars — and crucially, the "Highlight ()" section that was the old tutor block no longer appears *before* the Pillars section. Overall no duplicate tutor CTA block that repeats the same feature twice.
- **Pass Condition**: Tokenize PAGES.home string, count occurrences of "Quantum AI Tutor" — exactly 1 full feature section + 1 pillar summary = exactly 2 occurrences on the whole home page (no more, no less). The Highlight block token order is <= pillars grid token order when walking the section list forward.
- **Evidence**: Line numbers of PAGES.home sections from reading app.js + section token enumeration.

### AC-5: Policy & Advocacy clearly represented as a 5th pillar / nav target
- **Type**: `rule`
- **Given**: Home pillars grid, NAV entries, and About page or dedicated Policy page.
- **When**: Pillars cards are enumerated.
- **Then**: Either pillars grid count is 5 (Educate / Research / Policy / Connect / Lead) with Policy card body text explicitly about quantum policy, regulation, national strategies, and African representation in global standards; OR Policy exists in Programs nav + as a homepage section with equivalent body prominence to the existing Research pillar.
- **Pass Condition**: "policy" appears in 3+ of: NAV labels, pillar card body copy, dedicated section header on Home, dedicated route label on About.
- **Evidence**: grep for 'policy' in NAV + PAGES.home + PAGES.policy + pillars grid.

### AC-6: Incoming directors NOT added to people list (explicit)
- **Type**: `rule`
- **Given**: PEOPLE array, `public/index.html` PEOPLE inline mirror, CONTENT_INLINE, sqlite rev N, content.json PEOPLE collection after the build.
- **When**: Search all sinks for exact names: "Francesco Petruccione", "Yaseera Ismail", "Maria Schuld".
- **Then**: No occurrence of the three names exists in PEOPLE CMS collections, in rendered PAGES.people, or in PAGES.about leadership grids. (If any were present accidentally from old CONF entries in QA1/QA2 committees — those appear only inside `CONF[*].loc` list, not in PEOPLE array or people directory render path; they are exempted from this rule inside CONF records only, since they are historical conference records.)
- **Pass Condition**: `grep -ci 'Petruccione\|Ismail\|Schuld'` across PEOPLE render code paths and CMS PEOPLE sinks returns 0 outside of `CONF.loc` entries.
- **Evidence**: grep bash output with counts.

### AC-7: All five ingestion sinks contain the new copy
- **Type**: `rule`
- **Given**: The standard five sinks from prior tasks: (1) site/app.js DEFAULT/cx fallbacks, (2) public/index.html inline mirrors, (3) public/index.html CONTENT_INLINE blob, (4) backend/data/content.sqlite3 latest revision, (5) public/data/content.json regenerated.
- **When**: A representative sample of rewritten keys (hero headline, new mission statement, new pillars copy, NAV labels, policy-focused text) is cross-checked.
- **Then**: Each rewritten key has the new value in all 5 sinks. No sink has stale old fallback.
- **Pass Condition**: For 6 sample new strings, each has a grep count >= 1 in every sink (30 counts total expected).
- **Evidence**: grep aggregation output across all 5 sinks × 6 strings.

### AC-8: No orphan timers, no errors at runtime
- **Type**: `rule`
- **Given**: Browser console on page load.
- **When**: The homepage is loaded and the hash route changes to about, education, research, policy, chapters, events, news, opportunities, people.
- **Then**: No JavaScript console errors; `window.typeTimer === null` (if retained) AND no `setTimeout` schedule after initial paint; animation scheduler `requestAnimationFrame` calls limited to intersection-observer reveals / counts / hero-slide cycling (which is allowed).
- **Pass Condition**: Console has 0 errors; manual review of initHero/initTyping code or browser load produces no Uncaught TypeError.
- **Evidence**: Init code review + optional local browser console capture.

### AC-9: Consistency: SEO/schema/meta description matches new institutional narrative
- **Type**: `rule`
- **Given**: `<title>`, `<meta name="description">`, `<meta property="og:description">`, `<script type="application/ld+json">` "description" field in `public/index.html`/`site/shell.html`.
- **When**: All four fields are read.
- **Then**: None have old conversational or outdated phrasing. Each describes Quantum Africa as "pan-African institution advancing quantum science, technology, education, policy and talent" or equivalent. All four are consistent with each other.
- **Pass Condition**: All four contain the substring "quantum" (obviously) AND "policy" OR "policy and" AND "education" AND "research" AND at least one of "talent / institution / representation / global / continent".
- **Evidence**: cat of shell.html head + index.html head.

### AC-10: Overall professional tone & information architecture (evaluative)
- **Type**: `rubric`
- **Dimension**: Institutional credibility & coherence
- **Scale**: 1–5
- **Anchors**: 1 = clearly amateur / start-up landing (present baseline); 3 = competent generic organization website, still small-community feel; 5 = indistinguishable in copy + IA from a serious international research/institution flagship (e.g., quantum.sun.ac.za/about level of formality)
- **Pass Threshold**: >= 4
- **Evidence**: Reviewer side-by-side read of the rewritten home, about, education, research pages vs. current quantum.sun.ac.za institutional pages; checklist of tone markers (no typewriter; numbered-pillar structure; policy explicitly framed as institutional function; formal mission/vision/objectives reworded without placeholder scaffolding; no typos).

### AC-11: Visual rhythm and spacing (evaluative)
- **Type**: `rubric`
- **Dimension**: Information density & visual professionalism
- **Scale**: 1–5
- **Anchors**: 1 = crowded, spacing inconsistent, duplicate sections; 3 = clean but still has awkward whitespace blocks (hero min-height artifacts); 5 = generous consistent rhythm, hero h1 sits snug on lede, section sequencing reads like a single editorial product.
- **Pass Threshold**: >= 4
- **Evidence**: Screenshots of home above-fold on 1440-wide desktop + 420 mobile; review of section heights and spacing.
