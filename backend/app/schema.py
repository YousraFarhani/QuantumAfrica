# -*- coding: utf-8 -*-
"""What the site lets you edit.

One declaration, three consumers: the admin panel renders its forms from it, the
API validates against it, and the site reads the keys it defines. Adding a field
is a line here — no new form code, no new endpoint.

Field types the admin understands:
    text · textarea · markdown · url · email · date · time · number
    select   (needs `options`)
    image    (upload, stored under data/media)
    list     (repeatable group, needs `fields`; `label_field` names the row)
    tags     (comma-separated list of strings)
"""
from __future__ import annotations

def F(key, label, type='text', **kw):
    f = {'key': key, 'label': label, 'type': type}
    f.update(kw)
    return f


COUNTRIES = ['Algeria', 'Egypt', 'Morocco', 'Nigeria', 'Mauritania', 'Zambia',
             'Uganda', 'South Africa', 'Tunisia', 'Kenya', 'Rwanda', 'Ghana',
             'Senegal', 'Ethiopia', 'Cameroon', 'Other']


# One picture or one video, however you have it. Used by the hero and by the
# highlight carousel, so both understand the same three shapes:
#   an uploaded image · a short uploaded clip · a link to YouTube or Vimeo
MEDIA_FIELDS = [
    F('type', 'This slide is a', 'select', options=['Photo', 'Video'],
      help='Pick Video and then fill in either an uploaded clip or a link.'),
    F('image', 'Photo', 'image',
      help='For a photo slide. Also used as the still frame for a video.'),
    F('video', 'Video file', 'image',
      help='A short clip — MP4 or WebM, under 25 MB. Good for a few seconds of '
           'atmosphere. For anything longer use a link below instead: video files '
           'live in your repository and large ones make it slow for everyone.'),
    F('videoUrl', 'Video link', 'url',
      help='A YouTube or Vimeo address. The best choice for full talks and '
           'recordings — it costs your site nothing and plays only when someone '
           'presses play.'),
    F('caption', 'Caption'),
    F('credit', 'Credit', help='Who took it, and your permission to publish it.'),
]

PERSON_FIELDS = [
    F('name', 'Full name', help='As they want it written.'),
    F('group', 'Group', 'select', options=['Leadership', 'Advisors', 'Chapter leads']),
    F('role', 'Role at Quantum Africa'),
    F('institution', 'Institution'),
    F('country', 'Country', 'select', options=COUNTRIES),
    F('photo', 'Portrait', 'image', help='Square or 4:5. At least 1200px wide.'),
    F('bio', 'Short bio', 'textarea', help='Two or three sentences. Shown on the card.'),
    F('fullBio', 'Full biography', 'markdown', help='Shown when someone opens the card. Written by them, not about them.'),
    F('interests', 'Research interests', 'tags'),
    F('chapter', 'Chapter'),
    F('linkedin', 'LinkedIn', 'url'),
    F('scholar', 'Google Scholar', 'url'),
    F('orcid', 'ORCID', 'url'),
]

