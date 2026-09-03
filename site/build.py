#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Builds the website into ../public/index.html.

Everything the browser needs ends up in one file: the stylesheet, the artwork,
the router, the logos as data URIs, and a snapshot of the feeds so the page has
real content even before it can reach the network.

    python site/build.py

Run it after editing anything in site/. The GitHub Action runs it too, so a push
that changes a source file rebuilds the page automatically.
"""
import base64
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
PUBLIC = os.path.join(ROOT, 'public')
DATA = os.path.join(PUBLIC, 'data')


def b64(name):
    with open(os.path.join(HERE, name), 'rb') as f:
        return 'data:image/png;base64,' + base64.b64encode(f.read()).decode()


def load(name, default):
    """Feed snapshots are optional — a fresh clone builds fine without them."""
    path = os.path.join(DATA, name)
    if not os.path.exists(path):
        return default
    try:
        with open(path, encoding='utf-8') as f:
            return json.load(f)
    except json.JSONDecodeError:
        return default


def main():
    shell = open(os.path.join(HERE, 'shell.html'), encoding='utf-8').read()
    art = open(os.path.join(HERE, 'art.js'), encoding='utf-8').read()
    app = open(os.path.join(HERE, 'app.js'), encoding='utf-8').read()
    af = json.load(open(os.path.join(HERE, 'africa.json'), encoding='utf-8'))

    opps = load('opportunities.json', {'updated': None, 'items': [], 'sources': {}})
    evts = load('events.json', {'updated': None, 'items': [], 'sources': {}})
    content = load('content.json', {'updated': None, 'content': {}})

    for token, png in (('__LOGO_GOLD__', 'logo-gold.png'),
                       ('__LOGO_GOLD_W__', 'logo-gold-w.png'),
                       ('__LOGO_LIGHT__', 'logo-light.png'),
                       ('__LOGO_DARK__', 'logo-dark.png'),
                       ('__LOGO_MARK__', 'logo-mark.png')):
        shell = shell.replace(token, b64(png))

    data = ('const AFRICA = ' + json.dumps(
                {'view': af['view'], 'paths': af['paths'], 'bbox': af['bbox']},
                separators=(',', ':')) + ';\n'
            'AFRICA.bboxView=function(c){var b=this.bbox[c];if(!b)return this.view.join(" ");'
            'var pw=(b[2]-b[0])*0.14,ph=(b[3]-b[1])*0.14;'
            'return (b[0]-pw)+" "+(b[1]-ph)+" "+((b[2]-b[0])+2*pw)+" "+((b[3]-b[1])+2*ph);};\n')

    app = app.replace('__OPPORTUNITIES_JSON__',
                      json.dumps(opps, separators=(',', ':'), ensure_ascii=False))
    app = app.replace('__EVENTS_JSON__',
                      json.dumps(evts, separators=(',', ':'), ensure_ascii=False))
    app = app.replace('__CONTENT_JSON__',
                      json.dumps(content, separators=(',', ':'), ensure_ascii=False))
    assert ('__OPPORTUNITIES_JSON__' not in app
            and '__EVENTS_JSON__' not in app
            and '__CONTENT_JSON__' not in app)

    out = shell + '\n<script>\n' + data + art + '\n' + app + '\n</script>\n'
    os.makedirs(PUBLIC, exist_ok=True)
    target = os.path.join(PUBLIC, 'index.html')
    with open(target, 'w', encoding='utf-8') as f:
        f.write(out)
    print(f'built {os.path.relpath(target, ROOT)} — '
          f'{len(out)/1024/1024:.2f} MB, {len(opps.get("items", []))} listings, '
          f'{len(evts.get("items", []))} events')


if __name__ == '__main__':
    main()
