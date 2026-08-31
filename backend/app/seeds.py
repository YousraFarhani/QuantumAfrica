# -*- coding: utf-8 -*-
"""Default seed rows for CMS collections.

These arrays mirror the hardcoded skeleton defaults in `site/app.js`
(CHAPTERS, CONF, PEOPLE, ARTICLES, PROJECTS, EVENTS, OPPORTUNITIES).
When the admin panel opens with an empty CMS collection, these values
are seeded in-memory (via `ContentStore.get()`) so the user sees all the
existing live content already populating the form inputs, ready to edit.
Saving a section persists the merged rows into the revision table.
"""

DEFAULT_CHAPTERS = [
    {'slug':'algeria',    'code':'dz', 'name':'Algeria',    'flag':'🇩🇿', 'status':'Active',
     'lead':'', 'leadRole':'', 'email':'', 'description':'', 'members':0,
     'linkedin':'', 'web':''},
    {'slug':'egypt',      'code':'eg', 'name':'Egypt',      'flag':'🇪🇬', 'status':'Active',
     'lead':'', 'leadRole':'', 'email':'', 'description':'', 'members':0,
     'linkedin':'', 'web':''},
    {'slug':'morocco',    'code':'ma', 'name':'Morocco',    'flag':'🇲🇦', 'status':'Active',
     'lead':'', 'leadRole':'', 'email':'', 'description':'', 'members':0,
     'linkedin':'', 'web':''},
    {'slug':'nigeria',    'code':'ng', 'name':'Nigeria',    'flag':'🇳🇬', 'status':'Active',
     'lead':'', 'leadRole':'', 'email':'', 'description':'', 'members':0,
     'linkedin':'', 'web':''},
    {'slug':'mauritania', 'code':'mr', 'name':'Mauritania', 'flag':'🇲🇷', 'status':'Active',
     'lead':'', 'leadRole':'', 'email':'', 'description':'', 'members':0,
     'linkedin':'', 'web':''},
    {'slug':'zambia',     'code':'zm', 'name':'Zambia',     'flag':'🇿🇲', 'status':'Active',
     'lead':'', 'leadRole':'', 'email':'', 'description':'', 'members':0,
     'linkedin':'', 'web':''},
    {'slug':'uganda',     'code':'ug', 'name':'Uganda',     'flag':'🇺🇬', 'status':'Active',
     'lead':'', 'leadRole':'', 'email':'', 'description':'', 'members':0,
     'linkedin':'', 'web':''},
]

DEFAULT_PEOPLE = [
    # 8 skeleton slugs from app.js L567
    {'slug':'p1', 'group':'Leadership',  'name':'', 'role':'', 'institution':'',
     'country':'', 'photo':'', 'bio':'', 'fullBio':'', 'interests':[], 'chapter':'',
     'linkedin':'', 'scholar':'', 'orcid':''},
    {'slug':'p2', 'group':'Leadership',  'name':'', 'role':'', 'institution':'',
     'country':'', 'photo':'', 'bio':'', 'fullBio':'', 'interests':[], 'chapter':'',
     'linkedin':'', 'scholar':'', 'orcid':''},
    {'slug':'p3', 'group':'Leadership',  'name':'', 'role':'', 'institution':'',
     'country':'', 'photo':'', 'bio':'', 'fullBio':'', 'interests':[], 'chapter':'',
     'linkedin':'', 'scholar':'', 'orcid':''},
    {'slug':'p4', 'group':'Advisors',    'name':'', 'role':'', 'institution':'',
     'country':'', 'photo':'', 'bio':'', 'fullBio':'', 'interests':[], 'chapter':'',
     'linkedin':'', 'scholar':'', 'orcid':''},
    {'slug':'p5', 'group':'Advisors',    'name':'', 'role':'', 'institution':'',
     'country':'', 'photo':'', 'bio':'', 'fullBio':'', 'interests':[], 'chapter':'',
     'linkedin':'', 'scholar':'', 'orcid':''},
    {'slug':'p6', 'group':'Chapter leads','name':'', 'role':'', 'institution':'',
     'country':'', 'photo':'', 'bio':'', 'fullBio':'', 'interests':[], 'chapter':'',
     'linkedin':'', 'scholar':'', 'orcid':''},
    {'slug':'p7', 'group':'Chapter leads','name':'', 'role':'', 'institution':'',
     'country':'', 'photo':'', 'bio':'', 'fullBio':'', 'interests':[], 'chapter':'',
     'linkedin':'', 'scholar':'', 'orcid':''},
    {'slug':'p8', 'group':'Chapter leads','name':'', 'role':'', 'institution':'',
     'country':'', 'photo':'', 'bio':'', 'fullBio':'', 'interests':[], 'chapter':'',
     'linkedin':'', 'scholar':'', 'orcid':''},
]

