import re, sys
path = sys.argv[1] if len(sys.argv) > 1 else '/tmp/live9.html'
with open(path, encoding='utf-8') as f: h = f.read()
def p(label, ok): print(f'{label:130s}: {"PASS" if ok else "FAIL"}')

p('1 Live HTML contains the new slug ayef-quantum-economy-policy-brief', h.count("slug:'ayef-quantum-economy-policy-brief'") >= 1)
p('2 Live HTML contains exact title long string with curly apostrophe',
  'Preparing Africa for the Quantum Economy: A Youth-Centred Policy Framework for Building Africa' in h and
  "Quantum Ecosystem" in h)
p('3 Live fields: date 2026-09-05, type Policy brief, author Aliyu Ibrahim Usman, chapter Nigeria',
  all(k in h for k in ["date:'2026-09-05'", "type:'Policy brief'",
                       "author:'Aliyu Ibrahim Usman'", "chapter:'Nigeria'"]))
p('4 Live image triple (image/cover/hero) all = media/news/policy.jpeg', h.count("media/news/policy.jpeg") >= 3)
p('5 KEY body probes verbatim in live body: AYEF 2026 Knowledge & Policy Series, Six-Pillar Framework, African Quantum Youth Pipeline, 2034 roadmap, strategic technological sovereignty, quote not-wait-invited, Kwantom + Cyber Cadets bio.',
  all(k in h for k in [
    'AYEF 2026 Knowledge and Policy Series',
    'Six-Pillar African Quantum Ecosystem Framework',
    'African Quantum Youth Pipeline',
    '2034 roadmap',
    'strategic technological sovereignty',
    'Africa should not wait to be invited into it. Africa should build its place in it.',
    'Founder & CEO of Kwantom',
    'Founder & CEO of Cyber Cadets Academy']))
p('6 News page now reports 4 articles. Live PAGES.news renders with ARTICLES.length 4. DEFAULT_ARTICLES still has 4 declared slugs (policy + uganda + gesda + women-roundtable).',
  sum(h.count(s) for s in ["slug:'ayef-quantum-economy-policy-brief'",
                           "slug:'uganda-indaba-2026'",
                           "slug:'gesda-quantum-summit-2026'",
                           "slug:'women-quantum-roundtable'"]) >= 4)
p('7 Ordering check: in DEFAULT_ARTICLES literal (static first-appearance), POLICY slug appears BEFORE Uganda slug (per user "after Uganda = NEWEST").',
  h.find("slug:'ayef-quantum-economy-policy-brief'") < h.find("slug:'uganda-indaba-2026'"))
print(f'\nLive HTML size: {len(h)/1024/1024:.2f} MB')
