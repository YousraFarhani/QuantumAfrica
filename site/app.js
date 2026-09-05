/* ============================================================
   QUANTUM AFRICA — prototype application
   Data below stands in for CMS collections. In production each
   array is a Sanity collection and each page is a Next.js route.
   ============================================================ */

/* ---------- navigation ---------- */
const NAV = [
  {label:'About', href:'#/about', items:[
    {t:'Our Story', h:'#/about', d:'How Quantum Africa began'},
    {t:'Mission & Vision', h:'#/about', d:'What we exist to do'},
    {t:'Team', h:'#/people', d:'The people behind Quantum Africa'},
    {t:'Our Impact', h:'#/impact', d:'Verified numbers and stories'},
    {t:'Collaborators & Partners', h:'#/partners', d:'Organisations we work with'},
  ]},
  {label:'Programs', href:'#/education', items:[
    {t:'Quantum Education', h:'#/education', d:'Webinars, workshops, resources'},
    {t:'Quantum AI Tutor', h:'#/tutor', d:'Free AI-powered quantum tutor'},
    {t:'Research & Innovation', h:'#/research', d:'Collaborative and open-source projects'},
    {t:'Talent & Opportunities', h:'#/opportunities', d:'Scholarships, PhDs, internships'},
    {t:'University Programs', h:'#/universities', d:'Partner with your institution'},
  ]},
  {label:'Community', href:'#/chapters', items:[
    {t:'Chapters', h:'#/chapters', d:'National chapters across Africa'},
    {t:'Members', h:'#/people', d:'Community directory'},
    {t:'Join Quantum Africa', h:'#/join', d:'Become part of the community'},
  ]},
  {label:'Events', href:'#/events', items:[
    {t:'All Events', h:'#/events', d:'Upcoming sessions and past recordings, unified'},
    {t:'Quantum Africa Webinars', h:'#/events/webinars', d:'The recurring webinar series'},
    {t:'Workshops', h:'#/events/workshops', d:'QML4Africa and other hands-on training'},
  ]},
  {label:'Research', href:'#/research', items:[
    {t:'Projects', h:'#/research', d:'Active and completed research'},
    {t:'Publications', h:'#/research', d:'Papers and preprints'},
    {t:'Open Source', h:'#/research', d:'Public repositories'},
    {t:'Research Opportunities', h:'#/research', d:'Join a project'},
  ]},
  {label:'Opportunities', href:'#/opportunities', items:[
    {t:'All Opportunities', h:'#/opportunities', d:'Filterable database'},
    {t:'Scholarships', h:'#/opportunities', d:'Funded study'},
    {t:'Internships', h:'#/opportunities', d:'Industry and lab placements'},
    {t:'Fellowships & Grants', h:'#/opportunities', d:'Research funding'},
    {t:'Conferences & Events', h:'#/opportunities', d:'Worldwide quantum calendar'},
  ]},
  {label:'Conference', href:'#/conference', items:[
    {t:'The Series', h:'#/conference', d:'Quantum Africa 1 to 7, 2010–2025'},
    {t:'Quantum Africa 7', h:'#/conference/qa7', d:'Kénitra, Morocco · September 2025'},
    {t:'Past Editions', h:'#/conference', d:'Durban, Rabat, Tunis, Stellenbosch, Kigali'},
    {t:'Steering Committee', h:'#/conference', d:'Who runs the series'},
    {t:'Attend the Next Edition', h:'#/join', d:'Register your interest'},
  ]},
];

/* ---------- CMS collections (placeholder content) ---------- */
let CHAPTERS = [
  {slug:'algeria',    code:'dz', name:'Algeria',    flag:'\u{1F1E9}\u{1F1FF}'},
  {slug:'egypt',      code:'eg', name:'Egypt',      flag:'\u{1F1EA}\u{1F1EC}'},
  {slug:'morocco',    code:'ma', name:'Morocco',    flag:'\u{1F1F2}\u{1F1E6}'},
  {slug:'nigeria',    code:'ng', name:'Nigeria',    flag:'\u{1F1F3}\u{1F1EC}'},
  {slug:'mauritania', code:'mr', name:'Mauritania', flag:'\u{1F1F2}\u{1F1F7}'},
  {slug:'ethiopia',   code:'et', name:'Ethiopia',   flag:'\u{1F1EA}\u{1F1F9}'},
  {slug:'zambia',     code:'zm', name:'Zambia',     flag:'\u{1F1FF}\u{1F1F2}'},
  {slug:'uganda',     code:'ug', name:'Uganda',     flag:'\u{1F1FA}\u{1F1EC}'},
];

/* ---------- Quantum Africa Conference Series ----------
   Edition history verified against the QA7 host site and IQST.
   The series is run by its own steering committee — confirm
   Quantum Africa's relationship to it before publishing. */
let CONF = [
  {n:'01', slug:'qa1', year:'2010', city:'Durban', country:'South Africa',
   dates:'19–24 September 2010',
   locNote:'All committee members are part of the Quantum Research Group, School of Physics, University of KwaZulu-Natal.',
   locLabel:'Organising committee',
   invitedLabel:'Invited speakers and topics',
   invited:[
     {n:'Hans Briegel', a:'University of Innsbruck, Innsbruck, Austria', t:'Quantum effects in biology'},
     {n:'Andreas Buchleitner', a:'University of Freiburg, Freiburg, Germany', t:'Transport, disorder, and entanglement'},
     {n:'Tommaso Calarco', a:'University of Ulm, Ulm, Germany', t:'To be announced'},
     {n:'Lajos Diósi', a:'Research Institute for Particle and Nuclear Physics, Budapest, Hungary', t:'Quantum information loss by frame averaging'},
     {n:'Artur Ekert', a:'University of Oxford, Oxford, United Kingdom', t:'Less reality, more security'},
     {n:'Serge Haroche', a:'Collège de France & École Normale Supérieure, Paris, France', t:'Manipulation and control of non-classical field states in cavity QED'},
     {n:'Arne Kastberg', a:'University of Nice – CNRS, Nice, France', t:'Quantum information with cold atoms and photons'},
     {n:'Sir Peter Knight', a:'Imperial College London, United Kingdom', t:'Quantum state engineering and the simulation of nature'},
     {n:'Hermann Uys', a:'National Institute of Standards and Technology, Boulder, Colorado, USA', t:'Toward spin squeezing of trapped beryllium ions'},
   ],
   loc:[
     {n:'Francesco Petruccione', role:'Conference chair'},
     {n:'Thomas Konrad', role:'Conference secretary'},
     {n:'Elena Brüning'},
     {n:'Asif Mirza'},
     {n:'Mervin Moodley'},
     {n:'Michael Nock'},
     {n:'Michael Porrmann'},
     {n:'Moritz Rehn'},
     {n:'Ilya Sinayskiy'},
   ]},

  {n:'02', slug:'qa2', year:'2012', city:'Northern Drakensburg', country:'South Africa',
   dates:'3–7 September 2012',
   locLabel:'Organising committee',
   plenary:[
     {n:'Luiz Davidovich', a:'Federal University of Rio de Janeiro, Brazil'},
     {n:'Artur Ekert', a:'National University of Singapore / University of Oxford, UK'},
     {n:'Nicolas Gisin', a:'University of Geneva, Switzerland'},
     {n:'Fedor Jelezko', a:'Ulm University, Germany'},
     {n:'Miles Padgett', a:'University of Glasgow, UK'},
   ],
   keynote:[
     {n:'Angelo Bassi', a:'University of Trieste, Italy'},
     {n:'Andreas Buchleitner', a:'University of Freiburg, Germany'},
     {n:'Marco Genovese', a:'INRiM, Torino, Italy'},
     {n:'Beatrix Hiesmayr', a:'University of Vienna, Austria'},
     {n:'Wolfgang Loeffler', a:'Leiden University, Netherlands'},
     {n:'Norbert Lütkenhaus', a:'University of Waterloo, Canada'},
     {n:'Michele Mosca', a:'University of Waterloo, Canada'},
     {n:'Juan Pablo Paz', a:'University of Buenos Aires, Argentina'},
     {n:'Timothy Ralph', a:'University of Queensland, Australia'},
     {n:'Luis Sánchez Soto', a:'Complutense University of Madrid, Spain'},
     {n:'Wolfgang Schleich', a:'Ulm University, Germany'},
     {n:'Simone Severini', a:'University College London, UK'},
     {n:'Paolo Villoresi', a:'University of Padova, Italy'},
   ],
   loc:[
     {n:'Francesco Petruccione', a:'NITheP KZN & University of KwaZulu-Natal', role:'Chair'},
     {n:'Elena Bruning', a:'University of KwaZulu-Natal'},
     {n:'Thomas Konrad', a:'University of KwaZulu-Natal'},
     {n:'Ilya Sinayskiy', a:'NITheP KZN'},
     {n:'Sile Nic Chormaic', a:'University of KwaZulu-Natal'},
     {n:'Stef Roux', a:'National Laser Centre, CSIR'},
     {n:'Hermann Uys', a:'National Laser Centre, CSIR'},
   ]},

  {n:'03', slug:'qa3', year:'2014', city:'Rabat', country:'Morocco',
   dates:'22–26 September 2014',
   locLabel:'Organising committee',
   plenary:[
     {n:'Serge Haroche', a:'Collège de France & École Normale Supérieure, Paris, France'},
     {n:'Fedor Jelezko', a:'University of Ulm, Germany'},
     {n:'Greg Scholes', a:'Princeton University, USA'},
   ],
   keynote:[
     {n:'Markus Aspelmeyer', a:'University of Vienna, Austria'},
     {n:'Rainer Blatt', a:'University of Innsbruck / IQOQI, Austria'},
     {n:'Nilanjana Datta', a:'University of Cambridge, UK'},
     {n:'Mark Hillery', a:'City University of New York, USA'},
     {n:'Tjaart Krüger', a:'University of Pretoria, South Africa'},
     {n:'Alexandra Olaya-Castro', a:'University College London, UK'},
     {n:'Bruno Robert', a:'CEA Saclay, France'},
     {n:'Christine Silberhorn', a:'Paderborn University, Germany'},
     {n:'Peter Zoller', a:'University of Innsbruck / IQOQI, Austria'},
   ],
   ipc:[
     {n:'Martin Plenio', a:'University of Ulm, Germany', role:'Chair'},
     {n:'Alain Aspect', a:'Institut d’Optique, Paris, France'},
     {n:'Angelo Bassi', a:'University of Trieste, Italy'},
     {n:'Michael Berry', a:'University of Bristol, UK'},
     {n:'Mohamed Bourennane', a:'University of Stockholm, Sweden'},
     {n:'Luiz Davidovich', a:'Federal University of Rio de Janeiro, Brazil'},
     {n:'Jiangfeng Du', a:'University of Science and Technology of China, Hefei, China'},
     {n:'Morad El Baz', a:'Mohamed V-Agdal University, Rabat, Morocco'},
     {n:'Fesseha Kassahun', a:'University of Addis Ababa, Ethiopia'},
     {n:'Abdel-Shafy Fahmy Obada', a:'Al-Azhar University, Cairo, Egypt'},
     {n:'Gerard Milburn', a:'The University of Queensland, Australia'},
     {n:'Michele Mosca', a:'University of Waterloo, Ontario, Canada'},
     {n:'Mio Murao', a:'The University of Tokyo, Japan'},
     {n:'Terry Rudolph', a:'Imperial College, London, UK'},
     {n:'Herman Uys', a:'Council for Scientific and Industrial Research, Pretoria, South Africa'},
     {n:'Rienk van Grondelle', a:'VU University, Amsterdam, The Netherlands'},
   ],
   loc:[
     {n:'Yassine Hassouni', a:'Mohamed V-Agdal University, Rabat, Morocco', role:'Chair'},
     {n:'Asmae Arbaoui', a:'Mohamed V-Agdal University, Rabat, Morocco', role:'Communications'},
     {n:'Aziz Bouchene', a:'Paul Sabatier University, Toulouse, France'},
     {n:'Daniel Braun', a:'Institut für Theoretische Physik, Universität Tübingen, Germany'},
     {n:'Morad El Baz', a:'Mohamed V-Agdal University, Rabat, Morocco', role:'Co-vice-chair / treasurer'},
     {n:'Morad El Belkacemi', a:'Mohamed V-Agdal University, Rabat, Morocco'},
     {n:'El Houssine El Rhaleb', a:'Mohamed V-Agdal University, Rabat, Morocco', role:'Registration'},
     {n:'Jihane Mimih', a:'American Physical Society, New York, USA'},
     {n:'Mohamed Regragui', a:'Mohamed V-Agdal University, Rabat, Morocco'},
     {n:'Antonello Scardicchio', a:'Abdus Salam ICTP, Trieste, Italy'},
   ]},

  {n:'04', slug:'qa4', year:'2017', city:'Tunis', country:'Tunisia',
   dates:'30 April – 5 May 2017',
   locLabel:'Organising committee',
   plenary:[
     {n:'Alain Aspect', a:'Institut d’Optique, Palaiseau, France'},
     {n:'Claudia Felser', a:'Max Planck Institute for Chemical Physics of Solids, Germany'},
     {n:'Suchitra Sebastian', a:'University of Cambridge, UK'},
   ],
   keynote:[
     {n:'Meigan Aronson', a:'Texas A&M University, USA'},
     {n:'Vanderlei Salvador Bagnato', a:'University of São Paulo, Brazil'},
     {n:'Gregory S. Boebinger', a:'National High Magnetic Field Laboratory, Florida State University / University of Florida / Los Alamos National Laboratory, USA'},
     {n:'Fabien Bretenaker', a:'Laboratoire Aimé Cotton, France'},
     {n:'Rosario Fazio', a:'The Abdus Salam International Centre for Theoretical Physics – ICTP, Trieste, Italy'},
     {n:'Blaise Jeanneret', a:'Federal Institute of Metrology, Switzerland'},
     {n:'Catherine Pépin', a:'CEA Saclay, France'},
   ],
   ipc:[
     {n:'Laura Greene', a:'Florida State University, USA', role:'Chair'},
     {n:'N. Peter Armitage', a:'Johns Hopkins University, USA'},
     {n:'Leon Balents', a:'University of California Santa Barbara, USA'},
     {n:'Morad El Baz', a:'Université Mohammed V, Rabat, Morocco'},
     {n:'Lesley Cohen', a:'Imperial College London, UK'},
     {n:'Hicham Eleuch', a:'McGill University, Canada'},
     {n:'Thierry Giamarchi', a:'University of Geneva, Switzerland'},
     {n:'Sonia Haddad', a:'University of Tunis El Manar, Tunisia'},
     {n:'Sihem Jaziri', a:'University of Carthage, Tunisia'},
     {n:'Anthony J. Leggett', a:'University of Illinois Urbana-Champaign, USA'},
     {n:'Nina Markovic', a:'Goucher College, USA'},
     {n:'Amy S. Mullin', a:'University of Maryland College Park, USA'},
     {n:'Yasser Omar', a:'University of Lisbon, Portugal'},
     {n:'Warren E. Pickett', a:'University of California Davis, USA'},
     {n:'Terry Rudolph', a:'Imperial College London, UK'},
     {n:'Athena Safa-Sefat', a:'Oak Ridge National Laboratory, USA'},
     {n:'Setsuko Tajima', a:'Osaka University, Japan'},
     {n:'Hermann Uys', a:'Stellenbosch University, South Africa'},
     {n:'Kun Yang', a:'Florida State University, USA'},
   ],
   loc:[
     {n:'Haikel Jelassi', a:'National Centre for Nuclear Sciences and Technologies, Tunis; assistant treasurer, Tunisian Physical Society', role:'Chair & sponsorship'},
     {n:'Fatma Argoubi', a:'LSAMA, University of Tunis El Manar; deputy secretary, Tunisian Physical Society', role:'Social events & excursions'},
     {n:'Wiem Benchouikha', a:'LPMC, University of Tunis El Manar', role:'Book of abstracts'},
     {n:'Rym Bouchendira', a:'LSAMA, Faculty of Sciences of Tunis; secretary, Tunisian Physical Society', role:'Registration'},
     {n:'Samia Charfi Kaddour', a:'Faculty of Sciences of Tunis; president, Tunisian Physical Society'},
     {n:'Najoua Derbel', a:'LSAMA, Faculty of Sciences of Bizerte', role:'Registration'},
     {n:'Fathi Jomni', a:'Faculty of Sciences of Tunis', role:'Posters & exhibition'},
     {n:'Ikbel Mallek Zouari', a:'Iset’Com', role:'Program'},
     {n:'Houaida Oueslati', a:'ESAC, University of Carthage & LSAMA, Faculty of Sciences of Tunis', role:'Communication'},
     {n:'Said Ridene', a:'Faculty of Sciences of Tunis', role:'Accommodation, logistics & transport'},
     {n:'Neila Terzi', a:'Treasurer, Tunisian Physical Society', role:'Finance'},
     {n:'Rim Toukabri', a:'University of Calgary, Canada', role:'Book of abstracts & speaker bios'},
     {n:'Mourad Zghal', a:'SupCom; president, Tunisian Society of Optics', role:'OSA representative'},
   ]},

  {n:'05', slug:'qa5', year:'2019', city:'Stellenbosch', country:'South Africa',
   dates:'2–6 September 2019',
   locLabel:'Organising committee',
   plenary:[
     {n:'Gerald Gabrielse', a:'Northwestern University, USA'},
     {n:'Heike Riel', a:'IBM Research – Zurich, Switzerland'},
   ],
   keynote:[
     {n:'Sonja Franke-Arnold', a:'University of Glasgow, UK'},
     {n:'Michael Kastner', a:'Stellenbosch University, South Africa'},
     {n:'Tracy Northup', a:'University of Innsbruck, Austria'},
     {n:'Jason Petta', a:'Princeton University, USA'},
     {n:'Mourad Telmini', a:'University of Tunis El Manar, Tunisia'},
     {n:'James Thompson', a:'JILA / University of Colorado Boulder, USA'},
   ],
   ipc:[
     {n:'Chris Monroe', a:'University of Maryland & Joint Quantum Institute', role:'Chair'},
     {n:'Janet Anders', a:'University of Exeter, UK'},
     {n:'Erika Andersson', a:'Heriot-Watt University, UK'},
     {n:'David Awschalom', a:'University of Chicago, USA'},
     {n:'Michael Biercuk', a:'University of Sydney, Australia'},
     {n:'Tilman Esslinger', a:'ETH Zurich, Switzerland'},
     {n:'Andrew Forbes', a:'University of the Witwatersrand, South Africa'},
     {n:'Fedor Jelezko', a:'Ulm University, Germany'},
     {n:'Alicia Kollar', a:'Princeton University, USA'},
     {n:'Benjamin Lev', a:'Stanford University, USA'},
     {n:'Michael Raymer', a:'University of Oregon, USA'},
     {n:'Lieven Vandersypen', a:'Delft University of Technology, Netherlands'},
   ],
   loc:[
     {n:'Hermann Uys', a:'Stellenbosch University', role:'Chair'},
     {n:'Yaseera Ismail', a:'University of KwaZulu-Natal'},
     {n:'Nancy Payne', a:'Stellenbosch University'},
     {n:'Francesco Petruccione', a:'University of KwaZulu-Natal'},
     {n:'Mark Tame', a:'Stellenbosch University'},
   ]},

  {n:'06', slug:'qa6', year:'2022', city:'Kigali', country:'Rwanda',
   dates:'12–16 September 2022',
   venue:'Kigali, Rwanda and online',
   locLabel:'Local organising committee',
   invitedGroups:[
     {label:'From industry', list:[
       {n:'Trond Andersen', a:'Google Quantum'},
       {n:'Abe Asfaw', a:'Google Quantum'},
       {n:'Fernando Brandão', a:'Caltech, USA / AWS'},
       {n:'Oliver Dial', a:'IBM, Yorktown Heights'},
       {n:'Mercedes Gimeno-Segovia', a:'PsiQuantum'},
       {n:'Helmut Katzgraber', a:'AWS'},
       {n:'Jarred McClean', a:'Google Quantum'},
       {n:'Marco Pistoia', a:'JPMorgan Chase & Co.'},
       {n:'Pedram Roushan', a:'Google Quantum'},
       {n:'Terry Rudolph', a:'PsiQuantum'},
       {n:'Simone Severini', a:'AWS'},
       {n:'Nathan Shammah', a:'Unitary Fund'},
     ]},
     {label:'From academia', list:[
       {n:'Meigan Aronson', a:'University of British Columbia, Canada'},
       {n:'Tommaso Calarco', a:'Jülich, Germany'},
       {n:'Susan Coppersmith', a:'University of New South Wales, Sydney'},
       {n:'Marcello Dalmonte', a:'ICTP, Trieste, Italy'},
       {n:'Rosario Fazio', a:'ICTP, Trieste, Italy'},
       {n:'Giulia Galli', a:'University of Chicago, USA'},
       {n:'Steve Girvin', a:'Yale University, USA'},
       {n:'Jens Koch', a:'Northwestern University, USA'},
       {n:'Erika Kawakami', a:'RIKEN, Japan'},
       {n:'Daniel Loss', a:'RIKEN / University of Basel, Switzerland'},
       {n:'Tiago Mendes', a:'University of Augsburg, Germany'},
       {n:'Will Oliver', a:'MIT, USA'},
       {n:'Francesco Petruccione', a:'University of KwaZulu-Natal, South Africa'},
       {n:'Anna Sanpera', a:'UAB, Barcelona, Spain'},
       {n:'Christine Silberhorn', a:'Paderborn University, Germany'},
       {n:'Charles Tahan', a:'White House Office for Quantum Information Science, USA'},
       {n:'Mark Tame', a:'Stellenbosch University, South Africa'},
       {n:'J.S. Tsai', a:'RIKEN / Tokyo University of Science, Japan'},
       {n:'Benoît Vermersch', a:'CNRS, Grenoble, France'},
       {n:'Frank Wilhelm-Mauch', a:'Jülich, Germany'},
       {n:'Peng Xue', a:'CSRC, China'},
     ]},
   ],
   ipc:[
     {n:'Franco Nori', a:'RIKEN / University of Michigan', role:'Chair'},
     {n:'Marcello Dalmonte', a:'ICTP, Trieste'},
     {n:'Rosario Fazio', a:'ICTP, Trieste'},
     {n:'Barry Sanders', a:'University of Calgary and University of Science and Technology of China'},
   ],
   loc:[
     {n:'Omololu Akin-Ojo', a:'EAIFR', role:'Chair'},
     {n:'Alex Rogers', a:'African Leadership University, Rwanda', role:'Co-chair'},
     {n:'Marie Chantal Cyulinyana', a:'NCST Rwanda / University of Rwanda, Physics', role:'Venue and accommodation'},
     {n:'Christian Kwisanga', a:'University of Rwanda, Physics', role:'Transport and accommodation'},
     {n:'Steve Ndengue', a:'EAIFR', role:'Finance'},
     {n:'Blaise Tchapnda', a:'AIMS', role:'Communication and advertisement'},
     {n:'Richard Musabe', a:'Rwanda Polytechnic / UR School of ICT', role:'IT'},
     {n:'Damien Hanyurwimfura', a:'African Center of Excellence in Internet of Things, UR'},
   ]},

  {n:'07', slug:'qa7', year:'2025', city:'Kénitra', country:'Morocco', latest:true,
   dates:'22–26 September 2025',
   host:'Ibn Tofail University',
   venue:'Faculty of Sciences Kénitra (FS-Kénitra), Ibn Tofail University',
   sponsors:['Ibn Tofail University','World Quantum Day','MSRASI'],
   locLabel:'Local organising committee',
   plenary:[
     {n:'Jean-Marc Lévy-Leblond', a:'Université de Nice, France'},
     {n:'Daniel Braun', a:'Tuebingen, Germany'},
     {n:'Norbert Hounkonnou', a:'University of Abomey-Calavi, Benin'},
     {n:'Andreas Buchleitner', a:'Albert-Ludwigs-Universität Freiburg, Germany'},
     {n:'Yahya Tayalati', a:'University Mohammed V and UM6P, Morocco'},
     {n:'Romain Murenzi', a:'Worcester Polytechnic Institute, USA'},
     {n:'Janet Anders', a:'University of Potsdam, Germany & University of Exeter, United Kingdom'},
   ],
   keynote:[
     {n:'Gerardo Adesso', a:'University of Nottingham, United Kingdom'},
     {n:'Bilal Benzimoun', a:'University Clark, Worcester, USA'},
     {n:'Nicolas J. Cerf', a:'Université Libre de Bruxelles, Belgium'},
     {n:'Evaldo M. F. Curado', a:'CBPF, Rio de Janeiro, Brazil'},
     {n:'Philippe Faist', a:'Free University Berlin, Germany'},
     {n:'Arkady Fedorov', a:'University of Queensland, Australia'},
     {n:'Nabil Habbiballh', a:'University Ibn Zohr, Agadir, Morocco'},
     {n:'Ahmed Jellal', a:'University Chouaib Doukalli, El Jadida, Morocco'},
     {n:'Mostafa Mansour', a:'University Hassan II, Casablanca, Morocco'},
     {n:'Nasser Metwally', a:'University of Bahrain, Bahrain'},
     {n:'Jonathan Oppenheim', a:'University College London, United Kingdom', role:'Online'},
     {n:'Matteo Paris', a:'Università degli Studi di Milano, Italy'},
     {n:'Mauro Paternostro', a:'Università di Palermo, Italy'},
     {n:'Thomas Konrad', a:'University of KwaZulu-Natal, South Africa'},
     {n:'Karol Zyczkowski', a:'Jagiellonian University, Cracow, Poland'},
     {n:'Abdellah Sebbar', a:'University of Ottawa, Canada'},
     {n:'Mourad Telmini', a:'University of Tunis El Manar, Tunisia'},
     {n:'Sanae Samsam', a:'INFN, Milan, Italy'},
     {n:'Fadwa El Ayachi', a:'Mohammed V University, Rabat, Morocco'},
     {n:'Abdessamad Belfakir', a:'Vanguard Center – University Mohammed VI Polytechnic, Morocco'},
     {n:'Khadija El Anouz', a:'FST El Hoceima – University Abdelmalek Essaadi, Morocco'},
     {n:'Laure Gouba', a:'FICTP, Trieste, Italy'},
   ],
   steering:[
     {n:'Francesco Petruccione', a:'Stellenbosch University, South Africa', role:'Chair'},
     {n:'Andreas Buchleitner', a:'University of Freiburg, Germany'},
     {n:'Artur Ekert', a:'University of Oxford, UK'},
     {n:'Laura Greene', a:'Florida State University, USA'},
     {n:'Yassine Hassouni', a:'Mohamed V University, Rabat, Morocco'},
     {n:'Haikel Jelassi', a:'Centre National des Sciences et Technologies Nucléaires, Tunisia'},
     {n:'Peter Knight', a:'Imperial College, London, UK'},
     {n:'Barry Sanders', a:'University of Calgary, Alberta, Canada'},
     {n:'Neil Turok', a:'Perimeter Institute for Theoretical Physics, Waterloo, Canada'},
   ],
   ipc:[
     {n:'Jean Pierre Gazeau', a:'Université Paris Cité, France'},
     {n:'Alfonso Montes Rodriguez', a:'University of Seville, Spain'},
     {n:'Fabien Bretenaker', a:'Université Paris-Saclay, France'},
     {n:'Rachid Benbrik', a:'Université Cadi Ayad, Marrakech, Morocco'},
     {n:'Evaldo M. F. Curado', a:'CBPF, Rio de Janeiro, Brazil'},
     {n:'Mohammed Daoud', a:'Ibn Tofail University, Kenitra, Morocco'},
     {n:'Yassine Hassouni', a:'Mohamed V University, Rabat, Morocco'},
     {n:'Mohammed Ouchrif', a:'University Mohamed First and NIPPA, Oujda, Morocco'},
     {n:'Antonello Scardicchio', a:'Abdus Salam ICTP, Trieste, Italy'},
     {n:'Yasser Omar', a:'University of Lisbon, Portugal'},
     {n:'El Hassan Zerouali', a:'Mohamed V University, Rabat, Morocco'},
   ],
   loc:[
     {n:'Mohamed Ebn Touhami', a:'Dean of the Faculty of Sciences, Ibn Tofail University, Kenitra', role:'Head of committee'},
     {n:'Bouazza El Wahbi', a:'Vice dean of the Faculty of Sciences, Ibn Tofail University, Kenitra'},
     {n:'Bilal Aghoutane', a:'Ibn Tofail University, Kenitra'},
     {n:'Youssef Aboufadil', a:'UCA-Marrakech / FPS-Safi'},
     {n:'Mohammed Amazioug', a:'FSA Université Ibn Zohr, Agadir'},
     {n:'Adil Belhaj', a:'Mohamed V University, Rabat'},
     {n:'Abdessamad Belfakir', a:'Vanguard Center, University Mohammed VI Polytechnic, Morocco'},
     {n:'Rachid Benbrik', a:'Université Cadi Ayyad, Marrakech'},
     {n:'Mohammed Bennai', a:'FSBM Université Hassan II'},
     {n:'Zakaria Bouameur', a:'Mohammed V University'},
     {n:'Said Bouzakraoui', a:'Ibn Tofail University, Kenitra'},
     {n:'Mohammed Daoud', a:'Ibn Tofail University, Kenitra'},
     {n:'Ahmed Daassou', a:'UCA-Marrakech / FPS-Safi'},
     {n:'Abdessamad Didi', a:'ISSS, UHP, Settat, Morocco & president of MSRASI'},
     {n:'Abderrahim El Allati', a:'Abdelmalek Essaadi University, Tetouan'},
     {n:'Smail El Amrani', a:'Ibn Tofail University, Kenitra'},
     {n:'Khadija El Anouz', a:'University Abdelmalek Essaâdi, Al Hoceima'},
     {n:'Choubabi El Bouaazaoui', a:'FS Chouaib Doukkali University'},
     {n:'Kaoutar El Bachiri', a:'Mohammed V University'},
     {n:'Hanan El Faylali', a:'Ibn Tofail University, Kenitra'},
     {n:'Wijdane El Hadri', a:'Ibn Zohr University, Agadir'},
     {n:'Mohammed El Idrissi', a:'Sultan Moulay Slimane University, Beni Mellal'},
     {n:'Chakir El Mahjoub', a:'Ibn Tofail University, Kenitra'},
     {n:'Hasan El Moumni', a:'Ibn Zohr University, Agadir'},
     {n:'Bouabid El Wahidi', a:'Université Mohammed V, Rabat'},
     {n:'Farida Fassi', a:'Université Mohammed V, Rabat'},
     {n:'Nabil Habiballah', a:'FSAA Université Ibn Zohr, Agadir'},
     {n:'Rachid Houça', a:'FS Université Chouaib Doukkali'},
     {n:'Ahmed Jellal', a:'University Chouaib Doukkali, El Jadida'},
     {n:'Larbi Jebli', a:'Ibn Zohr University, Agadir'},
     {n:'Youssef Khedif', a:'FSAC Université Hassan II'},
     {n:'Alaeddine Lahbass', a:'Mohamed V University, Rabat'},
     {n:'Bouzid Manaut', a:'FP Université Sultan Moulay Slimane'},
     {n:'Mostafa Mansour', a:'FSAC Université Hassan II'},
     {n:'Mohammed Wadia Mansouri', a:'Ibn Tofail University, Kenitra'},
     {n:'Bouchra Maroufi', a:'Ibn Tofail University, Kenitra'},
     {n:'Karima Masmar', a:'Ibn Zohr University, Agadir'},
     {n:'Said Mouslih', a:'Ibn Tofail University, Kenitra'},
     {n:'Mohammed Housni', a:'Mohammed V University'},
     {n:'Mohammed Ouchrif', a:'University Mohamed First and NIPPA, Oujda'},
     {n:'Mostafa Nassik', a:'FSA Université Ibn Zohr, Agadir'},
     {n:'Moulay Brahim Sedra', a:'Ibn Tofail University, Kenitra'},
     {n:'Fatimezzahra Siyouri', a:'Mohammed V University'},
     {n:'El Hassane Tahri', a:'Mohamed I University, Oujda'},
     {n:'El Hassane Zerouali', a:'Mohamed V University, Rabat'},
     {n:'Jamal Zerouaoui', a:'Ibn Tofail University, Kenitra'},
   ]},
];

/* Series steering committee, as published in the footer of quantumafrica.org. */
const CONF_SC = [
  {n:'Francesco Petruccione', a:'Stellenbosch University', role:'Chair'},
  {n:'Barry Sanders', a:'University of Calgary', role:'Founding and past chair'},
  {n:'Andreas Buchleitner', a:'University of Freiburg'},
  {n:'Artur Ekert', a:'University of Oxford and National University of Singapore'},
  {n:'Laura Greene', a:'Florida State University'},
  {n:'Yassine Hassouni', a:'Mohamed V-Agdal University'},
  {n:'Haikel Jelassi', a:'National Institute for Nuclear Science and Technology, France'},
  {n:'Sir Peter Knight', a:'Imperial College London'},
  {n:'Franco Nori', a:'Riken and University of Michigan'},
];
const CONF_SC_PAST = [
  {n:'Fabio Benatti', a:'University of Trieste'},
  {n:'Neil Turok', a:'Perimeter Institute for Theoretical Physics'},
];

let EVENTS = [
  {slug:'junction-hackathon', type:'Hackathon', when:'past',
   title:'European Quantum Hackathon by Junction — Espoo, Finland 2026',
   n:'European Quantum Hackathon by Junction',
   subhead:'Hosted by Junction in Espoo · Finland',
   eyebrow:'European Quantum Hackathon · Junction',
   lede:'We are incredibly proud to partner with Junction for the European Quantum Hackathon stop hosted in Espoo, Finland. The event tackles real-world quantum challenges with expert-led mentorship and a global innovator community.',
   description:`We partnered with Junction for the European Quantum Hackathon in Espoo, Finland — part of the wider European Quantum Hackathon series bringing quantum computing challenges, hands-on workshops, and industry/academic mentorship to participants from across Europe and beyond.

**What the event covered**
• Real-World Challenges — Tackle complex problems using the power of quantum computing.
• Workshops & Mentorship — Learn from industry experts and academic leaders throughout the event.
• Prizes & Networking — Connect with a global community of innovators and win big.

**Event Details**
• Dates: 23–25 June 2026
• Location: Espoo, Finland
• Registration Deadline: 31 March 2026

Supported by Junction and its institutional partners this is a flagship stop on the European quantum calendar.`,
   heroImage:'/media/events/junction/1781132640865.jpeg',
   gallery:['/media/events/junction/1781132640865.jpeg','/media/events/junction/1781132641804.jpeg','/media/events/junction/1781132643921.jpeg','/media/events/junction/1781132644811.jpeg'],
   start:'2026-06-23', end:'2026-06-25', deadline:'2026-03-31', city:'Espoo', country:'Finland',
   registerUrl:'https://lnkd.in/e4ZA9d-S', org:'Junction · European Quantum Hackathon',
   status:'Delivered · June 2026'},
  {slug:'morocco-hackathon', type:'Hackathon', when:'past',
   title:'Morocco Quantum Hackathon — Rabat 2026',
   n:'Morocco Quantum Hackathon',
   subhead:'Official Media Partners · Quantum Africa',
   eyebrow:'Morocco Quantum Hackathon · Rabat',
   lede:'We were official media partners for the Morocco Quantum Hackathon – Rabat 2026, held 23–25 June 2026 with UM6P, Mohammed V University, and the Open Quantum Institute.',
   description:`We were official media partners for the Morocco Quantum Hackathon – Rabat 2026! Quantum technology is set to redefine the future, and there was no better place to witness this transformation than in the heart of Morocco.

**What to Expect**
• Real-World Challenges — Tackle complex problems using the power of quantum computing.
• Workshops & Mentorship — Learn from industry experts and academic leaders throughout the event.
• Prizes & Networking — Connect with a global community of innovators and win big.

**Event Details**
• Dates: 23–25 June 2026
• Location: Rabat, Morocco
• Registration Deadline: 31 March 2026

Supported by UM6P — University Mohammed VI Polytechnic, Mohammed V University in Rabat and the OQI — Open Quantum Institute this was an event not to miss.`,
   heroImage:'/media/events/mor/Screenshot 2026-09-05 at 12.03.34.png',
   gallery:['/media/events/mor/Screenshot 2026-09-05 at 12.03.34.png','/media/events/mor/Screenshot 2026-09-05 at 12.03.41.png'],
   start:'2026-06-23', end:'2026-06-25', deadline:'2026-03-31', city:'Rabat', country:'Morocco',
   partners:['UM6P · University Mohammed VI Polytechnic','Mohammed V University in Rabat','OQI · Open Quantum Institute'],
   registerUrl:'https://lnkd.in/e4ZA9d-S', org:'UM6P · Mohammed V University · OQI',
   status:'Delivered · June 2026'},
  {slug:'pan-hackathon', type:'Challenge', when:'past',
   title:'Hack the Horizon — The Pan-African Quantum Challenge',
   n:'Hack the Horizon · Pan-African Quantum Challenge',
   subhead:'Launched by the Africa Quantum Consortium',
   eyebrow:'Landmark pan-African initiative',
   lede:'Hack the Horizon — the Pan-African Quantum Challenge launched by the Africa Quantum Consortium activated Africa\'s sovereign quantum ecosystem, uniting innovators, industry leaders and problem-solvers to co-build solutions.',
   description:`Hack the Horizon — the Pan-African Quantum Challenge launched by the Africa Quantum Consortium.

This landmark initiative assembled and activated Africa's sovereign quantum ecosystem. More than a competition, this was the strategic assembly of Africa's quantum future, uniting the continent's top innovators, visionary industry leaders, and the next generation of problem-solvers to co-build solutions for the continent and the world.`,
   heroImage:'/media/events/pan.png',
   gallery:['/media/events/pan.png'],
   city:'Pan-African · Online + in-person hubs', country:'Africa-wide',
   registerUrl:'https://lnkd.in/gJTuNKXE', org:'Africa Quantum Consortium',
   status:'Delivered'},
  {slug:'unicc-course', type:'Online Programme', when:'past',
   title:'International Quantum Course — UNICC & ITU',
   n:'International Quantum Course',
   subhead:'Free online programme launched at ITU AI & Quantum for Good Summit',
   eyebrow:'The International Quantum Course is live! 📚🎓',
   lede:'Quantum technology is shaping the future, but understanding it should not be limited to a few specialists. The International Quantum Course is a free online programme that opens the world of quantum to everyone — developed by Jim Stolze, Quantum Delta NL, UNICC and ITU.',
   description:`Quantum technology is shaping the future, but understanding it should not be limited to a few specialists.

The International Quantum Course — a free online programme that opens the world of quantum to everyone. Through the course, participants can:
• Learn the foundations of quantum mechanics
• Explore current applications and future potential of quantum technology
• Earn a certificate upon completion

Developed by experts led by Jim Stolze, funded by Quantum Delta NL and launched together with UNICC and International Telecommunication Union, the course is now available in Dutch and English, with more languages on the way.

The official launch took place in Geneva at ITU's AI & Quantum for Good Summit, as part of International Year of Quantum Science and Technology.`,
   heroImage:'/media/events/quantumforeveryone.png',
   gallery:['/media/events/quantumforeveryone.png'],
   links:[{l:'Get started now', u:'https://lnkd.in/dXefig6n'},{l:'Read more here', u:'https://lnkd.in/eJhqR2tR'}],
   city:'Geneva · Online worldwide', country:'Switzerland',
   org:'Quantum Delta NL · UNICC · ITU',
   status:'Live · Free access'},
  {slug:'qtedu-hackathon', type:'Hackathon', when:'past',
   title:'QTEdu · Pan-African Quantum Hackathon — AIMS Ghana',
   n:'QTEdu Pan-African Quantum Hackathon',
   subhead:'Accra, Ghana · July 2025',
   eyebrow:'First-ever African Quantum Hackathon',
   lede:'Our founder represented Quantum Africa at the first-ever African Quantum Hackathon, hosted by AIMS Ghana 🇬🇭 and the Open Quantum Institute in July 2025 in Accra.',
   description:`Our founder represented Quantum Africa at the first-ever African Quantum Hackathon, hosted by AIMS Ghana 🇬🇭 and the Open Quantum Institute.

It was a true pleasure connecting with brilliant African quantum talents who are shaping the future of science and innovation across the continent. ⚛️🚀

A huge thank you to AIMS Ghana, the Open Quantum Institute, and every participant for making the first-ever African Quantum Hackathon a reality.`,
   heroImage:'/media/events/qtedu/1.png',
   gallery:['/media/events/qtedu/1.png','/media/events/qtedu/2.png','/media/events/qtedu/3.png'],
   start:'2025-07-01', end:'2025-07-03', city:'Accra', country:'Ghana',
   org:'AIMS Ghana · Open Quantum Institute',
   status:'Delivered · July 2025'},
  {slug:'qml4africa-2', type:'Workshop', when:'past', series:'QML4Africa', edition:'02', status:'Delivered',
   title:'Quantum Machine Learning 4 Africa — Second Edition',
   n:'Quantum Machine Learning 4 Africa — Second Edition',
   subhead:'Advancing Quantum Machine Learning',
   lede:'Building on the foundations of the first edition, the second workshop explored more advanced concepts and practical approaches to quantum machine learning, bringing together African students, researchers, and quantum enthusiasts.',
   description:'Building on the foundations of the first edition, the second workshop explored more advanced concepts and practical approaches to quantum machine learning, bringing together African students, researchers, and quantum enthusiasts.',
   start:'2026-08-01', end:'2026-08-05', city:'Lagos', country:'Nigeria',
   editionUrl:'https://sites.google.com/view/qml4africa/home',
   image:'/media/edition2.jpeg',
   heroImage:'/media/edition2.jpeg',
   org:'DeepLearning Indaba'},
  {slug:'qml4africa-1', type:'Workshop', when:'past', series:'QML4Africa', edition:'01', status:'Delivered',
   title:'Quantum Machine Learning 4 Africa — First Edition',
   n:'Quantum Machine Learning 4 Africa — First Edition',
   subhead:'Introduction to Quantum Machine Learning',
   lede:'An introductory hands-on workshop introducing participants to the foundations of quantum machine learning, quantum computing concepts, and practical implementation using quantum programming tools.',
   description:'An introductory hands-on workshop introducing participants to the foundations of quantum machine learning, quantum computing concepts, and practical implementation using quantum programming tools.',
   start:'2025-09-08', end:'2025-09-12', city:'Kigali', country:'Rwanda',
   editionUrl:'https://sites.google.com/view/qml4africa/past-editions',
   image:'/media/edition1.JPG',
   heroImage:'/media/edition1.JPG',
   org:'DeepLearning Indaba'},
  {slug:'qiskit-fallfest-2026', type:'Festival', when:'upcoming',
   title:'Qiskit Fall Fest 2026 · Nairobi',
   n:'Qiskit Fall Fest 2026 — Nairobi',
   subhead:'Hosted by QuantumKe · University of Nairobi',
   eyebrow:'QFF26 · A decade of quantum on the cloud',
   lede:'QuantumKe is bringing Qiskit Fall Fest 2026 to Nairobi this October — celebrating a decade of quantum computing on the cloud with workshops, Qiskit 101, hands-on sessions, a hackathon challenge, and networking with Kenya’s growing quantum community.',
   description:`QuantumKe brings Qiskit Fall Fest 2026 to Nairobi — celebrating **a decade of quantum computing on the cloud**.

**What to expect**
• Qiskit 101 — Foundations for students, researchers and professionals new to the stack
• Hands-on technical workshops — circuit building, applications and quantum machine learning
• Hackathon challenge — Solve real-world problems using Qiskit with mentorship
• Community networking — Connect with Kenya’s growing quantum ecosystem and peers from across the region

Open to **students, researchers, professionals, and anyone curious** about quantum computing.

**Event Details**
• Dates: 1 – 24 October 2026
• Venue: University of Nairobi (Main Campus)
• Tags: #QFF26 · #IBMQuantum · #QiskitFallFest`,
   heroImage:'/media/events/qiskit.jpeg',
   gallery:['/media/events/qiskit.jpeg'],
   start:'2026-10-01', end:'2026-10-24', city:'Nairobi', country:'Kenya',
   registerUrl:'https://luma.com/lbaau2un',
   links:[{l:'Register on Luma', u:'https://luma.com/lbaau2un'},{l:'Learn more', u:'https://lnkd.in/dAS3UCtq'}],
   org:'QuantumKe · IBM Quantum · Qiskit',
   status:'Scheduled · October 2026'},
  {slug:'zambia-quantum-seminar-1', type:'Seminar', when:'upcoming',
   title:'Quantum Zambia — Inaugural Quantum Science Seminar',
   n:'Quantum Science Seminar · Quantum Zambia',
   subhead:'First Quantum Science Seminar hosted by Quantum Zambia',
   eyebrow:'Quantum Zambia milestone · Free attendance + certificates',
   lede:'Quantum Zambia, under Quantum Africa, hosts its first Quantum Science Seminar on Friday 7 August 2026 — a full day of talks from 09:00 to 15:00 CAT (UTC+2), open to all with certificates issued after the seminar.',
   description:`Quantum Zambia, under Quantum Africa, hosts its **first Quantum Science Seminar** — an exciting milestone for Zambia’s emerging quantum ecosystem.

**Programme**
• 09:00 – 10:00 — Welcome & keynote: Why quantum matters for Africa
• 10:15 – 12:00 — Technical session: Foundations of quantum computing and quantum information
• 12:00 – 13:00 — Break + networking
• 13:00 – 15:00 — Panel: Opportunities in African quantum science + student lightning talks

**Attendance**
• Participation is free for all attendees
• Certificates of attendance will be issued after the seminar
• Please share the registration link with colleagues and encourage them to register

**Timings**
• Friday, 7 August 2026
• 09:00 – 15:00 hrs Zambian Time (CAT / UTC+2)
• Equivalent to 07:00 – 13:00 UTC`,
   image:'/media/seminar.png',
   heroImage:'/media/seminar.png',
   gallery:['/media/seminar.png','/media/events/zambia/1785899683901.jpeg','/media/events/zambia/1785929131822.jpeg','/media/events/zambia/1786000206630.jpeg','/media/events/zambia/1786001452228.jpeg'],
   start:'2026-08-07', end:'2026-08-07', deadline:'2026-08-05', city:'Lusaka', country:'Zambia',
   registerUrl:'https://lnkd.in/dEthyAQY',
   org:'Quantum Zambia · Quantum Africa',
   status:'Planned · August 2026'},
  {slug:'qml4africa-3', type:'Workshop', when:'upcoming', series:'QML4Africa', edition:'03', status:'Planned',
   title:'Quantum Machine Learning 4 Africa — Third Edition',
   n:'Quantum Machine Learning 4 Africa — Third Edition',
   subhead:'Third Edition',
   lede:'A new edition of QML4Africa bringing together African learners and researchers for another hands-on exploration of quantum machine learning.',
   description:'A new edition of QML4Africa bringing together African learners and researchers for another hands-on exploration of quantum machine learning.',
   image:'/media/south.png',
   heroImage:'/media/south.png',
   org:'DeepLearning Indaba'},
];

let PROJECTS = [
  {slug:'causality-engine', title:'Quantum Circuit Causality Engine', area:'Quantum computing · Tooling', status:'current',
   short:'An open-source tool that analyses quantum circuits to determine which gates and qubits influence measurement outcomes, by building causal dependency graphs and light cones.',
   tech:['Python','Qiskit','Graph analysis'], repo:true, art:'lightcone', image:'media/projects/project1.png', cover:'media/projects/project1.png', hero:'media/projects/project1.png'},
  {slug:'disease-prediction', title:'Quantum-Inspired ML for Disease Prediction', area:'Quantum machine learning · Health', status:'current',
   short:'A feature-mapping and interpretability study asking whether quantum-inspired kernels help on the small, noisy health datasets African clinical research actually produces.',
   tech:['Python','scikit-learn','Feature maps'], repo:false, art:'kernel', image:'media/projects/project2.png', cover:'media/projects/project2.png', hero:'media/projects/project2.png'},
  {slug:'materials-ml', title:'Lightweight ML for Predicting Quantum Material Properties', area:'Materials science · Machine learning', status:'current',
   short:'Small, interpretable models that predict material properties well enough to tell an experimentalist which candidates are worth making.',
   tech:['Python','scikit-learn','Open materials databases'], repo:false, art:'spectra', image:'media/projects/project3.png', cover:'media/projects/project3.png', hero:'media/projects/project3.png'},
  {slug:'satellite-qkd', title:'Satellite Quantum Communication Across Africa', area:'Quantum communication · Infrastructure', status:'current',
   short:'Link budgets, key rates and pass windows for satellite QKD between African research hubs — and a first ranked list of city pairs worth a pilot.',
   tech:['Python','Orbital and link modelling','Geospatial analysis'], repo:false, art:'qkd', image:'media/projects/project4.png', cover:'media/projects/project4.png', hero:'media/projects/project4.png'},
  {slug:'quantum-education-llm', title:'Quantum Education LLM for African Communities', area:'Education technology · Quantum education', status:'current',
   short:'A domain-specific language model for quantum computing education, built for the contexts, prior backgrounds and constraints African learners actually have.',
   tech:['Python','Open LLMs','Retrieval-augmented generation'], repo:false, art:'circuit', image:'media/projects/project5.png', cover:'media/projects/project5.png', hero:'media/projects/project5.png'},
  {slug:'healthcare-quantum', title:'Quantum Computing for Healthcare Applications', area:'Quantum algorithms · Health', status:'current',
   short:'Where in the biomedical research pipeline quantum methods could genuinely shorten a computation — and where they could not.',
   tech:['Python','Qiskit','Computational chemistry'], repo:false, art:'bloch', image:'media/projects/project6.png', cover:'media/projects/project6.png', hero:'media/projects/project6.png'},
  {slug:'secure-qml', title:'Secure Quantum Machine Learning', area:'Quantum machine learning · Security', status:'current',
   short:'Whether quantum machine learning models can be attacked, how, and what it takes to make them trustworthy.',
   tech:['Python','PennyLane / Qiskit','Adversarial ML'], repo:false, art:'wave', image:'media/projects/project7.png', cover:'media/projects/project7.png', hero:'media/projects/project7.png'},
];

const DEFAULT_ARTICLES = [
  {slug:'ayef-quantum-economy-policy-brief', title:'Preparing Africa for the Quantum Economy: A Youth-Centred Policy Framework for Building Africa\u2019s Quantum Ecosystem',
   type:'Policy brief', date:'2026-09-05', author:'Aliyu Ibrahim Usman', read:'11 min',
   summary:'Aliyu Ibrahim Usman\u2019s policy brief, \u201cPreparing Africa for the Quantum Economy: A Youth-Centred Policy Framework for Building Africa\u2019s Quantum Ecosystem,\u201d has been selected for inclusion in the AYEF 2026 Knowledge and Policy Series. It proposes a Six-Pillar African Quantum Ecosystem Framework, an African Quantum Youth Pipeline, a 2034 roadmap, and the principle of strategic technological sovereignty for the continent.',
   body:'Preparing Africa for the Quantum Economy: A Youth-Centred Policy Framework for Building Africa\u2019s Quantum Ecosystem\n\nNigerian technology entrepreneur and quantum ecosystem advocate Aliyu Ibrahim Usman has had his policy brief, \u201cPreparing Africa for the Quantum Economy: A Youth-Centred Policy Framework for Building Africa\u2019s Quantum Ecosystem,\u201d selected for inclusion in the AYEF 2026 Knowledge and Policy Series.\n\nThe policy brief examines how Africa can prepare for the emerging quantum economy and argues that the continent should begin building the foundations for meaningful participation before quantum technologies become commercially mature.\n\nWhile much of the current global technology conversation is focused on artificial intelligence, quantum computing, quantum communication, quantum sensing and post-quantum cybersecurity are becoming increasingly important areas for governments, businesses, researchers and technology professionals to understand.\n\nThe paper argues that Africa\u2019s quantum opportunity should not be measured only by whether the continent can build large-scale quantum computers. Instead, the focus should be on developing the talent, research capacity, infrastructure, businesses, institutions and policy frameworks required for Africans to create value around quantum technologies.\n\nA major focus of the framework is the role of African youth. Usman proposes an African Quantum Youth Pipeline, moving young people from awareness and STEM foundations through quantum literacy, technical training, research and mentorship, industry exposure, entrepreneurship and ultimately African quantum leadership. The framework also emphasizes that the future quantum workforce will extend beyond physicists to include software developers, mathematicians, engineers, cybersecurity professionals, entrepreneurs, educators, economists, lawyers and policymakers.\n\nThe policy brief proposes a Six-Pillar African Quantum Ecosystem Framework covering human capital; shared research and computing infrastructure; quantum entrepreneurship and investment; quantum-safe digital infrastructure; continental collaboration; and policy, governance and strategic investment.\n\nIt further proposes an African Quantum Youth Initiative and an African Quantum Ecosystem Index, alongside a 2034 roadmap designed to move Africa from early awareness and capability-building toward commercialization, industry participation and stronger representation in international quantum policy and standards discussions.\n\nA key principle running through the paper is strategic technological sovereignty. Rather than attempting to independently build every component of the quantum technology stack, Usman argues that African countries should build capabilities where they can, partner where necessary, develop expertise before dependency develops, and build African companies and intellectual property.\n\nThe proposed 2034 vision is ultimately about moving beyond simply consuming technologies developed elsewhere. The paper calls for an Africa where young people can access pathways into quantum technology, researchers can access the infrastructure they need, startups can find talent and capital, governments can assess quantum-related cybersecurity risks, and African institutions can participate meaningfully in shaping the global quantum economy.\n\nThe paper concludes with a simple proposition:\n\n\u201cAfrica should not wait to be invited into it. Africa should build its place in it.\u201d\n\nAliyu Ibrahim Usman is the Founder & CEO of Kwantom and Founder & CEO of Cyber Cadets Academy. His work focuses on technical capacity development, emerging technologies, quantum ecosystem development and creating pathways for young Africans to participate in the technologies shaping the future.',
   image:'media/news/policy.jpeg', cover:'media/news/policy.jpeg', hero:'media/news/policy.jpeg',
   chapter:'Nigeria', url:''},
  {slug:'uganda-indaba-2026', title:'Quantum Uganda Chapter Connects with the African AI Community',
   type:'Chapter update', date:'2026-09-03', author:'Ssmaganda George, Chapter Lead', read:'3 min',
   summary:'Quantum Uganda was represented at Deep Learning Indaba 2026 by chapter lead Ssmaganda George, running a community booth together with Uganda Christian University and Makerere University members — welcoming 50+ visitors, distributing all swag, and seeding three new national chapter leads.',
   body:'Quantum Uganda was represented at Deep Learning Indaba 2026 by its chapter lead Ssmaganda George, who joined the Quantum Uganda Community Booth alongside members of the university community from Uganda Christian University and Makerere University.\n\nThe team engaged with participants throughout the final day, introducing Quantum Uganda\u2019s activities and connecting with students, researchers, and professionals interested in quantum technologies.\n\nDay 6 highlights:\n\n\u2022 50+ booth visitors, 3 new leads for establishing Quantum Africa chapters across Africa\n\u2022 Community materials and swag fully distributed\n\nA strong opportunity to grow Quantum Uganda\u2019s visibility and connect the chapter with the wider African technology and research community.',
   image:'media/news/uganda.jpeg', cover:'media/news/uganda.jpeg', hero:'media/news/uganda.jpeg',
   chapter:'Uganda', url:''},
  {slug:'gesda-quantum-summit-2026', title:'Quantum Africa at the GESDA - Geneva Science and Diplomacy Anticipator',
   type:'Report', date:'2026-08-18', author:'Geneva delegation', read:'7 min',
   summary:'Quantum Africa participated in GESDA Science and Diplomacy Week hosted at CERN — African voices in the global quantum dialogue, meeting with the Open Quantum Institute, African hackathon winners QUALARIA, and the wider African quantum ecosystem.',
   body:'Quantum Africa is proud to have been represented at the Science and Diplomacy Week hosted by GESDA, held at CERN \ud83c\udde8\ud83c\udded\n\nThis participation marks a significant step forward for Africa\u2019s presence in the global quantum dialogue, highlighting the growing talent, innovation, and leadership emerging across the continent.\n\nWe extend our sincere thanks to St\u00e9phane Decout\u00e8re for the kind invitation and to the OQI \u2013 Open Quantum Institute and Martin Gastal for their continued efforts in making quantum technologies more accessible worldwide.\n\nIt was a pleasure to connect with members of the African quantum ecosystem, including Prince Koree Osei, PhD, Charlene (Asiedu) Danso Amoah, and the QUALARIA team, Augustina Agyeman, and Prince Dorcis, winners of the first Quantum African Hackathon, and to engage in impactful conversations with global quantum leaders.\n\nQuantum Africa also attended the GenQ Hackathon opening ceremony, where the challenges and discussions led by Alexandra Beckstein and Tobias Denzler showcased the next generation of quantum innovators.\n\nWe are proud to see African voices and contributions increasingly recognized in shaping the future of quantum science and technology on the world stage \ud83c\udf0d',
   image:'media/news/Gesda/1.jpeg', cover:'media/news/Gesda/1.jpeg', hero:'media/news/Gesda/1.jpeg',
   gallery:['media/news/Gesda/1.jpeg','media/news/Gesda/2.jpeg','media/news/Gesda/3.jpeg'],
   chapter:'Pan-African', url:''},
  {slug:'women-quantum-roundtable', title:'Quantum Africa Joins African Women in Quantum Roundtable',
   type:'Member story', date:'2026-08-29', author:'Quantum Circle & Africa Quantum Consortium', read:'4 min',
   summary:'Yousra Farhani joined 18 women leaders from across Africa working in quantum research, industry and policy at the Quantum Circle roundtable hosted by the Africa Quantum Consortium — reflecting on 2025 and aligning on a collective 2026 communiqu\u00e9.',
   body:'Quantum Africa Founder Yousra Farhani joined 18 women leaders from across Africa working in quantum research, industry, and policy for the Quantum Circle roundtable hosted by the Africa Quantum Consortium.\n\nThe December roundtable reflected on developments and priorities from 2025 and explored key priorities for 2026, culminating in a collective communiqu\u00e9 outlining shared commitments and priorities for the year ahead.\n\nThe discussion brought together women shaping the future of Africa\u2019s quantum ecosystem and created an important space for collaboration, exchange, and collective action.',
   image:'media/news/quantumcircle.png', cover:'media/news/quantumcircle.png', hero:'media/news/quantumcircle.png',
   chapter:'Pan-African', url:'https://www.youtube.com/watch?v=SJT1w7xtXSU'},
];

const QUBO_PUB = {
  slug:'qubo-microgrid-optimization',
  title:'QUBO Model for Energy Planning',
  subTitle:'Quantum-Enhanced Microgrid Optimization for Rural Electrification in Africa',
  doi:'https://dl.acm.org/doi/pdf/10.1145/3795101.3814703',
  authors:[
    {n:'Yousra Farhani',               a:'NNF Quantum Computing Programme, Niels Bohr Institute, University of Copenhagen, Copenhagen, Denmark',  e:'yousra.farhani@nbi.ku.dk'},
    {n:'Helarie Rose Medie Fah',       a:'University of Kwazulu Natal, Durban, South Africa',                                                      e:'helarie@aims.ac.za'},
    {n:'Ahmed Samir',                  a:'Cairo University, Cairo, Egypt',                                                                           e:'ahmedsamir1598@gmail.com'},
    {n:'Marzuq Yussif Etsie Adam',     a:'University of Ghana, Accra, Ghana',                                                                       e:'myeadam@st.ug.edu.gh'},
    {n:'Kenedy Mwendwa Mulila',        a:'African Institute for Mathematical Sciences (AIMS), Mbour, Senegal',                                      e:'Kenedy.m.mulila@aims-senegal.org'},
    {n:'Abdulmajid Osumanu',           a:'African Institute for Mathematical Sciences (AIMS) Ghana, Accra, Ghana',                                  e:'abdulmajid@aims.edu.gh'},
  ],
  area:'Quantum optimization · Energy access',
  short:'Quantum-enhanced microgrid optimization for rural electrification in Africa — a QUBO-based planning model exploring demand, generation, storage and grid extension trade-offs.',
  tech:['QUBO','Quantum annealing','Energy systems','Microgrid modelling'],
  repo:false, art:'network', proposedBy:'Yousra Farhani',
  description:`This work introduces a QUBO (Quadratic Unconstrained Binary Optimization) formulation for community-level energy planning, with a focus on rural microgrid electrification scenarios in Africa. The model jointly considers generation mix, storage sizing, demand profiles, and capital and operational trade-offs so that planners can compare centralized grid extension, standalone solar microgrids, and hybrid configurations using quantum annealing and classical QUBO solvers.

The case studies and sensitivity analyses demonstrate how QUBO-based optimization can support locally tailored energy-access decisions — including demand sizing, renewable penetration targets, and resilience to seasonal load variation — with particular attention to communities currently without reliable grid access.`,
};

/* Opportunities feed.
   __OPPORTUNITIES_JSON__ is replaced at build time with feed/opportunities.json.
   At runtime the page tries to load a fresher data/opportunities.json written by
   feed/fetch_opportunities.py; if that is unavailable it keeps this snapshot. */
const OPP_FEED = __OPPORTUNITIES_JSON__;
const EVT_FEED = __EVENTS_JSON__;
const CONTENT_INLINE = __CONTENT_JSON__;

(function _bootstrap(){
  // Ensure first paint + loadContent complete both pass through the footer
  // socials hydrate function, even on browsers that fire DOMContentLoaded
  // before our appended <script> finishes parsing (sandbox webview).
  let _hydrated = 0;
  function tryHydrate(force){
    if(!document.getElementById('footSocials')) return false;
    // run at most 4 times (first / after render / after loadContent / after force publish)
    if(!force && _hydrated >= 4) return true;
    _hydrated++;
    try { hydrateFooterSocials(); } catch(e){}
    return true;
  }
  const _origHydrate = (typeof hydrateFooterSocials !== 'undefined') ? hydrateFooterSocials : null;
  // Hook rebuildFromContent: after each rebuild render socials again with fresh CONTENT.site
  try {
    const origRebuild = rebuildFromContent;
    window.rebuildFromContent = function(){
      try { return origRebuild.apply(this, arguments); }
      finally { try { tryHydrate(true); } catch(e){} }
    };
    rebuildFromContent = window.rebuildFromContent;
  } catch(e){}
  document.addEventListener('DOMContentLoaded', () => { tryHydrate(); setTimeout(()=>tryHydrate(), 0); setTimeout(()=>tryHydrate(), 300); setTimeout(()=>tryHydrate(), 1600); });
  const orc = new MutationObserver(() => { if(tryHydrate()) orc.disconnect(); });
  try { orc.observe(document.documentElement, {childList:true, subtree:true}); } catch(e){}
  // Make tryHydrate accessible for manual retry
  window.__hydrateFootSocials = tryHydrate;
})();

/* Where the live data comes from.
   By default the page reads two JSON files written by the backend's exporter.
   Point it at the running API instead with either of:
     <meta name="qa-feed" content="https://feed.quantum-africa.org/api">
     window.QA_FEED = 'https://feed.quantum-africa.org/api';
   The API sends CORS headers, so it works from any origin.
   When running locally (file://, localhost, or 127.0.0.1) we also probe for the
   admin CMS running at http://127.0.0.1:8000 — if it responds, we temporarily
   override the feed to read directly from the panel so edits show up instantly
   without needing to re-export the static JSON files or re-run the build. */
(function autoFeedProbe(){
  try{
    const h = (location.hostname || '').toLowerCase();
    const p = location.protocol.toLowerCase();
    const local = p === 'file:' || h === '' || h === 'localhost' || h === '127.0.0.1' ||
                  /\.local$/.test(h);
    if(!local) return;
    fetch('http://127.0.0.1:8000/api/health', {mode:'cors', cache:'no-store'})
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(j => { if(j && j.ok){ try{ window.QA_FEED = 'http://127.0.0.1:8000/api'; }catch(e){} } })
      .catch(()=>{});
  }catch(_){}
})();
/* ---------- live content ----------
   CONTENT is whatever has been entered in the admin panel. It arrives at
   runtime from data/content.json, or from the API when one is configured.

   cx(path, fallback)  a value, or the placeholder that asks for it
   cval(path)          the raw value, or '' — for attributes and tests
   clist(key)          a collection, or [] */
let CONTENT = {};
let CONTENT_META = { loaded:false, updated:null };
let _contentInlineUsed = false;

/* cval/cx/cnum/clist support BOTH nested CONTENT.pages.about.heroImage
   AND flat dotted top-level keys CONTENT["pages.about"].heroImage.
   The CMS schema writes section keys like "pages.home" as flat string keys
   but the site renders them as dotted split-paths. Accept both shapes
   transparently so older content.json exports and newer ones all render.
   Also the fetch-response normalises everything to nested on import. */
function _walk(node, parts){
  for(let i = 0; i < parts.length; i++){
    if(node == null) return undefined;
    const k = parts[i];
    if(!Array.isArray(node) && typeof node === 'object'){
      // Try exact key first (common), then longest dotted prefix covering
      // all remaining parts concatenated with "." (fallback for flat keys).
      if(k in node){
        node = node[k];
        continue;
      }
      const flat = parts.slice(i).join('.');
      if(flat in node){
        return node[flat];
      }
    }
    node = Array.isArray(node) ? node[Number(k)] : node[k];
  }
  return node;
}
function _nestFlatKeys(doc){
  if(!doc || typeof doc !== 'object' || Array.isArray(doc)) return doc;
  const out = {};
  for(const key of Object.keys(doc)){
    const val = doc[key];
    if(typeof key === 'string' && key.indexOf('.') !== -1){
      const parts = key.split('.');
      let cur = out;
      for(let i = 0; i < parts.length - 1; i++){
        const p = parts[i];
        if(!(p in cur) || typeof cur[p] !== 'object' || Array.isArray(cur[p])) cur[p] = {};
        cur = cur[p];
      }
      cur[parts[parts.length - 1]] = val;
      // Also keep flat key for legacy clist('pages.home') / CONTENT['pages.home'] access.
      out[key] = val;
    } else {
      out[key] = val;
    }
  }
  return out;
}

function cval(path){
  const v = _walk(CONTENT, String(path).split('.'));
  return v == null ? '' : v;
}
function cx(path, fallback){
  const raw = cval(path);
  const v = (typeof raw === 'string') ? raw.trim() : raw;
  if(v === '' || v == null || (Array.isArray(v) && !v.length)) return fallback === undefined ? '' : fallback;
  return esc(Array.isArray(v) ? v.join(', ') : v);
}
function cnum(path, fallback){
  const raw = cval(path);
  const v = (typeof raw === 'string') ? raw.trim() : raw;
  if(v === '' || v == null) return fallback;
  return v;
}

function _isMail(value){
  // Bare email address → treat as mailto:. If it already has mailto: keep as-is.
  const s = String(value || '').trim();
  if(!s) return false;
  if(s.toLowerCase().startsWith('mailto:')) return true;
  // No scheme + has exactly one @ and no spaces: it's probably an email.
  return !/^[a-z][a-z0-9+.\-]*:/i.test(s) && s.indexOf('@') !== -1 && s.indexOf(' ') === -1 && s.indexOf('\n') === -1;
}
function _href(value){
  const s = String(value || '').trim();
  if(!s) return null;
  return _isMail(s) ? (s.toLowerCase().startsWith('mailto:') ? s : 'mailto:' + s) : s;
}
function _linkRel(value){
  const href = _href(value);
  if(!href) return '';
  if(href.toLowerCase().startsWith('mailto:') || href.startsWith('#')) return '';
  return ' target="_blank" rel="noopener noreferrer"';
}
function clist(key){
  const byFlat = CONTENT[key];
  if(Array.isArray(byFlat)) return byFlat;
  const parts = String(key).split('.');
  if(parts.length > 1){
    const nested = _walk(CONTENT, parts);
    if(Array.isArray(nested)) return nested;
  }
  return [];
}
/* An uploaded image, rendered into the same slot the placeholder uses, so the
   layout does not move when a picture finally arrives. */
function _assetSrc(v){
  if(!v) return '';
  if(/^(https?:|data:)/.test(v)) return v;
  if(v.startsWith('/')) return v;
  return '/' + v;
}
function cimg(path, alt, spec, cls){
  const v = cval(path);
  if(!v) return media(arguments[4] || 'network', alt, spec, cls);
  return `<div class="slot ${cls||''} filled"><img src="${esc(_assetSrc(v))}" alt="${esc(alt||'')}" loading="lazy"></div>`;
}
function rimg(v, alt, spec, cls, fallbackArt){
  if(!v) return media(fallbackArt || 'circuit', alt, spec, cls);
  return `<div class="slot ${cls||''} filled"><img src="${esc(_assetSrc(v))}" alt="${esc(alt||'')}" loading="lazy"></div>`;
}

const FEED = (() => {
  const m = document.querySelector('meta[name="qa-feed"]');
  const base = String((typeof window !== 'undefined' && window.QA_FEED) || (m && m.content) || '').replace(/\/+$/,'');
  return base
    ? { base, jobs: base + '/opportunities', events: base + '/events',
        content: base + '/content', api: true }
    : { base:'', jobs: 'data/opportunities.json', events: 'data/events.json',
        content: 'data/content.json', api: false };
})();

let EVTS = EVT_FEED.items.slice();
let EVT_META = { updated: EVT_FEED.updated, live: false, tried: false };
const EVT_TYPES = ['Conference','Workshop','Summer school','Symposium','Seminar','Hackathon','Programme'];
let OPPS = OPP_FEED.items.slice();
let OPP_META = { updated: OPP_FEED.updated, live: false, tried: false };
const OPP_SOURCES = OPP_FEED.sources;
const OPP_TYPES = ['PhD','Postdoc','MSc','Faculty','Research fellow','Internship','Summer school','Industry'];

let PEOPLE = [
  {slug:'p1', group:'Leadership'},{slug:'p2', group:'Leadership'},{slug:'p3', group:'Leadership'},
  {slug:'p4', group:'Advisors'},{slug:'p5', group:'Advisors'},
  {slug:'p6', group:'Chapter leads'},{slug:'p7', group:'Chapter leads'},{slug:'p8', group:'Chapter leads'},
];
const PEOPLE_GROUPS = [
  ['Leadership',   ''],
  ['Advisors',     ''],
  ['Chapter leads',''],
];
const PERSON_LINKS = [
  {k:'linkedin', t:'LinkedIn'},
  {k:'scholar',  t:'Google Scholar'},
  {k:'orcid',    t:'ORCID'},
];

const PARTNER_CATS = ['Academic','Research','Industry','Education','Strategic'];
let PARTNERS = [
  {name:'Junction', category:'Industry', logo:'/media/partners/Junction_Logo.png',
   country:'Finland', url:''},
  {name:'Qiskit / IBM Quantum', category:'Industry',
   logo:'/media/partners/Logo300x300px5_ae1945a3-9bdf-4706-9d43-e5245bd9e8fc.png',
   country:'Global', url:''},
  {name:'Africa Quantum Consortium', category:'Strategic',
   logo:'/media/partners/Screenshot 2026-09-05 at 15.24.35.png',
   country:'Pan-African', url:''},
  {name:'UNICC', category:'International organisations',
   logo:'/media/partners/Screenshot 2026-09-05 at 16.22.52.png',
   country:'Global', url:''},
  {name:'Quantum Circle', category:'Strategic',
   logo:'/media/partners/Screenshot 2026-09-05 at 16.30.07.png',
   country:'Pan-African', url:''},
  {name:'African Institute for Mathematical Sciences (AIMS)', category:'Academic',
   logo:'/media/partners/aims_logos-02.png', country:'Pan-African', url:''},
  {name:'Makerere University', category:'Academic',
   logo:'/media/partners/cropped-logo_top2.jpg', country:'Uganda', url:''},
  {name:'Deep Learning Indaba', category:'Education',
   logo:'/media/partners/indaba-logo.png', country:'Pan-African', url:''},
  {name:'Northern Quantum Initiative (NQI)', category:'Strategic',
   logo:'/media/partners/Screenshot 2026-09-05 at 16.41.50.png',
   country:'Pan-African', url:''},
];
function partnerLogoCell(p){
  const src = (p.logo||'').trim();
  const style = 'display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:220px;padding:4px;gap:0;';
  const imgStyle = 'max-width:100%;max-height:88px;width:auto;height:auto;object-fit:contain;object-position:center;filter:saturate(1.02);';
  const img = src
    ? `<img src="${esc(_assetSrc(src))}" alt="${esc(p.name||'Partner logo')}" title="${esc(p.name||'Partner')}" loading="lazy" style="${imgStyle}">`
    : `<span class="mk"></span><span>${esc(p.name||'PARTNER LOGO')}</span>`;
  const tag = p.url
    ? `<a class="logo-cell" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" title="${esc(p.name||'Partner')}" style="${style}">${img}</a>`
    : `<div class="logo-cell" title="${esc(p.name||'Partner')}" style="${style}">${img}</div>`;
  return tag;
}
function partnerWall(limit){
  const list = limit ? PARTNERS.slice(0, limit) : PARTNERS;
  if (!list.length) {
    const n = limit || 8;
    return Array.from({length:n}).map(()=>`<div class="logo-cell rv"><span class="mk"></span>PARTNER LOGO</div>`).join('');
  }
  return list.map(partnerLogoCell).join('');
}

let ARTICLES = DEFAULT_ARTICLES.slice();

let HERO_LINES = [
  {a:'We are building Africa\u2019s ', b:'quantum ecosystem.',
   p:'Quantum technology will redraw the map of who leads this century. Africa will be on that map \u2014 through the students we teach, the research we open to anyone on the continent, and the institutions we connect to the people defining the field.'},
  {a:'We are training Africa\u2019s ', b:'quantum generation.',
   p:'Webinars, workshops and a free AI tutor, run for students and researchers anywhere on the continent \u2014 no lab, no travel budget and no gatekeeper needed to start.'},
  {a:'We are opening research ', b:'to the whole continent.',
   p:'Our projects are open by default: read the work, run the code, join a team. What it takes to contribute is curiosity, not an invitation.'},
];
let VOICES = [];
let HIGHLIGHT = null;
let ARTICLES_AGG = null;
let HERO_SLIDES = [
  {t:'QML4Africa - Rwanda', s:'',
    image:'/media/856c43197563ecf6.jpg', video:'', f:'/media/856c43197563ecf6.jpg', art:'field'},
  {t:'Quantum Africa', s:'',
    image:'', video:'/media/6b2f99361bae6521.mp4', f:'/media/6b2f99361bae6521.mp4', art:'lattice'},
  {t:'QML4Africa - Lagos', s:'',
    image:'/media/6c583a94e65b5194.jpg', video:'', f:'/media/6c583a94e65b5194.jpg', art:'wave'},
  {t:'Quantum Africa', s:'',
    image:'/media/54e419fc0a87e28c.png', video:'', f:'/media/54e419fc0a87e28c.png', art:'network'},
  {t:'Quantum Africa', s:'',
    image:'/media/24e9dbbb08f61554.jpg', video:'', f:'/media/24e9dbbb08f61554.jpg', art:'fringes'},
];
const EVENT_ART = ['circuit','bloch','wave','lattice','network','fringes'];

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const titleCase = s => String(s||'').replace(/\b([A-Za-zÀ-ÖØ-öø-ÿ'])/g,(_,c)=>c.toUpperCase());
const tc = s => titleCase(s);   // convenience: for country names

const SVG = {
  image:'<path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="m3 16.5 4.6-4.2a1.6 1.6 0 0 1 2.2 0L15 17"/><path d="m13.5 15 2.3-2.1a1.6 1.6 0 0 1 2.2 0L21 15.7"/>',
  video:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m10.5 9.4 4.6 2.6-4.6 2.6z"/>',
  data:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  doc:'<path d="M6 3h8l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5M8.5 13h7M8.5 17h5"/>',
  ui:'<rect x="2.5" y="4" width="19" height="16" rx="2.5"/><path d="M2.5 9h19M6 6.5h.01M8.5 6.5h.01M11 6.5h.01"/>',
  user:'<circle cx="12" cy="8.4" r="3.9"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
  text:'<path d="M5 6h14M5 11h14M5 16h9"/>',
  linkedin:'<rect x="3" y="3" width="18" height="18" rx="2.6"/><path d="M7.3 10.6V17M7.3 7.3h.01M11.2 17v-3.7a2.15 2.15 0 0 1 4.3 0V17"/>',
  scholar:'<path d="M12 4 2.9 8.4 12 12.8l9.1-4.4z"/><path d="M6.6 10.4v4.9c0 1.5 2.4 2.8 5.4 2.8s5.4-1.3 5.4-2.8v-4.9"/><path d="M21.1 8.4v5.6"/>',
  orcid:'<circle cx="12" cy="12" r="9"/><path d="M9.1 10v7M9.1 7.4h.01M12.9 17v-7h1.9a3.5 3.5 0 0 1 0 7z"/>',
  instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.6" cy="6.4" r="0.9" fill="currentColor" stroke="none"/>',
  youtube:'<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M10 9.4v5.2l4.5-2.6z"/>',
  twitter:'<path d="M4 4h3l4 5L16 4h3l-5 6 5.5 7H15l-3.2-4.4L8.5 17H5.5l4.6-5.5z"/>',
  email:'<rect x="2.8" y="5" width="18.4" height="14" rx="2"/><path d="M4.2 7l7.8 5.6L19.8 7"/>'
};
function svgIcon(name, size){
  size = size || 26;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SVG[name]||SVG.image}</svg>`;
}
function phIcon(kind){
  const k = String(kind).toLowerCase();
  if(k.includes('video')) return 'video';
  if(k.includes('data')) return 'data';
  if(k.includes('pdf')) return 'doc';
  if(k.includes('ui') || k.includes('screenshot')) return 'ui';
  if(k.includes('text')) return 'text';
  return 'image';
}
function ph(kind, title, spec, cls=''){
  return `<div class="ph ${cls}">
    ${svgIcon(phIcon(kind))}
    <span class="ph-k">${esc(kind)}</span>
    <span class="ph-t">${esc(title)}</span>
    ${spec ? `<span class="ph-s">${esc(spec)}</span>` : ''}
  </div>`;
}
const pht = t => `<span class="ph-inline">[ ${esc(t)} ]</span>`;
const avatar = (photo) => photo
  ? `<div class="ph-avatar filled"><img src="${esc(_assetSrc(photo))}" alt="" loading="lazy"></div>`
  : `<div class="ph-avatar">${svgIcon('user',40)}</div>`;
const circuitRing = (photo) => {
  const ticks = Array.from({length:8}).map((_,i)=>{
    const a = (i * 45) * Math.PI/180;
    const r1 = 55, r2 = 61;
    const x1 = 64 + Math.cos(a)*r1, y1 = 64 + Math.sin(a)*r1;
    const x2 = 64 + Math.cos(a)*r2, y2 = 64 + Math.sin(a)*r2;
    return `<line class="tick" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
  }).join('');
  const dots = Array.from({length:6}).map((_,i)=>{
    const a = ((i*60)+22) * Math.PI/180;
    const r = 63.5;
    const cx = 64 + Math.cos(a)*r, cy = 64 + Math.sin(a)*r;
    return `<circle class="dots" cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="1.4"/>`;
  }).join('');
  return `<div class="vq-circuit" aria-hidden="true">
  <svg class="circ" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <circle class="ring" cx="64" cy="64" r="60.5"/>
    <circle class="ring" cx="64" cy="64" r="52"/>
    <g>${ticks}</g>
    <g>${dots}</g>
    <circle class="ring-inner" cx="64" cy="64" r="56.5"/>
  </svg>
  <div class="av">${avatar(photo || '')}</div>
</div>`;
};
const statusPill = () => `<span class="pill current">Active</span>`;
let __sec = 0;
const sectionHead = (eyebrow, title, lede, cta) => {
  const n = String(++__sec).padStart(2,'0');
  return `
  <div class="sec-idx"><span class="n">${n}</span><span class="lbl">${esc(eyebrow)}</span><i></i></div>
  <div class="sec-title">
    <h2>${title}</h2>
    ${lede ? `<p class="lede">${lede}</p>` : ''}
    ${cta ? `<a class="link-a" href="${cta.h}">${esc(cta.t)} <span class="ar" aria-hidden="true">→</span></a>` : ''}
  </div>`;
};
const crumb = arr => `<div class="wrap"><nav class="breadcrumb">${arr.map((c,i)=>
  i < arr.length-1 ? `<a href="${c.h}">${esc(c.t)}</a><span aria-hidden="true">/</span>` : `<span>${esc(c.t)}</span>`
).join('')}</nav></div>`;

/* ---------- card renderers ---------- */
function eventCard(e, idx){
  const k = EVENT_ART[(idx||0) % EVENT_ART.length];
  const img = e.heroImage || e.image || null;
  const whenStr = (e.start && e.end) ? oppDate(e.start)+(e.end!==e.start?' – '+oppDate(e.end):'') : (e.city || '');
  const pillWhen = e.when==='upcoming' ? 'current' : 'future';
  const pillLbl = (e.when==='upcoming') ? (e.status||'Upcoming') : (e.status||'Past');
  const where = [e.city, e.country].filter(Boolean).join(', ');
  const cta = e.when==='upcoming' ? (e.registerUrl?'Register now':'Register interest') : (e.links&&e.links.length?'View resources':'Details');
  return `<a class="card rv" href="#/events/${e.slug}">
    <div class="card-media">${rimg(img,'Event photo — '+(esc(e.n||e.title||'')),'1600×900 · JPG','',k)}</div>
    <div class="card-b">
      <div class="card-meta"><span class="tag">${esc(e.type)}</span>${e.series?`<span class="pill current">${esc(e.series)} · ${esc(e.edition)}</span>`:`<span class="pill ${pillWhen}">${esc(pillLbl)}</span>`}</div>
      <h4>${e.title ? esc(e.title) : pht(e.n)}</h4>
      ${whenStr?`<div class="kv"><b>Date</b> ${esc(whenStr)}</div>`:''}
      ${where?`<div class="kv"><b>Location</b> ${esc(where)}</div>`:''}
      <div class="card-foot"><span class="link-a">${cta} <span aria-hidden="true">→</span></span></div>
    </div></a>`;
}
function projectCard(p){
  const artSrc = p.image || p.cover || p.hero || p.heroImage || p.photo || p.picture ||
    (Array.isArray(p.gallery) ? ((p.gallery.find(g => g && (g.image || g.f)) || {}).image || (p.gallery.find(g => g && (g.image || g.f)) || {}).f) : null);
  const fallBack = p.art || 'circuit';
  return `<a class="card rv" href="#/research/${p.slug}">
    <div class="card-media">${rimg(artSrc,'Optional: photo of the team or lab. The generated figure works as the default.','1600×900 · PNG/SVG','',fallBack)}</div>
    <div class="card-b">
      <div class="card-meta"><span class="pill current">Active</span></div>
      <h4>${esc(p.title)}</h4>
      <div class="kv"><b>Area</b> ${esc(p.area)}</div>
      <div class="card-foot"><span class="link-a">View project <span aria-hidden="true">→</span></span></div>
    </div></a>`;
}
function chapterCard(c){
  const CHAPTER_IMG = {'algeria':'Algeria.jpg','egypt':'egypt.jpg','morocco':'Morocco.jpg','nigeria':'Nigeria.jpg','mauritania':'mauritania.jpg','ethiopia':'ethiopia.png','zambia':'zambia.png','uganda':'uganda.png'};
  const img = CHAPTER_IMG[(c.name||'').toLowerCase()] ? `/media/chapters/${CHAPTER_IMG[(c.name||'').toLowerCase()]}` : null;
  return `<div class="card rv">
    <div class="card-media">${rimg(img,'Quantum '+esc(c.name)+' chapter photo','1600×900 · JPG','','network')}</div>
    <div class="card-b">
      <div class="card-meta"><span class="fl" style="width:48px;height:34px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;font-size:1.8rem;line-height:1;flex:none;background:color-mix(in srgb,var(--ink) 3%,transparent);box-shadow:0 0 0 1px var(--line)" aria-hidden="true">${c.flag||'?'}</span>${statusPill()}</div>
      <h4>Quantum ${esc(c.name)}</h4>
    </div></div>`;
}
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function oppDate(iso){
  if(!iso) return 'Rolling';
  const d = new Date(iso + 'T00:00:00Z');
  if(isNaN(d)) return 'Rolling';
  return d.getUTCDate() + ' ' + MONTHS[d.getUTCMonth()] + ' ' + d.getUTCFullYear();
}
function oppWhere(o){
  const bits = [o.org, [o.city, o.country].filter(Boolean).join(', ')].filter(Boolean);
  return bits.length ? bits.join(' · ') : '';
}
function oppRow(o){
  const st = o.status === 'Closing soon' ? 'soon' : (o.status === 'Closed' ? 'shut' : 'open');
  const w = oppWhere(o);
  return `<a class="opp-i${o.africa?' af':''}" href="${esc(o.url)}" target="_blank" rel="noopener noreferrer">
    <span class="opp-dl ${st}">${esc(oppDate(o.deadline))}</span>
    <span class="opp-m">
      <h4>${esc(o.title)}</h4>
      ${w ? `<span class="sub">${esc(w)}</span>` : ''}
    </span>
    <span class="opp-t">
      ${o.africa?'<span class="af-b">Africa</span>':''}
      <span class="tag">${esc(o.type)}</span>
      <span class="pill ${o.status==='Closed'?'past':'current'}">${esc(o.status)}</span>
      <span class="src">${o.source === 'own' ? 'Quantum Africa' : esc((OPP_SOURCES[o.source]||{}).name || o.source)}</span>
    </span>
  </a>`;
}
function oppRowHome(o, i){
  const st = o.status === 'Closing soon' ? 'soon' : (o.status === 'Closed' ? 'shut' : 'open');
  const w = oppWhere(o);
  const num = String(i+1).padStart(2,'0');
  const ttype = String(o.type||'').toLowerCase();
  let iconName = 'doc';
  if(/intern|student/.test(ttype)) iconName='user';
  else if(/phd|master|fellow|postdoc|research|grant|position|school/.test(ttype)) iconName='scholar';
  else if(/job|role|work|career|engineer|scientist/.test(ttype)) iconName='ui';
  else if(/award|prize|competition|hackathon/.test(ttype)) iconName='data';
  return `<a class="opp-h-card${o.africa?' af':''}" href="${esc(o.url)}" target="_blank" rel="noopener noreferrer">
    <span class="opp-h-accent" aria-hidden="true"></span>
    <span class="opp-h-badge"><span>${num}</span></span>
    <span class="opp-h-icon" aria-hidden="true">${svgIcon(iconName, 20)}</span>
    <span class="opp-h-body">
      <span class="opp-h-head">
        <h4>${esc(o.title)}</h4>
        <span class="opp-h-arrow" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></span>
      </span>
      <span class="opp-h-meta">
        ${w ? `<span class="opp-h-where">${svgIcon('image', 13)} ${esc(w)}</span>` : ''}
        <span class="opp-h-date ${st}">${svgIcon('doc', 13)} ${esc(oppDate(o.deadline))}</span>
      </span>
      <span class="opp-h-tags">
        ${o.africa?'<span class="af-b">Africa</span>':''}
        <span class="tag">${esc(o.type)}</span>
        <span class="pill ${o.status==='Closed'?'past':'current'}">${esc(o.status)}</span>
      </span>
    </span>
  </a>`;
}
function evtDates(e){
  if(!e.start) return 'Dates to confirm';
  if(!e.end || e.end === e.start) return oppDate(e.start);
  const s = new Date(e.start+'T00:00:00Z'), t = new Date(e.end+'T00:00:00Z');
  const sameYear = s.getUTCFullYear() === t.getUTCFullYear();
  if(sameYear && s.getUTCMonth() === t.getUTCMonth())
    return s.getUTCDate() + '–' + oppDate(e.end);          // 3–7 Sep 2026
  if(sameYear)
    return s.getUTCDate() + ' ' + MONTHS[s.getUTCMonth()] + ' – ' + oppDate(e.end);
  return oppDate(e.start) + ' – ' + oppDate(e.end);
}
function evtWhere(e){
  const p = [e.city, e.country].filter(Boolean).join(', ');
  return p || (e.online ? 'Online' : '');
}
function evtRow(e){
  const st = e.status === 'Running now' ? 'soon' : (e.status === 'Past' ? 'shut' : 'open');
  const w = evtWhere(e);
  return `<a class="opp-i${e.africa?' af':''}" href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">
    <span class="opp-dl ${st}">${esc(evtDates(e))}</span>
    <span class="opp-m">
      <h4>${esc(e.title)}</h4>
      ${w ? `<span class="sub">${esc(w)}</span>` : ''}
    </span>
    <span class="opp-t">
      ${e.africa?'<span class="af-b">Africa</span>':''}
      ${e.online?'<span class="tag">Online</span>':''}
      <span class="tag">${esc(e.type)}</span>
      <span class="pill ${e.status==='Past'?'past':'current'}">${esc(e.status)}</span>
      <span class="src">${esc((OPP_SOURCES[e.source]||{}).name || e.source)}</span>
    </span>
  </a>`;
}
function artDate(a){ return a.date ? oppDate(a.date) : pht('DATE'); }
function artImage(a, spec){
  const firstGalleryImg = Array.isArray(a.gallery) ? (a.gallery.find(x => x && x.image) || {}).image : '';
  const firstGalleryVid = Array.isArray(a.gallery) ? (a.gallery.find(x => x && x.video) || {}).video : '';
  const src = a.cover || a.image || a.hero || a.photo || a.headerImage || firstGalleryImg || firstGalleryVid || '';
  return src
    ? `<div class="slot filled"><img src="${esc(mediaUrl(src))}" alt="${esc(a.title||'')}" loading="lazy"></div>`
    : media(a.art || 'circuit', 'Article header image', spec || '1600×900 · JPG');
}
function articleCard(a){
  return `<a class="card rv" href="#/news/${a.slug}">
    <div class="card-media">${artImage(a)}</div>
    <div class="card-b">
      <div class="news-meta"><span class="t">${esc(a.type||'News')}</span><span>${artDate(a)}</span>${a.read?`<span>${esc(a.read)}</span>`:''}</div>
      <h4>${a.title ? esc(a.title) : pht('Article headline')}</h4>
      ${a.summary ? `<p class="xs mt8" style="color:var(--ink-2)">${esc(a.summary)}</p>` : ''}
    </div></a>`;
}
function articleRow(a){
  return `<a class="news-row rv" href="#/news/${a.slug}">
    <div class="news-meta"><span class="t">${esc(a.type||'News')}</span><span>${artDate(a)}</span>${a.read?`<span>${esc(a.read)}</span>`:''}</div>
    <h4>${a.title ? esc(a.title) : pht('Article headline')}</h4>
  </a>`;
}
function articleFeature(a){
  return `<a class="feature rv" href="#/news/${a.slug}">
    <div class="card-media">${artImage(a, '2400×1350 · JPG')}</div>
    <div class="fb">
      <div class="news-meta"><span class="t">Featured · ${esc(a.type||'News')}</span><span>${artDate(a)}</span>${a.read?`<span>${esc(a.read)}</span>`:''}</div>
      <h3>${a.title ? esc(a.title) : pht('Lead article headline — the piece you most want read')}</h3>
      <p>${a.summary ? esc(a.summary) : pht('Standfirst — one or two sentences that make someone want to open it')}</p>
      <span class="link-a">Read the article <span class="ar" aria-hidden="true">&rarr;</span></span>
    </div></a>`;
}

const PILLAR_SVG = {
  educate:'<path d="M12 4 2.8 8.5 12 13l9.2-4.5z"/><path d="M6.4 10.6v5.2c0 1.6 2.5 2.9 5.6 2.9s5.6-1.3 5.6-2.9v-5.2"/><path d="M21.2 8.5v6"/>',
  research:'<circle cx="6" cy="6.5" r="2.4"/><circle cx="18" cy="6.5" r="2.4"/><circle cx="12" cy="17.5" r="2.4"/><path d="M7.7 8.3 10.6 15M16.3 8.3 13.4 15M8.4 6.5h7.2"/>',
  connect:'<ellipse cx="12" cy="12" rx="9.2" ry="4" transform="rotate(-30 12 12)"/><ellipse cx="12" cy="12" rx="9.2" ry="4" transform="rotate(30 12 12)"/><circle cx="12" cy="12" r="2.1"/>',
  lead:'<path d="M12 3.2 14.5 9l6.3.5-4.8 4.1 1.5 6.2L12 16.6 6.5 19.8 8 13.6 3.2 9.5 9.5 9z"/>'
};
function pillarCard(n, title, body, icon, cta, href){
  const NAVY_D = '#00162E';
  const NAVY   = '#001F3F';
  const NAVY_L = '#0A3357';
  const NAVY_SOFT = 'color-mix(in srgb,'+NAVY+' 11%,transparent)';
  const NAVY_SOFT_BD = 'color-mix(in srgb,'+NAVY+' 24%,transparent)';
  const NAVY_SHADOW = 'rgba(0,22,46,';
  return `<div class="pillar rv" style="position:relative;border-top:0;padding:0;background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;transition:transform .4s cubic-bezier(.2,.7,.3,1),box-shadow .4s ease,border-color .4s ease" onmouseenter="const el=this;el.style.transform='translateY(-4px)';el.style.boxShadow='0 22px 56px -28px ${NAVY_SHADOW}.30)';el.style.borderColor='color-mix(in srgb,'+NAVY+' 32%,transparent)';const bar=el.querySelector('.pbar');if(bar)bar.style.width='100%'" onmouseleave="const el=this;el.style.transform='translateY(0)';el.style.boxShadow='none';el.style.borderColor='var(--line)';const bar=el.querySelector('.pbar');if(bar)bar.style.width='56px'">
    <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${NAVY_D},${NAVY},var(--gold))"></div>
    <div style="display:flex;align-items:flex-start;gap:16px;padding:30px 26px 0;position:relative">
      <span class="ic" style="width:52px;height:52px;display:inline-flex;align-items:center;justify-content:center;border-radius:14px;background:linear-gradient(135deg,${NAVY_D} 0%,${NAVY} 58%,${NAVY_L} 100%);color:#fff;box-shadow:0 10px 26px -14px ${NAVY_SHADOW}.60), inset 0 1px 0 rgba(255,255,255,.12);flex:0 0 52px;margin:0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PILLAR_SVG[icon]}</svg></span>
      <span class="n" style="font-size:2.3rem;font-weight:800;letter-spacing:-.045em;line-height:1;color:var(--gold);margin:0 0 0 auto;font-variant-numeric:tabular-nums;opacity:.9">${n}</span>
    </div>
    <div class="pbar" style="height:2px;background:linear-gradient(90deg,${NAVY_D},${NAVY},${NAVY_L});width:56px;margin:16px 26px 0;transition:width .55s cubic-bezier(.2,.7,.3,1);border-radius:2px"></div>
    <div style="padding:22px 26px 28px">
      <h3 style="font-size:1.48rem;letter-spacing:-.034em;margin:0 0 10px;line-height:1.16;color:var(--dark)">${title}</h3>
      <p style="font-size:.92rem;color:var(--ink-2);max-width:34ch;margin:0 0 22px;line-height:1.6">${body}</p>
      <a class="link-a" href="${href}" style="margin:0;display:inline-flex;align-items:center;gap:7px;font-weight:600;font-size:.86rem;padding:10px 16px;border-radius:10px;background:${NAVY_SOFT};border:1px solid ${NAVY_SOFT_BD};color:${NAVY};transition:all .3s ease;text-decoration:none;letter-spacing:.03em;text-transform:uppercase" onmouseenter="this.style.background='${NAVY}';this.style.color='#fff';this.style.borderColor='${NAVY}';this.style.boxShadow='0 10px 24px -14px ${NAVY_SHADOW}.68)'" onmouseleave="this.style.background='${NAVY_SOFT}';this.style.color='${NAVY}';this.style.borderColor='${NAVY_SOFT_BD}';this.style.boxShadow='none'">${cta} <span class="ar" aria-hidden="true" style="margin-left:2px">&rarr;</span></a>
    </div>
  </div>`;
}

/* ============================================================
   AFRICA MAP
   ============================================================ */
function africaMap(){
  const v = AFRICA.view;
  let paths = '';
  for(const ds of Object.values(AFRICA.paths)){
    paths += ds.map(d=>`<path class="c" d="${d}"/>`).join('');
  }
  const marks = CHAPTERS.filter(c=>c.code && AFRICA.bbox[c.code]).map(c=>{
    const b = AFRICA.bbox[c.code];
    const x = ((b[0]+b[2])/2 - v[0]) / v[2] * 100;
    const y = ((b[1]+b[3])/2 - v[1]) / v[3] * 100;
    return `<div class="mk" data-code="${c.code}" style="left:${x.toFixed(2)}%;top:${y.toFixed(2)}%; cursor:default"
              aria-label="Quantum ${esc(c.name)} chapter">
        <span class="fg" aria-hidden="true">${c.flag}</span><span class="nm">${esc(c.name)}</span></div>`;
  }).join('');
  return `<div class="map-box">
    <div class="mapwrap" style="aspect-ratio:${v[2]} / ${v[3]}">
      <svg class="mapsvg" viewBox="${v[0]} ${v[1]} ${v[2]} ${v[3]}" role="img"
           aria-label="Map of Africa with Quantum Africa chapters marked">${paths}</svg>
      ${marks}
    </div>
    <div class="map-legend">
      <span><i style="background:var(--gold)"></i>Chapter</span>
      <span><i style="background:var(--bg-3)"></i>Continent</span>
    </div>
    <p class="map-note"></p>
  </div>`;
}
function chapterList(){
  return `<div>
    <div class="sec-idx" style="margin-bottom:8px"><span class="lbl">Chapters</span><i></i></div>
    <div class="ch-list">
      ${CHAPTERS.map(c=>`<div class="ch-row" data-code="${c.code||''}" style="cursor:default">
        <span class="fl" aria-hidden="true">${c.flag || '?'}</span>
        <span class="nm">Quantum ${esc(c.name)}</span>
        <span class="cc">${c.code ? c.code.toUpperCase() : '—'}</span>
      </div>`).join('')}
    </div>
    <div class="panel mt24" style="background:var(--grad-soft);border-color:var(--line)">
      <h5>No chapter where you are?</h5>
      <p class="small">Quantum Africa helps students and researchers start new national chapters. Tell us where you are and we will help you launch one.</p>
      <a class="btn sm mt16" href="#/join">Start a chapter <span class="ar" aria-hidden="true">&rarr;</span></a>
    </div>
    <p class="xs mt16"></p>
  </div>`;
}

/* ============================================================
   PAGES
   ============================================================ */
const PAGES = {};

/* ---------- front-page highlight ----------
   One carousel that mixes photographs and video. Uploaded clips play in place;
   a YouTube or Vimeo link shows its still frame and only loads the player when
   somebody presses play, so an ordinary visit costs nothing extra. */
function highlightItem(m, i){
  const k = mKind(m);
  const pickSrc = (obj, keys) => {
    for(const key of keys){ if(obj && obj[key]) return obj[key]; }
    if(Array.isArray(obj && obj.gallery)){
      for(const g of obj.gallery){
        for(const key of keys){ if(g && g[key]) return g[key]; }
      }
    }
    return '';
  };
  const imgSrc = pickSrc(m, ['image','f','cover','hero','heroImage','photo','picture','headerImage']);
  const vidSrc = pickSrc(m, ['video']);
  const embed = m && m.videoUrl;
  const poster = mPoster(m);
  const label = mLabel(m, i);
  const isFirst = i === 0;
  if(k === 'video' || vidSrc){
    return `<figure class="hl-item" data-i="${i}" data-kind="video">
      <video controls ${isFirst ? 'autoplay muted playsinline loop preload="auto"' : 'playsinline preload="metadata"'}
             ${poster ? `poster="${esc(poster)}"` : ''}
             src="${esc(mediaUrl(vidSrc))}"></video>
      ${m.caption ? `<figcaption>${esc(m.caption)}${m.credit ? ` <span class="cr">${esc(m.credit)}</span>` : ''}</figcaption>` : ''}
    </figure>`;
  }
  if(k === 'embed' || embed){
    return `<figure class="hl-item" data-i="${i}" data-kind="embed" data-src="${esc(embedSrc(embed))}">
      <button class="hl-play" type="button" aria-label="Play ${esc(label)}">
        ${poster ? `<img src="${esc(poster)}" alt="${esc(label)}">` : '<span class="hl-blank"></span>'}
        <span class="hl-pb" aria-hidden="true"></span>
      </button>
      ${m.caption ? `<figcaption>${esc(m.caption)}${m.credit ? ` <span class="cr">${esc(m.credit)}</span>` : ''}</figcaption>` : ''}
    </figure>`;
  }
  if(k === 'image' || imgSrc){
    return `<figure class="hl-item" data-i="${i}" data-kind="image">
      <img src="${esc(mediaUrl(imgSrc))}" alt="${esc(label)}" loading="lazy">
      ${m.caption ? `<figcaption>${esc(m.caption)}${m.credit ? ` <span class="cr">${esc(m.credit)}</span>` : ''}</figcaption>` : ''}
    </figure>`;
  }
  return `<figure class="hl-item" data-i="${i}" data-kind="none">${media('network','Photograph or video from this event','2400×1350','wide')}</figure>`;
}

function highlightThumb(m, i){
  const k = mKind(m);
  const poster = mPoster(m);
  return `<button class="hl-th ${i === 0 ? 'on' : ''}" type="button" data-go="${i}"
      aria-label="${esc(mLabel(m, i))}">
    ${poster ? `<img src="${esc(poster)}" alt="" loading="lazy">` : '<span class="hl-blank"></span>'}
    ${k === 'video' || k === 'embed' ? '<span class="hl-vt" aria-hidden="true"></span>' : ''}
  </button>`;
}

function highlightSection(){
  const data = HIGHLIGHT || {};
  const eyebrow = data.eyebrow || '';
  const title   = data.title   || '';
  const summary = data.summary || '';
  const date    = data.date    || '';
  const place   = data.place   || '';
  const linkText = data.linkText || '';
  const linkUrl  = data.linkUrl  || '';
  const gallery  = Array.isArray(data.gallery) ? data.gallery : [];
  const items = gallery.length ? gallery : [{}, {}, {}];
  const when = [date ? oppDate(date) : '', place].filter(Boolean).join(' · ');
  return `
<section class="sec hl-sec"><div class="wrap">
  ${sectionHead(eyebrow || 'Latest', title || pht('HIGHLIGHT — your latest event'),
     summary || pht('Two or three sentences: what happened and why it mattered.'))}
  ${when ? `<p class="hl-when">${esc(when)}</p>` : ''}

  <div class="hl" id="hl">
    <button class="hl-arw prev" type="button" aria-label="Previous">&#8249;</button>
    <div class="hl-stage" id="hlStage">${items.map(highlightItem).join('')}</div>
    <button class="hl-arw next" type="button" aria-label="Next">&#8250;</button>
    <div class="hl-count" id="hlCount"></div>
  </div>
  <div class="hl-ths" id="hlThumbs">${items.map(highlightThumb).join('')}</div>

  ${linkUrl ? `<div class="phero-meta mt24"><a class="btn teal" href="${esc(linkUrl)}"${/^https?:/.test(linkUrl) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(linkText || 'Read more')} <span class="ar" aria-hidden="true">&rarr;</span></a></div>` : ''}
  ${gallery.length ? '' : `<p class="xs mt24">${pht('Add photos and videos to this carousel inside Page: Home — the “Highlight — photos & video” list. Uploaded clips play here; for a full talk, paste a YouTube or Vimeo link instead.')}</p>`}
</div></section>`;
}

function initHighlight(){
  const stage = document.getElementById('hlStage');
  if(!stage) return;
  const items = [...stage.children];
  const thumbs = [...document.querySelectorAll('#hlThumbs .hl-th')];
  const count = document.getElementById('hlCount');
  const root = document.getElementById('hl');
  let at = 0;

  function show(i){
    at = (i + items.length) % items.length;
    items.forEach((el, n) => {
      const on = n === at;
      el.classList.toggle('on', on);
      if(!on){
        const v = el.querySelector('video');
        if(v) v.pause();
        // Leaving an embed unloads it, so nothing keeps running out of sight.
        const f = el.querySelector('iframe');
        if(f && el._facade) f.replaceWith(el._facade);
      } else {
        const v = el.querySelector('video');
        if(v){
          v.muted = true;
          const p = v.play();
          if(p && typeof p.catch === 'function') p.catch(()=>{});
        }
      }
    });
    thumbs.forEach((t, n) => t.classList.toggle('on', n === at));
    if(count) count.textContent = `${at + 1} / ${items.length}`;
    keepThumbInView();
  }

  /* Scroll the thumbnail strip itself, never the page. scrollIntoView would
     drag the whole document down to the carousel — including on first paint,
     which threw the visitor past the hero before they had read it. */
  const strip = document.getElementById('hlThumbs');
  function keepThumbInView(){
    const t = thumbs[at];
    if(!t || !strip) return;
    const left = t.offsetLeft, right = left + t.offsetWidth;
    const view = strip.scrollLeft, edge = view + strip.clientWidth;
    if(left < view) strip.scrollTo({left: left - 8, behavior: 'smooth'});
    else if(right > edge) strip.scrollTo({left: right - strip.clientWidth + 8, behavior: 'smooth'});
  }

  root.querySelector('.hl-arw.prev').addEventListener('click', ()=> show(at - 1));
  root.querySelector('.hl-arw.next').addEventListener('click', ()=> show(at + 1));
  thumbs.forEach(t => t.addEventListener('click', ()=> show(+t.dataset.go)));

  stage.addEventListener('click', e => {
    const btn = e.target.closest('.hl-play');
    if(!btn) return;
    const fig = btn.closest('.hl-item');
    const src = fig.dataset.src;
    if(!src) return;
    fig._facade = btn;
    const f = document.createElement('iframe');
    f.src = src;
    f.title = btn.getAttribute('aria-label') || 'Video';
    f.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture';
    f.allowFullscreen = true;
    f.loading = 'lazy';
    btn.replaceWith(f);
  });

  root.tabIndex = 0;
  root.addEventListener('keydown', e => {
    if(e.key === 'ArrowLeft'){ e.preventDefault(); show(at - 1); }
    if(e.key === 'ArrowRight'){ e.preventDefault(); show(at + 1); }
  });

  let x0 = null;
  stage.addEventListener('pointerdown', e => { x0 = e.clientX; });
  stage.addEventListener('pointerup', e => {
    if(x0 === null) return;
    const dx = e.clientX - x0; x0 = null;
    if(Math.abs(dx) > 45) show(at + (dx < 0 ? 1 : -1));
  });

  show(0);

  const firstEl = items[0];
  if(firstEl && firstEl.dataset.kind === 'embed'){
    const btn = firstEl.querySelector('.hl-play');
    if(btn){
      const src = firstEl.dataset.src;
      if(src){
        firstEl._facade = btn;
        const f = document.createElement('iframe');
        f.src = src;
        f.title = btn.getAttribute('aria-label') || 'Video';
        f.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen';
        f.allowFullscreen = true;
        f.referrerPolicy = 'no-referrer-when-downgrade';
        btn.replaceWith(f);
      }
    }
  }
}

/* ---------- HOME ---------- */
PAGES.home = () => `
<section class="hero">
  ${ringMark('hero-ring')}
  <div class="hero-stage" id="stage">
    ${HERO_SLIDES.map((s,i)=>`<div class="slide ${i===0?'on':''}" data-i="${i}" data-kind="${mKind(s)}">
      ${(() => {
        const k = mKind(s);
        if(k === 'video') return `<video class="hero-media" data-hero-video preload="auto" muted playsinline loop autoplay
            ${(s.image||s.f) ? `poster="${esc(mediaUrl(s.image||s.f))}"` : ''}
            src="${esc(mediaUrl(s.video))}"></video>`;
        if(k === 'embed') return `<img class="hero-media" src="${esc(mPoster(s))}" alt="${esc(s.t||s.caption||'')}" ${i ? 'loading="lazy"' : ''}>`;
        const still = mediaUrl(s.image || s.f);
        if(still) return `<img class="hero-media" src="${esc(still)}" alt="${esc(s.t||s.caption||'')}" ${i ? 'loading="lazy"' : ''}>`;
        return art(s.art, 'hero-art');
      })()}
      <span class="slot-note hero-note">
        <span class="ph-k">SLIDE ${i+1} / ${HERO_SLIDES.length}</span>
        <span class="ph-t">${esc(s.t)}</span>
        <span class="ph-s">${esc(s.s||'Photo or short clip')} · 2400×1350</span>
      </span>
    </div>`).join('')}
  </div>
  <div class="hero-scrim"></div>
  <div class="hero-inner">
    <div class="wrap">
      <div class="hero-eye fade-seq" data-seq="0">${cx('pages.home.heroEyebrow', 'Quantum research · education · innovation, built across Africa')}</div>
      <h1><span id="typeA"></span><span id="typeB" class="tl-p"></span><span class="caret" id="caret" aria-hidden="true"></span></h1>
      <p class="lede fade-seq" id="heroLede" data-seq="1">${esc(HERO_LINES[0].p)}</p>
      <div class="hero-cta fade-seq" data-seq="2">
        <a class="btn teal" href="#/education">${cx('pages.home.ctaPrimary', 'See what we build')} <span class="ar" aria-hidden="true">→</span></a>
        <a class="btn inv ghost" href="#/join">${cx('pages.home.ctaSecondary', 'Join Quantum Africa')}</a>
      </div>
    </div>
  </div>
  <div class="hero-foot">
    <div class="wrap">
      <div class="dots" id="dots" role="tablist" aria-label="Hero slides"></div>
      <span class="slide-cap" id="slideCap"></span>
      <div class="hero-arrows">
        <button class="arw" id="prev" aria-label="Previous slide">←</button>
        <button class="arw" id="next" aria-label="Next slide">→</button>
      </div>
    </div>
  </div>
</section>

<section class="stats-band">
  <div class="wrap"><div class="stats">
    ${[[cnum('stats.members',361),'Community members',''],
       [cnum('stats.chapters',8),'Chapters',''],
       [cnum('stats.countries',48),'Countries reached',''],
       [cnum('stats.events',10),'Events held','']]
      .map(([n,l,sfx])=>`<div class="stat"><div class="n" data-count="${n}"${sfx?` data-suffix="${sfx}"`:''}>0</div><span class="u"></span><div class="l">${l}</div></div>`).join('')}
  </div></div>
</section>

${highlightSection()}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    ${sectionHead(
      cx('pages.home.pillarEyebrow', 'Our work'),
      cx('pages.home.pillarTitle', 'From Learning to Leadership'),
      cx('pages.home.pillarLede', '')
    )}
    <div class="grid g4">
      ${pillarCard('01','Educate','Webinars, workshops, resources and the AI Tutor.','educate','Education','#/education')}
      ${pillarCard('02','Research','Open, collaborative projects with published code.','research','Research','#/research')}
      ${pillarCard('03','Connect','Chapters, universities and global partnerships.','connect','Chapters','#/chapters')}
      ${pillarCard('04','Lead','The next generation of African quantum leaders.','lead','Opportunities','#/opportunities')}
    </div>
  </div>
</section>

<section class="sec inv" style="padding-top:40px;padding-bottom:40px">
  <div class="wrap">
    <div class="split" style="gap:clamp(20px,3vw,44px);align-items:center">
      <div>
        <div class="sec-idx" style="margin-bottom:10px"><span class="lbl">${cx('pages.home.tutorEyebrow', 'Featured program')}</span><i></i></div>
        <h2 style="margin-top:8px;margin-bottom:10px;font-size:clamp(1.6rem,2.6vw,2.15rem);line-height:1.12">${cx('pages.home.tutorTitle', 'Meet the Quantum AI Tutor')}</h2>
        <p class="lede" style="margin-top:6px;margin-bottom:16px;max-width:46ch;font-size:.96rem;line-height:1.5">${cx('pages.home.tutorLede', 'Learn quantum computing. For free. A guided, conversational way in , built by Quantum Africa, open to anyone.')}</p>
        <div class="hero-cta" style="margin-top:14px;gap:10px">
          <a class="btn teal" href="#/tutor">${cx('pages.home.tutorCtaPrimary', 'Try the Quantum AI Tutor')} <span class="ar" aria-hidden="true">→</span></a>
          <a class="btn inv ghost" href="#/tutor">${cx('pages.home.tutorCtaSecondary', 'How it works')}</a>
        </div>
      </div>
      <div style="transform:scale(.9);transform-origin:center right">${cval('pages.tutor.tutorMockImage') ? `<div class="slot filled"><img src="${esc(mediaUrl(cval('pages.tutor.tutorMockImage')))}" alt="Tutor mockup" loading="lazy"></div>` : tutorMock()}</div>
    </div>
  </div>
</section>

<div class="pattern-band">${patternPanel('','light')}</div>
<section class="sec">
  <div class="wrap">
    ${sectionHead(
      cx('pages.home.chaptersEyebrow', 'Chapters'),
      cx('pages.home.chaptersTitle', 'Building Quantum Communities Across Africa Through Chapters'),
      cx('pages.home.chaptersLede', 'Local leadership, local activity, one network.'),
      {t:cx('pages.home.chaptersCta', 'Explore our chapters'),h:'#/chapters'}
    )}
    <div class="map-wrap">${africaMap()}${chapterList()}</div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${sectionHead(
      cx('pages.home.researchEyebrow', 'Research'),
      cx('pages.home.researchTitle', 'Open research, built in the open'),
      cx('pages.home.researchLede', ''),
      {t:cx('pages.home.researchCta', 'Explore research'),h:'#/research'}
    )}
    <div class="grid g4">${PROJECTS.map(projectCard).join('')}</div>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    ${sectionHead(
      cx('pages.home.opportunitiesEyebrow', 'Opportunities'),
      cx('pages.home.opportunitiesTitle', 'Your Quantum Journey Starts Here'),
      cx('pages.home.opportunitiesLede', ' '),
      {t:cx('pages.home.opportunitiesCta', 'Explore opportunities'),h:'#/opportunities'}
    )}
    <div class="home-opps" id="opHome">
      <div class="home-opps-wrap">
        ${oppPick(5).map((o,i)=>oppRowHome(o,i)).join('')}
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${sectionHead(
      cx('pages.home.eventsEyebrow', 'Events'),
      cx('pages.home.eventsTitle', 'What is happening next'),
      cx('pages.home.eventsLede', 'Across the network.'),
      {t:cx('pages.home.eventsCta', 'View all events'),h:'#/events'}
    )}
    <div class="grid g3">${EVENTS.filter(e=>e.when==='upcoming').map((e,i)=>eventCard(e,i)).join('')}</div>
  </div>
</section>

<section class="sec hair">
  <div class="wrap">
    ${sectionHead(
      cx('pages.home.newsEyebrow', 'News & articles'),
      cx('pages.home.newsTitle', 'Latest from the network'),
      cx('pages.home.newsLede', ' '),
      {t:cx('pages.home.newsCta', 'All articles'),h:'#/news'}
    )}
    <div class="news-lead">
      ${(() => {
        const featured = (ARTICLES.find(a => a && a.slug === 'uganda-indaba-2026') || ARTICLES[0]);
        const rest = ARTICLES.filter(a => a !== featured);
        return articleFeature(featured || {}) +
          `<div>
             <div class="news-side">${rest.slice(0,4).map(articleRow).join('')}</div>
             <div class="news-more"><a class="btn ghost sm" href="#/news">Browse the archive <span class="ar" aria-hidden="true">&rarr;</span></a></div>
           </div>`;
      })()}
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${sectionHead(
      cx('pages.home.communityEyebrow', 'Community'),
      cx('pages.home.communityTitle', 'Voices from the network'),
      cx('pages.home.communityLede', ' '),
      {t:cx('pages.home.communityCta', 'Read member stories'),h:'#/news'}
    )}
    <div class="grid g3">
      ${VOICES.concat(Array.from({length: Math.max(0, 3 - VOICES.length)}).map(()=>({}))).slice(0,3).map(q=>`<div class="vq rv">
        <span class="vq-quote-tl" aria-hidden="true">“</span>
        <span class="vq-quote-br" aria-hidden="true">“</span>
        <div class="vq-head">${circuitRing(q.photo || q.image || q.picture || q.avatar || '')}</div>
        <div class="vq-by">
          <span class="nm">${q.name ? esc(q.name) : pht('Name')}</span>
          <div class="xs">${(q.role ? esc(q.role) : (q.name ? '' : pht('Role'))) + (q.role && q.institution ? ' · ' : '') + (q.institution ? esc(q.institution) : (q.name ? '' : pht('Institution')))}</div>
        </div>
        <div class="vq-body"><p>${q.quote ? esc(q.quote) : pht('Member quote — 25 to 40 words, in their own words, about what Quantum Africa changed for them')}</p></div>
        <div class="vq-country">${q.country ? esc(tc(q.country)) : pht('Country')}</div>
      </div>`).join('')}
    </div>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    ${sectionHead(
      cx('pages.home.partnersEyebrow', 'Collaborators & Partners'),
      cx('pages.home.partnersTitle', 'Collaborators partners, and organisations we worked with'),
      cx('pages.home.partnersLede', ''),
      {t:cx('pages.home.partnersCta', 'Work with us'),h:'#/partners'}
    )}
    <div class="logo-wall">${partnerWall()}</div>
    <p class="xs mt24">${cx('pages.home.partnersNote', ' ')}</p>
  </div>
</section>

<section class="cta-band">
  ${ringMark('cta-ring')}
  <div class="wrap">
    <div class="hero-eye">${cx('pages.home.ctaBandEyebrow', 'Get involved')}</div>
    <h2 class="mt24">${cx('pages.home.ctaBandTitle', "Be Part of Africa's Quantum Future.")}</h2>
    <div class="btns">
      <a class="btn teal" href="#/join">${cx('pages.home.ctaBandBtn1', 'Join Quantum Africa')}</a>
      <a class="btn inv ghost" href="#/partners">${cx('pages.home.ctaBandBtn2', 'Work with us')}</a>
      <a class="btn inv ghost" href="#/contact">${cx('pages.home.ctaBandBtn3', 'Support Our Mission')}</a>
    </div>
  </div>
</section>`;

/* ---------- ABOUT ---------- */
PAGES.about = () => {
  const fall = (key, fallback) => {
    const a = cval('pages.about.' + key);
    if(a !== '' && a != null) return a;
    const b = cval('about.' + key);
    if(b !== '' && b != null) return b;
    return (fallback === undefined ? '' : fallback);
  };
  const eyebrow = cx('pages.about.heroEyebrow',
              (cval('about.heroEyebrow') || 'About Quantum Africa'));
  const title   = cx('pages.about.heroTitle',
              (cval('about.heroTitle')   || 'We build people, not just programmes.'));
  const lede    = fall('heroLede',
    "Quantum Africa exists to build Africa's quantum workforce — through education, research, leadership and global connection.");
  const objectives = (function(){
    let raw = cval('pages.about.objectivesList');
    if(!(Array.isArray(raw) && raw.length)){
      raw = cval('about.objectives');
    }
    if(Array.isArray(raw) && raw.length){
      return raw.map(x => `<li>${esc(String(x))}</li>`).join('');
    }
    return [
      'Bring quantum education into African universities',
      'Connect African students with global opportunities',
      'Support MSc and PhD pathways in quantum technologies',
      'Build collaborative research programmes and research networks',
      'Connect African universities with international institutions',
      'Support student and researcher mobility',
      'Develop national chapters across the continent',
      'Increase African participation in the global quantum ecosystem',
    ].map(x => `<li>${pht(x)}</li>`).join('');
  })();
  const philHead = cx('pages.about.philosophyHeadline',
                 cval('about.philosophyHeadline') || 'Educate → Research → Connect → Lead');
  const whoHtml   = cval('pages.about.whoWeAreBody') || cval('about.whoWeAre');
  const storyHtml = cval('pages.about.storyBody')    || cval('about.story');
  const missionHtml = cval('pages.about.missionBody') || cval('about.mission');
  const visionHtml  = cval('pages.about.visionBody')  || cval('about.vision');
  const philBody    = cval('pages.about.philosophyBody') || cval('about.philosophy');
  const heroImagePath = cval('pages.about.heroImage') || cval('about.heroImage');
  const heroImageHtml = heroImagePath
    ? `<div class="slot filled" style="aspect-ratio:16/5;overflow:hidden;border-radius:8px;margin-top:28px"><img src="${esc(mediaUrl(heroImagePath))}" alt="Wide community photograph" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"></div>`
    : `<div style="margin-top:28px">${cimg('pages.about.heroImage','Wide community photograph','2400×750 · JPG → assets/about/hero.jpg','wide','field')}</div>`;
  return `
${crumb([{t:'Home',h:'#/'},{t:'About'}])}
<section class="phero" style="padding-bottom:36px">${africaWatermark('wm-hero')}<div class="wrap">
  <div class="sec-idx"><span class="lbl">${esc(eyebrow)}</span><i></i></div>
  <h1 class="mt24">${esc(title)}</h1>
  <p class="lede">${esc(lede)}</p>
  ${heroImageHtml}
</div></section>

<section class="sec" style="padding-top:24px"><div class="wrap"><div class="side">
  <div class="prose">
    <h3>${cx('pages.about.whoWeAreHead', 'Who we are')}</h3>
    ${whoHtml
      ? String(whoHtml).split(/\n\s*\n/).filter(Boolean).map(p=>`<p>${esc(p)}</p>`).join('')
      : `<p>${pht('WHO WE ARE — two or three short paragraphs. What Quantum Africa is, and what it is not.')}</p>`}
    <h3>${cx('pages.about.storyHead', 'Our story')}</h3>
    ${storyHtml
      ? String(storyHtml).split(/\n\s*\n/).filter(Boolean).map(p=>`<p>${esc(p)}</p>`).join('')
      : `<p>${pht('OUR STORY — 3 to 4 paragraphs: how Quantum Africa started, who started it, what the first activity was, and what changed as the community grew. Include founding year and any turning points.')}</p>`}
    <h3>${cx('pages.about.missionHead', 'Mission')}</h3>
    ${missionHtml
      ? `<p>${esc(missionHtml)}</p>`
      : `<p>${pht('To democratize access to quantum education, foster collaborative research, develop talent and leadership, and connect African students, researchers, institutions, and professionals with opportunities and partners across the global quantum ecosystem.')}</p>`}
    <h3>${cx('pages.about.visionHead', 'Vision')}</h3>
    ${visionHtml
      ? `<p>${esc(visionHtml)}</p>`
      : `<p>${pht('An Africa whose talent is not left behind in the quantum revolution — with a workforce, a research base and an institutional presence in the global quantum ecosystem.')}</p>`}
    <h3>${cx('pages.about.objectivesHead', 'Objectives')}</h3>
    <ul>${objectives}</ul>
  </div>
  <aside>
    <div class="panel">
      <h5>${cx('pages.about.philosophyPanelHead', 'Our philosophy')}</h5>
      <p style="font-family:var(--f);font-weight:600;font-size:1.15rem;letter-spacing:-.02em;line-height:1.4">${esc(philHead)}</p>
      <p class="small mt16">${philBody
        ? esc(philBody)
        : pht('Each stage feeds the next. Someone who joins a webinar can end up leading a chapter.')}</p>
    </div>
    <div class="panel mt16">
      <h5>${cx('pages.about.glancePanelHead', 'At a glance')}</h5>
      <dl class="dl-list">
        <div class="dl-item"><dt>Members</dt><dd>${cnum('stats.members','361')}</dd></div>
        <div class="dl-item"><dt>Chapters</dt><dd>${cnum('stats.chapters',8)}</dd></div>
        <div class="dl-item"><dt>Founded</dt><dd>${cx('site.founded', pht('YEAR'))}</dd></div>
        <div class="dl-item"><dt>Location</dt><dd>${cx('site.registered', pht('COUNTRY'))}</dd></div>
      </dl>
    </div>
  </aside>
</div></div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.about.peopleEyebrow', 'People'),
    cx('pages.about.peopleTitle', 'Leadership and advisors'),
    null,
    {t:cx('pages.about.peopleCta', 'Full directory'),h:'#/people'}
  )}
  <div class="grid g4">${PEOPLE.slice(0,4).map(personCard).join('')}</div>
</div></section>`;
};

/* ---------- IMPACT ---------- */
PAGES.impact = () => `
${crumb([{t:'Home',h:'#/'},{t:'About',h:'#/about'},{t:'Our Impact'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.impact.heroEyebrow', 'Our impact')}</span><i></i></div>
  <h1>${cx('pages.impact.heroTitle', ' Our Impact in Numbers')}</h1>
  <p class="lede">${cx('pages.impact.heroLede', 'A snapshot of our measurable achievements and growing reach across Africa.')}</p>
</div></section>

<section class="sec flush"><div class="wrap">
  <div class="bignum">
    ${[[cnum('stats.members',361),'',cx('pages.impact.kpi1Key','Community members'),cx('pages.impact.kpi1Desc','Across the continent and the diaspora.')],
       [cnum('stats.chapters',8),'',cx('pages.impact.kpi2Key','National chapters'),cx('pages.impact.kpi2Desc','Across North, West, East and Southern Africa.')],
       [cnum('stats.projects',4),'',cx('pages.impact.kpi3Key','Research projects'),cx('pages.impact.kpi3Desc','All open to new contributors.')],
       [cnum('stats.countries',48),'',cx('pages.impact.kpi4Key','Countries reached'),cx('pages.impact.kpi4Desc','Across the continent and the diaspora.')],
       [cnum('stats.events',12),'',cx('pages.impact.kpi5Key','Events held'),cx('pages.impact.kpi5Desc','Webinars, workshops and chapter events.')],
       [cval('stats.partners'),'',cx('pages.impact.kpi6Key','Partner institutions'),cx('pages.impact.kpi6Desc','Institutions that trust our vision.')]]
      .map(([n,sfx,k,d])=>`<div class="bigcell rv">${n===''
        ? `<span class="v tbd">[ ?? ]</span>`
        : `<span class="v" data-count="${n}"${sfx?` data-suffix="${sfx}"`:''}>0</span>`}<span class="k">${k}</span><span class="d">${n===''?pht(cx('pages.impact.kpiSupply', 'supply the figure')):d}</span></div>`).join('')}
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.impact.storiesEyebrow', 'Stories'),
    cx('pages.impact.storiesTitle', 'Impact in individual terms'),
    cx('pages.impact.storiesLede', '')
  )}
  <div class="grid g3">${ARTICLES.slice(0,3).map(articleCard).join('')}</div>
</div></section>`;

/* ---------- EDUCATION ---------- */
PAGES.education = () => `
${crumb([{t:'Home',h:'#/'},{t:'Programs',h:'#/education'},{t:'Quantum Education'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.education.heroEyebrow', 'Programs · Quantum Education')}</span><i></i></div>
  <h1 class="mt24">${cx('pages.education.heroTitle', 'Making Quantum Education Accessible Across Africa.')}</h1>
  <p class="lede">${cx('pages.education.heroLede', 'Providing students and universities with the knowledge, resources, and pathways needed to learn, teach, and advance in quantum science and technology.')}</p>
</div></section>
<section class="sec"><div class="wrap">
  <div class="grid g2">
    ${[[cx('pages.education.p1Title','Quantum Africa Webinars'),cx('pages.education.p1Desc','A recurring online series where experts from around the world speak to the community about quantum computing, quantum technologies, applications, research, careers, policy and the future of the field.'),'current','#/events/webinars'],
       [cx('pages.education.p2Title','Quantum Machine Learning 4 Africa'),cx('pages.education.p2Desc','A hands-on workshop series on quantum machine learning. Two editions delivered.'),'current','#/events/workshops'],
       [cx('pages.education.p3Title','Quantum AI Tutor'),cx('pages.education.p3Desc','A free AI-powered tutor for learning quantum computing at your own pace, with structured learning pathways.'),'dev','#/tutor'],
       [cx('pages.education.p4Title','Learning Resources'),cx('pages.education.p4Desc','A curated library — courses, notebooks, reading lists, tools and recordings, filterable by topic and level.'),'dev','#/education'],
       [cx('pages.education.p5Title','Mentorship'),cx('pages.education.p5Desc','Connecting students with researchers and professionals for guidance on study, research and careers.'),'future','#/join'],
       [cx('pages.education.p6Title','University Programs'),cx('pages.education.p6Desc','Structured quantum education inside African universities: curriculum support, faculty training, student chapters.'),'future','#/universities']
      ].map(([t,d,,h])=>`<a class="card pad rv" href="${h}"><div class="card-b" style="padding:0">
        <h3>${esc(t)}</h3><p>${esc(d)}</p>
        <div class="card-foot"><span class="link-a">${cx('pages.education.cardExplore','Explore')} <span aria-hidden="true">→</span></span></div></div></a>`).join('')}
  </div>
</div></section>
<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.education.archiveEyebrow', 'Archive'),
    cx('pages.education.archiveTitle', 'Every session, kept'),
    cx('pages.education.archiveLede', ''),
    {t:cx('pages.education.archiveCta', 'Browse events'),h:'#/events'}
  )}
  <div class="grid g3">${EVENTS.slice(0,3).map((e,i)=>eventCard(e,i)).join('')}</div>
</div></section>`;

/* ---------- AI TUTOR ---------- */
PAGES.tutor = () => `
${crumb([{t:'Home',h:'#/'},{t:'Programs',h:'#/education'},{t:'Quantum AI Tutor'}])}
<section class="sec inv flush" style="padding-top:clamp(56px,7vw,96px)">
  <div class="wrap">
  <div class="split">
    <div>
      <div class="sec-idx"><span class="lbl">${cx('pages.tutor.heroEyebrow', 'Quantum Africa · Flagship project')}</span><i></i></div>
      <h1 class="mt24">${cx('pages.tutor.heroTitle', 'Learn quantum computing.<br>For free. With your AI tutor.')}</h1>
      <p class="lede mt24">${cx('pages.tutor.heroLede', 'A free tutor built by Quantum Africa. From first principles to running circuits, at your own pace.')}</p>
      <div class="hero-cta">
        <a class="btn teal" href="#/join">${cx('pages.tutor.ctaPrimary', 'Try the Quantum AI Tutor')} <span class="ar" aria-hidden="true">→</span></a>
        <a class="btn inv ghost" href="#/tutor">${cx('pages.tutor.ctaSecondary', 'See how it works')}</a>
      </div>
    </div>
    <div>${cimg('pages.tutor.heroMockImage','Tutor mockup','PNG · any width ≥1200px','','bloch') || tutorMock()}</div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead(
    cx('pages.tutor.audienceEyebrow', 'Who it is for'),
    cx('pages.tutor.audienceTitle', 'Built for the person who has no one to ask')
  )}
  <div class="grid g4">
    ${[[cx('pages.tutor.a1Title','Students'),cx('pages.tutor.a1Desc','Learning quantum alongside a physics, maths or computing degree — or entirely outside one.')],
       [cx('pages.tutor.a2Title','Self-learners'),cx('pages.tutor.a2Desc','No university course available locally, and no lab to walk into.')],
       [cx('pages.tutor.a3Title','Educators'),cx('pages.tutor.a3Desc','Preparing to teach quantum for the first time, and needing a reliable explainer.')],
       [cx('pages.tutor.a4Title','Professionals'),cx('pages.tutor.a4Desc','Moving into quantum from software, telecoms, finance or engineering.')]
      ].map(([t,d])=>`<div class="pillar rv"><h3 style="font-size:1.2rem">${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.tutor.howEyebrow', 'How it works'),
    cx('pages.tutor.howTitle', 'Four steps')
  )}
  <div class="grid g2" style="gap:0 48px">
    <div>
      ${[[cx('pages.tutor.s1Title','Ask anything'),cx('pages.tutor.s1Desc','Start from a question, a piece of code, or a topic. The tutor meets you where you are.')],
         [cx('pages.tutor.s2Title','Follow a pathway'),cx('pages.tutor.s2Desc','Structured learning pathways take you from qubits and superposition through gates, circuits and algorithms.')],
         [cx('pages.tutor.s3Title','Practise'),cx('pages.tutor.s3Desc','Worked examples and exercises with feedback, rather than a wall of text.')],
         [cx('pages.tutor.s4Title','Go further'),cx('pages.tutor.s4Desc','When you are ready, the tutor points you at Quantum Africa research projects, events and opportunities.')]
        ].map(([t,d],i)=>`<div class="step"><span class="n">0${i+1}</span><div><h4>${esc(t)}</h4><p>${esc(d)}</p></div></div>`).join('')}
    </div>
    <div>${cimg('pages.tutor.interfaceImage','Two or three real interface captures — conversation, pathway, exercise','PNG · any width ≥1200px','tall','bloch')}</div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead(
    cx('pages.tutor.featEyebrow', 'Features'),
    cx('pages.tutor.featTitle', 'What it does')
  )}
  <div class="grid g3">
    ${[[cx('pages.tutor.f1Title','Conversational learning'),cx('pages.tutor.f1Desc','Explanations that adapt to the question asked, not a fixed syllabus.')],
       [cx('pages.tutor.f2Title','Learning pathways'),cx('pages.tutor.f2Desc','Beginner, intermediate and applied tracks with clear prerequisites.')],
       [cx('pages.tutor.f3Title','Code support'),cx('pages.tutor.f3Desc','Help reading and writing circuit code, with worked examples.')],
       [cx('pages.tutor.f4Title','Free access'),cx('pages.tutor.f4Desc','No paywall. Access for anyone, anywhere.')],
       [cx('pages.tutor.f5Title','Built for African learners'),cx('pages.tutor.f5Desc','Designed around low bandwidth and self-study, and open to multilingual support.')],
       [cx('pages.tutor.f6Title','Connected to the ecosystem'),cx('pages.tutor.f6Desc','Links out to Quantum Africa events, projects and opportunities.')]
      ].map(([t,d])=>`<div class="card pad rv"><div class="card-b"><h4>${esc(t)}</h4><p>${esc(d)}</p></div></div>`).join('')}
  </div>
  <div class="mt48 grid g2">
  </div>
</div></section>

<section class="cta-band">
  ${ringMark('cta-ring')}
  <div class="wrap">
  <h2>${cx('pages.tutor.ctaBandTitle', 'Start learning quantum computing today.')}</h2>
  <div class="btns"><a class="btn teal" href="#/join">${cx('pages.tutor.ctaBandBtn1', 'Try the Quantum AI Tutor')}</a><a class="btn inv ghost" href="#/universities">${cx('pages.tutor.ctaBandBtn2', 'Bring it to your university')}</a></div>
</div></section>`;

/* ---------- RESEARCH INDEX ---------- */
PAGES.research = () => `
${crumb([{t:'Home',h:'#/'},{t:'Research'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.research.heroEyebrow', 'Research &amp; innovation')}</span><i></i></div>
  <h1>${cx('pages.research.heroTitle', 'Collaborate. Research. Build.')}</h1>
  <p class="lede">${cx('pages.research.heroLede', 'Projects are open to new contributors, and code is published where possible.')}</p>
  <div class="phero-meta">
    <a class="btn sm" href="#/join">${cx('pages.research.heroBtn1', 'Join a project')} <span class="ar" aria-hidden="true">&rarr;</span></a>
    <a class="btn sm ghost" href="#/researchers">${cx('pages.research.heroBtn2', 'For researchers')}</a>
  </div>
</div></section>

<section class="sec deep">
  ${ringMark('cta-ring')}
  <div class="wrap">
    ${sectionHead(
    cx('pages.research.projectsEyebrow', 'Active projects'),
    cx('pages.research.projectsTitle', 'Four projects running now')
  )}
    <div class="blist">
      ${PROJECTS.map((p,i)=>`<a class="brow rv" href="#/research/${p.slug}">
        <span class="bn">${String(i+1).padStart(2,'0')}</span>
        <span class="bmeta">
          <h3>${esc(p.title)}</h3>
          <span class="pill current">${cx('pages.research.statusActive', 'Active')}</span>
          <span class="kv" style="color:rgba(255,255,255,.55)">${esc(p.area)}${p.proposedBy ? ` &nbsp;·&nbsp; ${cx('pages.research.leadLabel', 'Lead')} ${esc(p.proposedBy)}` : ''}</span>
        </span>
        <span class="bfig">${rimg(p.image || null,'Project cover figure or generated artwork','1600×1000 · PNG/SVG','',p.art || 'circuit')}</span>
      </a>`).join('')}
    </div>
  </div>
</section>

<section class="sec"><div class="wrap">
  ${sectionHead(
    cx('pages.research.outEyebrow', 'Outputs'),
    cx('pages.research.outTitle', 'Publications, code and openings')
  )}
  <div class="grid g3">
    <div class="card pad rv"><div class="card-b"><h4>${cx('pages.research.out1Head', 'Publications')}</h4>
      <div style="margin-top:10px">
        <a class="pub-row" href="${esc(QUBO_PUB.doi)}" target="_blank" rel="noopener noreferrer" style="display:block;padding:12px 13px;border-radius:8px;background:color-mix(in srgb,var(--bg) 88%,transparent);border:1px solid var(--line);text-decoration:none;color:inherit;margin-bottom:8px">
          <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:6px"><span class="tag" style="margin:0;background:var(--gold);color:#061224">DOI</span><b style="font-size:.95rem;line-height:1.3">${esc(QUBO_PUB.title)}: ${esc(QUBO_PUB.subTitle)}</b></div>
          <div class="small" style="margin-bottom:6px;color:var(--ink-2)">${QUBO_PUB.authors.map((a,i)=>esc(a.n)+(i<QUBO_PUB.authors.length-1?', ':'')).join('')}</div>
          <div style="display:flex;align-items:center;gap:10px;justify-content:space-between"><span class="small" style="color:var(--ink-3)">dl.acm.org</span><span class="link-a" style="font-size:.82rem">${cx('pages.research.out1PdfCta','Open PDF')} <span class="ar" aria-hidden="true">&rarr;</span></span></div>
        </a>
      </div></div></div>
    <div class="card pad rv"><div class="card-b"><h4>${cx('pages.research.out2Head', 'Open source')}</h4><p>${cx('pages.research.out2BodyPrefix', 'Public repositories from Quantum Africa projects.')}</p></div></div>
    <div class="card pad rv"><div class="card-b"><h4>${cx('pages.research.out3Head', 'Open roles')}</h4><p>${cx('pages.research.out3BodyPrefix', 'Contributor, student researcher, mentor.')}<a class="link-a mt16" href="#/join" style="display:inline-flex">${cx('pages.research.out3Cta', 'Get involved')} <span class="ar" aria-hidden="true">&rarr;</span></a></p></div></div>
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  <div class="split">
    <div>${sectionHead(
      cx('pages.research.propEyebrow', 'Propose'),
      cx('pages.research.propTitle', 'Bring us a project'),
      cx('pages.research.propLede', 'If you have a project that needs collaborators, students or compute, tell us about it.')
    )}
      <a class="btn" href="#/contact">${cx('pages.research.propBtn', 'Propose a project')} <span class="ar" aria-hidden="true">&rarr;</span></a>
    </div>
    <div>${rimg('/media/projects/bring.png','Optional: a photo of the team at work','1600×900 · JPG','tall','lightcone')}</div>
  </div>
</div></section>`;

/* ---------- RESEARCH DETAIL ---------- */
PAGES.researchDetail = (slug) => {
  const p = PROJECTS.find(x=>x.slug===slug) || PROJECTS[0];
  const _descRender = (p) => {
    if(p.description) {
      let md = String(p.description).trim();
      md = md.replace(/\r\n/g,'\n');
      const paras = md.split(/\n\s*\n/).filter(s=>s && s.trim().length);
      return paras.map(p => {
        const line = p.trim();
        if(/^([A-Z][A-Za-z0-9/&,. \-]{1,60})?[Nn]ote[ :]/.test(line.split('\n')[0]) || /^Data note|SCOPE TO CONFIRM|\[ SCOPE/.test(line)) {
          return `<div class="panel note" style="margin:16px 0 22px;padding:16px 18px;border-left:3px solid var(--gold);background:color-mix(in srgb, var(--gold) 8%, transparent)"><p class="xs" style="margin:0;color:var(--ink);line-height:1.55">${line.split('\n').map(l=>esc(l)).join('<br>')}</p></div>`;
        }
        return `<p>${line.split('\n').map(l=>esc(l)).join('<br>')}</p>`;
      }).join('');
    }
    return `<p>${esc(p.short || '')}</p><p>${pht(cx('pages.researchDetail.descExtended', 'EXTENDED DESCRIPTION — 2 to 3 paragraphs written by the project lead'))}</p>`;
  };
  const _objRender = (p) => {
    const list = Array.isArray(p.objectives) ? p.objectives : [];
    if(list.length){
      return `<ul>${list.map(o=>`<li>${esc(o)}</li>`).join('')}</ul>`;
    }
    return `<ul>${Array.from({length:3}).map((_,i)=>`<li>${pht(cx('pages.researchDetail.obj'+(i+1), 'Objective'))}</li>`).join('')}</ul>`;
  };
  const _needsRender = (p) => {
    if(p.needs){
      return `<p style="margin:0">${String(p.needs).split('\n').map(l=>esc(l)).join('<br>')}</p>`;
    }
    return `<p>${cx('pages.researchDetail.joinPrefix', 'This project is open to new contributors.')} ${pht(cx('pages.researchDetail.joinBody', 'Skills needed and time commitment'))}</p>`;
  };
  const _heroArt = p.image ? p.image : (p.art || 'circuit');
  return `
${crumb([{t:'Home',h:'#/'},{t:'Research',h:'#/research'},{t:p.title}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.researchDetail.heroEyebrow', 'Research project')}</span><i></i></div>
  <h1 class="mt24" style="font-size:clamp(2rem,4vw,3.2rem)">${esc(p.title)}</h1>
  <p class="lede">${esc(p.short || '')}</p>
  <div class="phero-meta"><span class="pill current">${cx('pages.researchDetail.statusActive', 'Active')}</span><span class="tag">${esc(p.area)}</span>${(p.tech||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
</div></section>
<section class="sec flush detail-hero" style="padding-top:0"><div class="wrap">${(() => { const cv = cval('pages.researchDetail.heroImage'); if(cv) return cimg('pages.researchDetail.heroImage','Optional project photo. The generated figure is the default.','2400×750 · SVG or PNG','wide project-hero'); return rimg(p.image || null,'Optional project photo. The generated figure is the default.','2400×750 · SVG or PNG','wide project-hero', p.art || 'circuit'); })()}</div></section>
<section class="sec"><div class="wrap"><div class="side">
  <div class="prose">
    <h3>${cx('pages.researchDetail.descHead', 'Description')}</h3>
    ${_descRender(p)}
    ${p.proposedBy ? `<h3 style="margin-top:28px">${cx('pages.researchDetail.proposedHead', 'Proposed by')}</h3><p style="margin:0;font-weight:600;color:var(--ink)">${esc(p.proposedBy)}</p>` : ''}
    <h3 style="margin-top:28px">${cx('pages.researchDetail.objHead', 'Objectives')}</h3>
    ${_objRender(p)}
    <h3 style="margin-top:28px">${cx('pages.researchDetail.joinHead', 'Join this project / Skills needed')}</h3>
    ${_needsRender(p)}
    ${p.authors && p.authors.length ? `
      <h3 style="margin-top:28px">${cx('pages.researchDetail.authorsHead', 'Authors &amp; affiliations')}</h3>
      <div class="authors">${p.authors.map(a=>`
        <div class="author rv">
          <div class="a-n">${esc(a.n)}</div>
          ${a.a ? `<div class="a-a small">${esc(a.a)}</div>`:''}
          ${a.e ? `<div class="a-e small"><a class="link-a" href="mailto:${esc(a.e)}">${esc(a.e)}</a></div>`:''}
        </div>`).join('')}
      </div>`:''}
    ${p.doi ? `
      <h3 style="margin-top:28px">${cx('pages.researchDetail.pubHead', 'Publication')}</h3>
      <a class="pub-row" href="${esc(p.doi)}" target="_blank" rel="noopener noreferrer" style="display:block;padding:14px 16px;border-radius:10px;background:color-mix(in srgb,var(--bg) 94%,transparent);border:1px solid var(--line);text-decoration:none;color:inherit;margin-top:10px">
        <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:8px">
          <span class="tag" style="margin:0;background:var(--gold);color:#061224">DOI</span>
          <b style="font-size:1rem;line-height:1.45">${esc(p.title)}</b>
        </div>
        <div style="display:flex;align-items:center;gap:10px;justify-content:space-between;margin-top:4px">
          <span class="small" style="color:var(--ink-3)">dl.acm.org · opens in a new tab</span>
          <span class="link-a" style="font-size:.86rem">${cx('pages.researchDetail.pubCta','Open PDF (ACM Digital Library)')} <span class="ar" aria-hidden="true">&rarr;</span></span>
        </div>
      </a>`:''}
    <a class="btn mt16" style="display:inline-flex" href="#/join">${cx('pages.researchDetail.joinBtn', 'Join this project')} <span class="ar" aria-hidden="true">→</span></a>
  </div>
  <aside>
    <div class="panel"><h5>${cx('pages.researchDetail.projPanelHead', 'Project')}</h5><dl class="dl-list">
      <div class="dl-item"><dt>${cx('pages.researchDetail.areaLabel', 'Area')}</dt><dd>${esc(p.area)}</dd></div>
      <div class="dl-item"><dt>${cx('pages.researchDetail.statusLabel', 'Status')}</dt><dd>${cx('pages.researchDetail.statusActive', 'Active')}</dd></div>
      <div class="dl-item"><dt>${cx('pages.researchDetail.toolsLabel', 'Tools')}</dt><dd>${(p.tech||[]).map(t=>esc(t)).join(' · ') || pht(cx('pages.researchDetail.toolsValue', 'Python · Qiskit · …'))}</dd></div>
    </dl></div>
  </aside>
</div></div></section>
<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.researchDetail.moreEyebrow', 'More research'),
    cx('pages.researchDetail.moreTitle', 'Other projects'),
    null,
    {t:cx('pages.researchDetail.moreCta', 'All projects'),h:'#/research'}
  )}
  <div class="grid g3">${PROJECTS.filter(x=>x.slug!==p.slug).slice(0,3).map(projectCard).join('')}</div>
</div></section>`;
};

/* ---------- CHAPTERS ---------- */
PAGES.chapters = () => `
${crumb([{t:'Home',h:'#/'},{t:'Community',h:'#/chapters'},{t:'Chapters'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.chapters.heroEyebrow', 'Community · Chapters')}</span><i></i></div>
  <h1 class="mt24">${cx('pages.chapters.heroTitle', 'Building Quantum Communities Across Africa Through Chapters')}</h1>
  <p class="lede">${cx('pages.chapters.heroLede', 'Empowering local leaders to build and grow quantum communities through dedicated chapters, university engagement, events, and collaboration..')}</p>
</div></section>
<section class="sec"><div class="wrap">
  <div class="map-wrap">${africaMap()}${chapterList()}</div>
</div></section>
<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.chapters.allEyebrow', 'All chapters'),
    cx('pages.chapters.allTitle', 'Many Chapters, one network')
  )}
  <div class="grid g3">${CHAPTERS.map(chapterCard).join('')}</div>
  <div class="mt48 panel">
    <h5>${cx('pages.chapters.startPanelHead', 'Start a chapter')}</h5>
    <p class="small">${cx('pages.chapters.startPanelBody', 'Quantum Africa is developing chapters across the continent. If there is no chapter in your country and you want to start one, we will help.')}</p>
    <a class="btn sm mt16" href="#/join">${cx('pages.chapters.startPanelBtn', 'Start a chapter')} <span class="ar" aria-hidden="true">→</span></a>
  </div>
</div></section>`;

PAGES.chapterDetail = (slug) => {
  const c = CHAPTERS.find(x=>x.slug===slug) || CHAPTERS[0];
  const nm = c.name;
  const chapterPeople = PEOPLE.filter(p=>{
    const pc = ((p.chapter||'')+'').replace(/\s+/g,'').toLowerCase();
    const cc = (nm+'').replace(/\s+/g,'').toLowerCase();
    return pc && pc === cc;
  });
  const fallbackLeads = PEOPLE.filter(p=>(p.group||'')==='Chapter leads').slice(0,4);
  const showPeople = chapterPeople.length ? chapterPeople : fallbackLeads;
  const leadBlock = (c.lead||c.leadRole) ? `
  <div class="panel mt24">
    <h5>${cx('pages.chapterDetail.namedLeadHead', 'Chapter lead')}</h5>
    ${c.lead ? `<p><strong>${esc(c.lead)}</strong>${c.leadRole ? ' — '+esc(c.leadRole) : ''}</p>` : ''}
    ${c.leadRole && !c.lead ? `<p>${esc(c.leadRole)}</p>` : ''}
    ${c.email ? `<p class="small mt8"><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></p>` : ''}
  </div>` : '';
  return `
${crumb([{t:'Home',h:'#/'},{t:'Chapters',h:'#/chapters'},{t:nm}])}
<section class="sec flush" style="padding:0"><div class="wrap">${cimg('pages.chapterDetail.heroImage','Chapter hero — team or event photo','2400×1000 · JPG → assets/chapters/'+c.slug+'/hero.jpg','wide','network')}</div></section>
<section class="phero" style="padding-top:34px">${countryWatermark(c.code,'wm-chapter')}<div class="wrap">
  <div class="row" style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
    <span class="fl" style="width:56px;height:38px;border:1.5px dashed color-mix(in srgb,var(--ph) 45%,transparent);border-radius:2px;display:flex;align-items:center;justify-content:center;font-family:var(--f);font-size:1.1rem;color:var(--ph)" aria-hidden="true">${c.flag||'?'}</span>
    <span class="tag">${cx('pages.chapterDetail.nationalTagPrefix', 'National chapter')} · ${c.code ? c.code.toUpperCase() : '—'}</span>
    ${statusPill()}
  </div>
  <h1 class="mt16">Quantum ${esc(nm)}</h1>
  <div class="phero-meta"><a class="btn sm grad" href="#/join">${cx('pages.chapterDetail.heroBtn1', 'Join Quantum')} ${esc(nm)}</a><a class="btn sm ghost" href="#/contact">${cx('pages.chapterDetail.heroBtn2', 'Contact the chapter')}</a></div>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead(
    cx('pages.chapterDetail.leadEyebrow', 'Leadership'),
    cx('pages.chapterDetail.leadTitle', 'Who runs this chapter')
  )}
  ${leadBlock}
  <div class="grid g4 mt24">${showPeople.length ? showPeople.map(personCard).join('') : '<p class="small">'+pht(cx('pages.chapterDetail.emptyLeadNote', 'Add chapter leads in the admin panel under Team by setting a person\'s Group to "Chapter leads" and their Chapter field to this country.'))+'</p>'}</div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.chapterDetail.actEyebrow', 'Activity'),
    cx('pages.chapterDetail.actTitle', 'Events and programmes'),
    null,
    {t:cx('pages.chapterDetail.actCta', 'All events'),h:'#/events'}
  )}
  <div class="grid g3">${EVENTS.slice(0,3).map((e,i)=>eventCard(e,i)).join('')}</div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="mt48">
    <h3>${cx('pages.chapterDetail.reHead', 'Research &amp; education in')} ${esc(nm)}</h3>
    <div class="grid g3 mt16">${PROJECTS.slice(0,3).map(projectCard).join('')}</div>
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.chapterDetail.netEyebrow', 'Network'),
    cx('pages.chapterDetail.netTitle', 'Other chapters'),
    null,
    {t:cx('pages.chapterDetail.netCta', 'All chapters'),h:'#/chapters'}
  )}
  <div class="grid g4">${CHAPTERS.filter(x=>x.slug!==c.slug).slice(0,4).map(chapterCard).join('')}</div>
</div></section>`;
};

/* ---------- EVENTS ---------- */
PAGES.events = () => {
  const upcoming = EVENTS.filter(e=>e.when==='upcoming');
  const past = EVENTS.filter(e=>e.when==='past');
  const featured = upcoming[0] || EVENTS[0];
  const restFeatured = upcoming.slice(1).concat(past.slice(0,4));
  const types = Array.from(new Set(EVENTS.map(e=>e.type).filter(Boolean)));
  return `
${crumb([{t:'Home',h:'#/'},{t:'Events'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.events.heroEyebrow', 'Events')}</span><i></i></div>
  <h1>${cx('pages.events.heroTitle', 'Hackathons, workshops, webinars and chapter events.')}</h1>
  <p class="lede">${cx('pages.events.heroLede', 'Upcoming sessions and past recordings in one place. Filter by date or event type to find what matters.')}</p>
  <div class="phero-meta" style="gap:10px;margin-top:22px">
    <span class="pill current">${upcoming.length} Upcoming</span>
    <span class="pill future">${past.length} Delivered</span>
    <span class="pill">${EVENTS.length} Total</span>
    <a class="btn ghost sm" href="#/events/webinars">Webinar series <span class="ar" aria-hidden="true">&rarr;</span></a>
    <a class="btn ghost sm" href="#/events/workshops">QML4Africa workshops <span class="ar" aria-hidden="true">&rarr;</span></a>
  </div>
</div></section>

<section class="sec flush"><div class="wrap">
  <div class="news-lead">
    <a class="feature rv" href="#/events/${featured.slug}">
      <div class="card-media">${rimg(featured.heroImage||featured.image,'Featured event photograph — '+(esc(featured.title||featured.n||'')),'2400×1350 · JPG','','bloch')}</div>
      <div class="fb">
        <div class="news-meta"><span class="t">${cx('pages.events.nextUpPrefix', (featured.when==='upcoming'?'Featured next':'Headlining'))} · ${esc(featured.type)}</span><span>${(featured.start?oppDate(featured.start):'')}${(featured.end&&featured.end!==featured.start)?' – '+oppDate(featured.end):''}</span>${featured.city?`<span>${esc(featured.city)}</span>`:''}</div>
        <h3>${esc(featured.title||featured.n)}</h3>
        <p>${esc(featured.lede||featured.subhead||featured.description||'').slice(0,260)}${(featured.lede||featured.description||'').length>260?'…':''}</p>
        <span class="link-a">${featured.when==='upcoming'?(featured.registerUrl?'Register for this event':'View event details'):'Open event details'} <span class="ar" aria-hidden="true">&rarr;</span></span>
      </div>
    </a>
    <div>
      <div class="sec-idx" style="margin-bottom:10px"><span class="lbl">${cx('pages.events.alsoLbl', 'Also on the calendar')}</span><i></i></div>
      <div class="news-side">
        ${restFeatured.map(e=>`<a class="news-row rv" href="#/events/${e.slug}">
          <div class="news-meta"><span class="t">${esc(e.type)}</span><span>${e.when==='upcoming'?'Upcoming':'Delivered'}</span>${e.start?`<span>${esc(oppDate(e.start))}</span>`:''}</div>
          <h4>${esc(e.title||e.n)}</h4></a>`).join('')}
      </div>
      <div class="news-more"><a class="btn ghost sm" href="#/join">${cx('pages.events.inviteBtn', 'Get event invitations')} <span class="ar" aria-hidden="true">&rarr;</span></a></div>
    </div>
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.events.archiveEyebrow', 'All events'),
    cx('pages.events.archiveTitle', 'Every session, hackathon and workshop'),
    cx('pages.events.archiveLede', 'Use the filters to narrow by date or format. Click a card to open the full event page with recordings, registration and gallery.')
  )}
  <div class="filters" data-filter="events">
    <div class="fgroup"><span class="fl">${cx('pages.events.flWhen', 'When')}</span>
      ${['All','Upcoming','Past'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="when" data-v="${a.toLowerCase()}">${cx('pages.events.chipWhen'+a, a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">${cx('pages.events.flType', 'Type')}</span>
      ${['All'].concat(types).map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="type" data-v="${esc(a)}">${cx('pages.events.chipType'+(i), a)}</button>`).join('')}
    </div>
  </div>
  <div class="result-n" id="evCount">${EVENTS.length} ${cx('pages.events.resultSuffix', 'events')}</div>
  <div class="grid g3" id="evGrid">${EVENTS.map((e,i)=>eventCard(e,i)).join('')}</div>
  <div class="panel mt48">
    <h5>${cx('pages.events.elsewhereHead', 'Looking for conferences elsewhere?')}</h5>
    <p class="small">${cx('pages.events.elsewhereBody', 'Quantum conferences, workshops and summer schools worldwide are collected on the Opportunities page, alongside PhDs, postdocs and industry roles.')}</p>
    <a class="btn sm mt16" href="#/opportunities">${cx('pages.events.elsewhereBtn', 'See what is coming up')} <span class="ar" aria-hidden="true">&rarr;</span></a>
  </div>
</div></section>

`;};

PAGES.eventDetail = (slug) => {
  const e = EVENTS.find(x=>x.slug===slug) || EVENTS[0];
  const hasGall = Array.isArray(e.gallery) && e.gallery.length;
  const hasLinks = Array.isArray(e.links) && e.links.length;
  const hasReg = !!e.registerUrl;
  const hasPartners = Array.isArray(e.partners) && e.partners.length;
  const pillLbl = e.when==='upcoming' ? (e.status||'Upcoming') : (e.status||'Past');
  const pillCls = e.when==='upcoming' ? 'current' : 'future';
  const whenStr = (e.start && e.end) ? oppDate(e.start)+(e.end!==e.start?' – '+oppDate(e.end):'') : '';
  const where = [e.city, e.country].filter(Boolean).join(', ');
  const title = e.title || e.n;
  const descHtml = e.description ? _mdToHtml(e.description) : pht(cx('pages.eventDetail.aboutBody', 'FULL DESCRIPTION'));
  const galleryHtml = hasGall
    ? (e.gallery.length===1
        ? `<div class="slot wide filled" style="aspect-ratio:1/1;background:var(--bg-2);border-radius:12px"><img src="${esc(mediaUrl(e.gallery[0]))}" alt="${esc(title)}" loading="lazy" style="width:100%;height:100%;object-fit:contain;object-position:center;display:block;border-radius:12px"></div>`
        : `<div class="grid g3">${e.gallery.map(src=>`<div class="slot filled" style="aspect-ratio:1/1;background:var(--bg-2);border-radius:10px"><img src="${esc(mediaUrl(src))}" alt="${esc(title)}" loading="lazy" style="width:100%;height:100%;object-fit:contain;object-position:center;display:block;border-radius:10px"></div>`).join('')}</div>`)
    : '';
  const linksHtml = (hasLinks||hasReg)
    ? `<div class="rows" style="margin-top:8px">${(hasReg?[{l:'Register / RSVP', u:e.registerUrl}]:[]).concat(hasLinks?e.links:[]).map(l=>`<div class="row-i" style="grid-template-columns:110px 1fr;gap:12px;align-items:start"><span class="dl" style="padding-top:10px">${esc(l.l)}</span><span style="padding-top:8px"><a class="link-a" href="${esc(l.u)}" target="_blank" rel="noopener noreferrer">${esc(l.u)}</a></span></div>`).join('')}</div>`
    : '';
  return `
${crumb([{t:'Home',h:'#/'},{t:'Events',h:'#/events'},{t:e.type}])}
<section class="sec flush" style="padding:0"><div class="wrap">${e.heroImage||e.image
  ? `<div class="slot wide filled"><img src="${esc(mediaUrl(e.heroImage||e.image))}" alt="${esc(title)} — event hero" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"></div>`
  : cimg('pages.eventDetail.heroImage','Event hero — speaker portrait or event photograph','2400×1000 · JPG','wide','bloch')}</div></section>
<section class="phero" style="padding-top:34px"><div class="wrap">
  <div class="phero-meta" style="margin:0 0 18px"><span class="tag">${esc(e.type)}</span>${e.series?`<span class="pill current">${esc(e.series)} · ${cx('pages.eventDetail.editionPrefix','Edition')} ${esc(e.edition)}</span>`:`<span class="pill ${pillCls}">${esc(pillLbl)}</span>`}${e.eyebrow?`<span class="pill">${esc(e.eyebrow)}</span>`:''}</div>
  <h1 style="font-size:clamp(2rem,4vw,3.2rem)">${esc(title)}</h1>
  ${e.subhead?`<p class="mt16" style="color:var(--ink-2);line-height:1.55">${esc(e.subhead)}</p>`:''}
  ${e.series?`<p class="small mt16"><a class="link-a" href="#/events/workshops">${cx('pages.eventDetail.backSeriesPrefix', 'Back to the')} ${esc(e.series)} ${cx('pages.eventDetail.backSeriesSuffix', 'series')} <span class="ar" aria-hidden="true">&rarr;</span></a></p>`:''}
  <p class="lede">${esc(e.lede||'')}</p>
</div></section>
<section class="sec"><div class="wrap"><div class="side">
  <div class="prose">
    <h3>${cx('pages.eventDetail.aboutHead', 'About this event')}</h3>
    ${descHtml}
    ${linksHtml?`<h3 style="margin-top:32px">${cx('pages.eventDetail.resHead', 'Links &amp; registration')}</h3>${linksHtml}`:''}
    <h3 style="margin-top:32px">${cx('pages.eventDetail.photosHead', 'Photos &amp; gallery')}</h3>
    ${galleryHtml}
    ${e.when==='past'&&e.status?`<h3 style="margin-top:32px">${cx('pages.eventDetail.outcomesHead','Outcomes &amp; highlights')}</h3><p>${esc(e.status)}</p>`:''}
  </div>
  <aside>
    <div class="panel">
      <h5>${cx('pages.eventDetail.detailsHead', 'Details')}</h5>
      <dl class="dl-list">
        ${whenStr?`<div class="dl-item"><dt>${cx('pages.eventDetail.dateLabel', 'Date')}</dt><dd>${esc(whenStr)}</dd></div>`:''}
        ${e.deadline?`<div class="dl-item"><dt>Registration deadline</dt><dd>${esc(oppDate(e.deadline))}</dd></div>`:''}
        ${where?`<div class="dl-item"><dt>${cx('pages.eventDetail.locLabel', 'Location')}</dt><dd>${esc(where)}</dd></div>`:''}
        <div class="dl-item"><dt>${cx('pages.eventDetail.langLabel', 'Language')}</dt><dd>${cx('pages.eventDetail.langValue', 'English')}</dd></div>
        <div class="dl-item"><dt>${cx('pages.eventDetail.costLabel', 'Cost')}</dt><dd>${cx('pages.eventDetail.costValue', 'Free')}</dd></div>
      </dl>
      ${hasReg
        ? `<a class="btn teal mt16" href="${esc(e.registerUrl)}" target="_blank" rel="noopener noreferrer" style="width:100%;justify-content:center">${e.when==='upcoming'?cx('pages.eventDetail.btnRegister','Register now'):'Open event page'}</a>
           <p class="xs mt8">${cx('pages.eventDetail.regNote', 'External registration link — opens in a new tab.')}</p>`
        : (hasLinks
            ? `<a class="btn teal mt16" href="${esc(e.links[0].u)}" target="_blank" rel="noopener noreferrer" style="width:100%;justify-content:center">${esc(e.links[0].l)}</a>`
            : `<a class="btn teal mt16" href="#/join" style="width:100%;justify-content:center">${e.when==='upcoming'?cx('pages.eventDetail.btnRegister','Register interest'):cx('pages.eventDetail.btnWatch','Contact for recording')}</a>`)}
    </div>
    <div class="panel mt16"><h5>${cx('pages.eventDetail.orgHead', 'Organisers')}</h5><p class="small">${esc(e.org||pht(cx('pages.eventDetail.orgBody', 'Organising team / chapter')))}</p></div>
    ${hasPartners?`<div class="panel mt16"><h5>${cx('pages.eventDetail.partnersHead', 'Partners &amp; supporters')}</h5><ul style="margin:0;padding-left:18px;color:var(--ink-2);line-height:1.85;font-size:.88rem">${e.partners.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></div>`:''}
    ${e.editionUrl?`<div class="panel mt16"><h5>External edition page</h5><a class="link-a" href="${esc(e.editionUrl)}" target="_blank" rel="noopener noreferrer">Open on the organiser site <span class="ar" aria-hidden="true">&rarr;</span></a></div>`:''}
  </aside>
</div></div></section>
<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.eventDetail.moreEyebrow', 'More'),
    cx('pages.eventDetail.moreTitle', 'Related events'),
    null,
    {t:cx('pages.eventDetail.moreCta', 'All events'),h:'#/events'}
  )}
  <div class="grid g3">${EVENTS.filter(x=>x.slug!==e.slug).slice(0,3).map((ev,i)=>eventCard(ev,i)).join('')}</div>
</div></section>`;
};


/* ---------- QML4AFRICA WORKSHOP SERIES ---------- */
PAGES.workshops = () => {
  const eds = EVENTS.filter(e => e.series === 'QML4Africa' && e.when !== 'upcoming').sort((a,b)=>a.edition.localeCompare(b.edition));
  return `
${crumb([{t:'Home',h:'#/'},{t:'Events',h:'#/events'},{t:'Workshops'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.workshops.heroEyebrow', 'Workshop series')}</span><i></i></div>
  <h1>${cx('pages.workshops.heroTitle', 'Quantum Machine Learning 4 Africa')}</h1>
  <p class="lede">${cx('pages.workshops.heroLede', 'A hands-on workshop series designed to equip African students and researchers with practical skills in quantum machine learning, combining foundational concepts with programming and real-world applications.')}</p>
  <div class="phero-meta"><a class="btn teal" href="#/join">${cx('pages.workshops.heroBtn1', 'Join the next edition')} <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn ghost" href="#/events">${cx('pages.workshops.heroBtn2', 'All events')}</a></div>
  ${africaWatermark('wm-hero')}
</div></section>

<section class="sec flush" style="padding-top:0"><div class="wrap">
  <div class="series-bar tight">
    <span>${cx('pages.workshops.barLbl1','Series')} <b>QML4Africa</b></span>
    <span>${cx('pages.workshops.barLbl2','Editions delivered')} <b>2</b></span>
    <span>${cx('pages.workshops.barLbl3','Format')} <b>In person</b></span>
    <span>${cx('pages.workshops.barLbl4','Participants')} <b>+250</b></span>
  </div>
  <div class="editions tight">
    ${eds.map((e,i)=>{
      const datesLine =
        e.edition==='01' ? 'Delivered September 2025, Kigali, Rwanda' :
        e.edition==='02' ? 'Delivered August 2026, Lagos, Nigeria' : '';
      const editionHref = e.editionUrl ? e.editionUrl : `#/events/${e.slug}`;
      const cardImg = e.image
        ? `<img class="edition-photo" src="${esc(mediaUrl(e.image))}" alt="${esc(e.title)}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:0">
           <div class="edition-overlay" aria-hidden="true"></div>`
        : '';
      const titleShort = e.subhead || e.title.replace('Quantum Machine Learning 4 Africa — ','');
      const copy =
        e.edition==='01' ? cx('pages.workshops.editionCopy1','An introductory hands-on workshop introducing participants to the foundations of quantum machine learning, quantum computing concepts, and quantum programming.') :
        e.edition==='02' ? cx('pages.workshops.editionCopy2','Explored more advanced concepts and practical approaches to quantum machine learning, bringing together African students, researchers, and quantum enthusiasts.') :
        '';
      const pillCls = (e.when==='upcoming'||e.status==='Planned') ? 'future' : 'current';
      return `<a class="edition rv" href="${editionHref}" ${e.editionUrl?'target="_blank" rel="noopener noreferrer"':''} style="position:relative;overflow:hidden">
        ${cardImg || patternPanel('soft')}
        <div style="position:relative;z-index:2">
          <span class="en">${esc(e.edition)}</span>
          <h3>${esc(titleShort)}</h3>
          ${copy ? `<p>${esc(copy)}</p>` : ''}
          <span class="efoot">
            <span class="pill ${pillCls}">${esc(e.status||(e.when==='upcoming'?'Upcoming':'Delivered'))}</span>
            ${datesLine ? `<span class="kv" style="color:rgba(255,255,255,.78)">${esc(datesLine)}</span>` : ''}
            <span class="link-a">${cx('pages.workshops.editionPage', 'Edition page')} <span class="ar" aria-hidden="true">&rarr;</span></span>
          </span>
        </div>
      </a>`;
    }).join('')}
    <div class="edition planned rv">
      ${patternPanel('soft','light')}
      <div style="position:relative;z-index:2">
        <span class="en">03</span>
        <h3>${cx('pages.workshops.planTitle', 'Third Edition')}</h3>
        <p>${cx('pages.workshops.planBody', 'A new edition of QML4Africa bringing together African learners and researchers for another hands-on exploration of quantum machine learning.')}</p>
        <span class="efoot"><span class="pill future">${cx('pages.workshops.planPill', 'Planned')}</span>
          <a class="link-a" href="#/join">${cx('pages.workshops.planCta', 'Register interest')} <span class="ar" aria-hidden="true">&rarr;</span></a></span>
      </div>
    </div>
  </div>
</div></section>

<section class="sec inv" style="padding-top:56px;padding-bottom:56px"><div class="wrap">
  <div class="sec-idx"><span class="n" style="color:var(--vq-gold,var(--gold))">01</span><span class="lbl" style="color:rgba(255,255,255,.6)">The Series</span><i></i></div>
  <div class="sec-title" style="color:#fff">
    <h2 style="color:#fff">${cx('pages.workshops.seriesTitle', 'What is QML4Africa')}</h2>
  </div>
  <div class="ql-split">
    <div class="ql-split-copy">
      <p class="ql-lead-par"><b>QML4Africa</b> is a practical learning initiative connecting African students and researchers with the emerging field of quantum machine learning.</p>
      <p class="ql-lede">The series combines accessible theory, hands-on programming, expert-led sessions, and collaborative learning to help participants move from understanding quantum machine learning concepts to implementing them in practice.</p>
      <div class="ql-stats">
        <span><b>3</b><em>Editions planned</em></span>
        <span><b>2</b><em>Delivered so far</em></span>
        <span><b>+250</b><em>Participants</em></span>
      </div>
    </div>
    <div class="ql-split-art">
      ${ringMark('ql-art-ring',{noSvg:true})}
      <img class="ql-art-img" src="${esc(mediaUrl('/media/workshops/main.jpeg'))}" alt="QML4Africa workshop" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block">
      <div class="ql-art-overlay" aria-hidden="true"></div>
      <div class="ql-art-chip">
        <span class="chip-dot"></span>
        <span>Hands-on sessions · Expert-led · Community</span>
      </div>
    </div>
  </div>
  <div class="ql-cards">
    <div class="ql-card rv">
      <span class="ql-ico">${svgIcon('ui', 22)}</span>
      <h4>${cx('pages.workshops.card1Title','Who It Is For')}</h4>
      <p>${cx('pages.workshops.card1Body','Students and researchers in physics, mathematics, computer science, artificial intelligence, and data science, as well as learners with a strong interest in exploring the intersection of quantum computing and machine learning.')}</p>
    </div>
    <div class="ql-card rv">
      <span class="ql-ico">${svgIcon('data', 22)}</span>
      <h4>${cx('pages.workshops.card2Title','What It Covers')}</h4>
      <p>${cx('pages.workshops.card2Body','Quantum computing fundamentals, quantum machine learning concepts, quantum circuits and algorithms, variational methods, quantum neural networks, and practical implementation using quantum programming frameworks.<br><br>Participants work through hands-on examples and exercises designed to connect theoretical concepts with practical quantum machine learning applications.')}</p>
    </div>
    <div class="ql-card rv">
      <span class="ql-ico">${svgIcon('doc', 22)}</span>
      <h4>${cx('pages.workshops.card3Title','What You Leave With')}</h4>
      <p>${cx('pages.workshops.card3Body','Participants gain a practical foundation in quantum machine learning, experience working with quantum programming tools, and a clearer understanding of how quantum methods can be applied to machine learning problems.<br><br>The workshops also provide opportunities to connect with researchers, peers, and the wider African quantum community and identify pathways for further learning and research.')}</p>
    </div>
  </div>
  <div class="mt28 grid g2">
    <div class="panel">
      <h5 style="margin-bottom:14px">${cx('pages.workshops.panel1Head', 'Organisers &amp; Partners')}</h5>
      <div class="partner-row">
        <div class="partner-logo" style="background:#fff;padding:12px 14px;border-radius:8px;border:1px solid var(--line)">
          <img src="${esc(mediaUrl('/media/workshops/indaba-logo.png'))}" alt="DeepLearning Indaba logo" loading="lazy" style="max-height:56px;width:auto;max-width:100%;display:block">
        </div>
        <div class="partner-bio">
          <p class="small" style="margin:0 0 6px"><b>DeepLearning Indaba</b></p>
          <p class="small" style="margin:0;color:var(--ink-2)">${cx('pages.workshops.panel1Body', 'QML4Africa is organized in collaboration with DeepLearning Indaba.')}</p>
        </div>
      </div>
    </div>
    <div class="panel">
      <h5 style="margin-bottom:14px">${cx('pages.workshops.panel2Head', 'Recordings &amp; materials')}</h5>
      <a class="yt-card rv" href="https://www.youtube.com/watch?v=6rdC1lh8-lI" target="_blank" rel="noopener noreferrer">
        <span class="yt-thumb">
          <img src="https://img.youtube.com/vi/6rdC1lh8-lI/hqdefault.jpg" alt="QML4Africa recording on YouTube" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:8px 0 0 8px">
          <span class="yt-play" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>
          </span>
        </span>
        <span class="yt-body">
          <span class="yt-title">QML4Africa — Workshop recordings</span>
          <span class="yt-sub">Watch on YouTube · 6rdC1lh8-lI</span>
          <span class="yt-cta">Open video <span class="ar" aria-hidden="true">&rarr;</span></span>
        </span>
      </a>
    </div>
  </div>
</div></section>

<section class="sec tint" style="padding-top:40px"><div class="wrap">
  ${sectionHead(
    cx('pages.workshops.galleryEyebrow', 'Gallery'),
    cx('pages.workshops.galleryTitle', 'From the workshops'),
    cx('pages.workshops.galleryLede', '')
  )}
  <div class="grid g3 workshops-gallery">${[
    '/media/workshops/1786655195296.jpeg',
    '/media/workshops/1786655195534.jpeg',
    '/media/workshops/1786655195632.jpeg',
    '/media/workshops/1786655195820.jpeg',
    '/media/edition1.JPG',
    '/media/edition2.jpeg'
  ].filter(Boolean).map((src,i) => {
    return `<div class="wg-cell"><img src="${esc(mediaUrl(src))}" alt="Workshop photograph ${i+1}" loading="lazy" class="wg-img"></div>`;
  }).join('')}</div>
</div></section>

<section class="cta-band">
  ${patternPanel('soft')}
  ${africaWatermark('wm-cta')}
  ${ringMark('cta-ring')}
  <div class="wrap"><div class="hero-eye">${cx('pages.workshops.ctaBandEyebrow', 'Bring it to your campus')}</div>
    <h2 class="mt24">${cx('pages.workshops.ctaBandTitle', 'Host the next QML4Africa.')}</h2>
    <div class="btns"><a class="btn teal" href="#/universities">${cx('pages.workshops.ctaBandBtn1', 'University partnerships')} <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn inv ghost" href="#/contact">${cx('pages.workshops.ctaBandBtn2', 'Get in touch')}</a></div>
  </div>
</section>`;
};


/* ---------- named people, rendered from real records ---------- */
/* A person in a conference line-up.
   Three things every entry carries, whether or not we have them yet:
   a portrait, an affiliation, and a link to their own page. The empty
   ones are visible slots rather than gaps, so it is obvious what to supply. */
function confProfile(name){
  const rows = cval('conference.profiles');
  if(!Array.isArray(rows)) return null;
  const want = String(name||'').trim().toLowerCase();
  return rows.find(r => String(r.name||'').trim().toLowerCase() === want) || null;
}
function nameGrid(list, cls, opts){
  const o = opts || {};
  const shot = o.photo === false ? '' : (o.photo === 'lg' ? 'lg' : 'sm');
  return `<div class="names ${cls||''}${shot?' has-av':''}">${list.map(x=>`<div class="nm-i">
    <span class="nm-hd">
      ${shot ? (() => { const pr = confProfile(x.n);
        return pr && pr.photo
          ? `<span class="nm-av ${shot} filled"><img src="${esc(mediaUrl(pr.photo))}" alt="${esc(x.n)}" loading="lazy"></span>`
          : `<span class="nm-av ${shot}" title="Portrait — 600×600 JPG">${svgIcon('user', shot==='lg'?26:18)}</span>`;
      })() : ''}
      <span class="nm-n">${esc(x.n)}${x.role?`<em>${esc(x.role)}</em>`:''}</span>
    </span>
    ${x.a?`<span class="nm-a">${esc(x.a)}</span>`:`<span class="nm-a tbd">${pht('affiliation')}</span>`}
    ${x.t?`<span class="nm-t">${esc(x.t)}</span>`:''}
    ${(() => { const pr = confProfile(x.n); const href = x.url || (pr && pr.url);
      return href
        ? `<a class="nm-l" href="${esc(href)}" target="_blank" rel="noopener noreferrer">Profile <span class="ar" aria-hidden="true">&rarr;</span></a>`
        : ``; })()}
  </div>`).join('')}</div>`;
}

/* ---------- QUANTUM AFRICA WEBINAR SERIES ---------- */
PAGES.webinars = () => {
  const shots = [
    {n:'Screenshot 2026-09-05 at 11.03.59.png'},
    {n:'Screenshot 2026-09-05 at 11.04.06.png'},
    {n:'Screenshot 2026-09-05 at 11.04.15.png'},
    {n:'Screenshot 2026-09-05 at 11.04.22.png'},
    {n:'Screenshot 2026-09-05 at 11.04.32.png'},
    {n:'Screenshot 2026-09-05 at 11.04.42.png'},
  ];
  return `
${crumb([{t:'Home',h:'#/'},{t:'Events',h:'#/events'},{t:'Webinars'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.webinars.heroEyebrow', 'Online series')}</span><i></i></div>
  <h1>${cx('pages.webinars.heroTitle', 'Quantum Africa Webinar Series')}</h1>
  <p class="lede">${cx('pages.webinars.heroLede', 'Bringing Quantum Knowledge to Africa')}</p>
  <div class="phero-meta"><a class="btn teal" href="#/join">${cx('pages.webinars.heroBtn1', 'Watch the next session')} <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn ghost" href="#/events">${cx('pages.webinars.heroBtn2', 'All events')}</a></div>
  ${africaWatermark('wm-hero')}
</div></section>

<section class="sec flush" style="padding-top:0"><div class="wrap">
  <div class="series-bar tight">
    <span>${cx('pages.webinars.barLbl1','Series')} <b>Quantum Africa Webinars</b></span>
    <span>${cx('pages.webinars.barLbl2','Sessions delivered')} <b>${shots.length}</b></span>
    <span>${cx('pages.webinars.barLbl3','Format')} <b>Online</b></span>
    <span>${cx('pages.webinars.barLbl4','Access')} <b>Free · Open to All</b></span>
  </div>
  <div class="wb-hero">
    <div class="wb-hero-art" style="position:relative;border-radius:14px;overflow:hidden;
      border:1px solid rgba(0,0,0,.06);box-shadow:0 18px 50px -22px rgba(6,12,24,.22),0 4px 14px -6px rgba(6,12,24,.08)">
      <img class="wb-hero-img" src="${esc(mediaUrl('/media/webinar/Main.png'))}" alt="Quantum Africa Webinars" loading="eager" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:0">
      <div class="wb-hero-overlay" aria-hidden="true" style="position:absolute;inset:0;z-index:1;pointer-events:none;
        background:linear-gradient(180deg,rgba(6,12,24,.18) 0%,rgba(6,12,24,.42) 52%,rgba(6,12,24,.82) 100%),
          linear-gradient(90deg,rgba(6,12,24,.30) 0%,transparent 42%)"></div>
      <div style="position:relative;z-index:2;display:flex;align-items:flex-end;min-height:300px;padding:30px 28px">
        <div class="wb-hero-chip" style="max-width:480px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <span style="display:inline-flex;align-items:center;gap:8px;padding:7px 11px;border-radius:999px;
            background:rgba(255,255,255,.08);backdrop-filter:blur(10px);border:1px solid rgba(201,165,91,.34);
            color:#fff;font-weight:700;font-size:.78rem;letter-spacing:.04em">
              <span class="chip-dot" style="width:8px;height:8px;border-radius:999px;background:var(--teal,#44d3a7);display:inline-block"></span>
              Online · Free to Join · Open to All
            </span>
          </div>
          <p style="margin:0;color:rgba(255,255,255,.94);font-size:1rem;line-height:1.55;font-weight:500">
            ${cx('pages.webinars.heroCopy','The Quantum Africa Webinar Series brings together leading researchers, educators, and practitioners from Africa and around the world to share knowledge, explore emerging quantum technologies, and connect with the continent’s growing quantum community.')}
          </p>
          <p style="margin:10px 0 0;color:rgba(255,255,255,.82);font-size:.92rem;line-height:1.5">
            ${cx('pages.webinars.heroCopy2','From quantum computing and machine learning to optimization, communication, cryptography, and beyond, each session offers accessible insights into the technologies shaping the quantum future.')}
          </p>
        </div>
      </div>
    </div>
  </div>
</div></section>

<section class="sec inv" style="padding-top:44px;padding-bottom:44px"><div class="wrap">
  <div class="sec-idx"><span class="n" style="color:var(--vq-gold,var(--gold))">01</span><span class="lbl" style="color:rgba(255,255,255,.6)">Explore the Series</span><i></i></div>
  <div class="sec-title" style="color:#fff">
    <h2 style="color:#fff;margin:0 0 10px">${cx('pages.webinars.seriesTitle','Explore the Series')}</h2>
    <p style="margin:0;color:rgba(255,255,255,.78);max-width:680px;font-size:1rem;line-height:1.6">
      ${cx('pages.webinars.seriesBody','Discover previous sessions, meet the experts who joined us, and access recordings and learning materials from our growing collection of quantum talks.')}
    </p>
  </div>
</div></section>

<section class="sec inv" style="padding-top:8px;padding-bottom:50px"><div class="wrap">
  ${sectionHead(
    cx('pages.webinars.sessionsEyebrow','Featured Sessions'),
    cx('pages.webinars.sessionsTitle','Our webinar library'),
    cx('pages.webinars.sessionsLede',''),
    {t:cx('pages.webinars.sessionsCta','Browse all sessions'),h:'#/events'}
  )}
  <div class="grid g3 web-shots" style="grid-template-columns:repeat(3,minmax(0,1fr))">
    ${shots.map((s,i)=>{
      const idx = String(i+1).padStart(2,'0');
      return `<a class="wb-shot rv" href="#/events" style="position:relative;display:block;border-radius:12px;overflow:hidden;aspect-ratio:16/10;background:#0a1830;border:1px solid rgba(255,255,255,.06);box-shadow:0 10px 34px -18px rgba(0,0,0,.58)">
        <img src="${esc(mediaUrl('/media/webinar/'+encodeURIComponent(s.n)))}" alt="Quantum Africa Webinar session ${idx}" loading="lazy"
          style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:0">
        <div aria-hidden="true" style="position:absolute;inset:0;z-index:1;pointer-events:none;
          background:linear-gradient(180deg,rgba(6,12,24,.12) 0%,rgba(6,12,24,.48) 60%,rgba(6,12,24,.76) 100%),
            linear-gradient(90deg,rgba(6,12,24,.16) 0%,transparent 40%)"></div>
        <div style="position:relative;z-index:2;padding:14px 14px 16px;height:100%;display:flex;flex-direction:column;justify-content:space-between">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <span style="display:inline-flex;align-items:center;padding:5px 9px;border-radius:999px;background:rgba(6,12,24,.56);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.1);color:#fff;font-weight:700;font-size:.7rem;letter-spacing:.06em">${idx}</span>
            <span style="display:inline-flex;align-items:center;gap:6px;padding:5px 9px;border-radius:999px;background:rgba(201,165,91,.18);backdrop-filter:blur(6px);border:1px solid rgba(201,165,91,.34);color:#fff;font-weight:700;font-size:.68rem">
              <span class="chip-dot" style="width:7px;height:7px;border-radius:999px;background:var(--teal,#44d3a7);display:inline-block"></span>
              Webinar
            </span>
          </div>
          <div style="align-self:flex-end;display:flex;align-items:center;gap:8px;color:#fff;font-weight:700;font-size:.78rem">
            <span>${cx('pages.webinars.sessionOpen','Open session')}</span>
            <span class="ar" aria-hidden="true" style="color:var(--vq-gold,var(--gold))">&rarr;</span>
          </div>
        </div>
      </a>`}).join('')}
  </div>
</div></section>

<section class="sec inv" style="padding-top:8px;padding-bottom:52px"><div class="wrap">
  <div class="grid g2">
    <div class="panel" style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);color:#fff">
      <h5 style="margin-bottom:14px;color:#fff">${cx('pages.webinars.panel1Head','Previous session recording')}</h5>
      <div class="partner-bio">
        <p class="small" style="margin:0 0 10px;color:rgba(255,255,255,.86)"><b>${cx('pages.webinars.panel1Title','Missed a session?')}</b></p>
        <p class="small" style="margin:0;color:rgba(255,255,255,.72)">${cx('pages.webinars.panel1Body','Catch up with our latest webinar recording — open the link to watch on YouTube.')}</p>
      </div>
    </div>
    <a class="yt-card rv" href="https://www.youtube.com/watch?v=nzUaZw41Rk4" target="_blank" rel="noopener noreferrer">
      <span class="yt-thumb">
        <img src="https://img.youtube.com/vi/nzUaZw41Rk4/hqdefault.jpg" alt="Webinar recording nzUaZw41Rk4" loading="lazy">
        <span class="yt-play" aria-hidden="true">
          <svg viewBox="0 0 68 48" width="68" height="48"><path d="M66.52,7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"/><path d="M 45,24 27,14v20z" fill="#fff"/></svg>
        </span>
      </span>
      <span class="yt-meta"><b>${cx('pages.webinars.ytTitle','Quantum Africa Webinar — session recording')}</b><i>youtube.com · opens in a new tab</i></span>
    </a>
  </div>
</div></section>

<section class="sec tint" style="padding-top:40px"><div class="wrap">
  ${sectionHead(
    cx('pages.webinars.ctaEyebrow','Bring it to your campus'),
    cx('pages.webinars.ctaTitle','Host the next webinar.'),
    cx('pages.webinars.ctaLede','Invite a speaker, propose a topic, or co-host a webinar with Quantum Africa at your university or chapter.'),
    null
  )}
  <div class="grid g2 mt18" style="max-width:760px">
    <a class="panel rv cta-horiz" href="#/universities"><div class="cta-title">${cx('pages.webinars.cta1Title','University partnerships')} <span class="ar" aria-hidden="true">&rarr;</span></div><p>${cx('pages.webinars.cta1Body','Partner with us to bring webinars, workshops and learning programs to your campus.')}</p></a>
    <a class="panel rv cta-horiz" href="#/contact"><div class="cta-title">${cx('pages.webinars.cta2Title','Get in touch')} <span class="ar" aria-hidden="true">&rarr;</span></div><p>${cx('pages.webinars.cta2Body','Suggest a speaker, propose a session topic, or join as a volunteer host.')}</p></a>
  </div>
</div></section>
`;}

/* ---------- QUANTUM AFRICA CONFERENCE SERIES ---------- */
const CONF_FLAG = {'South Africa':'\u{1F1FF}\u{1F1E6}','Morocco':'\u{1F1F2}\u{1F1E6}','Tunisia':'\u{1F1F9}\u{1F1F3}','Rwanda':'\u{1F1F7}\u{1F1FC}'};
const cflag = (country) => CONF_FLAG[country] ? `<span class="flag" role="img" aria-label="Flag of ${esc(country)}">${CONF_FLAG[country]}</span>` : '';
const cCountry = (country) => `${cflag(country)}${esc(country)}`;

PAGES.conference = () => {
  const latest = CONF.find(c=>c.latest);
  const total = CONF.reduce((t,c)=> t + ['plenary','keynote','invited','steering','ipc','loc']
      .reduce((u,k)=> u + (c[k]?c[k].length:0), 0)
      + (c.invitedGroups?c.invitedGroups.reduce((v,g)=>v+g.list.length,0):0), 0);
  return `
${crumb([{t:'Home',h:'#/'},{t:'Conference Series'}])}
<section class="sec phero" style="padding-top:52px;padding-bottom:36px">${africaWatermark('wm-hero')}<div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.conference.heroEyebrow', 'Conference series')}</span><i></i></div>
  <h1 style="font-size:clamp(2.2rem,4.2vw,3.4rem);letter-spacing:-.035em;max-width:18ch">${cx('pages.conference.heroTitle', 'Quantum Africa')}</h1>
  <p class="lede" style="max-width:62ch">${cx('pages.conference.heroLede', 'Bringing the best quantum research to Africa. Seven editions since 2010, in South Africa, Morocco, Tunisia and Rwanda.')}</p>
  <div class="phero-meta" style="margin-top:18px"><a class="btn teal" href="#/conference/qa7">${cx('pages.conference.heroBtn1', 'Quantum Africa 7')} <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn ghost" href="#/join">${cx('pages.conference.heroBtn2', 'Register interest in the next edition')}</a></div>
</div></section>

<section class="sec flush"><div class="wrap">
  <blockquote class="conf-quote" style="border-left:0;background:transparent;padding:18px 0 0;font-size:1.02rem;line-height:1.7;color:var(--ink-1);max-width:72ch;font-style:normal;margin:0">${cx('pages.conference.quoteBody', 'Quantum Africa is a conference series dedicated to promoting quantum science and technology across the continent. Held in various African countries, the series fosters collaboration both within Africa and with the global scientific community.')}</blockquote>
</div></section>

<section class="sec" style="padding-top:22px"><div class="wrap">
  ${sectionHead(
    cx('pages.conference.edEyebrow', 'Editions'),
    cx('pages.conference.edTitle', 'Seven editions, four countries'),
    cx('pages.conference.edLede', '')
  )}
  <div class="tl">
    ${CONF.map(c=>`<a class="tl-i ${c.latest?'now':''}" href="#/conference/${c.slug}">
      <span class="dot"></span>
      <span class="ed">QA${c.n.replace(/^0/,'')}</span>
      <span class="yr">${c.year}</span>
      <span class="ct">${esc(c.city)}</span>
      <span class="cy">${cCountry(c.country)}</span>
    </a>`).join('')}
  </div>
  <div class="stats mt48" style="grid-template-columns:repeat(4,1fr);gap:0;border:1px solid var(--line);border-radius:4px;background:#fff">
    ${[[ cx('pages.conference.stat1N','7'),cx('pages.conference.stat1L','Editions')],
       [cx('pages.conference.stat2N','4'),cx('pages.conference.stat2L','Host countries')],
       [cx('pages.conference.stat3N','15'),cx('pages.conference.stat3L','Years')],
       [String(total),cx('pages.conference.stat4L','People on record')]]
      .map(([n,l])=>`<div class="stat" style="border-right:1px solid var(--line);background:#fff;box-shadow:none;padding:22px 18px;border-radius:0;margin:0"><span class="n" data-count="${n}" style="font-feature-settings:\"tnum\";font-size:2rem">${n}</span><span class="l" style="color:var(--ink-3);text-transform:uppercase;letter-spacing:.08em;font-size:.72rem">${l}</span></div>`).join('')}
  </div>
</div></section>

<section class="sec" style="padding-top:18px;padding-bottom:18px">
  <div class="wrap">
    <div class="sec-idx"><span class="n">—</span><span class="lbl">${cx('pages.conference.latestLbl', 'Latest edition')}</span><i></i></div>
    <div class="conf-hero" style="display:grid;grid-template-columns:1.1fr .9fr;gap:26px;align-items:center;border:1px solid var(--line);border-radius:4px;padding:28px;background:#fff">
      <div>
        <h2 style="font-size:clamp(1.6rem,2.6vw,2.2rem);letter-spacing:-.02em;max-width:20ch">${cx('pages.conference.latestTitle', 'Quantum Africa 7')}</h2>
        <p class="lede mt16" style="font-size:1.02rem;font-weight:500">${esc(latest.city)}, ${esc(latest.country)} · ${esc(latest.dates)}</p>
        <p class="small mt16" style="color:var(--ink-2);max-width:54ch">${esc(latest.venue)}</p>
        <div class="hero-cta" style="margin-top:18px">
          <a class="btn teal" href="#/conference/qa7">${cx('pages.conference.latestBtn1', 'Edition page')} <span class="ar" aria-hidden="true">&rarr;</span></a>
          <a class="btn ghost" href="#/contact">${cx('pages.conference.latestBtn2', 'Ask about QA8')}</a>
        </div>
      </div>
      <div>${cimg('pages.conference.latestImage','Photograph from Quantum Africa 7','2400×1350 · JPG','tall','network')}</div>
    </div>
  </div>
</section>

<section class="sec" style="padding-top:18px;padding-bottom:16px"><div class="wrap">
  ${sectionHead(
    cx('pages.conference.spkEyebrow', 'Speakers'),
    cx('pages.conference.spkTitle', 'Who has spoken at Quantum Africa'),
    cx('pages.conference.spkLede', '')
  )}
  ${nameGrid([
    {n:'Serge Haroche', a:'Collège de France & École Normale Supérieure · QA1 and QA3'},
    {n:'Artur Ekert', a:'University of Oxford · QA1 and QA2'},
    {n:'Sir Peter Knight', a:'Imperial College London · QA1'},
    {n:'Nicolas Gisin', a:'University of Geneva · QA2 plenary'},
    {n:'Miles Padgett', a:'University of Glasgow · QA2 plenary'},
    {n:'Fedor Jelezko', a:'Ulm University · QA2 and QA3 plenary'},
    {n:'Peter Zoller', a:'University of Innsbruck / IQOQI · QA3 keynote'},
    {n:'Alain Aspect', a:'Institut d’Optique · QA4 plenary'},
    {n:'Claudia Felser', a:'Max Planck Institute for Chemical Physics of Solids · QA4 plenary'},
    {n:'Heike Riel', a:'IBM Research – Zurich · QA5 plenary'},
    {n:'Gerald Gabrielse', a:'Northwestern University · QA5 plenary'},
    {n:'Will Oliver', a:'MIT · QA6 invited'},
    {n:'Giulia Galli', a:'University of Chicago · QA6 invited'},
    {n:'Jean-Marc Lévy-Leblond', a:'Université de Nice · QA7 plenary'},
    {n:'Norbert Hounkonnou', a:'University of Abomey-Calavi, Benin · QA7 plenary'},
    {n:'Romain Murenzi', a:'Worcester Polytechnic Institute · QA7 plenary'},
  ], 'scientific', {photo:false})}
</div></section>

<section class="sec" style="padding-top:12px;padding-bottom:32px"><div class="wrap">
  ${sectionHead(
    cx('pages.conference.govEyebrow', 'Governance'),
    cx('pages.conference.govTitle', 'Steering committee'),
    cx('pages.conference.govLede', '')
  )}
  ${nameGrid(CONF_SC, 'scientific', {photo:false})}
  <h4 class="mt48" style="font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-3)">${cx('pages.conference.formerScLbl', 'Former steering committee members')}</h4>
  <div class="mt16">${nameGrid(CONF_SC_PAST, 'scientific', {photo:false})}</div>
</div></section>

<section class="cta-band" style="padding-top:44px;padding-bottom:44px;background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line);color:inherit">
  <div class="wrap"><div class="hero-eye" style="color:var(--ink-2)">${cx('pages.conference.ctaBandEyebrow', 'Next edition')}</div>
    <h2 class="mt24" style="color:var(--ink-1);font-size:clamp(1.8rem,3.2vw,2.6rem);max-width:22ch">${cx('pages.conference.ctaBandTitle', 'Be there for Quantum Africa 8.')}</h2>
    <div class="btns"><a class="btn teal" href="#/join">${cx('pages.conference.ctaBandBtn1', 'Register your interest')} <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn ghost" href="#/contact">${cx('pages.conference.ctaBandBtn2', 'Propose a host institution')}</a></div>
  </div>
</section>`;
};

PAGES.confEdition = (slug) => {
  const c = CONF.find(x=>x.slug===slug) || CONF[CONF.length-1];
  const num = c.n.replace(/^0/,'');
  const people = ['plenary','keynote','invited','steering','ipc','loc']
    .reduce((t,k)=> t + (c[k] ? c[k].length : 0), 0)
    + (c.invitedGroups ? c.invitedGroups.reduce((t,g)=>t+g.list.length,0) : 0);
  const block = (key, label, title, note, cls) => c[key] ? `
<section class="sec ${cls||''}"><div class="wrap">
  ${sectionHead(
    cx('pages.confEdition.'+key+'Label', label),
    cx('pages.confEdition.'+key+'Title', title),
    note?cx('pages.confEdition.'+key+'Note', note):null
  )}
  ${nameGrid(c[key], c[key].length > 18 ? 'compact' : '', {photo: key === 'keynote' ? 'sm' : false})}
</div></section>` : '';
  const groups = c.invitedGroups ? `
<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.confEdition.groupsLabel', 'Invited'),
    cx('pages.confEdition.groupsTitle', 'Invited speakers'),
    cx('pages.confEdition.groupsLede', `${c.invitedGroups.reduce((t,g)=>t+g.list.length,0)} invited speakers, from industry and academia.`)
  )}
  ${c.invitedGroups.map(g=>`
    <h4 class="grp-h">${esc(g.label)}</h4>
    ${nameGrid(g.list, g.list.length > 18 ? 'compact' : '', {photo:'sm'})}`).join('')}
</div></section>` : '';
  return `
${crumb([{t:'Home',h:'#/'},{t:'Conference',h:'#/conference'},{t:'QA'+num}])}
<section class="sec flush" style="padding:0"><div class="wrap">${cimg('pages.confEdition.heroImage','Photograph from this edition','2400×1000 · JPG','wide','lattice')}</div></section>
<section class="phero" style="padding-top:34px"><div class="wrap">
  <div class="phero-meta" style="margin:0 0 16px">
    <span class="tag">${cx('pages.confEdition.editionPrefix', 'Edition')} ${esc(c.n)}</span>
    <span class="pill ${c.latest?'current':'future'}">${c.latest?cx('pages.confEdition.statusRecent','Most recent'):cx('pages.confEdition.statusPast','Past edition')}</span>
    <span class="pill current">${people} ${cx('pages.confEdition.peopleSuffix', 'people on record')}</span>
  </div>
  <h1 style="font-size:clamp(2rem,4vw,3.2rem)">Quantum Africa ${num}</h1>
  <p class="lede">${esc(c.city)}, ${cCountry(c.country)} · ${esc(c.dates)}</p>
  ${c.venue?`<p class="small mt16">${esc(c.venue)}</p>`:''}
</div></section>

${c.plenary?`
<section class="sec inv">
  ${patternPanel('soft')}
  <div class="wrap">
    <div class="sec-idx"><span class="n">—</span><span class="lbl">${cx('pages.confEdition.plenaryLbl', 'Plenary speakers')}</span><i></i></div>
    ${nameGrid(c.plenary,'big',{photo:'lg'})}
  </div>
</section>`:''}

${block('keynote','Keynotes','Keynote speakers', c.keynote?`${c.keynote.length} keynote talks.`:null, c.plenary?'':'')}
${c.invited?`
<section class="sec inv">
  ${patternPanel('soft')}
  <div class="wrap">
    <div class="sec-idx"><span class="n">—</span><span class="lbl">${esc(c.invitedLabel||cx('pages.confEdition.invitedLbl','Invited speakers'))}</span><i></i></div>
    ${nameGrid(c.invited, '', {photo:'sm'})}
  </div>
</section>`:''}
${groups}
${block('steering','Committee','Steering committee','As listed on this edition’s page.','tint')}
${block('ipc','Committee','Programme committee',null,'')}
${c.loc?`
<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.confEdition.locLabel', 'Committee'),
    cx('pages.confEdition.locTitle', c.locLabel||'Organising committee'),
    c.locNote?cx('pages.confEdition.locNote',c.locNote):(c.loc.length>20?cx('pages.confEdition.locNote2',`${c.loc.length} members.`):null)
  )}
  ${nameGrid(c.loc, c.loc.length > 18 ? 'compact' : '')}
</div></section>`:''}

${c.sponsors?`
<section class="sec"><div class="wrap">
  ${sectionHead(
    cx('pages.confEdition.sponsorLabel', 'Sponsors'),
    cx('pages.confEdition.sponsorTitle', 'Supported by')
  )}
  <div class="logo-wall">${c.sponsors.map(x=>`<div class="logo-cell"><span class="mk"></span>${esc(x)}</div>`).join('')}</div>
</div></section>`:''}

<section class="sec"><div class="wrap"><div class="side">
  <div class="prose">
    <h3>${cx('pages.confEdition.aboutHead', 'About this edition')}</h3>
    <p>${cx('pages.confEdition.aboutPrefix1', 'Quantum Africa')} ${num} ${cx('pages.confEdition.aboutPrefix2', 'was held in')} ${esc(c.city)}, ${cCountry(c.country)}, ${esc(c.dates)}.</p>
    <h3>${cx('pages.confEdition.progHead', 'Programme')}</h3><p>${pht(cx('pages.confEdition.progBody', 'Session titles, talk titles and schedule'))}</p>
    <h3>${cx('pages.confEdition.photosHead', 'Photographs')}</h3>
    <div class="grid g3 mt16">${['circuit','wave','network'].map((k,i)=>cimg('pages.confEdition.photo'+(i+1),'Conference photograph','1200×800 · JPG','short',k)).join('')}</div>
    <h3>${cx('pages.confEdition.portraitsHead', 'Portraits and profiles')}</h3>
    <p>${pht(cx('pages.confEdition.portraitsBody', 'Every speaker and committee member above has an empty portrait slot and an empty profile link. Supply a 600×600 JPG and a URL — personal page, university page, ORCID or Google Scholar — per person. Use only photographs you have permission to publish.'))}</p>
  </div>
  <aside>
    <div class="panel"><h5>${cx('pages.confEdition.glanceHead', 'At a glance')}</h5><dl class="dl-list">
      <div class="dl-item"><dt>${cx('pages.confEdition.gEdition', 'Edition')}</dt><dd>QA${num}</dd></div>
      <div class="dl-item"><dt>${cx('pages.confEdition.gDates', 'Dates')}</dt><dd>${esc(c.dates)}</dd></div>
      <div class="dl-item"><dt>${cx('pages.confEdition.gCity', 'City')}</dt><dd>${esc(c.city)}</dd></div>
      <div class="dl-item"><dt>${cx('pages.confEdition.gCountry', 'Country')}</dt><dd>${cCountry(c.country)}</dd></div>
      ${c.host?`<div class="dl-item"><dt>${cx('pages.confEdition.gHost', 'Host')}</dt><dd>${esc(c.host)}</dd></div>`:''}
      ${c.plenary?`<div class="dl-item"><dt>${cx('pages.confEdition.gPlenary', 'Plenary')}</dt><dd>${c.plenary.length}</dd></div>`:''}
      ${c.keynote?`<div class="dl-item"><dt>${cx('pages.confEdition.gKeynotes', 'Keynotes')}</dt><dd>${c.keynote.length}</dd></div>`:''}
      ${c.invited?`<div class="dl-item"><dt>${cx('pages.confEdition.gInvited', 'Invited')}</dt><dd>${c.invited.length}</dd></div>`:''}
      ${c.invitedGroups?`<div class="dl-item"><dt>${cx('pages.confEdition.gInvited2', 'Invited')}</dt><dd>${c.invitedGroups.reduce((t,g)=>t+g.list.length,0)}</dd></div>`:''}
      ${c.ipc?`<div class="dl-item"><dt>${cx('pages.confEdition.gIpc', 'Programme cttee')}</dt><dd>${c.ipc.length}</dd></div>`:''}
      ${c.loc?`<div class="dl-item"><dt>${cx('pages.confEdition.gLoc', 'Organisers')}</dt><dd>${c.loc.length}</dd></div>`:''}
    </dl></div>
    <div class="panel mt16"><h5>${cx('pages.confEdition.seriesHead', 'The series')}</h5>
      <a class="link-a" href="#/conference" style="display:flex">${cx('pages.confEdition.seriesLink', 'All seven editions')} <span class="ar" aria-hidden="true">&rarr;</span></a>
    </div>
  </aside>
</div></div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.confEdition.seriesEyebrow', 'Series'),
    cx('pages.confEdition.seriesTitle', 'Other editions'),
    null,
    {t:cx('pages.confEdition.seriesCta', 'Full timeline'),h:'#/conference'}
  )}
  <div class="rows">
    ${CONF.filter(x=>x.slug!==c.slug).map(x=>`<a class="row-i" href="#/conference/${x.slug}">
      <span class="dl">${esc(x.year)}</span>
      <span><h4>Quantum Africa ${x.n.replace(/^0/,'')}</h4><span class="sub">${esc(x.city)}, ${cCountry(x.country)}</span></span>
      <span class="rt"><span class="tag">${esc(x.dates)}</span></span>
    </a>`).join('')}
  </div>
</div></section>`;
};

/* ---------- PLEDGE YOUR SUPPORT ---------- */
PAGES.support = () => `
${crumb([{t:'Home',h:'#/'},{t:'Pledge your support'}])}
<section class="phero">${africaWatermark('wm-hero')}<div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.support.heroEyebrow', 'Support us')}</span><i></i></div>
  <h1 class="mt24">${cx('pages.support.heroTitle', 'Pledge your support.')}</h1>
  <p class="lede">${cx('pages.support.heroLede', 'Quantum Africa runs on people who decide to help. There is more than one way to do that, and not all of them cost money.')}</p>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead(
    cx('pages.support.waysEyebrow', 'Ways in'),
    cx('pages.support.waysTitle', 'Pick the one that fits'),
    cx('pages.support.waysLede', 'Every pledge is a conversation first. Tell us what you can offer and we will come back to you about what it would actually involve.')
  )}
  <div class="grid g3">
    ${[['01',cx('pages.support.way1Title','Fund a programme'),cx('pages.support.way1Body','Underwrite a workshop, a cohort of students, or a year of the AI Tutor.'),cx('pages.support.way1Who','Organisations and individuals')],
       ['02',cx('pages.support.way2Title','Sponsor a student'),cx('pages.support.way2Body','Cover a conference fee, travel, or the cost of a masters application.'),cx('pages.support.way2Who','Individuals')],
       ['03',cx('pages.support.way3Title','Host or co-organise'),cx('pages.support.way3Body','Bring a school or workshop to your campus. We bring the programme and the network.'),cx('pages.support.way3Who','Universities')],
       ['04',cx('pages.support.way4Title','Mentor'),cx('pages.support.way4Body','An hour a month with a student or early-career researcher.'),cx('pages.support.way4Who','Researchers and professionals')],
       ['05',cx('pages.support.way5Title','Teach'),cx('pages.support.way5Body','Give a webinar, run a session, or review our teaching material.'),cx('pages.support.way5Who','Anyone with something to teach')],
       ['06',cx('pages.support.way6Title','Open a door'),cx('pages.support.way6Body','Introduce us to a lab, a funder, a company or a ministry.'),cx('pages.support.way6Who','Anyone')],
      ].map(([n,t,d,who])=>`<div class="pillar rv">
        <span class="pi">${n}</span>
        <h3 style="font-size:1.22rem">${esc(t)}</h3>
        <p>${esc(d)}</p>
        <span class="xs" style="display:block;margin-top:12px;color:var(--ink-3)">${esc(who)}</span>
      </div>`).join('')}
  </div>
</div></section>

<section class="sec tint"><div class="wrap"><div class="side">
  <div class="prose">
    <h3>${cx('pages.support.pledgeHead', 'Make a pledge')}</h3>
    <p>${cx('pages.support.pledgeIntro', 'Fill this in and someone will reply personally. Nothing is published without your agreement.')}</p>
    <div class="form mt24">
      <div class="grid g2">
        <div class="field"><label>${cx('pages.support.fNameLbl','Your name')}</label><input placeholder="${cx('pages.support.fNamePh','Name')}"></div>
        <div class="field"><label>${cx('pages.support.fEmailLbl','Email')}</label><input placeholder="${cx('pages.support.fEmailPh','you@example.com')}"></div>
      </div>
      <div class="grid g2">
        <div class="field"><label>${cx('pages.support.fOrgLbl','Organisation')} <span class="opt">${cx('pages.support.fOrgOpt','optional')}</span></label><input placeholder="${cx('pages.support.fOrgPh','University, company or none')}"></div>
        <div class="field"><label>${cx('pages.support.fCountryLbl','Country')}</label><select><option>${cx('pages.support.fCountryPh','Select…')}</option>${CHAPTERS.map(c=>`<option>${esc(c.name)}</option>`).join('')}<option>${cx('pages.support.fCountryOther','Other')}</option></select></div>
      </div>
      <div class="field"><label>${cx('pages.support.fOfferLbl','What are you offering?')}</label>
        <select><option>${cx('pages.support.fOfferPh','Select…')}</option>
          ${[cx('pages.support.fOffer1','Funding a programme'),cx('pages.support.fOffer2','Sponsoring a student'),cx('pages.support.fOffer3','Hosting or co-organising'),cx('pages.support.fOffer4','Mentoring'),cx('pages.support.fOffer5','Teaching or speaking'),cx('pages.support.fOffer6','An introduction'),cx('pages.support.fOffer7','Something else')].map(o=>`<option>${esc(o)}</option>`).join('')}
        </select>
      </div>
      <div class="field"><label>${cx('pages.support.fMoreLbl','Tell us more')}</label><textarea rows="4" placeholder="${cx('pages.support.fMorePh','What you have in mind, and any constraints we should know about.')}"></textarea></div>
      <button class="btn teal">${cx('pages.support.fSubmit','Send my pledge')} <span class="ar" aria-hidden="true">&rarr;</span></button>
      <p class="xs mt16">${pht(cx('pages.support.fNote', 'WIRE THIS FORM UP — endpoint, autoresponder and where submissions land. Until then it does nothing.'))}</p>
    </div>
  </div>
  <aside>
    <div class="panel"><h5>${cx('pages.support.panelMoneyHead','Giving money')}</h5>
      <p class="small">${cx('pages.support.donation', pht(cx('pages.support.donationNote','DONATION DETAILS — bank account, payment link, registered status and any tax position. Do not publish a donate button until this is real and the legal entity is confirmed.')))}</p>
    </div>
    <div class="panel mt16"><h5>${cx('pages.support.panelSplitHead','Where support goes')}</h5>
      <dl class="dl-list">
        <div class="dl-item"><dt>${cx('pages.support.splitProgLbl','Programmes')}</dt><dd>${cval('support.splitProgrammes')!=='' ? cval('support.splitProgrammes')+'%' : pht(cx('pages.support.splitProgPh','%'))}</dd></div>
        <div class="dl-item"><dt>${cx('pages.support.splitStuLbl','Student costs')}</dt><dd>${cval('support.splitStudents')!=='' ? cval('support.splitStudents')+'%' : pht(cx('pages.support.splitStuPh','%'))}</dd></div>
        <div class="dl-item"><dt>${cx('pages.support.splitOpsLbl','Operations')}</dt><dd>${cval('support.splitOperations')!=='' ? cval('support.splitOperations')+'%' : pht(cx('pages.support.splitOpsPh','%'))}</dd></div>
      </dl>
      <p class="xs mt16">${pht(cx('pages.support.splitNote', 'Publish a real breakdown, or remove this panel. An invented split is worse than none.'))}</p>
    </div>
    <div class="panel mt16"><h5>${cx('pages.support.panelPartnerHead','Partnering instead?')}</h5>
      <a class="link-a" href="#/partners" style="display:flex">${cx('pages.support.panelPartnerLink','Institutional partnerships')} <span class="ar" aria-hidden="true">&rarr;</span></a>
    </div>
  </aside>
</div></div></section>

<section class="cta-band">
  ${patternPanel('soft')}
  ${africaWatermark('wm-cta')}
  <div class="wrap"><div class="hero-eye">${cx('pages.support.ctaBandEyebrow', 'Thank you')}</div>
    <h2 class="mt24">${cx('pages.support.ctaBandTitle', 'Every pledge is a door<br>opening for someone.')}</h2>
    <div class="btns"><a class="btn teal" href="#/contact">${cx('pages.support.ctaBandBtn1', 'Talk to us first')} <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn inv ghost" href="#/impact">${cx('pages.support.ctaBandBtn2', 'See what we have done')}</a></div>
  </div>
</section>`;

/* ---------- OPPORTUNITIES ---------- */
const oppPick = (n) => allOpps().filter(o=>o.status!=='Closed').slice(0,n);

PAGES.opportunities = () => {
  const africa = allOpps().filter(o=>o.africa);
  return `
${crumb([{t:'Home',h:'#/'},{t:'Opportunities'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.opportunities.heroEyebrow', 'Opportunities')}</span><i></i></div>
  <h1 class="mt24">${cx('pages.opportunities.heroTitle', 'Your Quantum Journey Starts Here')}</h1>
  <p class="lede">${cx('pages.opportunities.heroLede', 'Discover curated opportunities across quantum computing, research, academia, and industry, from Master’s and PhD positions to postdocs, internships, and professional roles.— with anything based in Africa pushed to the top.')}</p>
  <p class="feed-note" id="opFeed">${cx('pages.opportunities.feedLoading', 'Loading the latest listings…')}</p>
</div></section>

<section class="sec flush" style="padding-bottom:0"><div class="wrap">
  <div class="af-panel">
    <div class="af-head">
      <span class="af-b lg">${cx('pages.opportunities.afBadge', 'Africa')}</span>
      <div>
        <h3>${cx('pages.opportunities.afHead', 'Based in Africa')}</h3>
        <p class="small">${cx('pages.opportunities.afBody', 'Positions hosted at African institutions. These are rare — that is exactly why they sit here rather than buried in the list.')}</p>
      </div>
    </div>
    ${africa.length
      ? `<div class="opps">${africa.map(oppRow).join('')}</div>`
      : `<div class="af-empty"><h4>${cx('pages.opportunities.afEmptyHead', 'Nothing on the boards right now')}</h4><p class="small">${cx('pages.opportunities.afEmptyBody', 'No African-hosted position is currently listed on any of the three sources. The feed checks again every morning.')}</p></div>`}
    ${africa.length && !africa.some(o=>o.status!=='Closed')
      ? `<p class="xs mt16">${cx('pages.opportunities.afExpiredNote', 'All African listings in the current feed have passed their deadline. They stay visible so you can see who is hiring in quantum on the continent, and approach the group directly.')}</p>` : ''}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead(
    cx('pages.opportunities.allEyebrow', 'All listings'),
    cx('pages.opportunities.allTitle', 'Search everything'),
    cx('pages.opportunities.allLede', '')
  )}
  <div class="filters opp-filters" data-filter="opps">
    <div class="fgroup wide"><span class="fl">${cx('pages.opportunities.flSearch', 'Search')}</span>
      <input class="opp-q" id="opQ" type="search" placeholder="${cx('pages.opportunities.phSearch', 'Title, institution, city, country…')}" autocomplete="off">
    </div>
    <div class="fgroup"><span class="fl">${cx('pages.opportunities.flRegion', 'Region')}</span>
      ${['All','Africa','Rest of world'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="reg" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">${cx('pages.opportunities.flType', 'Type')}</span>
      ${['All'].concat(OPP_TYPES).map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="type" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">${cx('pages.opportunities.flStatus', 'Status')}</span>
      ${['All','Open','Closing soon','Closed'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="st" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">${cx('pages.opportunities.flSource', 'Source')}</span>
      ${['All'].concat(Object.keys(OPP_SOURCES).map(k=>OPP_SOURCES[k].name)).map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="src" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">${cx('pages.opportunities.flSort', 'Sort')}</span>
      ${['Africa first','Deadline','A–Z'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="sort" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
  </div>
  <div class="opp-bar">
    <div class="result-n" id="opCount">${allOpps().length} ${cx('pages.opportunities.resultSuffix', 'listings')}</div>
    <button class="chip clear" id="opClear">${cx('pages.opportunities.clearFilters', 'Clear filters')}</button>
  </div>
  <div class="opps" id="opRows">${allOpps().map(oppRow).join('')}</div>

  <div class="grid g2 mt48">
    <div class="panel">
      <h5>${cx('pages.opportunities.panel1Head', 'Where this comes from')}</h5>
      <p class="small">${cx('pages.opportunities.panel1Prefix', 'Listings are collected automatically from')} ${Object.keys(OPP_SOURCES).map(k=>`<a class="link-a in" href="${esc(OPP_SOURCES[k].url)}" target="_blank" rel="noopener noreferrer">${esc(OPP_SOURCES[k].name)}</a>`).join(', ')}. ${cx('pages.opportunities.panel1Suffix', 'Quantum Africa does not administer any of them — every card links straight to the original posting, where you apply.')}</p>
    </div>
    <div class="panel">
      <h5>${cx('pages.opportunities.panel2Head', 'Submit an opportunity')}</h5>
      <p class="small">${cx('pages.opportunities.panel2Body', 'Running a programme open to African applicants, or hiring in quantum on the continent? Send it to us and it goes in the list — the boards above rarely carry African positions.')}</p>
      <a class="btn sm mt16" href="#/contact">${cx('pages.opportunities.panel2Btn', 'Submit an opportunity')} <span class="ar" aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.opportunities.wwEyebrow', 'Worldwide'),
    cx('pages.opportunities.wwTitle', 'Conferences, workshops and summer schools'),
    cx('pages.opportunities.wwLede', '')
  )}
  <p class="feed-note" id="evFeed">${cx('pages.opportunities.calLoading', 'Loading the calendar…')}</p>

  <div class="filters opp-filters mt24" data-filter="evtfeed">
    <div class="fgroup wide"><span class="fl">${cx('pages.opportunities.evFlSearch', 'Search')}</span>
      <input class="opp-q" id="evQ" type="search" placeholder="${cx('pages.opportunities.evPhSearch', 'Event, city, country…')}" autocomplete="off">
    </div>
    <div class="fgroup"><span class="fl">${cx('pages.opportunities.evFlRegion', 'Region')}</span>
      ${['All','Africa','Online','Rest of world'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="reg" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">${cx('pages.opportunities.evFlType', 'Type')}</span>
      ${['All'].concat(EVT_TYPES).map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="type" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">${cx('pages.opportunities.evFlWhen', 'When')}</span>
      ${['Upcoming','Running now','Past','All'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="when" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">${cx('pages.opportunities.evFlSort', 'Sort')}</span>
      ${['Africa first','Date','A–Z'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="sort" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
  </div>
  <div class="opp-bar">
    <div class="result-n" id="evfCount"></div>
    <button class="chip clear" id="evClear">${cx('pages.opportunities.evClearFilters', 'Clear filters')}</button>
  </div>
  <div class="opps" id="evfRows"></div>

  <div class="panel mt48">
    <h5>${cx('pages.opportunities.afEventHead', 'Running something in Africa?')}</h5>
    <p class="small">${cx('pages.opportunities.afEventBody', 'These calendars carry very few African events. If your department, chapter or partner is hosting a school, workshop or conference on the continent, send it to us — it goes straight in, above everything else on this list.')}</p>
    <a class="btn sm mt16" href="#/contact">${cx('pages.opportunities.afEventBtn', 'Submit an event')} <span class="ar" aria-hidden="true">&rarr;</span></a>
  </div>
</div></section>`;
};


/* ---------- PEOPLE ---------- */
function mediaUrl(v){
  return _assetSrc(v);
}
/* ---------- photos and videos ----------
   A media item from the admin panel is one of three things, and everything on
   the page asks these helpers which, rather than guessing from a file name. */
function mKind(m){
  if(!m) return 'none';
  if(m.videoUrl) return 'embed';
  if(m.video)    return 'video';
  if(m.image)    return 'image';
  if(m.f)        return 'image';
  if(m.cover)    return 'image';
  if(m.hero || m.heroImage) return 'image';
  if(m.photo || m.picture || m.headerImage) return 'image';
  if(Array.isArray(m.gallery)){
    if(m.gallery.some(g => g && (g.video || g.videoUrl))) return 'video';
    if(m.gallery.some(g => g && g.image)) return 'image';
  }
  return 'none';
}
function ytId(u){
  const m = String(u||'').match(/(?:youtube\.com\/(?:watch\?v=|embed\/|live\/)|youtu\.be\/)([\w-]{6,})/);
  return m ? m[1] : '';
}
function vimeoId(u){
  const m = String(u||'').match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : '';
}
function embedSrc(u){
  const y = ytId(u);
  if(y) return `https://www.youtube-nocookie.com/embed/${y}?autoplay=1&mute=1&playsinline=1&rel=0`;
  const v = vimeoId(u);
  if(v) return `https://player.vimeo.com/video/${v}?autoplay=1&muted=1&playsinline=1`;
  return '';
}
/* The still we show before anyone presses play: the picture you uploaded, or
   YouTube's own thumbnail if you only gave us a link. */
function mPoster(m){
  if(!m) return '';
  if(m.image || m.f) return mediaUrl(m.image || m.f);
  if(m.cover) return mediaUrl(m.cover);
  if(m.hero || m.heroImage) return mediaUrl(m.hero || m.heroImage);
  if(m.photo || m.picture || m.headerImage) return mediaUrl(m.photo || m.picture || m.headerImage);
  if(Array.isArray(m.gallery)){
    const gImg = m.gallery.find(g => g && (g.image || g.f));
    if(gImg) return mediaUrl(gImg.image || gImg.f);
  }
  const y = ytId(m.videoUrl);
  return y ? `https://i.ytimg.com/vi/${y}/hqdefault.jpg` : '';
}
function mLabel(m, i){
  return (m && m.caption) || `Item ${i + 1}`;
}

function personLinks(p, cls){
  return `<span class="pl-row ${cls||''}">${PERSON_LINKS.map(l=>{
    const href = p && p[l.k];
    return href
      ? `<a class="pl-b live" href="${esc(href)}" target="_blank" rel="noopener noreferrer" title="${esc(l.t)}" aria-label="${esc(l.t)}">${svgIcon(l.k, 15)}</a>`
      : `<span class="pl-b" title="${esc(l.t)} — not supplied yet" aria-label="${esc(l.t)}">${svgIcon(l.k, 15)}</span>`;
  }).join('')}</span>`;
}

function personShot(p, size){
  return p.photo
    ? `<div class="pc-shot filled"><img src="${esc(mediaUrl(p.photo))}" alt="${esc(p.name||'')}" loading="lazy"></div>`
    : `<div class="pc-shot">
        <span class="pc-av">${svgIcon('user', size||44)}</span>
        <span class="pc-spec">Portrait<br><em>1200×1500 · JPG</em></span>
      </div>`;
}
function personCard(p){
  const where = [p.institution, p.country].filter(Boolean).join(' · ');
  return `<article class="pc rv" data-person="${esc(p.slug)}">
    ${personShot(p)}
    <div class="pc-b">
      <h3>${p.name ? esc(p.name) : pht('Full name')}</h3>
      <p class="pc-role">${p.role ? esc(p.role) : pht('Role at Quantum Africa')}</p>
      ${where ? `<p class="pc-aff">${esc(where)}</p>` : ''}
      <p class="pc-bio">${p.bio ? esc(p.bio) : pht('SHORT BIO — two or three sentences, written by this person')}</p>
      <div class="pc-foot">
        <button class="pc-more" type="button" data-bio="${esc(p.slug)}">Read bio</button>
        ${personLinks(p)}
      </div>
    </div>
  </article>`;
}

PAGES.people = () => `
${crumb([{t:'Home',h:'#/'},{t:'About',h:'#/about'},{t:'Team'}])}
<section class="phero">${africaWatermark('wm-hero')}<div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.people.heroEyebrow', 'Team')}</span><i></i></div>
  <h1 class="mt24">${cx('pages.people.heroTitle', 'The people behind<br>Quantum Africa.')}</h1>
  <p class="lede">${cx('pages.people.heroLede', 'A network is only its people. Everyone here writes their own entry ')}</p>
</div></section>

${PEOPLE_GROUPS.map(([g, note], gi) => `
<section class="sec ${gi % 2 ? 'tint' : ''}" style="padding-top:28px;padding-bottom:28px"><div class="wrap">
  ${sectionHead(g, g, note)}
  <div class="grid g4 pgrid">${PEOPLE.filter(p => p.group === g).map(personCard).join('')}</div>
</div></section>`).join('')}

<section class="sec" style="padding-top:34px;padding-bottom:36px"><div class="wrap">
  ${sectionHead(
    cx('pages.people.wideEyebrow', 'Community Members'),
    cx('pages.people.wideTitle', 'Our Community Members'),
    cx('pages.people.wideLede', '')
  )}
  <div class="grid g3">
    ${[[cx('pages.people.p1N','361'),cx('pages.people.p1K','Members'),cx('pages.people.p1D','Across the continent and the diaspora.')],
       [cx('pages.people.p2N','8'),cx('pages.people.p2K','Chapters'),cx('pages.people.p2D','Each with its own team.')],
       [cx('pages.people.p3N','48'),cx('pages.people.p3K','Countries reached'),cx('pages.people.p3D','Members, attendees and collaborators.')]
      ].map(([n,k,d])=>`<div class="pillar rv"><span class="pi">${esc(n)}</span><h3 style="font-size:1.22rem">${esc(k)}</h3><p>${esc(d)}</p></div>`).join('')}
  </div>
</div></section>

<section class="cta-band">
  ${patternPanel('soft')}
  ${africaWatermark('wm-cta')}
  <div class="wrap"><div class="hero-eye">${cx('pages.people.ctaBandEyebrow', 'Join Us')}</div>
    <h2 class="mt24">${cx('pages.people.ctaBandTitle', 'There is room here<br>for what you do.')}</h2>
    <div class="btns"><a class="btn teal" href="#/join">${cx('pages.people.ctaBandBtn1', 'Join Quantum Africa')} <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn inv ghost" href="#/support">${cx('pages.people.ctaBandBtn2', 'Pledge your support')}</a></div>
  </div>
</section>`;

/* ---------- PARTNERS ---------- */
PAGES.partners = () => `
${crumb([{t:'Home',h:'#/'},{t:'Collaborators & Partners',h:'#/partners'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.partners.heroEyebrow', 'Collaborators & Partners')}</span><i></i></div>
  <h1 class="mt24">${cx('pages.partners.heroTitle', 'Collaborators partners, and organisations we worked with')}</h1>
  <p class="lede">${cx('pages.partners.heroLede', "Universities, research institutions, industry partners and international organisations building Africa's quantum workforce with us.")}</p>
  <div class="phero-meta"><a class="btn teal sm" href="#/contact">${cx('pages.partners.heroBtn', "Let's collaborate")}</a></div>
</div></section>
<section class="sec"><div class="wrap">
  ${sectionHead(
    cx('pages.partners.wallEyebrow','Directory'),
    cx('pages.partners.wallTitle','Collaborators & Partners')
  )}
  <div class="logo-wall">${partnerWall()}</div>
</div></section>
<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.partners.becomeEyebrow', 'Work with us'),
    cx('pages.partners.becomeTitle', 'Six ways to collaborate')
  )}
  <div class="grid g3">
    ${[[cx('pages.partners.w1Title','Universities'),cx('pages.partners.w1Body','Workshops, faculty training, student bootcamps, guest lectures, curriculum support and student chapters.')],
       [cx('pages.partners.w2Title','Research institutions'),cx('pages.partners.w2Body','Joint research projects, co-supervision, shared infrastructure and researcher mobility.')],
       [cx('pages.partners.w3Title','Industry'),cx('pages.partners.w3Body','Talent pipelines, internships, technical talks, tooling access and sponsored research.')],
       [cx('pages.partners.w4Title','Governments'),cx('pages.partners.w4Body','National quantum readiness, workforce development and policy input.')],
       [cx('pages.partners.w5Title','Foundations'),cx('pages.partners.w5Body','Funding education, research and chapter development with measurable outcomes.')],
       [cx('pages.partners.w6Title','International organisations'),cx('pages.partners.w6Body','Connecting African talent to global programmes, conferences and networks.')]
      ].map(([t,d])=>`<div class="card pad rv"><div class="card-b"><h4>${esc(t)}</h4><p>${esc(d)}</p></div></div>`).join('')}
  </div>
</div></section>
<section class="cta-band">
  ${ringMark('cta-ring')}
  <div class="wrap"><h2>${cx('pages.partners.ctaBandTitle','Let&rsquo;s collaborate.')}</h2>
  <div class="btns"><a class="btn teal" href="#/contact">${cx('pages.partners.ctaBandBtn1','Start a conversation')}</a><a class="btn inv ghost" href="#/universities">${cx('pages.partners.ctaBandBtn2','For universities')}</a></div>
</div></section>`;

/* ---------- FOR UNIVERSITIES ---------- */
PAGES.universities = () => `
${crumb([{t:'Home',h:'#/'},{t:'Programs',h:'#/education'},{t:'University Programs'}])}
<section class="phero" style="padding-top:38px;padding-bottom:30px">
  ${africaWatermark('wm-univ')}
  <div class="wrap">
    <div class="sec-idx"><span class="lbl">${cx('pages.universities.heroEyebrow', 'Programs · University partnerships')}</span><i></i></div>
    <div>
      <h1 class="mt24" style="font-size:clamp(2rem,4.2vw,3.3rem);line-height:1.05;letter-spacing:-.03em;max-width:20ch">${cx('pages.universities.heroTitle', 'Bring Quantum to Your Campus')}</h1>
      <p class="lede mt16" style="max-width:52ch">${cx('pages.universities.heroLede', 'Structured programmes that help African universities launch, teach and grow quantum, from first workshops to long-term research partnerships.')}</p>
      <div class="phero-meta mt24">
        <a class="btn teal" href="#/contact">${cx('pages.universities.heroBtn1', 'Start a partnership')} <span class="ar" aria-hidden="true">&rarr;</span></a>
        <a class="btn ghost" href="#/education">${cx('pages.universities.heroBtn2', 'Explore programmes')}</a>
      </div>
    </div>
  </div>
</section>

<section class="sec"><div class="wrap">
  ${sectionHead(
    cx('pages.universities.whyEyebrow', 'What we bring'),
    cx('pages.universities.whyTitle', 'A complete quantum programme, staged for your context'),
    cx('pages.universities.whyLede', '')
  )}
  <div class="grid g3">
    ${[[cx('pages.universities.o1Title','Quantum computing workshops'),cx('pages.universities.o1Body','Hands-on Qiskit / PennyLane  on your campus or online, for students and staff.'),'01'],
       [cx('pages.universities.o2Title','Faculty training'),cx('pages.universities.o2Body','Up-skilling workshops for lecturers so they can teach quantum topics with confidence long-term.'),'02'],
       [cx('pages.universities.o3Title','Student bootcamps'),cx('pages.universities.o3Body','Intensive short programmes taking students from zero to running real quantum circuits.'),'03'],
       [cx('pages.universities.o4Title','Guest lectures'),cx('pages.universities.o4Body','Speakers from the global quantum ecosystem invited into your classroom or lecture series.'),'04'],
       [cx('pages.universities.o5Title','Curriculum support'),cx('pages.universities.o5Body','Help designing quantum modules, choosing syllabi and compiling teaching materials.'),'05'],
       [cx('pages.universities.o6Title','Research collaboration'),cx('pages.universities.o6Body','Joint projects, co-supervision and introduction to our open research network.'),'06'],
       [cx('pages.universities.o7Title','Student chapters'),cx('pages.universities.o7Body','A Quantum Africa chapter on your campus, student-led, with our playbook and budget support.'),'07'],
       [cx('pages.universities.o8Title','Quantum AI Tutor access'),cx('pages.universities.o8Body','Institutional access to our free AI tutor for every enrolled student, with cohort tracking.'),'08'],
       [cx('pages.universities.o9Title','International pathways'),cx('pages.universities.o9Body','Introductions to partner institutions, conferences and exchange programmes abroad.'),'09']
      ].map(([t,d,n])=>`<div class="card pad rv"><div class="card-b">
        <div class="sec-idx" style="margin-bottom:14px"><span class="lbl" style="color:var(--gold-d);font-weight:700">${n}</span><i></i></div>
        <h4 style="font-size:1.08rem;letter-spacing:-.01em">${esc(t)}</h4>
        <p class="mt8" style="font-size:.92rem;line-height:1.55">${esc(d)}</p></div></div>`).join('')}
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.universities.howEyebrow', 'How we start'),
    cx('pages.universities.howTitle', 'From first email to first workshop'),
    cx('pages.universities.howLede', '')
  )}
  <div class="grid g2" style="gap:14px">
  ${[[cx('pages.universities.s1Title','Get in touch'),cx('pages.universities.s1Body','One email is enough. Tell us your department, your students and what you are trying to build.')],
     [cx('pages.universities.s2Title','Scoping call'),cx('pages.universities.s2Body','A 30-minute conversation to design a realistic first year: usually a pilot workshop and a student chapter.')],
     [cx('pages.universities.s3Title','Pilot activity'),cx('pages.universities.s3Body','First workshop or lecture series on your campus, co-organised with your staff. Materials delivered in advance.')],
     [cx('pages.universities.s4Title','Ongoing partnership'),cx('pages.universities.s4Body','Student chapter launch, faculty training plan, research collaboration and access to the wider network.')]
    ].map(([t,d],i)=>`<div class="panel rv step"><span class="n" style="width:44px;height:44px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;background:color-mix(in srgb,var(--gold) 14%,transparent);color:var(--gold-d);font-weight:700">0${i+1}</span><div class="mt16"><h4 style="font-size:1.08rem">${esc(t)}</h4><p style="margin-top:6px;font-size:.93rem">${esc(d)}</p></div></div>`).join('')}
  </div>
</div></section>

<section class="cta-band">
  ${ringMark('cta-ring')}
  <div class="wrap">
    <h2 style="max-width:22ch">${cx('pages.universities.ctaBandTitle', 'Bring quantum programmes to your university.')}</h2>
    <div class="btns mt16">
      <a class="btn teal" href="#/contact">${cx('pages.universities.ctaBandBtn1', 'Start a partnership')} <span class="ar" aria-hidden="true">&rarr;</span></a>
      <a class="btn inv ghost" href="#/education">${cx('pages.universities.ctaBandBtn2', 'See programmes')}</a>
    </div>
  </div>
</section>`;

/* ---------- FOR STUDENTS ---------- */
PAGES.students = () => `
${crumb([{t:'Home',h:'#/'},{t:'For Students'}])}
<section class="sec inv flush" style="padding:clamp(56px,7vw,92px) 0">
  ${ringMark('cta-ring')}
  <div class="wrap">
    <div class="sec-idx"><span class="lbl">${cx('pages.students.heroEyebrow', 'For students')}</span><i></i></div>
    <h1 style="max-width:14ch">${cx('pages.students.heroTitle', 'Start Your Quantum Journey')}</h1>
    <p class="lede mt24">${cx('pages.students.heroLede', '')}</p>
  </div>
</section>

<section class="sec flush" style="padding-top:clamp(48px,6vw,80px)"><div class="wrap">
  <div class="chooser">
    ${[[cx('pages.students.c1N','01'),cx('pages.students.c1Title','Learn'),cx('pages.students.c1Desc','Start with the AI Tutor, then webinars and workshops.'),'#/education'],
       [cx('pages.students.c2N','02'),cx('pages.students.c2Title','Research'),cx('pages.students.c2Desc','Join an open project as a contributor.'),'#/research'],
       [cx('pages.students.c3N','03'),cx('pages.students.c3Title','Internship'),cx('pages.students.c3Desc','Placements open to African students.'),'#/opportunities'],
       [cx('pages.students.c4N','04'),cx('pages.students.c4Title','Scholarship'),cx('pages.students.c4Desc','MSc, PhD and funding, filtered for eligibility.'),'#/opportunities'],
       [cx('pages.students.c5N','05'),cx('pages.students.c5Title','Mentorship'),cx('pages.students.c5Desc','Guidance from people already in the field.'),'#/join'],
       [cx('pages.students.c6N','06'),cx('pages.students.c6Title','Community'),cx('pages.students.c6Desc','Join your chapter — or start one.'),'#/chapters']
      ].map(([n,t,d,h])=>`<a class="choice rv" href="${h}">
        <span class="n">${esc(n)}</span><h3>${esc(t)}</h3><p>${esc(d)}</p>
        <span class="go">${cx('pages.students.chooserGoLabel', 'Go')} <span class="ar" aria-hidden="true">&rarr;</span></span>
      </a>`).join('')}
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.students.realityEyebrow', 'Reality check'),
    cx('pages.students.realityTitle', 'What you actually need'),
    cx('pages.students.realityLede', 'Curiosity, some linear algebra, and an internet connection. That is the entry bar.')
  )}
  <div class="grid g3">
    ${[[cx('pages.students.r1Title','No prior quantum'),cx('pages.students.r1Desc','Every programme starts from first principles.')],
       [cx('pages.students.r2Title','Any discipline'),cx('pages.students.r2Desc','Physics, maths and computing help. They are not required to begin.')],
       [cx('pages.students.r3Title','Free'),cx('pages.students.r3Desc','Nothing Quantum Africa runs costs students money.')]
      ].map(([t,d])=>`<div class="pillar rv"><h3 style="font-size:1.25rem">${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead(
    cx('pages.students.voicesEyebrow', 'Voices'),
    cx('pages.students.voicesTitle', 'Students already doing this'),
    null,
    {t:cx('pages.students.voicesCta', 'Member stories'),h:'#/news'}
  )}
  <div class="grid g3">${VOICES.concat(Array.from({length: Math.max(0, 3 - VOICES.length)}).map(()=>({}))).slice(0,3).map(v=>`<div class="vq rv">
    <span class="vq-quote-tl" aria-hidden="true">"</span>
    <span class="vq-quote-br" aria-hidden="true">"</span>
    <div class="vq-body" style="order:1"><p style="font-size:1.02rem;line-height:1.55">${v.quote ? esc(v.quote) : cx('pages.students.voicesQuotePlaceholder', pht('[ Student quote ]'))}</p></div>
    <div class="vq-by" style="order:2;text-align:left;margin-top:14px">
      <div class="xs" style="font-size:0.78rem;font-weight:500;letter-spacing:0.01em;color:var(--muted);text-transform:none">${(v.name ? esc(v.name) : cx('pages.students.voicesWhoPlaceholder', pht('[ Name ]'))) + (v.institution ? ' · ' + esc(v.institution) : ' · ' + pht('[ University ]')) + (v.country ? ' · ' + esc(tc(v.country)) : ' · ' + pht('[ Country ]'))}</div>
    </div>
  </div>`).join('')}</div>
</div></section>

<section class="cta-band">
  ${ringMark('cta-ring')}
  <div class="wrap"><div class="hero-eye">${cx('pages.students.ctaBandEyebrow', 'Get started')}</div>
    <h2 class="mt24">${cx('pages.students.ctaBandTitle', 'Join 350+ people already in the community.')}</h2>
    <div class="btns"><a class="btn teal" href="#/join">${cx('pages.students.ctaBandBtn1', 'Join Quantum Africa')} <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn inv ghost" href="#/education">${cx('pages.students.ctaBandBtn2', 'Browse programmes')}</a></div>
  </div>
</section>`;

/* ---------- FOR RESEARCHERS ---------- */
PAGES.researchers = () => `
${crumb([{t:'Home',h:'#/'},{t:'For Researchers'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.researchers.heroEyebrow', 'For researchers')}</span><i></i></div>
  <h1 class="mt24">${cx('pages.researchers.heroTitle', 'Collaborate. Research. Build.')}</h1>
  <p class="lede">${cx('pages.researchers.heroLede', 'Open projects, open code. Bring one, join one, or supervise students through one.')}</p>
</div></section>
<section class="sec"><div class="wrap">
  ${sectionHead(
    cx('pages.researchers.projectsEyebrow', 'Projects'),
    cx('pages.researchers.projectsTitle', 'Current research'),
    null,
    {t:cx('pages.researchers.projectsCta', 'All projects'),h:'#/research'}
  )}
  <div class="grid g2">${PROJECTS.map(projectCard).join('')}</div>
</div></section>
<section class="sec tint"><div class="wrap">
  <div class="grid g4">
    ${[[cx('pages.researchers.p1Title','Open source'),cx('pages.researchers.p1Desc','Publish code and analysis publicly so results are reproducible and reusable.')],
       [cx('pages.researchers.p2Title','Research opportunities'),cx('pages.researchers.p2Desc','Positions, collaborations and calls circulated to the network.')],
       [cx('pages.researchers.p3Title','Mentorship'),cx('pages.researchers.p3Desc','Supervise or co-supervise students working on quantum topics.')],
       [cx('pages.researchers.p4Title','Publications'),cx('pages.researchers.p4Desc','Papers, preprints and conference contributions from the community.')]
      ].map(([t,d])=>`<div class="pillar rv"><h3 style="font-size:1.2rem">${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}
  </div>
</div></section>
<section class="cta-band">
  ${ringMark('cta-ring')}
  <div class="wrap"><h2>${cx('pages.researchers.ctaBandTitle', 'Propose a research collaboration.')}</h2>
  <div class="btns"><a class="btn teal" href="#/contact">${cx('pages.researchers.ctaBandBtn1', 'Get in touch')}</a><a class="btn inv ghost" href="#/research">${cx('pages.researchers.ctaBandBtn2', 'Browse projects')}</a></div></div></section>`;

/* ---------- NEWS ---------- */
PAGES.news = () => `
${crumb([{t:'Home',h:'#/'},{t:'News & Articles'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.news.heroEyebrow', 'News &amp; articles')}</span><i></i></div>
  <h1>${cx('pages.news.heroTitle', 'What the network is doing.')}</h1>
  <p class="lede">${cx('pages.news.heroLede', 'News, chapter updates, member stories and reports.')}</p>
</div></section>

<section class="sec"><div class="wrap">
  <div class="news-lead">
    ${articleFeature(ARTICLES[0])}
    <div class="news-side">${ARTICLES.slice(1,5).map(articleRow).join('')}</div>
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.news.archiveEyebrow', 'Archive'),
    cx('pages.news.archiveTitle', 'Every article')
  )}
  <div class="filters">
    <div class="fgroup"><span class="fl">${cx('pages.news.filterTypeLabel', 'Type')}</span>
      ${[cx('pages.news.typeAll','All'),cx('pages.news.typeNews','News'),cx('pages.news.typeChapter','Chapter update'),cx('pages.news.typeMember','Member story'),cx('pages.news.typeReport','Report')].map((a,i)=>`<button class="chip ${i===0?'on':''}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">${cx('pages.news.filterChapterLabel', 'Chapter')}</span>
      ${[cx('pages.news.chapterAll','All')].concat(CHAPTERS.map(c=>c.name)).map((a,i)=>`<button class="chip ${i===0?'on':''}">${esc(a)}</button>`).join('')}
    </div>
  </div>
  <div class="result-n">${ARTICLES.length} ${cx('pages.news.resultLabel', 'articles')}</div>
  <div class="grid g3">${ARTICLES.map(articleCard).join('')}</div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="split">
    <div>
      ${sectionHead(
        cx('pages.news.newsletterEyebrow', 'Newsletter'),
        cx('pages.news.newsletterTitle', 'Get it in your inbox'),
        cx('pages.news.newsletterLede', 'One email a month: what happened, what is coming, and which deadlines are close.')
      )}
    </div>
    <div class="panel">
      <form data-netlify="true" name="newsletter" method="POST" action="/?thanks=1" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="newsletter">
        <p class="sr" hidden><label>Don't fill this out: <input name="bot-field"></label></p>
        <h5>${cx('pages.news.newsletterFormHead', 'Subscribe')}</h5>
        <div class="field"><label>${cx('pages.news.newsletterNameLabel', 'Name')}</label><input name="name" required placeholder="${cx('pages.news.newsletterNamePlaceholder', 'Your name')}"></div>
        <div class="field"><label>${cx('pages.news.newsletterEmailLabel', 'Email')}</label><input name="email" type="email" required placeholder="${cx('pages.news.newsletterEmailPlaceholder', 'you@university.edu')}"></div>
        <div class="field"><label>${cx('pages.news.newsletterCountryLabel', 'Country')}</label><select name="country" required><option value="">${cx('pages.news.countryPlaceholder', 'Select…')}</option>${COUNTRIES.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('')}</select></div>
        <button class="btn teal" type="submit">${cx('pages.news.newsletterSubmitBtn', 'Subscribe')} <span class="ar" aria-hidden="true">&rarr;</span></button>
        <div class="form-msg mt16" hidden></div>
        <p class="xs mt16">${cx('pages.news.newsletterPrivacyNote', 'Your email is handled via Netlify Forms and forwarded to the newsletter team.')}</p>
      </form>
    </div>
  </div>
</div></section>`;

PAGES.article = (m) => {
  const slug = (m && m[1]) || '';
  const a = ARTICLES.find(x => x && x.slug && x.slug === slug);
  if(!a){
    return `
${crumb([{t:'Home',h:'#/'},{t:'News',h:'#/news'},{t:'Article'}])}
<section class="sec flush" style="padding:0"><div class="wrap">${cimg('pages.article.heroImage', cx('pages.article.heroImageAlt', 'Article hero image'), '2400×1000 · JPG', 'wide', 'network')}</div></section>
<section class="sec"><div class="wrap-n">
  <div class="news-meta" style="margin-bottom:20px"><span class="t">${cx('pages.article.metaTypePlaceholder', pht('Type'))}</span><span>${cx('pages.article.metaDatePlaceholder', pht('DATE'))}</span><span>${cx('pages.article.metaReadPlaceholder', pht('READ TIME'))}</span></div>
  <h1 style="font-size:clamp(1.9rem,3.4vw,2.9rem)">${cx('pages.article.headlinePlaceholder', pht('Article headline'))}</h1>
  <p class="lede mt16">${cx('pages.article.standfirstPlaceholder', pht('Standfirst — one or two sentences'))}</p>
  <div class="prose mt32">
    <p>${cx('pages.article.bodyPlaceholder1', pht('BODY — the full article, written by the chapter or the author and edited in the CMS.'))}</p>
    <p>${cx('pages.article.bodyPlaceholder2', pht('BODY continued'))}</p>
    <h3>${cx('pages.article.subheadPlaceholder', pht('Subheading'))}</h3>
    <p>${cx('pages.article.bodyPlaceholder3', pht('BODY continued'))}</p>
  </div>
</div></section>
<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.article.moreEyebrow', 'More'),
    cx('pages.article.moreTitle', 'Related articles'),
    null,
    {t:cx('pages.article.moreCta', 'All articles'),h:'#/news'}
  )}
  <div class="grid g3">${ARTICLES.slice(1,4).map(articleCard).join('')}</div>
</div></section>`;
  }
  const md = (s) => {
    let html = (s||'').trim();
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\[(.+?)\]\((https?:\/\/.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1 &rarr;</a>');
    html = html.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
    const parts = html.split(/\n{2,}/);
    return parts.map(p => {
      if (/^\s*-\s+/m.test(p)) {
        const lines = p.split(/\n/).filter(l => l.trim().length);
        const items = lines.map(l => l.replace(/^\s*-\s+/, '')).join('');
        return `<ul>${items.replace(/(^|<\/li>)(.+?)(?=$|<li>)/g, (_, pre, content) => `${pre}<li>${content}</li>`)}</ul>`;
      }
      return `<p>${p}</p>`;
    }).join('');
  };
  const related = ARTICLES.filter(x => x && x.slug && x.slug !== a.slug).slice(0,3);
  const ytIdMatch = a.url && typeof a.url === 'string' ? a.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{6,})/) : null;
  const ytId = ytIdMatch && ytIdMatch[1] ? ytIdMatch[1] : '';
  const ytCard = (ytId) ? `
<div class="mt40">
  <div class="sec-idx"><span class="lbl">${cx('pages.article.recordingEyebrow', 'Recording')}</span><i></i></div>
  <a class="yt-card rv" href="${esc(a.url)}" target="_blank" rel="noopener noreferrer" style="max-width:780px;margin-top:18px">
    <span class="yt-thumb">
      <img src="https://img.youtube.com/vi/${esc(ytId)}/hqdefault.jpg" alt="${esc(a.title)} — YouTube recording" loading="lazy">
      <span class="yt-play" aria-hidden="true">
        <svg viewBox="0 0 68 48" width="54" height="38"><path d="M66.52,7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"/><path d="M 45,24 27,14v20z" fill="#fff"/></svg>
      </span>
    </span>
    <span class="yt-body">
      <span class="yt-title">${esc(a.title)}</span>
      <span class="yt-sub">Full recording · YouTube · ${esc(ytId)}</span>
      <span class="yt-cta">Watch the session on YouTube &rarr;</span>
    </span>
  </a>
</div>` : '';
  return `
${crumb([{t:'Home',h:'#/'},{t:'News',h:'#/news'},{t:a.title}])}
<section class="sec flush" style="padding:0"><div class="wrap">${artImage(a,'2400×1000 · JPG')}</div></section>
<section class="sec"><div class="wrap-n">
  <div class="news-meta" style="margin-bottom:20px"><span class="t">${esc(a.type||'News')}</span><span>${artDate(a)}</span>${a.read?`<span>${esc(a.read)}</span>`:''}</div>
  <h1 style="font-size:clamp(1.9rem,3.4vw,2.9rem)">${esc(a.title)}</h1>
  ${a.summary ? `<p class="lede mt16">${esc(a.summary)}</p>` : ''}
  <div class="prose mt32">${md(a.body||'')}</div>
  ${ytCard}
  ${(a.gallery && a.gallery.length) ? `<div class="mt40"><div class="sec-idx"><span class="lbl">${cx('pages.article.galleryEyebrow', 'Gallery')}</span><i></i></div><div class="grid g3 mt24" style="grid-template-columns:repeat(${a.gallery.length >= 3 ? 3 : 2},1fr)">${a.gallery.map(src=>`<a class="rv" href="${esc(_assetSrc(src))}" target="_blank" rel="noopener noreferrer" style="display:block;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px -22px rgba(0,0,0,.22);border:1px solid var(--line)"><img src="${esc(_assetSrc(src))}" alt="${esc(a.title)}" loading="lazy" style="width:100%;height:100%;max-height:320px;object-fit:cover;display:block"></a>`).join('')}</div></div>` : ''}
  ${(a.links && a.links.length) ? `<div class="mt32" style="display:flex;gap:12px;flex-wrap:wrap">${a.links.map(l=>`<a class="btn ghost" href="${esc(l.u||'#')}" target="_blank" rel="noopener noreferrer">${esc(l.l||'Link')} <span class="ar" aria-hidden="true">&rarr;</span></a>`).join('')}</div>` : ''}
</div></section>
<section class="sec tint"><div class="wrap">
  ${sectionHead(
    cx('pages.article.moreEyebrow', 'More'),
    cx('pages.article.moreTitle', 'Related articles'),
    null,
    {t:cx('pages.article.moreCta', 'All articles'),h:'#/news'}
  )}
  <div class="grid g3">${related.length ? related.map(articleCard).join('') : ARTICLES.slice(1,4).map(articleCard).join('')}</div>
</div></section>`;
};

/* ---------- JOIN ---------- */
PAGES.join = () => `
${crumb([{t:'Home',h:'#/'},{t:'Join'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">${cx('pages.join.heroEyebrow', 'Join')}</span><i></i></div>
  <h1 class="mt24">${cx('pages.join.heroTitle', "Be Part of Africa's Quantum Future.")}</h1>
  <p class="lede">${cx('pages.join.heroLede', 'Free. Tell us who you are and we will point you at the right chapter and people.')}</p>
</div></section>
<section class="sec"><div class="wrap"><div class="side">
  <div>
    <h3>${cx('pages.join.formHead', 'Membership form')}</h3>
    <p class="small mt8">${cx('pages.join.formIntro', 'Tell us who you are and we will point you at the right chapter and people.')}</p>
    <form class="mt24" data-netlify="true" name="join" method="POST" action="/?thanks=1" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="join">
      <p class="sr" hidden><label>Don't fill this out: <input name="bot-field"></label></p>
      <div class="grid g2">
        <div class="field"><label>${cx('pages.join.formNameLabel', 'Full name')}</label><input name="full_name" required placeholder="${cx('pages.join.formNamePlaceholder', 'Your name')}"></div>
        <div class="field"><label>${cx('pages.join.formEmailLabel', 'Email')}</label><input name="email" type="email" required placeholder="${cx('pages.join.formEmailPlaceholder', 'you@university.edu')}"></div>
        <div class="field"><label>${cx('pages.join.formCountryLabel', 'Country')}</label><select name="country" required><option value="">${cx('pages.join.formCountryPlaceholder', 'Select…')}</option>${COUNTRIES.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('')}</select></div>
        <div class="field"><label>${cx('pages.join.formInstitutionLabel', 'Institution')}</label><input name="institution" placeholder="${cx('pages.join.formInstitutionPlaceholder', 'University or company')}"></div>
      </div>
      <div class="field"><label>${cx('pages.join.formRoleLabel', 'I am a…')}</label><select name="role" required><option>${cx('pages.join.roleStudent', 'Student')}</option><option>${cx('pages.join.roleResearcher', 'Researcher')}</option><option>${cx('pages.join.roleEducator', 'Educator')}</option><option>${cx('pages.join.roleIndustry', 'Industry professional')}</option><option>${cx('pages.join.roleOther', 'Other')}</option></select></div>
      <div class="field"><label>${cx('pages.join.formLookingLabel', 'What are you looking for?')}</label><textarea name="message" rows="4" placeholder="${cx('pages.join.formLookingPlaceholder', 'Learning, research, mentorship, opportunities, starting a chapter…')}"></textarea></div>
      <button class="btn teal" type="submit">${cx('pages.join.formSubmitBtn', 'Join Quantum Africa')} <span class="ar" aria-hidden="true">→</span></button>
      <div class="form-msg mt16" hidden></div>
      <p class="small mt18" style="color:var(--ink-2);line-height:1.7">
        ${cx('pages.join.googleFormHint', 'Prefer to sign up via Google Form?')}
        <a class="link-a" href="https://forms.gle/b1qSiiniz5wYRZJo9" target="_blank" rel="noopener noreferrer">${cx('pages.join.googleFormCta', 'Fill in this Google Form →')}</a>
      </p>
    </form>
  </div>
  <aside>
    <div class="panel" style="background:color-mix(in srgb,var(--teal) 8%,transparent);border-color:color-mix(in srgb,var(--teal) 26%,var(--line))">
      <h5 style="margin-bottom:6px">${cx('pages.join.altHeadline', 'Join via Google Form')}</h5>
      <p class="small" style="margin:0 0 14px;color:var(--ink-2)">${cx('pages.join.altSub', 'If the on-page form doesn\u2019t work for you, fill in the Google Form below instead.')}</p>
      <a class="btn teal" href="https://forms.gle/b1qSiiniz5wYRZJo9" target="_blank" rel="noopener noreferrer" style="width:100%;justify-content:center">${cx('pages.join.altBtn', 'Open Google Form →')}</a>
    </div>
    <div class="panel mt16"><h5>${cx('pages.join.getHead', 'What you get')}</h5>
      <ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--ink-2);line-height:1.9">
        <li>${cx('pages.join.getItem1', 'Invitations to every webinar and workshop')}</li>
        <li>${cx('pages.join.getItem2', 'Opportunities circulated before deadlines')}</li>
        <li>${cx('pages.join.getItem3', 'Access to open research projects')}</li>
        <li>${cx('pages.join.getItem4', "Your national chapter's community")}</li>
        <li>${cx('pages.join.getItem5', 'The Quantum AI Tutor when it launches')}</li>
      </ul>
    </div>
    <div class="panel mt16"><h5>${cx('pages.join.otherHead', 'Other ways in')}</h5>
      <a class="link-a" href="#/partners" style="display:flex;margin-bottom:12px">${cx('pages.join.otherLink1', 'Partner with us')} <span aria-hidden="true">→</span></a>
      <a class="link-a" href="#/universities" style="display:flex;margin-bottom:12px">${cx('pages.join.otherLink2', 'Bring us to your university')} <span aria-hidden="true">→</span></a>
      <a class="link-a" href="#/chapters" style="display:flex">${cx('pages.join.otherLink3', 'Start a chapter')} <span aria-hidden="true">→</span></a>
    </div>
  </aside>
</div></div></section>`;

/* ---------- CONTACT / LEGAL ---------- */
PAGES.contact = () => `
${crumb([{t:'Home',h:'#/'},{t:'Contact'}])}
<section class="phero"><div class="wrap"><div class="sec-idx"><span class="lbl">${cx('pages.contact.heroEyebrow', 'Contact')}</span><i></i></div>
  <h1 class="mt24">${cx('pages.contact.heroTitle', 'Get in touch.')}</h1>
  <p class="lede">${cx('pages.contact.heroLede', 'Partnerships, media, speaking requests or questions.')}</p>
</div></section>
<section class="sec"><div class="wrap"><div class="side">
  <div>
    <form data-netlify="true" name="contact" method="POST" action="/?thanks=1" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact">
      <p class="sr" hidden><label>Don't fill this out: <input name="bot-field"></label></p>
      <div class="grid g2">
        <div class="field"><label>${cx('pages.contact.formNameLabel', 'Name')}</label><input name="name" required placeholder="${cx('pages.contact.formNamePlaceholder', 'Your name')}"></div>
        <div class="field"><label>${cx('pages.contact.formEmailLabel', 'Email')}</label><input name="email" type="email" required placeholder="${cx('pages.contact.formEmailPlaceholder', 'you@example.com')}"></div>
      </div>
      <div class="field"><label>${cx('pages.contact.formReasonLabel', 'Reason')}</label><select name="reason" required><option>${cx('pages.contact.reasonPartnership', 'Partnership')}</option><option>${cx('pages.contact.reasonUniversity', 'University collaboration')}</option><option>${cx('pages.contact.reasonMedia', 'Media')}</option><option>${cx('pages.contact.reasonSpeaking', 'Speaking request')}</option><option>${cx('pages.contact.reasonOpportunity', 'Submit an opportunity')}</option><option>${cx('pages.contact.reasonOther', 'Other')}</option></select></div>
      <div class="field"><label>${cx('pages.contact.formMessageLabel', 'Message')}</label><textarea name="message" rows="6" required placeholder="${cx('pages.contact.formMessagePlaceholder', 'How can we help?')}"></textarea></div>
      <button class="btn teal" type="submit">${cx('pages.contact.formSubmitBtn', 'Send message')}</button>
      <div class="form-msg mt16" hidden></div>
    </form>
  </div>
  <aside><div class="panel"><h5>${cx('pages.contact.directHead', 'Direct')}</h5><dl class="dl-list">
    <div class="dl-item"><dt>${cx('pages.contact.directEmailLabel', 'Email')}</dt><dd><a href="${_href(cval('pages.contact.directEmailValue') || cval('site.footerEmail') || cval('site.email')) || 'mailto:contact@quantum-africa.org'}"${_linkRel(cval('pages.contact.directEmailValue') || cval('site.footerEmail') || cval('site.email'))}>${cx('pages.contact.directEmailValue', cval('site.email') || cval('site.footerEmail') || 'contact@quantum-africa.org')}</a></dd></div>
    <div class="dl-item"><dt>${cx('pages.contact.directLinkedinLabel', 'LinkedIn')}</dt><dd><a href="${cval('pages.contact.directLinkedinUrl') || cval('site.linkedin') || 'https://www.linkedin.com/company/quantum-africa'}"${_linkRel(cval('pages.contact.directLinkedinUrl') || cval('site.linkedin') || 'https://www.linkedin.com/company/quantum-africa')}>${cx('pages.contact.directLinkedinValue', 'Quantum Africa')}</a></dd></div>
    <div class="dl-item"><dt>${cx('pages.contact.directBasedLabel', 'Based in')}</dt><dd>${cx('pages.contact.directBasedValue', 'Pan-African — chapters across the continent')}</dd></div>
  </dl></div></aside>
</div></div></section>`;

function _mdToHtml(md){
  if(!md) return '';
  const esc1 = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const out = [];
  const lines = String(md).replace(/\r\n/g,'\n').split('\n');
  let para = [];
  const flushPara = () => {
    if(para.length){
      out.push('<p>' + esc1(para.join(' '))
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
        .replace(/`([^`]+)`/g, '<code>$1</code>') + '</p>');
      para = [];
    }
  };
  for(const raw of lines){
    const l = raw.trimEnd();
    if(!l.trim()){ flushPara(); continue; }
    const h = /^(#{1,6})\s+(.*)$/.exec(l);
    if(h){
      flushPara();
      const n = h[1].length;
      out.push(`<h${n+2}>${esc1(h[2]).replace(/`([^`]+)`/g,'<code>$1</code>')}</h${n+2}>`);
      continue;
    }
    if(/^\s*[-*]\s+/.test(l)){
      flushPara();
      const rest = l.replace(/^\s*[-*]\s+/,'');
      out.push('<ul><li>' + esc1(rest).replace(/`([^`]+)`/g,'<code>$1</code>') + '</li></ul>');
      continue;
    }
    if(/^\s*\d+\.\s+/.test(l)){
      flushPara();
      const rest = l.replace(/^\s*\d+\.\s+/,'');
      out.push('<ol><li>' + esc1(rest).replace(/`([^`]+)`/g,'<code>$1</code>') + '</li></ol>');
      continue;
    }
    para.push(l.trim());
  }
  flushPara();
  const html = out.join('\n').replace(/(<\/ul>\s*<ul>)/g,'').replace(/(<\/ol>\s*<ol>)/g,'');
  return html;
}

PAGES.legal = () => {
  const privacy = cval('legal.privacy');
  const terms = cval('legal.terms');
  const conduct = cval('legal.conduct');
  return `
${crumb([{t:'Home',h:'#/'},{t:'Legal'}])}
<section class="sec"><div class="wrap-n">
  <h1 style="font-size:clamp(1.8rem,3vw,2.4rem)">Privacy, Terms &amp; Code of Conduct</h1>
  <div class="prose mt32">
    <h3>Privacy Policy</h3>${privacy
      ? _mdToHtml(privacy)
      : `<p>${pht('PRIVACY POLICY — required before collecting emails. Must cover what is collected, why, how long it is kept, and how to request deletion.')}</p>`}
    <h3 class="mt48">Terms of Use</h3>${terms
      ? _mdToHtml(terms)
      : `<p>${pht('TERMS OF USE')}</p>`}
    <h3 class="mt48">Code of Conduct</h3>${conduct
      ? _mdToHtml(conduct)
      : `<p>${pht('CODE OF CONDUCT — expected behaviour at events and in community channels, and how to report a problem. Universities and funders will look for this.')}</p>`}
  </div>
</div></section>`;
};

PAGES.notFound = () => `
<section class="sec"><div class="wrap center" style="padding:80px 0">
  <div class="hero-eye" style="color:var(--teal);justify-content:center">404</div>
  <h1 class="mt24">Page not found.</h1>
  <p class="lede" style="margin:16px auto 0">This prototype covers the main routes. Use the navigation to get back.</p>
  <div class="mt32"><a class="btn teal" href="#/">Back to the homepage</a></div>
</div></section>`;

/* ============================================================
   ROUTER
   ============================================================ */
const ROUTES = [
  [/^\/?$/,                        () => PAGES.home()],
  [/^\/about$/,                    () => PAGES.about()],
  [/^\/impact$/,                   () => PAGES.impact()],
  [/^\/education$/,                () => PAGES.education()],
  [/^\/tutor$/,                    () => PAGES.tutor()],
  [/^\/research$/,                 () => PAGES.research()],
  [/^\/research\/(.+)$/,           m  => PAGES.researchDetail(m[1])],
  [/^\/chapters$/,                 () => PAGES.chapters()],
  [/^\/chapters\/(.+)$/,           m  => PAGES.chapterDetail(m[1])],
  [/^\/events$/,                   () => PAGES.events()],
  [/^\/events\/workshops$/,         () => PAGES.workshops()],
  [/^\/events\/webinars$/,         () => PAGES.webinars()],
  [/^\/events\/(.+)$/,             m  => PAGES.eventDetail(m[1])],
  [/^\/conference$/,                () => PAGES.conference()],
  [/^\/conference\/(.+)$/,         m  => PAGES.confEdition(m[1])],
  [/^\/support$/,                   () => PAGES.support()],
  [/^\/opportunities$/,            () => PAGES.opportunities()],
  [/^\/people$/,                   () => PAGES.people()],
  // Old per-person URLs land on the team grid rather than a 404.
  [/^\/people\/(.+)$/,             () => PAGES.people()],
  [/^\/partners$/,                 () => PAGES.partners()],
  [/^\/universities$/,             () => PAGES.universities()],
  [/^\/students$/,                 () => PAGES.students()],
  [/^\/researchers$/,              () => PAGES.researchers()],
  [/^\/news$/,                     () => PAGES.news()],
  [/^\/news\/(.+)$/,               m => PAGES.article(m)],
  [/^\/join$/,                     () => PAGES.join()],
  [/^\/contact$/,                  () => PAGES.contact()],
  [/^\/legal$/,                    () => PAGES.legal()],
];

function currentPath(){
  const h = location.hash.replace(/^#/, '');
  return h || '/';
}

const SEO_TITLE_HOME = 'Quantum Africa';
const SEO_DESC_HOME  = 'Quantum Africa is a pan-African organization building capacity in quantum science and technology through education, research, talent development, university partnerships and global collaboration.';
const SEO_TITLE_BY_ROUTE = {
  'about':        'About Quantum Africa — Building a pan-African quantum community',
  'impact':       'Impact — Quantum Africa projects, chapters and community outcomes',
  'education':    'Quantum Education — Learning programmes, quantum tutoring and workshops for African students',
  'tutor':        '1-on-1 Quantum Tutoring — Book private tutoring with Quantum Africa tutors',
  'research':     'Research — Open quantum computing research projects by Quantum Africa contributors',
  'chapters':     'Chapters — National quantum computing chapters across Africa',
  'events':       'Events — Quantum Africa workshops, webinars, seminars and conferences',
  'events/workshops':   'Workshops — Quantum Africa hands-on quantum workshops',
  'events/webinars':   'Webinars — Quantum Africa expert-led webinars on quantum computing',
  'conference':   'Quantum Africa Conference — The annual pan-African quantum conference',
  'support':      'Support Quantum Africa — Sponsor, partner or donate',
  'opportunities':'Quantum Opportunities — Jobs, internships, fellowships and grants in quantum computing worldwide, curated for Africans',
  'people':       'People — Team, advisors and researchers of Quantum Africa',
  'partners':     'Partners — Quantum Africa\u2019s academic, industry and non-profit partners',
  'universities': 'Universities Programme — Quantum clubs at African universities',
  'students':     'For Students — Learning, chapters and quantum opportunities for African students',
  'researchers':  'For Researchers — Research projects, collaborations and access for African researchers',
  'news':         'News & Articles — Quantum Africa updates, chapter reports and community stories',
  'join':         'Join Quantum Africa — Become a member, start a chapter, or volunteer',
  'contact':      'Contact Quantum Africa',
  'legal':        'Legal — Quantum Africa terms & privacy',
};
const SEO_DESC_BY_ROUTE = {
  'about':        'Quantum Africa is a pan-African network of students, researchers, professionals and innovators building a homegrown quantum ecosystem across the continent through chapters, research, education and events.',
  'impact':       'See the concrete impact of Quantum Africa across Africa: launched national chapters, workshop participants, research projects, community stories and measurable outcomes in education and research.',
  'education':    'Quantum Africa runs learning programmes for African students: workshops, webinars, peer groups, quantum tutoring and training paths in quantum computing, quantum information and quantum machine learning.',
  'tutor':        'Book 1-on-1 quantum computing tutoring with vetted Quantum Africa tutors — Qiskit, quantum algorithms, quantum ML, undergraduate quantum mechanics, exam prep and more.',
  'research':     'Open-source and collaborative research projects led by Quantum Africa contributors across Africa: quantum ML, quantum computing for healthcare, materials discovery, QKD and education tools.',
  'chapters':     'National Quantum Africa chapters bring together students, researchers and professionals in countries across Africa. Start a chapter or join an existing one near you.',
  'events':       'Explore upcoming and past Quantum Africa events: hands-on workshops, expert webinars, seminars and the annual Quantum Africa conference.',
  'events/workshops':   'Hands-on workshops on quantum computing, Qiskit, quantum algorithms and quantum machine learning, organised by Quantum Africa chapters and partners across Africa.',
  'events/webinars':   'Free expert-led Quantum Africa webinars covering recent research, careers in quantum, African chapter stories, tooling workshops and more.',
  'conference':   'The annual Quantum Africa conference brings together the African quantum research community, global leaders, students and industry for talks, posters, workshops and hackathons.',
  'support':      'Partner with, sponsor or donate to Quantum Africa and help scale a connected, homegrown quantum ecosystem across the African continent.',
  'opportunities':'Curated quantum computing opportunities for Africans: quantum jobs, internships, PhD positions, research fellowships, travel grants and hackathons from around the world.',
  'people':       'Meet the team, advisors and researchers behind Quantum Africa — volunteers, organisers, chapter leads and researchers across the continent and beyond.',
  'partners':     'Quantum Africa works with academic institutions, industry partners, non-profits and quantum initiatives worldwide to build a pan-African quantum ecosystem.',
  'universities': 'The Quantum Africa Universities Programme helps students start and run quantum clubs at their African universities, with mentorship, materials and event support.',
  'students':     'Resources for African students to get started in quantum computing: chapters, workshops, learning paths, tutoring, quantum internships, grants and community support.',
  'researchers':  'Support for African researchers working in quantum computing: research projects, collaboration, event grants, speaking opportunities and our community network.',
  'news':         'Latest news, chapter updates, community stories and feature articles from the Quantum Africa network.',
  'join':         'Join the Quantum Africa network as an individual member, volunteer, chapter lead or institutional partner.',
  'contact':      'Get in touch with the Quantum Africa team: email contact@quantum-africa.org for chapters, partnerships, press, research collaborations and events.',
  'legal':        'Terms of use, cookies and privacy policy for quantum-africa.org.',
};

const SEO_SITE = 'Quantum Africa';
const SEO_SEP = ' — ';
const SEO_OG_IMG = document.querySelector('meta[property="og:image"]')
  ? document.querySelector('meta[property="og:image"]').getAttribute('content') || ''
  : '';
const SEO_TWITTER_SITE = '@QuantumAfricaHQ';

function _ensureMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) { el = document.createElement('meta'); Object.keys(attrs).forEach(k => el.setAttribute(k, attrs[k])); document.head.appendChild(el); }
  return el;
}

function setHead(title, desc, opts) {
  opts = opts || {};
  const t = (title || SEO_TITLE_HOME).replace(/\s+/g,' ').trim();
  const d = (desc  || SEO_DESC_HOME ).replace(/\s+/g,' ').trim();
  document.title = t;

  _ensureMeta('meta[name="description"]',   {name:'description'}).setAttribute('content', d);
  _ensureMeta('meta[name="author"]',      {name:'author'}).setAttribute('content', SEO_SITE);
  _ensureMeta('meta[name="robots"]',      {name:'robots'}).setAttribute('content', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');

  _ensureMeta('meta[property="og:title"]',       {'property':'og:title'}).setAttribute('content', t);
  _ensureMeta('meta[property="og:description"]', {'property':'og:description'}).setAttribute('content', d);
  _ensureMeta('meta[property="og:type"]',        {'property':'og:type'}).setAttribute('content', opts.ogType || 'website');
  _ensureMeta('meta[property="og:site_name"]',   {'property':'og:site_name'}).setAttribute('content', SEO_SITE);
  _ensureMeta('meta[property="og:locale"]',      {'property':'og:locale'}).setAttribute('content', 'en_GB');
  _ensureMeta('meta[property="og:url"]',         {'property':'og:url'}).setAttribute('content', opts.url || (location.origin + location.pathname + location.hash));
  if (SEO_OG_IMG) {
    _ensureMeta('meta[property="og:image"]',         {'property':'og:image'}).setAttribute('content', SEO_OG_IMG);
    _ensureMeta('meta[property="og:image:secure_url"]',{'property':'og:image:secure_url'}).setAttribute('content', SEO_OG_IMG);
    _ensureMeta('meta[property="og:image:type"]',     {'property':'og:image:type'}).setAttribute('content', opts.imgType || 'image/png');
    _ensureMeta('meta[property="og:image:width"]',    {'property':'og:image:width'}).setAttribute('content', opts.imgWidth || '1200');
    _ensureMeta('meta[property="og:image:height"]',   {'property':'og:image:height'}).setAttribute('content', opts.imgHeight || '630');
    _ensureMeta('meta[property="og:image:alt"]',      {'property':'og:image:alt'}).setAttribute('content', opts.imgAlt || (SEO_SITE + ' logo — a connected, homegrown quantum ecosystem across Africa'));
  }

  _ensureMeta('meta[name="twitter:card"]',        {name:'twitter:card'}).setAttribute('content', opts.twCard || 'summary_large_image');
  _ensureMeta('meta[name="twitter:site"]',        {name:'twitter:site'}).setAttribute('content', SEO_TWITTER_SITE);
  _ensureMeta('meta[name="twitter:title"]',       {name:'twitter:title'}).setAttribute('content', t);
  _ensureMeta('meta[name="twitter:description"]', {name:'twitter:description'}).setAttribute('content', d);
  if (SEO_OG_IMG) {
    _ensureMeta('meta[name="twitter:image"]',    {name:'twitter:image'}).setAttribute('content', SEO_OG_IMG);
    _ensureMeta('meta[name="twitter:image:alt"]',{name:'twitter:image:alt'}).setAttribute('content', opts.imgAlt || (SEO_SITE + ' logo'));
  }

  const c = _ensureMeta('link[rel="canonical"]', {rel:'canonical'});
  if (c.tagName.toLowerCase() === 'link') c.setAttribute('href', opts.url || (location.origin + location.pathname + location.hash));
}

function applyRouteSEO(path, routeArgs) {
  routeArgs = routeArgs || null;
  const p = (path || '').replace(/^#/,'').replace(/^\//,'') || '';
  const top = p.split('/')[0] || '';
  const key = p || '/';
  const topTitle = SEO_TITLE_BY_ROUTE[top]  ? SEO_TITLE_BY_ROUTE[top]  : (SEO_TITLE_BY_ROUTE[key]  || null);
  const topDesc  = SEO_DESC_BY_ROUTE [top]  ? SEO_DESC_BY_ROUTE [top]  : (SEO_DESC_BY_ROUTE [key]  || null);

  let t = topTitle;
  let d = topDesc;
  let extras = {};

  if (p === '' || p === '/') {
    t = SEO_TITLE_HOME; d = SEO_DESC_HOME;
  } else if (p.startsWith('news/')) {
    const slug = routeArgs && routeArgs[1] ? routeArgs[1] : p.slice('news/'.length);
    const a = (typeof ARTICLES !== 'undefined' && Array.isArray(ARTICLES))
      ? ARTICLES.find(x => x && x.slug === slug)
      : null;
    if (a) {
      t = (a.title || 'Article') + SEO_SEP + SEO_SITE;
      d = (a.summary || a.type ? 'News article' + (a.type ? ' · '+a.type : '') + ' from Quantum Africa.' : SEO_DESC_HOME);
      extras = { ogType:'article' };
    } else {
      t = topTitle || ('Article' + SEO_SEP + SEO_SITE);
      d = topDesc  || SEO_DESC_HOME;
    }
  } else if (p.startsWith('research/')) {
    const slug = routeArgs && routeArgs[1] ? routeArgs[1] : p.slice('research/'.length);
    const proj = (typeof PROJECTS !== 'undefined' && Array.isArray(PROJECTS))
      ? PROJECTS.find(x => x && x.slug === slug)
      : null;
    if (proj) {
      t = (proj.title || 'Project') + SEO_SEP + SEO_SITE;
      d = (proj.short || proj.area ? 'Open research project' + (proj.area ? ' · '+proj.area : '') + ' by Quantum Africa contributors.' : SEO_DESC_HOME);
      extras = { ogType:'article' };
    } else {
      t = topTitle || ('Research' + SEO_SEP + SEO_SITE);
      d = topDesc  || SEO_DESC_HOME;
    }
  } else if (p.startsWith('chapters/')) {
    const slug = routeArgs && routeArgs[1] ? routeArgs[1] : p.slice('chapters/'.length);
    t = (slug.charAt(0).toUpperCase() + slug.slice(1).replace(/[-_]/g,' ') + ' Chapter') + SEO_SEP + SEO_SITE;
    d = 'Quantum Africa chapter page for ' + (slug.replace(/[-_]/g,' ') || slug) + '. Join the local quantum community, events and chapters activities across Africa.';
  } else if (p.startsWith('events/') && !SEO_TITLE_BY_ROUTE[p]) {
    const slug = routeArgs && routeArgs[1] ? routeArgs[1] : p.slice('events/'.length);
    const e = (typeof EVENTS !== 'undefined' && Array.isArray(EVENTS))
      ? EVENTS.find(x => x && x.slug === slug)
      : null;
    if (e) {
      t = (e.title || e.n || 'Event') + SEO_SEP + SEO_SITE;
      d = (e.type ? e.type + ' · ' : '') + 'Quantum Africa event' + (e.city || e.country ? ' in '+ (e.city || '') + (e.city && e.country ? ', ' : '') + (e.country || '') : '') + '.';
      extras = { ogType:'article' };
    }
  } else if (p.startsWith('conference/')) {
    const slug = routeArgs && routeArgs[1] ? routeArgs[1] : p.slice('conference/'.length);
    const conf = (typeof CONF !== 'undefined' && Array.isArray(CONF))
      ? CONF.find(x => x && x.slug === slug)
      : null;
    if (conf) {
      t = (conf.n || conf.title || ('QA ' + (conf.year || ''))) + SEO_SEP + SEO_SITE;
      d = 'Quantum Africa conference edition ' + (conf.year || slug) + (conf.city ? ' in '+ conf.city : '') + (conf.country ? ', '+conf.country : '') + ' — programme, organising committee, speakers and sponsors.';
    }
  } else if (p.startsWith('people/')) {
    t = SEO_TITLE_BY_ROUTE['people'] || ('People' + SEO_SEP + SEO_SITE);
    d = SEO_DESC_BY_ROUTE ['people'] || SEO_DESC_HOME;
  }

  if (!t) t = (key.charAt(0).toUpperCase() + key.slice(1).replace(/\//g,' · ') + SEO_SEP + SEO_SITE);
  if (!d) d = SEO_DESC_HOME;

  setHead(t, d, extras);
}

function render(){
  const path = currentPath();
  __sec = 0;
  let html = null;
  let matchedArgs = null;
  let matchedPathKey = null;
  for(const [re, fn] of ROUTES){
    const m = path.match(re);
    if(m){ html = fn(m); matchedArgs = m; matchedPathKey = path; break; }
  }
  const view = document.getElementById('view');
  view.innerHTML = html === null ? PAGES.notFound() : html;
  try { applyRouteSEO(matchedPathKey || path, matchedArgs); } catch (e) { try { setHead(SEO_TITLE_HOME, SEO_DESC_HOME); } catch(_) {} }
  window.scrollTo({top:0, behavior:'instant'});
  markActiveNav(path);
  initReveal();
  if(path === '/' || path === '') { initSlider(); initTyping(); initHighlight(); }
  initMap();
  initFilters();
  closeDrawer();
}

/* ---------- nav build ---------- */
function buildNav(){
  const nav = document.getElementById('nav');
  nav.innerHTML = NAV.map((n,i)=>`
    <div class="nav-item" data-i="${i}">
      <button class="nav-btn" data-href="${n.href}" aria-expanded="false" aria-haspopup="true">${n.label}<span class="car" aria-hidden="true"></span></button>
      <div class="drop">${n.items.map(it=>`<a href="${it.h}">${it.t}<span class="d">${it.d}</span></a>`).join('')}</div>
    </div>`).join('');

  nav.querySelectorAll('.nav-item').forEach(item=>{
    const btn = item.querySelector('.nav-btn');
    let t;
    const open = () => { clearTimeout(t); nav.querySelectorAll('.nav-item').forEach(x=>{if(x!==item)x.classList.remove('open')}); item.classList.add('open'); btn.setAttribute('aria-expanded','true'); };
    const close = () => { t = setTimeout(()=>{ item.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }, 140); };
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', close);
    btn.addEventListener('click', e => { e.preventDefault(); location.hash = btn.dataset.href; });
    btn.addEventListener('focus', open);
    item.addEventListener('focusout', e => { if(!item.contains(e.relatedTarget)) close(); });
  });

  document.getElementById('drawerNav').innerHTML = NAV.map(n=>`
    <div class="grp">${n.label}</div>
    ${n.items.map(it=>`<a class="dl" href="${it.h}">${it.t}</a>`).join('')}
  `).join('') + `<div class="grp">More</div>
    <a class="dl" href="#/students">For Students</a>
    <a class="dl" href="#/researchers">For Researchers</a>
    <a class="dl" href="#/universities">For Universities</a>
    <a class="dl" href="#/news">News</a>
    <a class="dl" href="#/impact">Our Impact</a>
    <a class="dl" href="#/contact">Contact</a>`;
}
function markActiveNav(path){
  document.querySelectorAll('.nav-btn').forEach(b=>{
    const seg = b.dataset.href.replace('#/','').split('/')[0];
    const cur = path.replace(/^\//,'').split('/')[0];
    b.classList.toggle('active', seg !== '' && seg === cur);
  });
}
function closeDrawer(){ document.getElementById('drawer').classList.remove('open'); document.body.style.overflow=''; }

/* ---------- hero slider ---------- */
let slideTimer = null, slideIdx = 0, sliderControllers = null, _sliderGen = 0;
function initSlider(){
  // Each init bumps the generation counter. Any setTimeout / setInterval closure captured by
  // an earlier init will detect it's now stale and bail before touching the DOM — this
  // defeats the race where rebuildFromContent() replaces the hero stage while the previous
  // init's 420ms "startSoon" timer is still pending (it used to animate a detached DOM).
  const gen = ++_sliderGen;
  const initialStage = document.getElementById('stage');
  if(!initialStage) return;
  if(slideTimer){ clearInterval(slideTimer); slideTimer = null; }
  if(sliderControllers && sliderControllers.abort){ try{ sliderControllers.abort(); }catch(e){} }
  sliderControllers = new AbortController();
  const signal = sliderControllers.signal;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.body.classList.contains('no-motion');
  slideIdx = 0;

  function getLiveEls(){
    const s = document.getElementById('stage');
    if(!s) return { stage:null, slides:[], dots:null, cap:null };
    const d = document.getElementById('dots');
    const c = document.getElementById('slideCap');
    return { stage:s, slides:[...s.querySelectorAll('.slide')], dots:d, cap:c };
  }
  const firstDraw = () => {
    const { stage, slides, dots } = getLiveEls();
    if(dots && stage){
      dots.innerHTML = slides.map((_,i)=>`<button class="dot-btn ${i===0?'on':''}" data-i="${i}" role="tab" aria-label="Slide ${i+1} of ${slides.length}"></button>`).join('');
    }
  };
  firstDraw();

  function go(i){
    if(gen !== _sliderGen) return;
    const { stage, slides, dots, cap } = getLiveEls();
    if(!stage || !slides.length) return;
    slideIdx = (i + slides.length) % slides.length;
    slides.forEach((s,n)=>s.classList.toggle('on', n===slideIdx));
    if(dots){
      [...dots.children].forEach((d,n)=>{ d.classList.remove('on'); if(n===slideIdx){ void d.offsetWidth; d.classList.add('on'); }});
    }
    const meta = HERO_SLIDES[slideIdx] || {};
    if(cap) cap.textContent = `Slide ${slideIdx+1} of ${slides.length} — ${meta.caption || meta.t || ''}`;
  }
  function stopAll(){
    const { stage } = getLiveEls();
    if(stage) stage.querySelectorAll('[data-hero-video]').forEach(v => { try{ v.pause(); }catch(e){} });
  }
  function playActive(){
    if(reduced || gen !== _sliderGen) return false;
    const { slides } = getLiveEls();
    const v = slides[slideIdx] && slides[slideIdx].querySelector('[data-hero-video]');
    if(!v) return false;
    try{ v.currentTime = 0; }catch(e){}
    const p = v.play();
    if(p && p.catch) p.catch(()=>{});
    return true;
  }
  function play(){
    if(reduced || gen !== _sliderGen) return;
    const { stage, slides } = getLiveEls();
    if(!stage || !slides.length) return;
    if(slideTimer){ clearInterval(slideTimer); slideTimer = null; }
    stopAll();
    const isVideo = playActive();
    const ms = isVideo ? 6000 : 3200;
    slideTimer = setInterval(()=>{
      if(gen !== _sliderGen){ clearInterval(slideTimer); return; }
      go(slideIdx+1); play();
    }, ms);
  }
  // Attach ended listeners only to videos in the currently mounted stage, so if they're swapped out
  // the event listeners are harmless (and the new stage's ended listener on the new video element
  // will get installed by the next initSlider).
  function bindVideoEnded(){
    const { stage } = getLiveEls();
    if(!stage) return;
    stage.querySelectorAll('[data-hero-video]').forEach(v => {
      v.addEventListener('ended', ()=>{
        if(gen !== _sliderGen) return;
        const { slides } = getLiveEls();
        if(slides[slideIdx] && slides[slideIdx].contains(v)){ go(slideIdx+1); play(); }
      }, { signal });
    });
  }
  bindVideoEnded();
  go(0);

  const startSoon = () => {
    const kick = (delayMs) => {
      setTimeout(() => {
        if(gen !== _sliderGen) return;
        play();
        // Redundant fallback kick ~1s later. If rebuildFromContent fires a 2nd or 3rd render
        // between now and ~1820ms the generation will mismatch and this no-op, the new gen
        // will have scheduled its own kicks.
        setTimeout(()=>{
          if(gen !== _sliderGen) return;
          if(!slideTimer) play();
        }, Math.max(1000, 1820 - delayMs));
      }, delayMs);
    };
    const rs = document.readyState;
    if(rs === 'complete' || rs === 'interactive'){
      // requestAnimationFrame then a 250ms wait after paint guarantees the stage is in
      // the document, layout has happened and any pending render queues are empty.
      requestAnimationFrame(()=> kick(250));
    } else {
      window.addEventListener('load', ()=> kick(420), { once:true, signal });
    }
  };
  startSoon();

  function installClicksOnce(){
    const { dots } = getLiveEls();
    if(dots){
      dots.addEventListener('click', e => {
        if(gen !== _sliderGen) return;
        const b = e.target.closest('.dot-btn');
        if(b){ go(+b.dataset.i); play(); }
      }, { signal });
    }
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    if(prevBtn) prevBtn.addEventListener('click', () => { if(gen===_sliderGen){ go(slideIdx-1); play(); } }, { signal });
    if(nextBtn) nextBtn.addEventListener('click', () => { if(gen===_sliderGen){ go(slideIdx+1); play(); } }, { signal });
    const hero = document.getElementById('stage') && document.getElementById('stage').closest('.hero');
    if(hero){
      hero.addEventListener('mouseenter', ()=>{ if(gen===_sliderGen && slideTimer){ clearInterval(slideTimer); slideTimer = null; } }, { signal });
      hero.addEventListener('mouseleave', ()=>{ if(gen===_sliderGen) play(); }, { signal });
    }
    document.addEventListener('visibilitychange', ()=>{
      if(gen !== _sliderGen) return;
      if(document.hidden){ if(slideTimer){ clearInterval(slideTimer); slideTimer = null; } stopAll(); }
      else { play(); }
    }, { signal });
  }
  installClicksOnce();
}

/* ---------- map interactions ---------- */
function initMap(){
  const hi = (code,on) => {
    document.querySelectorAll(`.mk[data-code="${code}"]`).forEach(m=>m.classList.toggle('hot',on));
    document.querySelectorAll(`.ch-row[data-code="${code}"]`).forEach(r=>r.classList.toggle('hot',on));
  };
  document.querySelectorAll('.mk[data-code]').forEach(m=>{
    m.addEventListener('mouseenter', ()=>hi(m.dataset.code,true));
    m.addEventListener('mouseleave', ()=>hi(m.dataset.code,false));
    m.addEventListener('focus', ()=>hi(m.dataset.code,true));
    m.addEventListener('blur', ()=>hi(m.dataset.code,false));
  });
  document.querySelectorAll('.ch-row[data-code]').forEach(r=>{
    const code = r.dataset.code; if(!code) return;
    r.addEventListener('mouseenter', ()=>hi(code,true));
    r.addEventListener('mouseleave', ()=>hi(code,false));
  });
}

/* ---------- filters (demonstration) ---------- */
function initFilters(){
  document.querySelectorAll('.filters').forEach(bar=>{
    bar.addEventListener('click', e => {
      const chip = e.target.closest('.chip'); if(!chip || chip.id === 'opClear') return;
      const group = chip.closest('.fgroup');
      group.querySelectorAll('.chip').forEach(c=>c.classList.remove('on'));
      chip.classList.add('on');
      applyFilters(bar);
    });
  });
  ['opQ','evQ'].forEach(id=>{
    const q = document.getElementById(id);
    if(!q) return;
    let t = null;
    q.addEventListener('input', ()=>{
      clearTimeout(t);
      t = setTimeout(()=>applyFilters(q.closest('.filters')), 140);
    });
  });
  [['opClear','opQ','opps'],['evClear','evQ','evtfeed']].forEach(([btnId, boxId, kind])=>{
    const clear = document.getElementById(btnId);
    if(!clear) return;
    clear.addEventListener('click', ()=>{
      const bar = document.querySelector(`.filters[data-filter="${kind}"]`);
      if(!bar) return;
      bar.querySelectorAll('.fgroup').forEach(g=>{
        const chips = [...g.querySelectorAll('.chip')];
        chips.forEach(c=>c.classList.remove('on'));
        if(chips[0]) chips[0].classList.add('on');
      });
      const box = document.getElementById(boxId); if(box) box.value = '';
      applyFilters(bar);
    });
  });
  ['opps','evtfeed'].forEach(k=>{
    const bar = document.querySelector(`.filters[data-filter="${k}"]`);
    if(bar) applyFilters(bar);
  });
  loadFeeds();
  loadContent();
}

function applyFilters(bar){
  const kind = bar.dataset.filter;
  const get = k => { const c = bar.querySelector(`.chip.on[data-k="${k}"]`); return c ? c.dataset.v : 'All'; };

  if(kind === 'events'){
    const when = get('when'), type = get('type');
    const list = EVENTS.filter(e => (when==='all'||e.when===when) && (type==='All'||e.type===type));
    const grid = document.getElementById('evGrid');
    if(grid) grid.innerHTML = list.length ? list.map((e,i)=>eventCard(e,i)).join('')
      : `<div class="card pad" style="grid-column:1/-1"><h4>Nothing here yet</h4><p>No events match these filters.</p></div>`;
    const n = document.getElementById('evCount');
    if(n) n.textContent = `${list.length} event${list.length===1?'':'s'}`;
  }

  if(kind === 'opps'){
    const reg = get('reg'), type = get('type'), st = get('st'), src = get('src'), sort = get('sort');
    const qEl = document.getElementById('opQ');
    const q = (qEl ? qEl.value : '').trim().toLowerCase();
    const words = q ? q.split(/\s+/) : [];
    const hay = o => [o.title, o.org, o.city, o.country, o.type,
                      (OPP_SOURCES[o.source]||{}).name].join(' ').toLowerCase();
    let list = allOpps().filter(o => {
      if(reg === 'Africa' && !o.africa) return false;
      if(reg === 'Rest of world' && o.africa) return false;
      if(type !== 'All' && o.type !== type) return false;
      if(st !== 'All' && o.status !== st) return false;
      if(src !== 'All' && ((OPP_SOURCES[o.source]||{}).name || o.source) !== src) return false;
      if(words.length){ const h = hay(o); if(!words.every(w => h.includes(w))) return false; }
      return true;
    });
    const rank = { 'Closing soon':0, 'Open':1, 'Closed':2 };
    if(sort === 'Deadline'){
      list.sort((a,b)=> (a.deadline||'9999').localeCompare(b.deadline||'9999'));
    } else if(sort === 'A–Z'){
      list.sort((a,b)=> a.title.localeCompare(b.title));
    } else {
      list.sort((a,b)=> (a.africa===b.africa ? 0 : (a.africa ? -1 : 1))
        || (rank[a.status]-rank[b.status])
        || (a.deadline||'9999').localeCompare(b.deadline||'9999'));
    }
    const rows = document.getElementById('opRows');
    if(rows) rows.innerHTML = list.length ? list.map(oppRow).join('')
      : `<div class="af-empty"><h4>Nothing matches those filters</h4><p class="small">Widen the type or status, clear the search box, or submit an opportunity you know about.</p></div>`;
    const n = document.getElementById('opCount');
    if(n){
      const af = list.filter(o=>o.africa).length;
      n.innerHTML = `${list.length} listing${list.length===1?'':'s'}` + (af ? ` <em>· ${af} in Africa</em>` : '');
    }
  }

  if(kind === 'evtfeed'){
    const reg = get('reg'), type = get('type'), when = get('when'), sort = get('sort');
    const qEl = document.getElementById('evQ');
    const q = (qEl ? qEl.value : '').trim().toLowerCase();
    const words = q ? q.split(/\s+/) : [];
    const hay = e => [e.title, e.city, e.country, e.type,
                      (OPP_SOURCES[e.source]||{}).name].join(' ').toLowerCase();
    let list = EVTS.filter(e => {
      if(reg === 'Africa' && !e.africa) return false;
      if(reg === 'Online' && !e.online) return false;
      if(reg === 'Rest of world' && (e.africa || e.online)) return false;
      if(type !== 'All' && e.type !== type) return false;
      if(when !== 'All' && e.status !== when) return false;
      if(words.length){ const h = hay(e); if(!words.every(w => h.includes(w))) return false; }
      return true;
    });
    const rank = { 'Running now':0, 'Upcoming':1, 'Past':2 };
    if(sort === 'Date'){
      list.sort((a,b)=> (a.start||'9999').localeCompare(b.start||'9999'));
    } else if(sort === 'A–Z'){
      list.sort((a,b)=> a.title.localeCompare(b.title));
    } else {
      list.sort((a,b)=> (a.africa===b.africa ? 0 : (a.africa ? -1 : 1))
        || (rank[a.status]-rank[b.status])
        || (a.start||'9999').localeCompare(b.start||'9999'));
    }
    const rows = document.getElementById('evfRows');
    if(rows) rows.innerHTML = list.length ? list.map(evtRow).join('')
      : `<div class="af-empty"><h4>Nothing matches those filters</h4><p class="small">Widen the type or the date range, or clear the search box.</p></div>`;
    const n = document.getElementById('evfCount');
    if(n){
      const af = list.filter(e=>e.africa).length;
      n.innerHTML = `${list.length} event${list.length===1?'':'s'}` + (af ? ` <em>· ${af} in Africa</em>` : '');
    }
  }

  if(kind === 'research'){
    const grid = document.getElementById('researchGrid');
    if(grid) grid.innerHTML = PROJECTS.map(projectCard).join('');
  }

  initReveal();
}

/* ---------- bio modal ----------
   The card grid stays on screen and the full biography opens over it, so
   nobody loses their place scrolling a team of forty. Closes on the button,
   on the backdrop, and on Escape; focus returns to the card that opened it. */
let bioOpener = null;

function bioModal(slug){
  const p = PEOPLE.find(x => x.slug === slug);
  if(!p) return;
  closeBio(true);
  const el = document.createElement('div');
  el.className = 'bio-wrap';
  const where = [p.institution, p.country].filter(Boolean).join(' · ');
  const body = p.fullBio || p.bio || '';
  el.innerHTML = `
    <div class="bio-back" data-close="1"></div>
    <div class="bio" role="dialog" aria-modal="true" aria-label="Profile">
      <button class="bio-x" type="button" data-close="1" aria-label="Close">&times;</button>
      <div class="bio-hd${p.photo ? ' filled' : ''}">
        ${p.photo
          ? `<img class="portrait" src="${esc(mediaUrl(p.photo))}" alt="${esc(p.name||'')}">`
          : `<span class="bio-av">${svgIcon('user', 58)}</span>
             <span class="bio-spec">Portrait <em>1200×1500 · JPG</em></span>`}
        <div class="bio-id">
          <h3>${p.name ? esc(p.name) : pht('Full name')}</h3>
          <p>${p.role ? esc(p.role) : pht('ROLE AT QUANTUM AFRICA')}</p>
        </div>
      </div>
      <div class="bio-links">${personLinks(p, 'lg')}</div>
      <div class="bio-body">
        ${where ? `<p class="bio-aff">${esc(where)}</p>` : ''}
        ${body
          ? body.split(/\n{2,}/).map(par => `<p>${esc(par)}</p>`).join('')
          : `<p>${pht('FULL BIOGRAPHY — as many paragraphs as this person wants to write. Written by them, not about them.')}</p>`}
        <h4>Research interests</h4>
        <p>${(p.interests && p.interests.length) ? esc(p.interests.join(', ')) : pht('Comma-separated interests')}</p>
      </div>
    </div>`;
  document.body.appendChild(el);
  document.body.classList.add('bio-open');
  requestAnimationFrame(()=> el.classList.add('in'));
  el.addEventListener('click', e => { if(e.target.closest('[data-close]')) closeBio(); });
  const x = el.querySelector('.bio-x');
  if(x) x.focus();
}

function closeBio(silent){
  const el = document.querySelector('.bio-wrap');
  if(!el) return;
  el.classList.remove('in');
  document.body.classList.remove('bio-open');
  const drop = () => el.remove();
  silent ? drop() : setTimeout(drop, 200);
  if(!silent && bioOpener){ bioOpener.focus(); bioOpener = null; }
}

document.addEventListener('click', e => {
  const b = e.target.closest('[data-bio]');
  if(!b) return;
  bioOpener = b;
  bioModal(b.dataset.bio);
});
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeBio(); });

/* ---------- live feeds ----------
   Two JSON documents, written by the backend (backend/app/service.py) either to
   static files or served from its API. If neither is reachable — as in the
   single-file prototype opened from disk — the snapshot compiled in at build
   time stays on screen and the note says so. */
function feedNote(elId, meta, items, noun){
  const el = document.getElementById(elId);
  if(!el) return;
  const d = meta.updated ? new Date(meta.updated) : null;
  const when = d && !isNaN(d)
    ? d.toLocaleDateString(undefined,{day:'numeric',month:'long',year:'numeric'})
    : 'unknown';
  const af = items.filter(x=>x.africa).length;
  el.innerHTML = `<span class="dot ${meta.live?'live':''}"></span>` +
    `${items.length} ${noun} · ${af} in Africa · ` +
    (meta.live ? 'refreshed ' : 'snapshot of ') + when +
    (meta.live && FEED.api ? ' · live from the feed API' : '') +
    ` · <a class="link-a in" href="#/contact">report a broken link</a>`;
}
function oppFeedNote(){ feedNote('opFeed', OPP_META, allOpps(), 'listings'); }
function evtFeedNote(){ feedNote('evFeed', EVT_META, EVTS, 'events'); }

/* The content document. Loaded once, then the page is drawn again so every
   section picks it up — simpler and less error-prone than patching the DOM. */
let contentLoading = false;
let _lastLoadAttemptAt = 0;
function loadContent(force){
  const now = Date.now();
  if(contentLoading) return;
  if(!force && CONTENT_META.loaded && now - _lastLoadAttemptAt < 1500) return;
  _lastLoadAttemptAt = now;

  if(!_contentInlineUsed && CONTENT_INLINE && typeof CONTENT_INLINE === 'object'){
    _contentInlineUsed = true;
    const d = CONTENT_INLINE;
    const doc = d && (d.content || d);
    if(doc && typeof doc === 'object'){
      const incomingUpdated = d.updated || null;
      const prevUpdated = CONTENT_META.loaded ? CONTENT_META.updated : null;
      CONTENT = _nestFlatKeys(doc);
      const firstLoad = !CONTENT_META.loaded;
      const changed = (CONTENT_META.loaded && incomingUpdated && prevUpdated !== incomingUpdated);
      CONTENT_META = { loaded:true, updated: incomingUpdated };
      if(firstLoad || changed){ try { rebuildFromContent(); } catch(e){} }
      else { try { hydrateFooterSocials(); } catch(e){} }
    }
    // Do NOT return here. The FEED.content URL (deployed feed server, or the
    // admin panel's live /api/content when running locally with the CMS up)
    // may contain newer content than what was baked in at build time, and we
    // want to overlay it as soon as it arrives. Inline is a fast first-paint
    // snapshot, not the source of truth.
  }

  contentLoading = true;
  fetch(FEED.content, {cache:'no-store'})
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
    .then(d => {
      const doc = d && (d.content || d);
      if(!doc || typeof doc !== 'object') throw new Error('empty');
      const incomingUpdated = d.updated || null;
      const prevUpdated = CONTENT_META.loaded ? CONTENT_META.updated : null;
      CONTENT = _nestFlatKeys(doc);
      const firstLoad = !CONTENT_META.loaded;
      const changed = !prevUpdated || (incomingUpdated && prevUpdated !== incomingUpdated);
      CONTENT_META = { loaded:true, updated: incomingUpdated };
      if(firstLoad || changed){
        rebuildFromContent();
      } else {
        try { hydrateFooterSocials(); } catch(e){}
      }
    })
    .catch(()=>{ if(!CONTENT_META.loaded) CONTENT_META.loaded = true; })
    .finally(()=>{ contentLoading = false; });
}
document.addEventListener('visibilitychange', () => {
  if(!document.hidden){ try { loadContent(true); } catch(e){} }
});

/* Collections that feed data structures rather than single fields have to be
   rebuilt before the page is drawn again. */
function rebuildFromContent(){
  const _mergeInPlace = (existing, incoming, keyFn) => {
    if (!Array.isArray(incoming) || incoming.length === 0) {
      return existing;
    }
    const m = new Map();
    for (const it of incoming) m.set(keyFn(it), it);
    for (const e of existing) {
      const k = keyFn(e);
      if (!m.has(k)) m.set(k, e);
    }
    return Array.from(m.values());
  };

  const _safe = (fn) => { try { return fn(); } catch(e) { if(typeof window !== 'undefined' && window.console && console.warn) console.warn('[rebuild]', e); return void 0; } };

  _safe(() => {
    const people = clist('people');
    if(people.length){
      PEOPLE = people.map((p, i) => Object.assign({ slug: p.id || ('p' + (i+1)),
        group: p.group || 'Leadership' }, p));
    }
  });
  _safe(() => {
    const chapters = clist('chapters');
    const seededChapters = chapters.length
      ? chapters.map(c => Object.assign({
          slug: (c.name||'chapter').toLowerCase().replace(/[^a-z0-9]+/g,'-'),
          code: (c.code||'').toLowerCase() || null, flag: c.flag || '?' }, c))
      : CHAPTERS.slice();
    CHAPTERS = _mergeInPlace(CHAPTERS, seededChapters,
      c => (c.slug || String(c.code || c.name || '').toLowerCase().trim()));
  });
  _safe(() => {
    const events = clist('events');
    if(events.length){
      EVENTS = events.map((e, i) => Object.assign({
        slug: e.id || ('ev' + (i+1)), n: e.title || 'Event',
        when: (e.date && e.date >= new Date().toISOString().slice(0,10)) ? 'upcoming' : 'past'
      }, e));
    }
  });
  _safe(() => {
    const projectSources = [
      clist('projects'),
      clist('pages.research.projects'),
      clist('research.projects'),
      clist('researchProjects'),
      clist('pages.researchers.projects'),
      clist('pages.home.projects'),
    ];
    const projectsList = projectSources.flat().filter(Boolean);
    if(projectsList.length){
      const _seenP = new Set();
      const merged = [];
      for(const p of projectsList){
        const slug = String(p && (p.slug || p.id || (p.title||'project'))).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || '';
        const key = (slug + '|' + String((p&&p.title)||'')).toLowerCase();
        if(!slug || _seenP.has(key)) continue;
        _seenP.add(key);
        merged.push(Object.assign({
          slug,
          tech: (p&&Array.isArray(p.tech)) ? p.tech : [],
          area: (p&&p.area) ? String(p.area) : '',
          short: (p&&p.short) ? String(p.short) : ''
        }, p || {}, { slug }));
      }
      if(merged.length) PROJECTS = merged;
    }
  });
  _safe(() => {
    const hero = cval('hero.statements');
    if(Array.isArray(hero) && hero.length){
      HERO_LINES = hero.map(h => ({ a: h.a || '', b: h.b || '', p: h.lede || '' }));
    }
  });
  _safe(() => {
    const slides = cval('hero.slides');
    if(Array.isArray(slides) && slides.length){
      HERO_SLIDES = slides.map((sl, i) => Object.assign(
        { t: sl.caption || ('Slide ' + (i+1)), s: '',
          image: sl.image || sl.f || '',
          video: sl.video || '',
          f: sl.image || sl.f || sl.video || '',
          art: HERO_ART[i % Math.max(1, HERO_ART.length)] }, sl));
    }
  });
  _safe(() => {
    const confEditions = clist('confEditions');
    if(confEditions.length){
      CONF = confEditions.map(ed => Object.assign({
        n: ed.number || '', slug: ed.slug || '', year: ed.year || '', city: ed.city || '',
        country: ed.country || '', dates: ed.dates || ''
      }, ed));
    }
  });
  _safe(() => {
    const partners = clist('partners');
    if(partners.length){
      PARTNERS = partners.map(p => Object.assign({
        name: p.name || 'Partner', category: p.category || 'Research',
        logo: p.logo || '', url: p.url || '', country: p.country || ''
      }, p));
    }
  });
  _safe(() => {
    const voiceSources = [
      clist('pages.home.communityQuotes'),
      clist('communityQuotes'),
      clist('pages.home.voices'),
      clist('pages.students.voices'),
      clist('pages.students.communityQuotes'),
      clist('testimonials'),
      clist('voices'),
      clist('students'),
      clist('people'),
      clist('pages.home.testimonials'),
      clist('pages.researchers.voices'),
      clist('pages.join.voices'),
      clist('pages.contact.testimonials'),
      clist('pages.about.voices'),
      clist('pages.impact.stories'),
      clist('communityVoices'),
      clist('memberStories'),
      clist('community'),
    ];
    const _seenVoice = new Set();
    const _normalizeVoice = v => {
      if(!v || typeof v !== 'object') return null;
      const quote = String(v.quote || v.body || v.testimonial || v.message || v.story || v.summary || v.description || v.content || v.text || '').trim();
      const name = String(v.name || v.who || v.author || v.fullName || v.title || '').trim();
      const photo = v.photo || v.image || v.picture || v.avatar || v.profilePic || v.pictureUrl || v.headerImage || v.hero || v.cover || v.thumbnail || (Array.isArray(v.gallery) && ((v.gallery.find(x=>x&&x.image)||{}).image) ) || '';
      const role = String(v.role || v.title || v.position || '').trim();
      const institution = String(v.institution || v.org || v.organization || v.company || v.university || v.school || '').trim();
      const country = String(v.country || v.location || v.nationality || v.city || '').trim();
      const key = (name + '|' + quote + '|' + String(photo||'')).toLowerCase();
      if(!name && !quote) return null;
      if(_seenVoice.has(key)) return null;
      _seenVoice.add(key);
      const hasEnoughContent = (quote && quote.length >= 8) || (name && quote.length >= 3) || (name && photo);
      if(!hasEnoughContent) return null;
      return { name, quote, photo, role, institution, country };
    };
    VOICES = voiceSources
      .flat()
      .map(_normalizeVoice)
      .filter(Boolean)
      .slice(0, 18);
  });

  const _pick = (obj, keys, fallback) => {
    if(!obj || typeof obj !== 'object') return fallback === undefined ? '' : fallback;
    for(const k of keys){
      if(k in obj && obj[k] !== null && obj[k] !== undefined && String(obj[k]).trim() !== '') return obj[k];
    }
    return fallback === undefined ? '' : fallback;
  };
  const _pickGallery = (a) => {
    if(!Array.isArray(a) || !a.length) return [];
    return a.filter(g => g && typeof g === 'object' &&
      (String(g.video || g.videoUrl || g.image || g.f || g.cover || g.hero || g.photo || g.picture || g.thumbnail || g.src || '').trim() !== ''));
  };
  _safe(() => {
    const hlHomes = [CONTENT && (CONTENT.pages && CONTENT.pages.home) ? CONTENT.pages.home : null,
                     CONTENT && CONTENT['pages.home'] ? CONTENT['pages.home'] : null,
                     CONTENT && CONTENT.home ? CONTENT.home : null,
                     CONTENT && CONTENT['page.home'] ? CONTENT['page.home'] : null];
    const hlCandidates = hlHomes.concat([CONTENT && CONTENT.highlight ? CONTENT.highlight : null,
                                          clist('pages.highlight').length ? clist('pages.highlight')[0] : null])
      .filter(Boolean);
    let _hl = null;
    for(const src of hlCandidates){
      const eyebrow = _pick(src, ['highlightEyebrow','eyebrow','heroEyebrow','tag','kicker']);
      const title =   _pick(src, ['highlightTitle','title','headline','name']);
      const summary = _pick(src, ['highlightSummary','summary','lede','description','body','subhead','text','content','description']);
      const date =    _pick(src, ['highlightDate','date','when','eventDate','start','end']);
      const place =   _pick(src, ['highlightPlace','place','venue','location','host','city','country']);
      const linkText= _pick(src, ['highlightLinkText','linkText','ctaText','buttonText','readMore','cta','action']);
      const linkUrl = _pick(src, ['highlightLinkUrl','linkUrl','ctaHref','href','url','link','externalUrl']);
      const g1 = Array.isArray(src.highlightGallery) ? src.highlightGallery : null;
      const g2 = Array.isArray(src.gallery) ? src.gallery : null;
      const g3 = Array.isArray(src.photos) ? src.photos : null;
      const g4 = Array.isArray(src.images) ? src.images : null;
      const gallery = _pickGallery(g1 || g2 || g3 || g4 || []);
      if(title || summary || gallery.length){
        _hl = { eyebrow, title, summary, date, place, linkText, linkUrl, gallery };
        break;
      }
    }
    if(_hl) HIGHLIGHT = _hl;
  });

  _safe(() => {
    const artSources = [
      Array.isArray(CONTENT && CONTENT.articles) ? CONTENT.articles : [],
      Array.isArray(CONTENT && CONTENT.news) ? CONTENT.news : [],
      Array.isArray(CONTENT && CONTENT.stories) ? CONTENT.stories : [],
      Array.isArray(CONTENT && CONTENT.posts) ? CONTENT.posts : [],
      Array.isArray(CONTENT && CONTENT.blog) ? CONTENT.blog : [],
      clist('pages.home.articles'),
      clist('pages.home.news'),
      clist('pages.home.stories'),
      clist('pages.news.items'),
      clist('pages.news.articles'),
      clist('pages.news.list'),
      clist('pages.news.archive'),
      clist('articles.list'),
      clist('news.items'),
      clist('pages.news.featured'),
      clist('news.archive'),
      clist('news.list'),
      clist('stories.archive'),
      clist('articles.featured'),
      clist('pages.home.featuredNews'),
      clist('pages.home.latestNews'),
      clist('pages.research.news'),
      clist('pages.conference.news'),
      clist('pages.education.news'),
      clist('pages.impact.news'),
      clist('featuredArticles'),
      clist('latestNews'),
      clist('communityNews'),
      clist('chapterNews'),
      clist('newsArchive'),
      clist('articlesArchive'),
      clist('pages.chapters.news'),
      clist('pages.people.stories'),
    ];
    const _artSeen = new Set();
    const _normalizeArticle = (a, idx) => {
      if(!a || typeof a !== 'object') return null;
      const title = String(_pick(a, ['title','headline','name','subject'])).trim();
      if(!title) return null;
      const date = String(_pick(a, ['date','published','publishedAt','eventDate','when','createdAt','start','updated','updatedAt'])).trim();
      const slug = String(_pick(a, ['slug','id','urlId','uid']) || '').trim() ||
        (title ? title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') : ('art-' + (idx+1)));
      const type = String(_pick(a, ['type','category','kind','section','tag']) || 'News').trim();
      const author = String(_pick(a, ['author','byline','writer','who','name'])).trim();
      const read = String(_pick(a, ['read','readTime','readingTime','minutes','duration']) || '').trim();
      const summary = String(_pick(a, ['summary','lede','standfirst','excerpt','description','subtitle','subhead','deck'])).trim();
      const body = String(_pick(a, ['body','content','article','text','main','post','story'])).trim();
      const coverSrc =
        a.cover || a.image || a.hero || a.photo || a.picture || a.headerImage || a.heroImage || a.thumbnail || a.poster || a.avatar || a.profilePic || a.pictureUrl || a.f || a.poster ||
        (Array.isArray(a.gallery) ? ((a.gallery.find(g=>g && (g.image || g.f || g.cover || g.hero || g.photo || g.picture || g.thumbnail)) || {}).image || (a.gallery.find(g=>g && (g.image || g.f || g.cover || g.hero || g.photo || g.picture || g.thumbnail)) || {}).f || (a.gallery.find(g=>g && (g.image || g.f || g.cover || g.hero || g.photo || g.picture || g.thumbnail)) || {}).cover) : '') ||
        (Array.isArray(a.photos) ? ((a.photos.find(g=>g && (g.image || g.f || g.cover || g.hero || g.photo || g.picture || g.thumbnail)) || {}).image || (a.photos.find(g=>g && (g.image || g.f || g.cover || g.hero || g.photo || g.picture || g.thumbnail)) || {}).f) : '') ||
        (Array.isArray(a.images) ? ((a.images.find(g=>typeof g==='string') || '')) : '') || '';
      const chapter = String(_pick(a, ['chapter','country','chapterName'])).trim();
      const url = String(_pick(a, ['url','link','href','linkUrl','externalUrl']) || '').trim();
      const dedup = (slug + '|' + title).toLowerCase();
      if(_artSeen.has(dedup)) return null;
      _artSeen.add(dedup);
      return Object.assign({}, a, { title, date, slug, type, author, read, summary, body, image: coverSrc, cover: coverSrc, chapter, url });
    };
    ARTICLES_AGG = artSources
      .flat()
      .map((a, i) => _normalizeArticle(a, i))
      .filter(Boolean)
      .sort((x, y) => String(y.date || '').localeCompare(String(x.date || '')))
      .slice(0, 80);
    const defaults = (typeof DEFAULT_ARTICLES !== 'undefined' && Array.isArray(DEFAULT_ARTICLES)) ? DEFAULT_ARTICLES.slice() : ARTICLES;
    ARTICLES = (ARTICLES_AGG && ARTICLES_AGG.length) ? ARTICLES_AGG.slice() : defaults;
  });
  /* Opportunities entered by hand are pinned above the collected feed.
     They are kept in their own list, because the jobs feed and the content
     document load independently and either can finish last. */
  _safe(() => {
    OWN_OPPS = clist('opportunities').map(o => ({
      id: 'own-' + (o.title||'').slice(0,24), title: o.title || '', org: o.org || '',
      city: o.city || '', country: o.country || '',
      africa: AFRICA_NAMES.has(String(o.country||'').toLowerCase()),
      type: o.type || 'Industry', deadline: o.deadline || null,
      status: !o.deadline ? 'Open'
        : (o.deadline < new Date().toISOString().slice(0,10) ? 'Closed' : 'Open'),
      source: 'own', url: o.url || '#/contact', own: true,
    }));
  });
  render();
  try { hydrateFooterSocials(); } catch(e){}
  try { initReveal(); } catch(e){}
  try { if(window.innerWidth>0){ document.querySelectorAll('[data-count]').forEach(el=>{ runCounters(el); }); } } catch(e){}
  try { initTyping(); } catch(e){}
}

function hydrateFooterSocials(){
  const root = document.getElementById('footSocials');
  if(!root) return;
  const defEmail = cval('site.footerEmail') || cval('site.email');
  const items = [
    {k:'linkedin',  label:'LinkedIn',  icon:'linkedin'},
    {k:'twitter',   label:'X',         icon:'twitter'},
    {k:'youtube',   label:'YouTube',   icon:'youtube'},
    {k:'instagram', label:'Instagram', icon:'instagram'},
    {k:'__email',   label:'Email',     icon:'email',   raw: defEmail},
  ];
  root.innerHTML = items.map(it => {
    const raw = ('raw' in it) ? (it.raw ?? '') : cval('site.' + it.k);
    const href = _href(raw) || '#/contact';
    const rel = href.startsWith('#') ? '' : _linkRel(raw);
    return `<a href="${esc(href)}" title="${esc(it.label)}" aria-label="${esc(it.label)}" data-k="${esc(it.k)}"${rel}>${svgIcon(it.icon, 18)}</a>`;
  }).join('');
}

let OWN_OPPS = [];
function allOpps(){ return OWN_OPPS.concat(OPPS); }
const AFRICA_NAMES = new Set(['algeria','egypt','morocco','nigeria','mauritania','zambia',
  'uganda','south africa','tunisia','kenya','rwanda','ghana','senegal','ethiopia','cameroon']);
const COUNTRIES = [
  'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia',
  'Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium',
  'Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria',
  'Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic',
  'Chad','Chile','China','Colombia','Comoros','Congo','Costa Rica','Côte d’Ivoire','Croatia','Cuba',
  'Cyprus','Czechia','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador',
  'Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','Gambia',
  'Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti',
  'Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica',
  'Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho',
  'Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives',
  'Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco',
  'Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands',
  'New Zealand','Nicaragua','Niger','Nigeria','North Macedonia','Norway','Oman','Pakistan','Palau',
  'Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania',
  'Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa',
  'San Marino','São Tomé and Príncipe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone',
  'Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan',
  'Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania',
  'Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu',
  'Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan',
  'Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'
];
const HERO_ART = ['field','lattice','wave','network','fringes'];

let feedsLoading = false;
function loadFeeds(){
  oppFeedNote(); evtFeedNote();
  const onPage = document.getElementById('opRows') || document.getElementById('opHome')
               || document.getElementById('evfRows');
  if(feedsLoading || !onPage) return;
  if(OPP_META.tried && EVT_META.tried) return;
  feedsLoading = true;

  const pull = (url) => fetch(url, {cache:'no-store'})
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
    .then(d => (d && Array.isArray(d.items) && d.items.length) ? d : Promise.reject('empty'));

  const jobs = OPP_META.tried ? Promise.reject('done') : pull(FEED.jobs)
    .then(d => {
      OPPS = d.items;
      OPP_META = { updated: d.updated, live: true, tried: true };
      const bar = document.querySelector('.filters[data-filter="opps"]');
      if(bar) applyFilters(bar);
      const home = document.getElementById('opHome');
      if(home) home.innerHTML = `<div class="home-opps-wrap">${oppPick(5).map((o,i)=>oppRowHome(o,i)).join('')}</div>`;
    })
    .catch(()=>{ OPP_META.tried = true; })
    .finally(oppFeedNote);

  const events = EVT_META.tried ? Promise.reject('done') : pull(FEED.events)
    .then(d => {
      EVTS = d.items;
      EVT_META = { updated: d.updated, live: true, tried: true };
      const bar = document.querySelector('.filters[data-filter="evtfeed"]');
      if(bar) applyFilters(bar);
    })
    .catch(()=>{ EVT_META.tried = true; })
    .finally(evtFeedNote);

  Promise.allSettled([jobs, events]).then(()=>{ feedsLoading = false; });
}

/* ---------- reveal on scroll ---------- */
let io;
const REVEAL_SEL = '.rv, .sec-idx, .pillar, .quote';
function initReveal(){
  const reduced = document.body.classList.contains('no-motion') ||
                  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){ document.querySelectorAll(REVEAL_SEL).forEach(el=>el.classList.add('in')); runCounters(document); return; }
  if(io) io.disconnect();
  io = new IntersectionObserver(entries=>{
    entries.forEach((en,i)=>{
      if(!en.isIntersecting) return;
      en.target.style.transitionDelay = Math.min(i*55,260)+'ms';
      en.target.classList.add('in');
      runCounters(en.target);
      io.unobserve(en.target);
    });
  }, {rootMargin:'0px 0px -8% 0px', threshold:.06});
  document.querySelectorAll(REVEAL_SEL).forEach(el=>io.observe(el));
  // stat band sits above the fold on some screens — observe it directly
  document.querySelectorAll('[data-count]').forEach(el=>io.observe(el.closest('.stat, .bigcell') || el));
}

/* ---------- counting numbers ---------- */
function runCounters(scope){
  const els = (scope.querySelectorAll ? scope.querySelectorAll('[data-count]') : []);
  const list = scope.hasAttribute && scope.hasAttribute('data-count') ? [scope] : [...els];
  list.forEach(el=>{
    const to = parseFloat(el.dataset.count), suf = el.dataset.suffix || '';
    const key = '_doneTo';
    if(el[key] !== undefined && el[key] == to){ return; }
    el[key] = to;
    if(document.body.classList.contains('no-motion') || window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      el.textContent = to + suf; return;
    }
    const dur = 1300, t0 = performance.now();
    const tick = t => {
      const k = Math.min((t-t0)/dur,1);
      const e = 1-Math.pow(1-k,3);
      el.textContent = Math.round(to*e) + suf;
      if(k<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/* ---------- typed hero headline — cycles HERO_LINES ---------- */
let typeTimer = null;
function initTyping(){
  const a = document.getElementById('typeA'), b = document.getElementById('typeB'),
        c = document.getElementById('caret'), p = document.getElementById('heroLede');
  if(!a || !b) return;
  clearTimeout(typeTimer);
  const seq = [...document.querySelectorAll('.fade-seq')];
  const reduced = document.body.classList.contains('no-motion') || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){
    a.textContent = HERO_LINES[0].a; b.textContent = HERO_LINES[0].b;
    if(p) p.textContent = HERO_LINES[0].p;
    if(c) c.style.display = 'none';
    seq.forEach(el=>el.classList.add('in'));
    return;
  }
  a.textContent = ''; b.textContent = '';
  let idx = 0, first = true;

  const swapLede = (i) => {
    if(!p) return;
    p.classList.add('sw');
    setTimeout(()=>{ p.textContent = HERO_LINES[i].p; p.classList.remove('sw'); }, 300);
  };

  const write = (L, i) => {
    if(i <= L.a.length){ a.textContent = L.a.slice(0,i); b.textContent = ''; }
    else { a.textContent = L.a; b.textContent = L.b.slice(0, i - L.a.length); }
  };

  const typeOne = () => {
    const L = HERO_LINES[idx], all = L.a + L.b;
    if(!first) swapLede(idx);
    let i = 0;
    const step = () => {
      i++; write(L, i);
      if(i < all.length){
        const ch = all[i-1];
        typeTimer = setTimeout(step, ch === ' ' ? 34 : (ch === '.' ? 200 : 42));
      } else {
        if(first){ first = false; seq.forEach((el,k)=> setTimeout(()=>el.classList.add('in'), k*130)); }
        typeTimer = setTimeout(erase, 4200);
      }
    };
    step();
  };

  const erase = () => {
    const L = HERO_LINES[idx];
    let i = (L.a + L.b).length;
    const step = () => {
      i--; write(L, i);
      if(i > 0) typeTimer = setTimeout(step, 16);
      else { idx = (idx + 1) % HERO_LINES.length; typeTimer = setTimeout(typeOne, 340); }
    };
    step();
  };

  setTimeout(()=>{ seq.filter(e=>e.dataset.seq==='0').forEach(e=>e.classList.add('in')); typeOne(); }, 260);
}

/* ---------- controls ---------- */
function initControls(){
  const th = document.getElementById('themeToggle');
  const lbl = th && th.querySelector('.lbl');

  // Theme: saved preference → explicit light-by-default.
  // Only fall back to system preference if the user explicitly opted in
  // earlier AND the system value matches their stored intent; we don't
  // auto-dark for unknown visitors.
  function resolveTheme(withExplicit){
    try {
      const stored = localStorage.getItem('qa.theme');
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (_) {}
    if (withExplicit) {
      const cur = document.documentElement.getAttribute('data-theme');
      if (cur === 'light' || cur === 'dark') return cur;
    }
    return 'light';
  }
  function applyTheme(theme){
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    try { localStorage.setItem('qa.theme', theme === 'dark' ? 'dark' : 'light'); } catch (_) {}
  }
  function paintTheme(){
    const isDark = resolveTheme(true) === 'dark';
    if(lbl){ lbl.textContent = isDark ? 'Light' : 'Dark'; }
    if(th){ th.classList.toggle('on', true); }
  }

  // Apply the resolved theme immediately so initControls running before the
  // anti-FOUC bootstrap on inline <script> still ends up with a consistent
  // data-theme attribute.
  applyTheme(resolveTheme(false));
  paintTheme();

  th && th.addEventListener('click', ()=>{
    const cur = resolveTheme(true);
    const next = cur === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    paintTheme();
  });
  document.getElementById('burger').addEventListener('click', ()=>{
    document.getElementById('drawer').classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);
  document.getElementById('drawer').addEventListener('click', e=>{ if(e.target.closest('a')) closeDrawer(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeDrawer(); });
}

/* ---------- boot ---------- */
buildNav();
initControls();
hydrateFooterSocials();

/* ---------- Netlify forms submit handler + mailto fallback ---------- */
function encodeFD(fd){
  return [...fd.entries()]
    .filter(([k]) => k !== 'bot-field')
    .map(([k,v]) => encodeURIComponent(k)+'='+encodeURIComponent(v))
    .join('&');
}
document.addEventListener('submit', async (e) => {
  const f = e.target.closest('form[data-netlify]');
  if (!f) return;
  e.preventDefault();
  const formName = f.getAttribute('name') || 'contact';
  const msg = f.querySelector('.form-msg');
  const btn = f.querySelector('button[type="submit"]');
  if (btn) { btn.disabled = true; btn.style.opacity = '.6'; }
  try {
    const fd = new FormData(f);
    fd.set('form-name', formName);
    const body = encodeFD(fd);
    let res = null;
    try {
      res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      });
    } catch (_) {
      // static server / offline: "/" POST will fail — fall through to backend.
      res = null;
    }
    const workedNetlify = !!(res && res.ok);
    if (!workedNetlify) {
      try {
        const flat = {};
        fd.forEach((v, k) => { if (k !== 'bot-field') flat[k] = String(v ?? ''); });
        const fallbackTo = (typeof ADMIN_API_BASE === 'string' && ADMIN_API_BASE)
          ? (ADMIN_API_BASE.replace(/\/$/, '') + '/api/forms/submit')
          : '/api/forms/submit';
        const fallbackRes = await fetch(fallbackTo, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ form: formName, fields: flat, source: 'spa' })
        });
        if (!fallbackRes.ok) throw new Error('Fallback HTTP ' + fallbackRes.status);
      } catch (fallbackErr) {
        throw new Error('Network send failed');
      }
    }
    if (msg) {
      msg.hidden = false;
      msg.className = 'form-msg mt16 small tl';
      msg.style.cssText = 'padding:10px 14px;border-radius:4px;background:color-mix(in srgb,var(--teal) 15%,transparent);color:var(--teal);font-weight:500';
      msg.textContent = 'Thank you — your message has been received. We will be in touch shortly.';
    }
    f.reset();
  } catch (err) {
    if (msg) {
      msg.hidden = false;
      msg.className = 'form-msg mt16 small';
      msg.style.cssText = 'padding:12px 14px;border-radius:10px;background:color-mix(in srgb,var(--gold) 18%,transparent);color:var(--ink);line-height:1.7;border:1px solid color-mix(in srgb,var(--gold) 30%,transparent)';
      try {
        const flat2 = {};
        (new FormData(f)).forEach((v, k) => { if (k !== 'bot-field') flat2[k] = String(v ?? ''); });
        const inbox = 'contact@quantum-africa.org';
        const googleForm = 'https://forms.gle/b1qSiiniz5wYRZJo9';
        const subj = `[${formName}] form submission${flat2.name || flat2.full_name ? ' from ' + (flat2.name||flat2.full_name) : ''}`;
        const lines = Object.entries(flat2).map(([k,v])=>k+':\n'+String(v||'')+'\n').join('\n');
        const mailto = 'mailto:'+inbox+'?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(lines);
        msg.innerHTML = 'Could not send automatically. Please <a class="link-a" href="'+esc(mailto)+'" target="_blank" rel="noopener noreferrer">email us directly at '+inbox+'</a>, or fill in <a class="link-a" href="'+esc(googleForm)+'" target="_blank" rel="noopener noreferrer">this google form</a>.';
      } catch (_2) {
        msg.textContent = "Could not send automatically. Please email us directly at contact@quantum-africa.org, or fill in this google form: https://forms.gle/b1qSiiniz5wYRZJo9";
      }
    }
  } finally {
    if (btn) { btn.disabled = false; btn.style.opacity = ''; }
  }
});

/* ---------- thanks banner (shown after Netlify synchronous-redirect POST) ---------- */
(function showThanks(){
  try {
    const sp = new URLSearchParams(location.search);
    if (sp.get('thanks') === '1') {
      const b = document.getElementById('thanksBanner');
      if (b) b.style.display = 'block';
    }
  } catch (_) {}
})();

function transition(){
  const v = document.getElementById('view');
  const reduced = document.body.classList.contains('no-motion') || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){ render(); try{ loadContent(true); }catch(e){} return; }
  v.classList.add('leaving');
  setTimeout(()=>{ render(); v.classList.remove('leaving'); try{ loadContent(true); }catch(e){} }, 220);
}
window.addEventListener('hashchange', transition);
document.addEventListener('DOMContentLoaded', () => { try { loadContent(true); } catch(e){} }, { once: true });
document.addEventListener('DOMContentLoaded', () => { try { hydrateFooterSocials(); } catch(e){} });
const fr = document.getElementById('footRing');
if(fr) fr.innerHTML = ringMark().replace('class="ring "','class="ring"');
render();
