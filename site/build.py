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
    p = name if os.path.isabs(name) else os.path.join(HERE, name)
    if not os.path.exists(p):
        alt = os.path.join(PUBLIC, 'media', 'logo', os.path.basename(name) if not os.path.isabs(name) else name)
        if os.path.exists(alt):
            p = alt
        else:
            base = os.path.splitext(os.path.basename(name))[0]
            png = os.path.join(PUBLIC, 'media', 'logo', base + '.png')
            svg = os.path.join(PUBLIC, 'media', 'logo', base + '.svg')
            if os.path.exists(png): p = png
            elif os.path.exists(svg): p = svg
    ext = os.path.splitext(p)[1].lower().lstrip('.')
    mime = {
        'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg',
        'gif': 'image/gif', 'webp': 'image/webp', 'svg': 'image/svg+xml',
    }.get(ext, 'image/png')
    with open(p, 'rb') as f:
        data = f.read()
    if mime == 'image/svg+xml':
        try:
            from urllib.parse import quote
            return 'data:image/svg+xml;utf8,' + quote(data.decode('utf-8'))
        except Exception:
            return 'data:image/svg+xml;base64,' + base64.b64encode(data).decode()
    return 'data:' + mime + ';base64,' + base64.b64encode(data).decode()


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


def resolve_logo(token_name, svg_basename_no_ext, fallback_png):
    svg = os.path.join(PUBLIC, 'media', 'logo', svg_basename_no_ext + '.svg')
    png = os.path.join(PUBLIC, 'media', 'logo', svg_basename_no_ext + '.png')
    fb = os.path.join(HERE, fallback_png)
    if os.path.exists(svg):
        return b64(svg)
    if os.path.exists(png):
        return b64(png)
    return b64(fb)


def resolve_icon():
    icon_png = os.path.join(PUBLIC, 'media', 'logo', 'icon.png')
    if os.path.exists(icon_png):
        return b64(icon_png)
    return b64(os.path.join(HERE, 'logo-mark.png'))


def resolve_og_image():
    """Pick the best social card image.

    SEO default: the main QA logo mark already works for social; if someone
    adds a dedicated 1200x630 share card at public/media/logo/share.png we
    prefer that, otherwise fall back to logo-mark.png (b64) as a reliable
    built-in default so og:image and twitter:image are always valid.
    """
    candidates = [
        os.path.join(PUBLIC, 'media', 'logo', 'share.png'),
        os.path.join(PUBLIC, 'media', 'logo', 'share.jpg'),
        os.path.join(PUBLIC, 'media', 'logo', 'share.jpeg'),
        os.path.join(PUBLIC, 'media', 'logo', 'icon.png'),
    ]
    for c in candidates:
        if os.path.exists(c):
            return b64(c)
    return b64(os.path.join(HERE, 'logo-mark.png'))


def main():
    shell = open(os.path.join(HERE, 'shell.html'), encoding='utf-8').read()
    art = open(os.path.join(HERE, 'art.js'), encoding='utf-8').read()
    app = open(os.path.join(HERE, 'app.js'), encoding='utf-8').read()
    af = json.load(open(os.path.join(HERE, 'africa.json'), encoding='utf-8'))

    opps = load('opportunities.json', {'updated': None, 'items': [], 'sources': {}})
    evts = load('events.json', {'updated': None, 'items': [], 'sources': {}})
    content = load('content.json', {'updated': None, 'content': {}})
    partner_dir = os.path.join(PUBLIC, 'media', 'partners')
    if content and isinstance(content, dict) and 'content' in content and isinstance(content['content'], dict):
        root = content['content']
    elif content and isinstance(content, dict):
        root = content
    else:
        root = {}
    if os.path.isdir(partner_dir) and not root.get('partners'):
        mapping = {
            'Junction_Logo.png': ('Junction', 'Industry', 'Finland'),
            'Logo300x300px5_ae1945a3-9bdf-4706-9d43-e5245bd9e8fc.png': ('Qiskit / IBM Quantum', 'Industry', 'Global'),
            'Screenshot 2026-09-05 at 15.24.35.png': ('Africa Quantum Consortium', 'Strategic', 'Pan-African'),
            'Screenshot 2026-09-05 at 16.22.52.png': ('UNICC', 'International organisations', 'Global'),
            'Screenshot 2026-09-05 at 16.30.07.png': ('Quantum Circle', 'Strategic', 'Pan-African'),
            'aims_logos-02.png': ('African Institute for Mathematical Sciences (AIMS)', 'Academic', 'Pan-African'),
            'cropped-logo_top2.jpg': ('Makerere University', 'Academic', 'Uganda'),
            'indaba-logo.png': ('Deep Learning Indaba', 'Education', 'Pan-African'),
            'Screenshot 2026-09-05 at 16.41.50.png': ('Northern Quantum Initiative (NQI)', 'Strategic', 'Pan-African'),
        }
        partners = []
        for fn in sorted(os.listdir(partner_dir)):
            p = os.path.join(partner_dir, fn)
            if not os.path.isfile(p):
                continue
            info = mapping.get(fn, (os.path.splitext(fn)[0].replace('_', ' ').title(), 'Research', ''))
            partners.append({
                'id': fn, 'name': info[0], 'category': info[1],
                'logo': '/media/partners/' + fn, 'url': '', 'country': info[2], 'note': ''
            })
        if partners:
            root['partners'] = partners
            if content and isinstance(content, dict) and 'content' in content and isinstance(content['content'], dict):
                content['content'] = root
            elif content and isinstance(content, dict):
                content.update(root)
            print(f'auto-seeded {len(partners)} partners from media/partners/')

    shell = shell.replace('__LOGO_GOLD__',    resolve_logo('__LOGO_GOLD__',    'light', 'logo-gold.png'))
    shell = shell.replace('__LOGO_GOLD_W__',  resolve_logo('__LOGO_GOLD_W__',  'dark',  'logo-gold-w.png'))
    shell = shell.replace('__LOGO_LIGHT__',   resolve_logo('__LOGO_LIGHT__',   'light', 'logo-light.png'))
    shell = shell.replace('__LOGO_DARK__',    resolve_logo('__LOGO_DARK__',    'dark',  'logo-dark.png'))
    ICON = resolve_icon()
    OG   = resolve_og_image()
    shell = shell.replace('__LOGO_MARK__',        ICON)
    shell = shell.replace('__LOGO_MARK_32__',     ICON)
    shell = shell.replace('__LOGO_MARK_192__',    ICON)
    shell = shell.replace('__LOGO_MARK_APPLE__',  ICON)
    shell = shell.replace('__OG_IMAGE__',         OG)

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