DEFAULT_ARTICLES = [
    {'slug':'a1', 'type':'News',            'title':'', 'date':'', 'author':'',
     'read':'4 min',  'summary':'', 'body':'', 'image':''},
    {'slug':'a2', 'type':'Chapter update',  'title':'', 'date':'', 'author':'',
     'read':'3 min',  'summary':'', 'body':'', 'image':''},
    {'slug':'a3', 'type':'Member story',    'title':'', 'date':'', 'author':'',
     'read':'6 min',  'summary':'', 'body':'', 'image':''},
]

DEFAULT_PROJECTS = [
    {'slug':'pr1', 'title':'', 'area':'', 'short':'', 'description':'',
     'objectives':[], 'tech':[], 'repo':'', 'publication':'', 'started':'',
     'needs':'', 'image':'', 'contributors':[]},
    {'slug':'pr2', 'title':'', 'area':'', 'short':'', 'description':'',
     'objectives':[], 'tech':[], 'repo':'', 'publication':'', 'started':'',
     'needs':'', 'image':'', 'contributors':[]},
    {'slug':'pr3', 'title':'', 'area':'', 'short':'', 'description':'',
     'objectives':[], 'tech':[], 'repo':'', 'publication':'', 'started':'',
     'needs':'', 'image':'', 'contributors':[]},
    {'slug':'pr4', 'title':'', 'area':'', 'short':'', 'description':'',
     'objectives':[], 'tech':[], 'repo':'', 'publication':'', 'started':'',
     'needs':'', 'image':'', 'contributors':[]},
]

DEFAULT_EVENTS = []
DEFAULT_OPPORTUNITIES = []