SECTIONS = [
  {
    'key': 'site', 'title': 'Site basics', 'icon': 'globe', 'kind': 'single',
    'blurb': 'Names, contact details and the social accounts in the footer.',
    'fields': [
      F('name', 'Organisation name'),
      F('tagline', 'Tagline', help='One line. Appears in the footer and in search results.'),
      F('email', 'Contact email', 'email'),
      F('phone', 'Phone'),
      F('address', 'Address', 'textarea'),
      F('founded', 'Year founded'),
      F('registered', 'Registered in', help='Country of legal registration.'),
      F('linkedin', 'LinkedIn', 'url'),
      F('twitter', 'X / Twitter', 'url'),
      F('youtube', 'YouTube', 'url'),
      F('instagram', 'Instagram', 'url'),
      F('newsletter', 'Newsletter note', 'text'),
    ],
  },
  {
    'key': 'hero', 'title': 'Homepage hero', 'icon': 'home', 'kind': 'single',
    'blurb': 'The rotating headline, the line under it, and the five images behind.',
    'fields': [
      F('eyebrow', 'Small line above the headline'),
      F('statements', 'Rotating statements', 'list', label_field='b', fields=[
        F('a', 'First half', help='Rendered in white. End it with a space.'),
        F('b', 'Second half', help='Rendered in gold.'),
        F('lede', 'Paragraph underneath', 'textarea'),
      ]),
      F('slides', 'Hero photos and videos', 'list', label_field='caption',
        fields=MEDIA_FIELDS,
        help='Landscape, 2400×1350. Videos play silently behind the headline and '
             'the slider waits for them to finish before moving on.'),
      F('ctaPrimary', 'Primary button text'),
      F('ctaSecondary', 'Secondary button text'),
    ],
  },
  {
    'key': 'stats', 'title': 'Numbers', 'icon': 'chart', 'kind': 'single',
    'blurb': 'The counters on the homepage and Impact page. Leave a field empty '
             'and the site shows nothing rather than a guess.',
    'fields': [
      F('members', 'Community members', 'number'),
      F('chapters', 'National chapters', 'number'),
      F('countries', 'Countries reached', 'number'),
      F('events', 'Events held', 'number'),
      F('projects', 'Research projects', 'number'),
      F('partners', 'Partner institutions', 'number'),
      F('note', 'How these are counted', 'textarea',
        help='Say what period each number covers. Funders read this.'),
    ],
  },
  {
    'key': 'highlight', 'title': 'Front page highlight', 'icon': 'star', 'kind': 'single',
    'blurb': 'The thing you most want people to see when they arrive — usually your '
             'latest event. Photos and videos together in one carousel.',
    'fields': [
      F('eyebrow', 'Small label above the title', help='e.g. Latest event'),
      F('title', 'Title'),
      F('date', 'Date', 'date'),
      F('place', 'Place'),
      F('summary', 'Summary', 'textarea',
        help='Two or three sentences. What happened and why it mattered.'),
      F('linkText', 'Button text', help='e.g. Read the write-up'),
      F('linkUrl', 'Button link', 'url'),
      F('gallery', 'Photos and videos', 'list', label_field='caption',
        fields=MEDIA_FIELDS,
        help='Shown as a carousel. Drag to reorder — the first one is what people '
             'see first.'),
    ],
  },
  {
    'key': 'about', 'title': 'About', 'icon': 'doc', 'kind': 'single',
    'blurb': 'Everything on the About page — hero, story, mission, vision, objectives, documents, leadership summary.',
    'fields': [
      F('heroEyebrow', 'Hero eyebrow', help='Small label above the headline, e.g. “About Quantum Africa”.'),
      F('heroTitle', 'Hero headline', help='The big sentence at the top of the page.'),
      F('heroLede', 'Hero lede paragraph', 'textarea'),
      F('heroImage', 'Hero photograph', 'image',
        help='Wide community photograph, 2400×1000 or larger. Shows directly under the hero.'),
      F('whoWeAre', 'Who we are', 'markdown', help='Two or three short paragraphs. What Quantum Africa is, and is not.'),
      F('story', 'Our story', 'markdown'),
      F('mission', 'Mission', 'textarea'),
      F('vision', 'Vision', 'textarea'),
      F('objectives', 'Objectives', 'tags', help='One bullet per objective; rendered as the list on the About page.'),
      F('philosophyHeadline', 'Philosophy headline', help='The big line in the side panel, e.g. Educate → Research → Connect → Lead.'),
      F('philosophy', 'Philosophy note', 'textarea'),
      F('documents', 'Documents note', 'textarea',
        help='Annual report or strategy PDF — describe it and link it.'),
    ],
  },
  {
    'key': 'people', 'title': 'Team', 'icon': 'user', 'kind': 'collection',
    'blurb': 'Everyone on the Team page. Each person writes their own entry.',
    'label_field': 'name', 'fields': PERSON_FIELDS,
  },
  {
    'key': 'chapters', 'title': 'Chapters', 'icon': 'flag', 'kind': 'collection',
    'blurb': 'National chapters. The country code drives the map.',
    'label_field': 'name',
    'fields': [
      F('name', 'Country / chapter name'),
      F('code', 'Country code', help='Two letters, lowercase — dz, ma, ng. Drives the map pin.'),
      F('flag', 'Flag emoji'),
      F('status', 'Status', 'select', options=['Active', 'Launching', 'Forming', 'Paused']),
      F('lead', 'Chapter lead'),
      F('leadRole', 'Lead role / institution'),
      F('email', 'Chapter email', 'email'),
      F('description', 'About this chapter', 'markdown'),
      F('photo', 'Chapter photo', 'image', help='Team or event photo. 2400×1000.'),
      F('members', 'Members', 'number'),
      F('linkedin', 'LinkedIn', 'url'),
      F('web', 'Website', 'url'),
    ],
  },
  {
    'key': 'events', 'title': 'Our events', 'icon': 'calendar', 'kind': 'collection',
    'blurb': "Quantum Africa's own webinars, workshops and chapter events. "
             'The worldwide calendar is collected automatically and is not edited here.',
    'label_field': 'title',
    'fields': [
      F('title', 'Title'),
      F('type', 'Type', 'select', options=['Webinar', 'Workshop', 'Conference', 'Chapter event', 'Summer school']),
      F('date', 'Date', 'date'),
      F('time', 'Time', 'time', help='Include the timezone in the note below if it is not GMT.'),
      F('speaker', 'Speaker'),
      F('speakerAffil', 'Speaker affiliation'),
      F('speakerPhoto', 'Speaker photo', 'image'),
      F('abstract', 'Abstract', 'markdown'),
      F('register', 'Registration link', 'url'),
      F('recording', 'Recording link', 'url'),
      F('photo', 'Event photo', 'image'),
      F('series', 'Series', help='e.g. QML4Africa. Leave blank if it is a one-off.'),
    ],
  },
  {
    'key': 'projects', 'title': 'Research projects', 'icon': 'atom', 'kind': 'collection',
    'blurb': 'Open research projects. Anything you cannot yet evidence, leave empty.',
    'label_field': 'title',
    'fields': [
      F('title', 'Title'),
      F('area', 'Area'),
      F('short', 'One-line summary'),
      F('description', 'Description', 'markdown'),
      F('objectives', 'Objectives', 'tags', help='One per entry.'),
      F('tech', 'Tools and technologies', 'tags'),
      F('repo', 'Repository', 'url'),
      F('publication', 'Publication / DOI', 'url'),
      F('started', 'Started', 'date'),
      F('needs', 'Skills needed', 'textarea'),
      F('image', 'Project image', 'image'),
      F('contributors', 'Contributors', 'list', label_field='name', fields=[
        F('name', 'Name'), F('role', 'Role'), F('institution', 'Institution'),
      ]),
    ],
  },
  {
    'key': 'partners', 'title': 'Partners', 'icon': 'link', 'kind': 'collection',
    'blurb': 'Only organisations with a real agreement. Do not list logos you have not cleared.',
    'label_field': 'name',
    'fields': [
      F('name', 'Name'),
      F('category', 'Category', 'select',
        options=['Academic', 'Research', 'Industry', 'Education', 'Strategic']),
      F('logo', 'Logo', 'image', help='SVG or transparent PNG.'),
      F('url', 'Website', 'url'),
      F('country', 'Country'),
      F('note', 'What we do together', 'textarea'),
    ],
  },
  {
    'key': 'articles', 'title': 'News & articles', 'icon': 'news', 'kind': 'collection',
    'blurb': 'Announcements, write-ups and explainers.',
    'label_field': 'title',
    'fields': [
      F('title', 'Headline'),
      F('type', 'Type', 'select', options=['News', 'Article', 'Announcement', 'Recap']),
      F('date', 'Date', 'date'),
      F('author', 'Author'),
      F('read', 'Reading time', help='e.g. 4 min'),
      F('summary', 'Summary', 'textarea'),
      F('body', 'Body', 'markdown'),
      F('image', 'Header image', 'image'),
    ],
  },
  {
    'key': 'opportunities', 'title': 'Our opportunities', 'icon': 'star', 'kind': 'collection',
    'blurb': 'Opportunities you know about that the job boards do not carry — '
             'especially African ones. These are merged into the Opportunities page '
             'and pinned above the collected listings.',
    'label_field': 'title',
    'fields': [
      F('title', 'Title'),
      F('org', 'Institution or company'),
      F('city', 'City'),
      F('country', 'Country', 'select', options=COUNTRIES),
      F('type', 'Type', 'select',
        options=['PhD', 'Postdoc', 'MSc', 'Faculty', 'Research fellow',
                 'Internship', 'Summer school', 'Scholarship', 'Grant', 'Industry']),
      F('deadline', 'Deadline', 'date'),
      F('url', 'Application link', 'url'),
      F('note', 'Note', 'textarea'),
    ],
  },
  {
    'key': 'conference', 'title': 'Conference series', 'icon': 'award', 'kind': 'single',
    'blurb': 'Quantum Africa\'s relationship to the series, and photographs per edition. '
             'Speaker and committee lists come from the official record and are not edited here.',
    'fields': [
      F('role', "Quantum Africa's role in the series", 'markdown',
        help='Be precise: attend, co-organise, sponsor, run a satellite workshop, '
             'sit on the committee. Do not imply ownership.'),
      F('photos', 'Edition photographs', 'list', label_field='caption', fields=[
        F('edition', 'Edition', 'select',
          options=['QA1', 'QA2', 'QA3', 'QA4', 'QA5', 'QA6', 'QA7']),
        F('image', 'Photograph', 'image'),
        F('caption', 'Caption'),
        F('credit', 'Credit', help='Who took it, and your permission to publish it.'),
      ]),
      F('profiles', 'Speaker portraits and profiles', 'list', label_field='name', fields=[
        F('name', 'Name', help='Exactly as it appears in the line-up.'),
        F('photo', 'Portrait', 'image'),
        F('url', 'Profile link', 'url'),
      ]),
    ],
  },
  {
    'key': 'tutor', 'title': 'AI Tutor', 'icon': 'chat', 'kind': 'single',
    'blurb': 'The Quantum AI Tutor page.',
    'fields': [
      F('intro', 'Introduction', 'markdown'),
      F('status', 'Status', 'select', options=['In development', 'Beta', 'Live']),
      F('link', 'Link to the tutor', 'url'),
      F('screenshots', 'Screenshots', 'list', label_field='caption', fields=[
        F('image', 'Screenshot', 'image'), F('caption', 'Caption'),
      ]),
    ],
  },
  {
    'key': 'support', 'title': 'Pledge your support', 'icon': 'heart', 'kind': 'single',
    'blurb': 'Donation details and where support goes. Leave empty until it is real — '
             'the site shows a placeholder rather than an invented figure.',
    'fields': [
      F('donation', 'Donation details', 'markdown',
        help='Bank account, payment link, registered charitable status, tax position.'),
      F('splitProgrammes', 'Share to programmes (%)', 'number'),
      F('splitStudents', 'Share to student costs (%)', 'number'),
      F('splitOperations', 'Share to operations (%)', 'number'),
      F('thanks', 'Thank-you note', 'textarea'),
    ],
  },
  {
    'key': 'legal', 'title': 'Legal', 'icon': 'shield', 'kind': 'single',
    'blurb': 'Privacy, terms and code of conduct.',
    'fields': [
      F('privacy', 'Privacy policy', 'markdown'),
      F('terms', 'Terms', 'markdown'),
      F('conduct', 'Code of conduct', 'markdown'),
    ],
  },
]

