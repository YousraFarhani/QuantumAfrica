# -*- coding: utf-8 -*-
"""Append-only store and forwarding for website contact/join/newsletter forms.

Captures every submission so they can't be silently lost, and (when mail is
configured) forwards them as email to the team inbox. The live site on Netlify
continues to use Netlify Forms; the admin box on a user's laptop uses this
endpoint as a fallback when Netlify's POST is unreachable or when previewing
locally via `python3 site/build.py + local HTTP server`.

Mail sending (SMTP or HTTP API) is optional — if the required env vars are
missing the submission is still stored and visible in the admin panel.
"""
from __future__ import annotations

import datetime as dt
import json
import os
import smtplib
import ssl
import urllib.parse
import urllib.request
from email.message import EmailMessage
from email.utils import formataddr, formatdate, make_msgid

from .config import settings

SUBMISSION_PATH = os.path.join('backend', 'data', 'submissions.jsonl')
ALLOWED_FORMS = {'contact', 'join', 'newsletter', 'footer-newsletter'}
MAX_BODY = 64 * 1024  # one JSON line, generously


def _now():
    return dt.datetime.now(dt.timezone.utc).isoformat(timespec='seconds')


def _path() -> str:
    here = os.path.join(os.getcwd(), SUBMISSION_PATH)
    os.makedirs(os.path.dirname(here), exist_ok=True)
    return here


def record(form_name: str, fields: dict, source: str = 'fallback') -> dict:
    """Persist a submission. Returns the stored row dict."""
    form_name = (form_name or 'contact').strip() or 'contact'
    if form_name not in ALLOWED_FORMS:
        form_name = 'contact'
    safe_fields = {}
    total = 0
    for k, v in (fields or {}).items():
        if not isinstance(k, str) or not k:
            continue
        if k in ('form-name', 'bot-field'):
            continue
        sv = '' if v is None else str(v)
        total += len(sv)
        if total > MAX_BODY:
            sv = sv[:max(0, MAX_BODY - (total - len(sv)))]
        safe_fields[k] = sv
    row = {'id': _now().replace(':', '').replace('-', ''),
           'created': _now(),
           'form': form_name,
           'source': source,
           'fields': safe_fields,
           'forwarded': False}
    with open(_path(), 'a', encoding='utf-8') as f:
        f.write(json.dumps(row, ensure_ascii=False) + '\n')
    # Try to forward as email, if the environment has SMTP or Resend.
    # None = nothing configured; False = configured but failed; True = delivered.
    forwarded = try_forward(row)
    if forwarded is True:
        row['forwarded'] = True
        _mark_forwarded(row['id'])
    return row


def list_all(limit: int = 500) -> list[dict]:
    rows: list[dict] = []
    try:
        with open(_path(), encoding='utf-8') as f:
            for ln in f:
                ln = ln.strip()
                if not ln:
                    continue
                try:
                    rows.append(json.loads(ln))
                except json.JSONDecodeError:
                    continue
    except FileNotFoundError:
        return []
    rows.sort(key=lambda r: r.get('created', ''), reverse=True)
    return rows[:limit]


def _mark_forwarded(row_id: str) -> None:
    path = _path()
    tmp = path + '.tmp'
    try:
        with open(path, encoding='utf-8') as fr, open(tmp, 'w', encoding='utf-8') as fw:
            for ln in fr:
                s = ln.strip()
                if not s:
                    fw.write(ln)
                    continue
                try:
                    obj = json.loads(s)
                except json.JSONDecodeError:
                    fw.write(ln)
                    continue
                if obj.get('id') == row_id:
                    obj['forwarded'] = True
                    fw.write(json.dumps(obj, ensure_ascii=False) + '\n')
                else:
                    fw.write(ln)
        os.replace(tmp, path)
    except OSError:
        try:
            os.remove(tmp)
        except OSError:
            pass


# ------------------------------------------------------------------ forwarding

def _to_inbox() -> str:
    return os.environ.get('QA_FORM_INBOX') or settings.contact or 'contact@quantum-africa.org'