DEFAULT_CONF_EDITIONS = [
    {
        'edition':'QA1', 'slug':'qa1', 'number':'01', 'year':'2010',
        'city':'Durban', 'country':'South Africa',
        'dates':'19–24 September 2010',
        'host':'University of KwaZulu-Natal',
        'website':'',
        'theme':'',
        'locNote':'All committee members are part of the Quantum Research Group, School of Physics, University of KwaZulu-Natal.',
        'locLabel':'Organising committee',
        'invitedLabel':'Invited speakers and topics',
        'invited':[
            {'name':'Hans Briegel',          'affiliation':'University of Innsbruck, Innsbruck, Austria',
             'topic':'Quantum effects in biology'},
            {'name':'Andreas Buchleitner',    'affiliation':'University of Freiburg, Freiburg, Germany',
             'topic':'Transport, disorder, and entanglement'},
            {'name':'Tommaso Calarco',        'affiliation':'University of Ulm, Ulm, Germany',
             'topic':'To be announced'},
            {'name':'Lajos Diósi',             'affiliation':'Research Institute for Particle and Nuclear Physics, Budapest, Hungary',
             'topic':'Quantum information loss by frame averaging'},
            {'name':'Artur Ekert',            'affiliation':'University of Oxford, Oxford, United Kingdom',
             'topic':'Less reality, more security'},
            {'name':'Serge Haroche',          'affiliation':'Collège de France & École Normale Supérieure, Paris, France',
             'topic':'Manipulation and control of non-classical field states in cavity QED'},
            {'name':'Arne Kastberg',          'affiliation':'University of Nice – CNRS, Nice, France',
             'topic':'Quantum information with cold atoms and photons'},
            {'name':'Sir Peter Knight',       'affiliation':'Imperial College London, United Kingdom',
             'topic':'Quantum state engineering and the simulation of nature'},
            {'name':'Hermann Uys',            'affiliation':'National Institute of Standards and Technology, Boulder, Colorado, USA',
             'topic':'Toward spin squeezing of trapped beryllium ions'},
        ],
        'plenary':[],
        'keynote':[],
        'ipc':[],
        'loc':[
            {'name':'Francesco Petruccione', 'affiliation':'', 'role':'Conference chair'},
            {'name':'Thomas Konrad',         'affiliation':'', 'role':'Conference secretary'},
            {'name':'Elena Brüning',         'affiliation':'', 'role':''},
            {'name':'Asif Mirza',            'affiliation':'', 'role':''},
            {'name':'Mervin Moodley',        'affiliation':'', 'role':''},
            {'name':'Michael Nock',          'affiliation':'', 'role':''},
            {'name':'Michael Porrmann',      'affiliation':'', 'role':''},
            {'name':'Moritz Rehn',           'affiliation':'', 'role':''},
            {'name':'Ilya Sinayskiy',        'affiliation':'', 'role':''},
        ],
        'summary':'',
    },
    {
        'edition':'QA2', 'slug':'qa2', 'number':'02', 'year':'2012',
        'city':'Northern Drakensburg', 'country':'South Africa',
        'dates':'3–7 September 2012',
        'host':'',
        'website':'',
        'theme':'',
        'locNote':'',
        'locLabel':'Organising committee',
        'invitedLabel':'',
        'invited':[],
        'plenary':[
            {'name':'Luiz Davidovich','affiliation':'Federal University of Rio de Janeiro, Brazil'},
            {'name':'Artur Ekert',    'affiliation':'National University of Singapore / University of Oxford, UK'},
            {'name':'Nicolas Gisin',  'affiliation':'University of Geneva, Switzerland'},
            {'name':'Fedor Jelezko',  'affiliation':'Ulm University, Germany'},
            {'name':'Miles Padgett',  'affiliation':'University of Glasgow, UK'},
        ],
        'keynote':[
            {'name':'Angelo Bassi',       'affiliation':'University of Trieste, Italy'},
            {'name':'Andreas Buchleitner','affiliation':'University of Freiburg, Germany'},
            {'name':'Marco Genovese',     'affiliation':'INRiM, Torino, Italy'},
            {'name':'Beatrix Hiesmayr',   'affiliation':'University of Vienna, Austria'},
            {'name':'Wolfgang Loeffler',  'affiliation':'Leiden University, Netherlands'},
            {'name':'Norbert Lütkenhaus', 'affiliation':'University of Waterloo, Canada'},
            {'name':'Michele Mosca',      'affiliation':'University of Waterloo, Canada'},
            {'name':'Juan Pablo Paz',     'affiliation':'University of Buenos Aires, Argentina'},
            {'name':'Timothy Ralph',      'affiliation':'University of Queensland, Australia'},
            {'name':'Luis Sánchez Soto',  'affiliation':'Complutense University of Madrid, Spain'},
            {'name':'Wolfgang Schleich',  'affiliation':'Ulm University, Germany'},
            {'name':'Simone Severini',    'affiliation':'University College London, UK'},
            {'name':'Paolo Villoresi',    'affiliation':'University of Padova, Italy'},
        ],
        'ipc':[],
        'loc':[
            {'name':'Francesco Petruccione','affiliation':'NITheP KZN & University of KwaZulu-Natal', 'role':'Chair'},
            {'name':'Elena Bruning',        'affiliation':'University of KwaZulu-Natal', 'role':''},
            {'name':'Thomas Konrad',        'affiliation':'University of KwaZulu-Natal', 'role':''},
            {'name':'Ilya Sinayskiy',       'affiliation':'NITheP KZN', 'role':''},
            {'name':'Sile Nic Chormaic',    'affiliation':'University of KwaZulu-Natal', 'role':''},
            {'name':'Stef Roux',            'affiliation':'National Laser Centre, CSIR', 'role':''},
            {'name':'Hermann Uys',          'affiliation':'National Laser Centre, CSIR', 'role':''},
        ],
        'summary':'',
    },
    {
        'edition':'QA3', 'slug':'qa3', 'number':'03', 'year':'2014',
        'city':'Rabat', 'country':'Morocco',
        'dates':'22–26 September 2014',
        'host':'Mohamed V-Agdal University',
        'website':'',
        'theme':'',
        'locNote':'',
        'locLabel':'Organising committee',
        'invitedLabel':'',
        'invited':[],
        'plenary':[
            {'name':'Serge Haroche',  'affiliation':'Collège de France & École Normale Supérieure, Paris, France'},
            {'name':'Fedor Jelezko',  'affiliation':'University of Ulm, Germany'},
            {'name':'Greg Scholes',   'affiliation':'Princeton University, USA'},
        ],
        'keynote':[
            {'name':'Markus Aspelmeyer',  'affiliation':'University of Vienna, Austria'},
            {'name':'Rainer Blatt',       'affiliation':'University of Innsbruck / IQOQI, Austria'},
            {'name':'Nilanjana Datta',    'affiliation':'University of Cambridge, UK'},
            {'name':'Mark Hillery',       'affiliation':'City University of New York, USA'},
            {'name':'Tjaart Krüger',      'affiliation':'University of Pretoria, South Africa'},
            {'name':'Alexandra Olaya-Castro','affiliation':'University College London, UK'},
            {'name':'Bruno Robert',       'affiliation':'CEA Saclay, France'},
            {'name':'Christine Silberhorn','affiliation':'Paderborn University, Germany'},
            {'name':'Peter Zoller',       'affiliation':'University of Innsbruck / IQOQI, Austria'},
        ],
        'ipc':[
            {'name':'Martin Plenio', 'affiliation':'University of Ulm, Germany', 'role':'Chair'},
            {'name':'Alain Aspect',  'affiliation':'Institut d’Optique, Paris, France', 'role':''},
            {'name':'Angelo Bassi',  'affiliation':'University of Trieste, Italy', 'role':''},
            {'name':'Michael Berry', 'affiliation':'University of Bristol, UK', 'role':''},
            {'name':'Mohamed Bourennane','affiliation':'University of Stockholm, Sweden', 'role':''},
            {'name':'Luiz Davidovich','affiliation':'Federal University of Rio de Janeiro, Brazil', 'role':''},
            {'name':'Jiangfeng Du',  'affiliation':'University of Science and Technology of China, Hefei, China', 'role':''},
            {'name':'Morad El Baz',  'affiliation':'Mohamed V-Agdal University, Rabat, Morocco', 'role':''},
            {'name':'Fesseha Kassahun','affiliation':'University of Addis Ababa, Ethiopia', 'role':''},
            {'name':'Abdel-Shafy Fahmy Obada','affiliation':'Al-Azhar University, Cairo, Egypt', 'role':''},
            {'name':'Gerard Milburn', 'affiliation':'The University of Queensland, Australia', 'role':''},
            {'name':'Michele Mosca',  'affiliation':'University of Waterloo, Ontario, Canada', 'role':''},
            {'name':'Mio Murao',      'affiliation':'The University of Tokyo, Japan', 'role':''},
            {'name':'Terry Rudolph',  'affiliation':'Imperial College, London, UK', 'role':''},
            {'name':'Herman Uys',    'affiliation':'Council for Scientific and Industrial Research, Pretoria, South Africa', 'role':''},
            {'name':'Rienk van Grondelle','affiliation':'VU University, Amsterdam, The Netherlands', 'role':''},
        ],
        'loc':[
            {'name':'Yassine Hassouni',   'affiliation':'Mohamed V-Agdal University, Rabat, Morocco', 'role':'Chair'},
            {'name':'Asmae Arbaoui',      'affiliation':'Mohamed V-Agdal University, Rabat, Morocco', 'role':'Communications'},
            {'name':'Aziz Bouchene',      'affiliation':'Paul Sabatier University, Toulouse, France', 'role':''},
            {'name':'Daniel Braun',       'affiliation':'Institut für Theoretische Physik, Universität Tübingen, Germany', 'role':''},
        ],
        'summary':'',
    },
    # QA4, QA5, QA6, QA7 would need to be added manually by the editor from the official record.
    # Keep a couple placeholder editions so user can fill them in from the admin panel:
    {'edition':'QA4','slug':'qa4','number':'04','year':'2016',
     'city':'','country':'','dates':'','host':'','website':'','theme':'','locNote':'',
     'locLabel':'Organising committee','invitedLabel':'',
     'invited':[],'plenary':[],'keynote':[],'ipc':[],'loc':[],'summary':''},
    {'edition':'QA5','slug':'qa5','number':'05','year':'2018',
     'city':'','country':'','dates':'','host':'','website':'','theme':'','locNote':'',
     'locLabel':'Organising committee','invitedLabel':'',
     'invited':[],'plenary':[],'keynote':[],'ipc':[],'loc':[],'summary':''},
    {'edition':'QA6','slug':'qa6','number':'06','year':'2022',
     'city':'','country':'','dates':'','host':'','website':'','theme':'','locNote':'',
     'locLabel':'Organising committee','invitedLabel':'',
     'invited':[],'plenary':[],'keynote':[],'ipc':[],'loc':[],'summary':''},
    {'edition':'QA7','slug':'qa7','number':'07','year':'2024',
     'city':'','country':'','dates':'','host':'','website':'','theme':'','locNote':'',
     'locLabel':'Organising committee','invitedLabel':'',
     'invited':[],'plenary':[],'keynote':[],'ipc':[],'loc':[],'summary':''},
]

SEEDS_BY_KEY = {
    'chapters':     DEFAULT_CHAPTERS,
    'people':       DEFAULT_PEOPLE,
    'articles':     DEFAULT_ARTICLES,
    'projects':     DEFAULT_PROJECTS,
    'events':       DEFAULT_EVENTS,
    'opportunities':DEFAULT_OPPORTUNITIES,
    'confEditions': DEFAULT_CONF_EDITIONS,
}


def apply_seeds(doc: dict) -> dict:
    """Return a new doc with default seed rows merged in for collections that
    are currently empty or missing. Non-empty collections are NEVER modified
    so user-added or edited rows are never overwritten."""
    if not isinstance(doc, dict):
        return doc
    out = dict(doc)
    for key, seed_rows in SEEDS_BY_KEY.items():
        existing = out.get(key)
        if not isinstance(existing, list) or len(existing) == 0:
            out[key] = [dict(r) for r in seed_rows]
    return out