SECTION_BY_KEY = {s['key']: s for s in SECTIONS}


def blank_doc():
    """An empty document with the right shape — collections empty, singles {}."""
    return {s['key']: ([] if s['kind'] == 'collection' else {}) for s in SECTIONS}


def _clean_value(field, value):
    t = field['type']
    if value is None:
        return None
    if t == 'number':
        if value == '' or value is None:
            return None
        try:
            return int(value)
        except (TypeError, ValueError):
            try:
                return float(value)
            except (TypeError, ValueError):
                return None
    if t == 'tags':
        if isinstance(value, str):
            return [v.strip() for v in value.split(',') if v.strip()]
        if isinstance(value, list):
            return [str(v).strip() for v in value if str(v).strip()]
        return []
    if t == 'list':
        if not isinstance(value, list):
            return []
        return [_clean_group(field.get('fields', []), row) for row in value
                if isinstance(row, dict)]
    return str(value)


def _clean_group(fields, data):
    out = {}
    for f in fields:
        if f['key'] in data:
            v = _clean_value(f, data[f['key']])
            if v not in (None, '', []):
                out[f['key']] = v
    # ids let the site keep a stable identity across renames
    if 'id' in data and data['id']:
        out['id'] = str(data['id'])
    return out


def clean(doc: dict) -> dict:
    """Keep only known sections and fields, coerce types, drop empties.

    Anything the schema does not describe is discarded — the admin panel cannot
    smuggle arbitrary keys into what the website renders.
    """
    if not isinstance(doc, dict):
        return blank_doc()
    out = blank_doc()
    for section in SECTIONS:
        k, incoming = section['key'], doc.get(section['key'])
        if incoming is None:
            continue
        if section['kind'] == 'collection':
            if isinstance(incoming, list):
                out[k] = [_clean_group(section['fields'], row) for row in incoming
                          if isinstance(row, dict)]
                out[k] = [r for r in out[k] if r]
        else:
            if isinstance(incoming, dict):
                out[k] = _clean_group(section['fields'], incoming)
    return out


def public_schema():
    """The schema as the admin panel consumes it."""
    return {'sections': SECTIONS}