def _smtp_forward(row: dict) -> bool | None:
    """Forward via SMTP if QA_SMTP_HOST is set. Returns True if sent."""
    host = os.environ.get('QA_SMTP_HOST')
    if not host:
        return None
    port = int(os.environ.get('QA_SMTP_PORT', '587'))
    user = os.environ.get('QA_SMTP_USER', '')
    pwd = os.environ.get('QA_SMTP_PASS', '')
    from_addr = os.environ.get('QA_SMTP_FROM') or _to_inbox()
    from_name = os.environ.get('QA_SMTP_FROM_NAME', 'Quantum Africa Forms')
    reply_to = (row['fields'].get('email') or '').strip() or None
    subject_parts = []
    if row['form'] == 'contact':
        reason = row['fields'].get('reason') or ''
        who = row['fields'].get('name') or reply_to or 'Anonymous'
        subject_parts = ['[contact]', reason, f'from {who}']
    elif row['form'] == 'join':
        who = row['fields'].get('full_name') or reply_to or 'Anonymous'
        role = row['fields'].get('role') or ''
        subject_parts = ['[join]', role, f'from {who}']
    elif row['form'] in ('newsletter', 'footer-newsletter'):
        who = row['fields'].get('name') or reply_to or 'Anonymous'
        country = row['fields'].get('country') or ''
        subject_parts = ['[newsletter]', country, f'{who} subscribed']
    else:
        subject_parts = [f"[{row['form']}]"]
    subject = ' '.join(s for s in subject_parts if s).strip() or f"[{row['form']}] submission"
    lines = [f"Form: {row['form']}", f"Received: {row['created']}", '']
    for k, v in row['fields'].items():
        lines.append(f"{k}:")
        lines.append(str(v or ''))
        lines.append('')
    lines.append(f"— Quantum Africa forms endpoint ({row['source']})")
    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = formataddr((from_name, from_addr))
    msg['To'] = _to_inbox()
    msg['Date'] = formatdate(localtime=True)
    msg['Message-ID'] = make_msgid('qaforms')
    if reply_to:
        msg['Reply-To'] = reply_to
    msg.set_content('\n'.join(lines))
    context = ssl.create_default_context()
    try:
        if port == 465:
            with smtplib.SMTP_SSL(host, port, context=context, timeout=20) as s:
                if user and pwd:
                    s.login(user, pwd)
                s.send_message(msg)
        else:
            with smtplib.SMTP(host, port, timeout=20) as s:
                s.starttls(context=context)
                if user and pwd:
                    s.login(user, pwd)
                s.send_message(msg)
        return True
    except (OSError, smtplib.SMTPException):
        return False


def _resend_forward(row: dict) -> bool | None:
    key = os.environ.get('QA_RESEND_KEY')
    if not key:
        return None
    from_addr = os.environ.get('QA_RESEND_FROM') or f'onboarding@resend.dev'
    subject_parts = []
    reply_to = (row['fields'].get('email') or '').strip() or None
    if row['form'] == 'contact':
        reason = row['fields'].get('reason') or ''
        who = row['fields'].get('name') or reply_to or 'Anonymous'
        subject_parts = ['[contact]', reason, f'from {who}']
    elif row['form'] == 'join':
        who = row['fields'].get('full_name') or reply_to or 'Anonymous'
        subject_parts = ['[join]', f'from {who}']
    else:
        who = row['fields'].get('name') or reply_to or 'Anonymous'
        subject_parts = [f"[{row['form']}]", f'from {who}']
    subject = ' '.join(s for s in subject_parts if s).strip()
    body_lines = [f"<p><b>Form:</b> {row['form']}</p>",
                  f"<p><b>Received:</b> {row['created']}</p><hr>"]
    for k, v in row['fields'].items():
        body_lines.append(f"<p><b>{k}</b><br>{str(v or '').replace(chr(10),'<br>')}</p>")
    payload = json.dumps({
        'from': from_addr,
        'to': [_to_inbox()],
        'reply_to': reply_to or _to_inbox(),
        'subject': subject,
        'html': '\n'.join(body_lines),
    }).encode()
    req = urllib.request.Request('https://api.resend.com/emails',
                                 data=payload, method='POST',
                                 headers={'Authorization': f'Bearer {key}',
                                          'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return 200 <= r.status < 300
    except OSError:
        return False


def try_forward(row: dict) -> bool | None:
    """Try every configured forwarder. True=sent, False=failed, None=nothing configured."""
    for fn in (_resend_forward, _smtp_forward):
        result = fn(row)
        if result is not None:
            return result
    return None
