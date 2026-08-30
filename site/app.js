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
    {t:'Partners', h:'#/partners', d:'Universities, industry and strategic partners'},
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
    {t:'Upcoming Events', h:'#/events', d:'What is happening next'},
    {t:'Quantum Africa Webinars', h:'#/events', d:'The recurring webinar series'},
    {t:'Workshops', h:'#/events/workshops', d:'QML4Africa and other hands-on training'},
    {t:'Past Events & Recordings', h:'#/events', d:'The full archive'},
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
  {slug:'zambia',     code:'zm', name:'Zambia',     flag:'\u{1F1FF}\u{1F1F2}'},
  {slug:'uganda',     code:'ug', name:'Uganda',     flag:'\u{1F1FA}\u{1F1EC}'},
];

/* ---------- Quantum Africa Conference Series ----------
   Edition history verified against the QA7 host site and IQST.
   The series is run by its own steering committee — confirm
   Quantum Africa's relationship to it before publishing. */
const CONF = [
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
  {slug:'qml4africa-2', type:'Workshop', when:'past', series:'QML4Africa', edition:'02',
   title:'Quantum Machine Learning 4 Africa — Second Edition',
   n:'Quantum Machine Learning 4 Africa — Second Edition'},
  {slug:'qml4africa-1', type:'Workshop', when:'past', series:'QML4Africa', edition:'01',
   title:'Quantum Machine Learning 4 Africa — First Edition',
   n:'Quantum Machine Learning 4 Africa — First Edition'},
  {slug:'webinar-01', type:'Webinar',  when:'upcoming', n:'Quantum Africa Webinar — session title'},
  {slug:'workshop-01',type:'Workshop', when:'upcoming', n:'Quantum Africa Workshop — title'},
  {slug:'webinar-02', type:'Webinar',  when:'upcoming', n:'Quantum Africa Webinar — session title'},
  {slug:'webinar-03', type:'Webinar',  when:'past',     n:'Past webinar — title'},
  {slug:'workshop-02',type:'Workshop', when:'past',     n:'Past workshop — title'},
  {slug:'chapter-01', type:'Chapter event', when:'past',n:'Chapter event — title'},
];

let PROJECTS = [
  {slug:'causality-engine', title:'Quantum Circuit Causality Engine', area:'Quantum computing · Tooling', status:'current',
   short:'An open-source tool that analyses quantum circuits to determine which gates and qubits influence measurement outcomes, by building causal dependency graphs and light cones.',
   tech:['Python','Qiskit','Graph analysis'], repo:true, art:'lightcone'},
  {slug:'bb84-qkd', title:'Quantum Key Distribution (BB84)', area:'Quantum communication · Security', status:'current',
   short:'Realistic security analysis and channel modelling of the BB84 protocol under practical noise and eavesdropping conditions.',
   tech:['Python','NumPy','Channel modelling'], repo:false, art:'qkd'},
  {slug:'quantum-ml-disease', title:'Quantum-Inspired ML for Disease Prediction', area:'Quantum machine learning · Health', status:'current',
   short:'A feature-mapping and interpretability study applying quantum-inspired methods to disease prediction tasks.',
   tech:['Python','scikit-learn','Feature maps'], repo:false, art:'kernel'},
  {slug:'african-pigments-photonics', title:'Modeling African Natural Pigments for Photonics & DSSC', area:'Photonics · Materials', status:'current',
   short:'Comparative spectral and performance analysis of African natural pigments for photonic applications and dye-sensitised solar cells.',
   tech:['DFT','Spectroscopy','Simulation'], repo:false, art:'spectra'},
];

/* Opportunities feed.
   __OPPORTUNITIES_JSON__ is replaced at build time with feed/opportunities.json.
   At runtime the page tries to load a fresher data/opportunities.json written by
   feed/fetch_opportunities.py; if that is unavailable it keeps this snapshot. */
const OPP_FEED = __OPPORTUNITIES_JSON__;
const EVT_FEED = __EVENTS_JSON__;

/* Where the live data comes from.
   By default the page reads two JSON files written by the backend's exporter.
   Point it at the running API instead with either of:
     <meta name="qa-feed" content="https://feed.quantum-africa.org/api">
     window.QA_FEED = 'https://feed.quantum-africa.org/api';
   The API sends CORS headers, so it works from any origin. */
/* ---------- live content ----------
   CONTENT is whatever has been entered in the admin panel. It arrives at
   runtime from data/content.json, or from the API when one is configured.

   cx(path, fallback)  a value, or the placeholder that asks for it
   cval(path)          the raw value, or '' — for attributes and tests
   clist(key)          a collection, or [] */
let CONTENT = {};
let CONTENT_META = { loaded:false, updated:null };

function cval(path){
  let node = CONTENT;
  for(const key of String(path).split('.')){
    if(node == null) return '';
    node = Array.isArray(node) ? node[Number(key)] : node[key];
  }
  return node == null ? '' : node;
}
function cx(path, fallback){
  const v = cval(path);
  if(v === '' || (Array.isArray(v) && !v.length)) return fallback === undefined ? '' : fallback;
  return esc(Array.isArray(v) ? v.join(', ') : v);
}
function cnum(path, fallback){
  const v = cval(path);
  return (v === '' || v == null) ? fallback : v;
}
function clist(key){
  const v = CONTENT[key];
  return Array.isArray(v) ? v : [];
}
/* An uploaded image, rendered into the same slot the placeholder uses, so the
   layout does not move when a picture finally arrives. */
function cimg(path, alt, spec, cls){
  const v = cval(path);
  if(!v) return media(arguments[4] || 'network', alt, spec, cls);
  const src = /^https?:/.test(v) ? v : (FEED.base ? FEED.base.replace(/\/api$/, '/') + v : v);
  return `<div class="slot ${cls||''} filled"><img src="${esc(src)}" alt="${esc(alt||'')}" loading="lazy"></div>`;
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
  ['Leadership',   'The people who run Quantum Africa day to day.'],
  ['Advisors',     'Researchers and practitioners who steer the work without running it.'],
  ['Chapter leads','One per country, each building their own community.'],
];
const PERSON_LINKS = [
  {k:'linkedin', t:'LinkedIn'},
  {k:'scholar',  t:'Google Scholar'},
  {k:'orcid',    t:'ORCID'},
  {k:'web',      t:'Website'},
];

const PARTNER_CATS = ['Academic','Research','Industry','Education','Strategic'];

let ARTICLES = [
  {slug:'a1', type:'News',           art:'network',  read:'4 min'},
  {slug:'a2', type:'Chapter update', art:'lattice',  read:'3 min'},
  {slug:'a3', type:'Member story',   art:'bloch',    read:'6 min'},
  {slug:'a4', type:'Report',         art:'spectra',  read:'12 min'},
  {slug:'a5', type:'News',           art:'circuit',  read:'3 min'},
  {slug:'a6', type:'Member story',   art:'wave',     read:'5 min'},
  {slug:'a7', type:'Chapter update', art:'fringes',  read:'4 min'},
];

let HERO_LINES = [
  {a:'We are building Africa\u2019s ', b:'quantum ecosystem.',
   p:'Quantum technology will redraw the map of who leads this century. Africa will be on that map \u2014 through the students we teach, the research we open to anyone on the continent, and the institutions we connect to the people defining the field.'},
  {a:'We are training Africa\u2019s ', b:'quantum generation.',
   p:'Webinars, workshops and a free AI tutor, run for students and researchers anywhere on the continent \u2014 no lab, no travel budget and no gatekeeper needed to start.'},
  {a:'We are opening research ', b:'to the whole continent.',
   p:'Our projects are open by default: read the work, run the code, join a team. What it takes to contribute is curiosity, not an invitation.'},
];
let HERO_SLIDES = [
  {t:'Community group photo', s:'The whole community together — the most important image on the site.', f:'assets/hero/slide-1.jpg', art:'field'},
  {t:'Workshop in progress',  s:'Participants working at laptops during a Quantum Africa workshop.', f:'assets/hero/slide-2.jpg', art:'lattice'},
  {t:'Speaker at a webinar',  s:'A speaker presenting, or a full webinar gallery view.', f:'assets/hero/slide-3.jpg', art:'wave'},
  {t:'Chapter activity',      s:'A national chapter meeting or campus event, with the local team visible.', f:'assets/hero/slide-4.jpg', art:'network'},
  {t:'Students and researchers', s:'Close-up of people collaborating — faces, not equipment.', f:'assets/hero/slide-5.jpg', art:'fringes'},
];
const EVENT_ART = ['circuit','bloch','wave','lattice','network','fringes'];

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

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
  web:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.4 2.4 3.6 5.4 3.6 9s-1.2 6.6-3.6 9c-2.4-2.4-3.6-5.4-3.6-9s1.2-6.6 3.6-9z"/>'
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
const avatar = () => `<div class="ph-avatar">${svgIcon('user',40)}</div>`;
const statusPill = () => `<span class="pill">${'STATUS ?'}</span>`;
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
  return `<a class="card rv" href="#/events/${e.slug}">
    <div class="card-media">${media(k,'Event photo or speaker portrait','1600×900 · JPG')}</div>
    <div class="card-b">
      <div class="card-meta"><span class="tag">${esc(e.type)}</span>${e.series?`<span class="pill current">${esc(e.series)} · ${esc(e.edition)}</span>`:`<span class="pill ${e.when==='upcoming'?'current':'future'}">${e.when}</span>`}</div>
      <h4>${e.title ? esc(e.title) : pht(e.n)}</h4>
      <div class="kv"><b>Date</b> ${pht('DD MMM YYYY · HH:MM GMT')}</div>
      <div class="kv"><b>Speaker</b> ${pht('Name · Institution')}</div>
      <div class="card-foot"><span class="link-a">${e.when==='upcoming'?'Register':'Watch recording'} <span aria-hidden="true">→</span></span></div>
    </div></a>`;
}
function projectCard(p){
  return `<a class="card rv" href="#/research/${p.slug}">
    <div class="card-media">${media(p.art||'circuit','Optional: photo of the team or lab. The generated figure works as the default.','1600×900 · PNG/SVG')}</div>
    <div class="card-b">
      <div class="card-meta"><span class="pill current">Active</span></div>
      <h4>${esc(p.title)}</h4>
      <div class="kv"><b>Area</b> ${esc(p.area)}</div>
      <div class="card-foot"><span class="link-a">View project <span aria-hidden="true">→</span></span></div>
    </div></a>`;
}
function chapterCard(c){
  return `<a class="card rv" href="#/chapters/${c.slug}">
    <div class="card-media">${media('network','Chapter team photo','1600×900 · JPG')}</div>
    <div class="card-b">
      <div class="card-meta"><span class="tag" style="font-size:1rem;letter-spacing:0" aria-hidden="true">${c.flag||'?'}</span>${statusPill()}</div>
      <h4>Quantum ${esc(c.name)}</h4>
      <p>${pht('Chapter description — 2 sentences')}</p>
      <div class="kv"><b>Lead</b> ${pht('Chapter lead name')}</div>
      <div class="card-foot"><span class="link-a">Visit chapter <span aria-hidden="true">→</span></span></div>
    </div></a>`;
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
  return bits.length ? bits.join(' · ') : 'Location not stated';
}
function oppRow(o){
  const st = o.status === 'Closing soon' ? 'soon' : (o.status === 'Closed' ? 'shut' : 'open');
  return `<a class="opp-i${o.africa?' af':''}" href="${esc(o.url)}" target="_blank" rel="noopener noreferrer">
    <span class="opp-dl ${st}">${esc(oppDate(o.deadline))}</span>
    <span class="opp-m">
      <h4>${esc(o.title)}</h4>
      <span class="sub">${esc(oppWhere(o))}</span>
    </span>
    <span class="opp-t">
      ${o.africa?'<span class="af-b">Africa</span>':''}
      <span class="tag">${esc(o.type)}</span>
      <span class="pill ${o.status==='Closed'?'past':'current'}">${esc(o.status)}</span>
      <span class="src">${o.source === 'own' ? 'Quantum Africa' : esc((OPP_SOURCES[o.source]||{}).name || o.source)}</span>
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
  return p || (e.online ? 'Online' : 'Location not stated');
}
function evtRow(e){
  const st = e.status === 'Running now' ? 'soon' : (e.status === 'Past' ? 'shut' : 'open');
  return `<a class="opp-i${e.africa?' af':''}" href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">
    <span class="opp-dl ${st}">${esc(evtDates(e))}</span>
    <span class="opp-m">
      <h4>${esc(e.title)}</h4>
      <span class="sub">${esc(evtWhere(e))}</span>
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
  return a.image
    ? `<div class="slot filled"><img src="${esc(mediaUrl(a.image))}" alt="${esc(a.title||'')}" loading="lazy"></div>`
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
  return `<div class="pillar rv">
    <span class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PILLAR_SVG[icon]}</svg></span>
    <span class="n">${n}</span>
    <h3>${title}</h3>
    <p>${body}</p>
    <a class="link-a" href="${href}" style="margin-top:6px">${cta} <span class="ar" aria-hidden="true">&rarr;</span></a>
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
    return `<a class="mk" href="#/chapters/${c.slug}" data-code="${c.code}" style="left:${x.toFixed(2)}%;top:${y.toFixed(2)}%"
              aria-label="Quantum ${esc(c.name)} chapter">
        <span class="fg" aria-hidden="true">${c.flag}</span><span class="nm">${esc(c.name)}</span></a>`;
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
    <p class="map-note">The continent is drawn as a single landmass. Chapters are marked by flag, and no national borders are shown.</p>
  </div>`;
}
function chapterList(){
  return `<div>
    <div class="sec-idx" style="margin-bottom:8px"><span class="lbl">Chapters</span><i></i></div>
    <div class="ch-list">
      ${CHAPTERS.map(c=>`<a class="ch-row" href="#/chapters/${c.slug}" data-code="${c.code||''}">
        <span class="fl" aria-hidden="true">${c.flag || '?'}</span>
        <span class="nm">Quantum ${esc(c.name)}</span>
        <span class="cc">${c.code ? c.code.toUpperCase() : '—'}</span>
      </a>`).join('')}
    </div>
    <div class="panel mt24" style="background:var(--grad-soft);border-color:var(--line)">
      <h5>No chapter where you are?</h5>
      <p class="small">Quantum Africa helps students and researchers start new national chapters. Tell us where you are and we will help you launch one.</p>
      <a class="btn sm mt16" href="#/join">Start a chapter <span class="ar" aria-hidden="true">&rarr;</span></a>
    </div>
    <p class="xs mt16">The map is a single landmass with no national borders drawn. Adding a chapter in the CMS places its flag automatically.</p>
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
  const poster = mPoster(m);
  const label = mLabel(m, i);
  if(k === 'video'){
    return `<figure class="hl-item" data-i="${i}" data-kind="video">
      <video controls preload="none" playsinline ${poster ? `poster="${esc(poster)}"` : ''}
             src="${esc(mediaUrl(m.video))}"></video>
      ${m.caption ? `<figcaption>${esc(m.caption)}${m.credit ? ` <span class="cr">${esc(m.credit)}</span>` : ''}</figcaption>` : ''}
    </figure>`;
  }
  if(k === 'embed'){
    return `<figure class="hl-item" data-i="${i}" data-kind="embed" data-src="${esc(embedSrc(m.videoUrl))}">
      <button class="hl-play" type="button" aria-label="Play ${esc(label)}">
        ${poster ? `<img src="${esc(poster)}" alt="${esc(label)}">` : '<span class="hl-blank"></span>'}
        <span class="hl-pb" aria-hidden="true"></span>
      </button>
      ${m.caption ? `<figcaption>${esc(m.caption)}${m.credit ? ` <span class="cr">${esc(m.credit)}</span>` : ''}</figcaption>` : ''}
    </figure>`;
  }
  if(k === 'image'){
    return `<figure class="hl-item" data-i="${i}" data-kind="image">
      <img src="${esc(mediaUrl(m.image))}" alt="${esc(label)}" loading="lazy">
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
  const h = CONTENT.highlight || {};
  const gallery = Array.isArray(h.gallery) ? h.gallery : [];
  // Nothing entered yet: show the empty state so it is obvious what goes here.
  const items = gallery.length ? gallery : [{}, {}, {}];
  const when = [h.date ? oppDate(h.date) : '', h.place].filter(Boolean).join(' · ');
  return `
<section class="sec hl-sec"><div class="wrap">
  ${sectionHead(h.eyebrow || 'Latest', h.title || pht('HIGHLIGHT — your latest event'),
     h.summary || pht('Two or three sentences: what happened and why it mattered.'))}
  ${when ? `<p class="hl-when">${esc(when)}</p>` : ''}

  <div class="hl" id="hl">
    <button class="hl-arw prev" type="button" aria-label="Previous">&#8249;</button>
    <div class="hl-stage" id="hlStage">${items.map(highlightItem).join('')}</div>
    <button class="hl-arw next" type="button" aria-label="Next">&#8250;</button>
    <div class="hl-count" id="hlCount"></div>
  </div>
  <div class="hl-ths" id="hlThumbs">${items.map(highlightThumb).join('')}</div>

  ${h.linkUrl ? `<div class="phero-meta mt24"><a class="btn teal" href="${esc(h.linkUrl)}"${/^https?:/.test(h.linkUrl) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(h.linkText || 'Read more')} <span class="ar" aria-hidden="true">&rarr;</span></a></div>` : ''}
  ${gallery.length ? '' : `<p class="xs mt24">${pht('Add photos and videos to this carousel under “Front page highlight” in the admin panel. Uploaded clips play here; for a full talk, paste a YouTube or Vimeo link instead.')}</p>`}
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
        if(f) f.replaceWith(el._facade);
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
}

/* ---------- HOME ---------- */
PAGES.home = () => `
<section class="hero">
  ${ringMark('hero-ring')}
  <div class="hero-stage" id="stage">
    ${HERO_SLIDES.map((s,i)=>`<div class="slide ${i===0?'on':''}" data-i="${i}" data-kind="${mKind(s)}">
      ${(() => {
        const k = mKind(s);
        if(k === 'video') return `<video class="hero-media" data-hero-video preload="metadata" muted playsinline loop
            ${s.image ? `poster="${esc(mediaUrl(s.image))}"` : ''}
            src="${esc(mediaUrl(s.video))}"></video>`;
        // A linked video cannot autoplay behind the headline without loading a
        // third party into every visit, so the hero shows its still frame.
        const still = k === 'image' ? mediaUrl(s.image) : mPoster(s);
        if(still) return `<img class="hero-media" src="${esc(still)}" alt="${esc(s.t||'')}" ${i ? 'loading="lazy"' : ''}>`;
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
      <div class="hero-eye fade-seq" data-seq="0">Quantum research · education · innovation, built across Africa</div>
      <h1><span id="typeA"></span><span id="typeB" class="tl-p"></span><span class="caret" id="caret" aria-hidden="true"></span></h1>
      <p class="lede fade-seq" id="heroLede" data-seq="1">${esc(HERO_LINES[0].p)}</p>
      <div class="hero-cta fade-seq" data-seq="2">
        <a class="btn teal" href="#/education">See what we build <span class="ar" aria-hidden="true">→</span></a>
        <a class="btn inv ghost" href="#/join">Join Quantum Africa</a>
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
    ${[[cnum('stats.members',400),'Community members','+'],
       [cnum('stats.chapters',7),'Chapters',''],
       [cnum('stats.countries',52),'Countries reached',''],
       [cnum('stats.events',10),'Events held','']]
      .map(([n,l,sfx])=>`<div class="stat"><div class="n" data-count="${n}"${sfx?` data-suffix="${sfx}"`:''}>0</div><span class="u"></span><div class="l">${l}</div></div>`).join('')}
  </div></div>
</section>

${highlightSection()}

<section class="sec">
  <div class="wrap">
    ${sectionHead('Our work','From Learning to Leadership','One pathway. Most people move through all four.')}
    <div class="grid g4">
      ${pillarCard('01','Educate','Webinars, workshops, resources and the AI Tutor.','educate','Education','#/education')}
      ${pillarCard('02','Research','Open, collaborative projects with published code.','research','Research','#/research')}
      ${pillarCard('03','Connect','Chapters, universities and global partnerships.','connect','Chapters','#/chapters')}
      ${pillarCard('04','Lead','The next generation of African quantum leaders.','lead','Opportunities','#/opportunities')}
    </div>
  </div>
</section>

<section class="sec inv">
  <div class="wrap">
    <div class="split">
      <div>
        <div class="sec-idx"><span class="lbl">Featured program</span><i></i></div>
        <h2 class="mt16">Meet the Quantum AI Tutor</h2>
        <p class="lede mt16">Learn quantum computing. For free. A guided, conversational way in — built by Quantum Africa, open to anyone.</p>
        <div class="hero-cta">
          <a class="btn teal" href="#/tutor">Try the Quantum AI Tutor <span class="ar" aria-hidden="true">→</span></a>
          <a class="btn inv ghost" href="#/tutor">How it works</a>
        </div>
        <p class="small mt24"><span class="pill dev">In development</span></p>
      </div>
      <div>${tutorMock()}</div>
    </div>
  </div>
</section>

<div class="pattern-band">${patternPanel('','light')}</div>
<section class="sec">
  <div class="wrap">
    ${sectionHead('Chapters','Building Quantum Communities Across Africa','Local leadership, local activity, one network.',{t:'Explore our chapters',h:'#/chapters'})}
    <div class="map-wrap">${africaMap()}${chapterList()}</div>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    ${sectionHead('Education','Learn quantum, wherever you are','From a one-hour webinar to a full university programme.',{t:'Explore quantum education',h:'#/education'})}
    <div class="grid g3">
      ${[['Quantum Africa Webinars','Experts from around the world, live.','current','wave'],
         ['Workshops — QML4Africa','Hands-on, two editions delivered.','current','circuit'],
         ['Quantum AI Tutor','Free, at your own pace.','dev','bloch'],
         ['Learning Resources','Courses, notebooks and reading lists.','dev','lattice'],
         ['University Programs','Quantum inside African universities.','future','network'],
         ['Mentorship','Guidance from people already in the field.','future','fringes']
        ].map(([t,d,s,k])=>`<a class="card rv" href="${t.indexOf('Workshops')===0?'#/events/workshops':'#/education'}">
          <div class="card-media">${art(k)}</div>
          <div class="card-b">
            <div class="card-meta"><span class="pill ${s}">${s==='current'?'Current':s==='dev'?'In development':'Future vision'}</span></div>
            <h4>${esc(t)}</h4><p>${esc(d)}</p>
            <div class="card-foot"><span class="link-a">Learn more <span class="ar" aria-hidden="true">→</span></span></div>
          </div></a>`).join('')}
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${sectionHead('Research','Open research, built in the open','Students, researchers and professionals, building in the open.',{t:'Explore research',h:'#/research'})}
    <div class="grid g4">${PROJECTS.map(projectCard).join('')}</div>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    ${sectionHead('Opportunities','Your Quantum Journey Starts Here','PhDs, postdocs, masters programmes and industry roles, pulled daily from the main quantum job boards. Anything in Africa is pushed to the top.',{t:'Explore opportunities',h:'#/opportunities'})}
    <div class="opps" id="opHome">${oppPick(5).map(oppRow).join('')}</div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${sectionHead('Events','What is happening next','Across the network.',{t:'View all events',h:'#/events'})}
    <div class="grid g3">${EVENTS.filter(e=>e.when==='upcoming').map((e,i)=>eventCard(e,i)).join('')}</div>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    ${sectionHead('Partners','Working with institutions across Africa and beyond','Real, active collaborations only.',{t:'Become a partner',h:'#/partners'})}
    <div class="logo-wall">${Array.from({length:8}).map(()=>`<div class="logo-cell rv"><span class="mk"></span>PARTNER LOGO</div>`).join('')}</div>
    <p class="xs mt24">Supply logo files and a one-line description of each collaboration. Grouped by academic · research · industry · education · strategic.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${sectionHead('Community','Voices from the network','Named members, real institutions.',{t:'Read member stories',h:'#/news'})}
    <div class="grid g3">
      ${Array.from({length:3}).map(()=>`<div class="quote rv"><span class="qm" aria-hidden="true">“</span>
        <p>${pht('Member quote — 25 to 40 words, in their own words, about what Quantum Africa changed for them')}</p>
        <div class="who">${avatar()}<span><span class="nm" style="display:block;font-family:var(--f);font-weight:600;font-size:.92rem">${pht('Name')}</span><span class="xs">${pht('Role')} · ${pht('Institution')} · ${pht('Country')}</span></span></div>
      </div>`).join('')}
    </div>
  </div>
</section>

<section class="sec hair">
  <div class="wrap">
    ${sectionHead('News & articles','Latest from the network','Updates, chapter reports and member stories.',{t:'All articles',h:'#/news'})}
    <div class="news-lead">
      ${articleFeature(ARTICLES[0])}
      <div>
        <div class="news-side">${ARTICLES.slice(1,5).map(articleRow).join('')}</div>
        <div class="news-more"><a class="btn ghost sm" href="#/news">Browse the archive <span class="ar" aria-hidden="true">&rarr;</span></a></div>
      </div>
    </div>
  </div>
</section>

<section class="cta-band">
  ${ringMark('cta-ring')}
  <div class="wrap">
    <div class="hero-eye">Get involved</div>
    <h2 class="mt24">Be Part of Africa's Quantum Future.</h2>
    <div class="btns">
      <a class="btn teal" href="#/join">Join Quantum Africa</a>
      <a class="btn inv ghost" href="#/partners">Partner With Us</a>
      <a class="btn inv ghost" href="#/contact">Support Our Mission</a>
    </div>
  </div>
</section>`;

/* ---------- ABOUT ---------- */
PAGES.about = () => `
${crumb([{t:'Home',h:'#/'},{t:'About'}])}
<section class="phero">${africaWatermark('wm-hero')}<div class="wrap">
  <div class="sec-idx"><span class="lbl">About Quantum Africa</span><i></i></div>
  <h1 class="mt24">We build people, not just programmes.</h1>
  <p class="lede">Quantum Africa exists to build Africa's quantum workforce — through education, research, leadership and global connection.</p>
</div></section>

<section class="sec flush" style="padding-top:0">
  <div class="wrap">${media('field','Wide community photograph','2400×1000 · JPG → assets/about/hero.jpg','wide')}</div>
</section>

<section class="sec"><div class="wrap"><div class="side">
  <div class="prose">
    <h3>Who we are</h3>
    <p>Quantum Africa is a pan-African quantum research, education, and innovation organization dedicated to building the next generation of African quantum leaders and strengthening Africa's role in the global quantum ecosystem.</p>
    <p>We are not simply an online community. We are building an ecosystem — national chapters, university communities, students, researchers, educators, industry professionals, mentors and international partners, connected to each other.</p>
    <h3>Our story</h3>
    <p>${pht('OUR STORY — 3 to 4 paragraphs: how Quantum Africa started, who started it, what the first activity was, and what changed as the community grew. Include founding year and any turning points.')}</p>
    <h3>Mission</h3>
    <p>To democratize access to quantum education, foster collaborative research, develop talent and leadership, and connect African students, researchers, institutions, and professionals with opportunities and partners across the global quantum ecosystem.</p>
    <h3>Vision</h3>
    <p>An Africa whose talent is not left behind in the quantum revolution — with a workforce, a research base and an institutional presence in the global quantum ecosystem.</p>
    <h3>Objectives</h3>
    <ul>
      <li>Bring quantum education into African universities</li>
      <li>Connect African students with global opportunities</li>
      <li>Support MSc and PhD pathways in quantum technologies</li>
      <li>Build collaborative research programmes and research networks</li>
      <li>Connect African universities with international institutions</li>
      <li>Support student and researcher mobility</li>
      <li>Develop national chapters across the continent</li>
      <li>Increase African participation in the global quantum ecosystem</li>
    </ul>
  </div>
  <aside>
    <div class="panel">
      <h5>Our philosophy</h5>
      <p style="font-family:var(--f);font-weight:600;font-size:1.15rem;letter-spacing:-.02em;line-height:1.4">Educate → Research → Connect → Lead</p>
      <p class="small mt16">Each stage feeds the next. Someone who joins a webinar can end up leading a chapter.</p>
    </div>
    <div class="panel mt16">
      <h5>At a glance</h5>
      <dl class="dl-list">
        <div class="dl-item"><dt>Members</dt><dd>${cnum('stats.members','400')}+</dd></div>
        <div class="dl-item"><dt>Chapters</dt><dd>${cnum('stats.chapters',7)}</dd></div>
        <div class="dl-item"><dt>Founded</dt><dd>${cx('site.founded', pht('YEAR'))}</dd></div>
        <div class="dl-item"><dt>Registered in</dt><dd>${cx('site.registered', pht('COUNTRY'))}</dd></div>
      </dl>
    </div>
    <div class="panel mt16">
      <h5>Documents</h5>
      <p class="small">${cx('about.documents', pht('Annual report, strategy document or one-pager PDF — upload and link here'))}</p>
    </div>
  </aside>
</div></div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead('People','Leadership and advisors',null,{t:'Full directory',h:'#/people'})}
  <div class="grid g4">${PEOPLE.slice(0,4).map(personCard).join('')}</div>
</div></section>`;

/* ---------- IMPACT ---------- */
PAGES.impact = () => `
${crumb([{t:'Home',h:'#/'},{t:'About',h:'#/about'},{t:'Our Impact'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">Our impact</span><i></i></div>
  <h1>What we have actually done.</h1>
  <p class="lede">Verified figures only. Anything uncounted is marked, never estimated.</p>
</div></section>

<section class="sec flush"><div class="wrap">
  <div class="bignum">
    ${[[cnum('stats.members',400),'+','Community members','Across the continent and the diaspora.'],
       [cnum('stats.chapters',7),'','National chapters','Across North, West, East and Southern Africa.'],
       [cnum('stats.projects',4),'','Research projects','All open to new contributors.'],
       [cnum('stats.countries',52),'','Countries reached','Across the continent and the diaspora.'],
       [cnum('stats.events',10),'','Events held','Webinars, workshops and chapter events.'],
       [cval('stats.partners'),'','Partner institutions','Institutions with a signed agreement.']]
      .map(([n,sfx,k,d])=>`<div class="bigcell rv">${n===''
        ? `<span class="v tbd">[ ?? ]</span>`
        : `<span class="v" data-count="${n}"${sfx?` data-suffix="${sfx}"`:''}>0</span>`}<span class="k">${k}</span><span class="d">${n===''?pht('supply the figure'):d}</span></div>`).join('')}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead('Detail','Where the numbers come from','Each area needs its own count and the period it covers.')}
  <div class="tw"><table>
    <thead><tr><th>Area</th><th>What we count</th><th>Figure</th></tr></thead>
    <tbody>
      <tr><td>Community</td><td>Members, countries represented, active chapter participants</td><td>400+ members</td></tr>
      <tr><td>Education</td><td>Webinars delivered, workshop participants, hours taught, resources published</td><td>${pht('supply')}</td></tr>
      <tr><td>Research</td><td>Active projects, contributors, repositories, publications</td><td>4 projects</td></tr>
      <tr><td>Chapters</td><td>Chapters launched, universities engaged, chapter-run events</td><td>7 chapters</td></tr>
      <tr><td>Events</td><td>Total events, attendees, speakers, speaker countries</td><td>10 events</td></tr>
      <tr><td>Partnerships</td><td>Partner institutions, joint activities, opportunities circulated</td><td>${pht('supply')}</td></tr>
    </tbody>
  </table></div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead('Stories','Impact in individual terms','Numbers give scale. One trajectory gives meaning.')}
  <div class="grid g3">${['bloch','network','circuit'].map(k=>`<a class="card rv" href="#/news/a3">
    <div class="card-media">${media(k,'Portrait of the person this story is about','1600×900 · JPG')}</div>
    <div class="card-b"><div class="news-meta"><span class="t">Member story</span></div>
      <h4>${pht('Impact story headline')}</h4><p>${pht('Who, what they did, where they are now')}</p></div></a>`).join('')}</div>
  <div class="mt48 grid g2">
    <div class="panel"><h5>Annual report</h5><p class="small">${pht('Upload the PDF and a cover image')}</p></div>
    <div class="panel"><h5>Methodology</h5><p class="small">${pht('How each figure is counted, and over what period')}</p></div>
  </div>
</div></section>`;

/* ---------- EDUCATION ---------- */
PAGES.education = () => `
${crumb([{t:'Home',h:'#/'},{t:'Programs',h:'#/education'},{t:'Quantum Education'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">Programs · Quantum Education</span><i></i></div>
  <h1 class="mt24">Quantum education, made reachable.</h1>
  <p class="lede">A student with a laptop can start today. A university can build a programme on the same foundation.</p>
  <div class="phero-meta"><span class="pill current">Webinars &amp; workshops running</span><span class="pill dev">Tutor &amp; resources in development</span><span class="pill future">University programmes planned</span></div>
</div></section>
<section class="sec"><div class="wrap">
  <div class="grid g2">
    ${[['Quantum Africa Webinars','A recurring online series where experts from around the world speak to the community about quantum computing, quantum technologies, applications, research, careers, policy and the future of the field.','current','#/events'],
       ['Quantum Machine Learning 4 Africa','A hands-on workshop series on quantum machine learning. Two editions delivered.','current','#/events/workshops'],
       ['Quantum AI Tutor','A free AI-powered tutor for learning quantum computing at your own pace, with structured learning pathways.','dev','#/tutor'],
       ['Learning Resources','A curated library — courses, notebooks, reading lists, tools and recordings, filterable by topic and level.','dev','#/education'],
       ['Mentorship','Connecting students with researchers and professionals for guidance on study, research and careers.','future','#/join'],
       ['University Programs','Structured quantum education inside African universities: curriculum support, faculty training, student chapters.','future','#/universities']
      ].map(([t,d,s,h])=>`<a class="card pad rv" href="${h}"><div class="card-b" style="padding:0">
        <div class="card-meta"><span class="pill ${s}">${s==='current'?'Current':s==='dev'?'In development':'Future vision'}</span></div>
        <h3>${esc(t)}</h3><p>${esc(d)}</p>
        <div class="card-foot"><span class="link-a">Explore <span aria-hidden="true">→</span></span></div></div></a>`).join('')}
  </div>
</div></section>
<section class="sec tint"><div class="wrap">
  ${sectionHead('Archive','Every session, kept','Each webinar and workshop gets a permanent page with its abstract, speaker, recording and photographs. This archive is the largest source of searchable pages on the site.',{t:'Browse events',h:'#/events'})}
  <div class="grid g3">${EVENTS.slice(0,3).map((e,i)=>eventCard(e,i)).join('')}</div>
</div></section>`;

/* ---------- AI TUTOR ---------- */
PAGES.tutor = () => `
${crumb([{t:'Home',h:'#/'},{t:'Programs',h:'#/education'},{t:'Quantum AI Tutor'}])}
<section class="sec inv flush" style="padding-top:clamp(56px,7vw,96px)">
  <div class="wrap">
  <div class="split">
    <div>
      <div class="sec-idx"><span class="lbl">Quantum Africa · Flagship project</span><i></i></div>
      <h1 class="mt24">Learn quantum computing.<br>For free. With your AI tutor.</h1>
      <p class="lede mt24">A free tutor built by Quantum Africa. From first principles to running circuits, at your own pace.</p>
      <div class="hero-cta">
        <a class="btn teal" href="#/join">Try the Quantum AI Tutor <span class="ar" aria-hidden="true">→</span></a>
        <a class="btn inv ghost" href="#/tutor">See how it works</a>
      </div>
      <p class="mt24"><span class="pill dev">In development</span> <span class="xs" style="color:rgba(255,255,255,.55)">Link the CTA to the live product when it is ready.</span></p>
    </div>
    <div>${tutorMock()}</div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead('Who it is for','Built for the person who has no one to ask')}
  <div class="grid g4">
    ${[['Students','Learning quantum alongside a physics, maths or computing degree — or entirely outside one.'],
       ['Self-learners','No university course available locally, and no lab to walk into.'],
       ['Educators','Preparing to teach quantum for the first time, and needing a reliable explainer.'],
       ['Professionals','Moving into quantum from software, telecoms, finance or engineering.']
      ].map(([t,d])=>`<div class="pillar rv"><h3 style="font-size:1.2rem">${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead('How it works','Four steps')}
  <div class="grid g2" style="gap:0 48px">
    <div>
      ${[['Ask anything','Start from a question, a piece of code, or a topic. The tutor meets you where you are.'],
         ['Follow a pathway','Structured learning pathways take you from qubits and superposition through gates, circuits and algorithms.'],
         ['Practise','Worked examples and exercises with feedback, rather than a wall of text.'],
         ['Go further','When you are ready, the tutor points you at Quantum Africa research projects, events and opportunities.']
        ].map(([t,d],i)=>`<div class="step"><span class="n">0${i+1}</span><div><h4>${esc(t)}</h4><p>${esc(d)}</p></div></div>`).join('')}
    </div>
    <div>${media('bloch','Two or three real interface captures — conversation, pathway, exercise','PNG · any width ≥1200px','tall')}</div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead('Features','What it does')}
  <div class="grid g3">
    ${[['Conversational learning','Explanations that adapt to the question asked, not a fixed syllabus.'],
       ['Learning pathways','Beginner, intermediate and applied tracks with clear prerequisites.'],
       ['Code support','Help reading and writing circuit code, with worked examples.'],
       ['Free access','No paywall. Access for anyone, anywhere.'],
       ['Built for African learners','Designed around low bandwidth and self-study, and open to multilingual support.'],
       ['Connected to the ecosystem','Links out to Quantum Africa events, projects and opportunities.']
      ].map(([t,d])=>`<div class="card pad rv"><div class="card-b"><h4>${esc(t)}</h4><p>${esc(d)}</p></div></div>`).join('')}
  </div>
  <div class="mt48 grid g2">
    <div class="panel"><h5>Technology</h5><p class="small">${pht('TECHNOLOGY — the model, retrieval approach, content sources and how accuracy is checked. Be specific; this is what a technical partner will read.')}</p></div>
    <div class="panel"><h5>Roadmap</h5><p class="small">${pht('ROADMAP — what exists now, what is next, and target dates. Mark each item current / in development / planned.')}</p></div>
  </div>
</div></section>

<section class="cta-band">
  ${ringMark('cta-ring')}
  <div class="wrap">
  <h2>Start learning quantum computing today.</h2>
  <div class="btns"><a class="btn teal" href="#/join">Try the Quantum AI Tutor</a><a class="btn inv ghost" href="#/universities">Bring it to your university</a></div>
</div></section>`;

/* ---------- RESEARCH INDEX ---------- */
PAGES.research = () => `
${crumb([{t:'Home',h:'#/'},{t:'Research'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">Research &amp; innovation</span><i></i></div>
  <h1>Collaborate. Research. Build.</h1>
  <p class="lede">Projects are open to new contributors, and code is published where possible.</p>
  <div class="phero-meta"><a class="btn sm" href="#/join">Join a project <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn sm ghost" href="#/researchers">For researchers</a></div>
</div></section>

<section class="sec deep">
  ${ringMark('cta-ring')}
  <div class="wrap">
    ${sectionHead('Active projects','Four projects running now')}
    <div class="blist">
      ${PROJECTS.map((p,i)=>`<a class="brow rv" href="#/research/${p.slug}">
        <span class="bn">0${i+1}</span>
        <span class="bmeta">
          <h3>${esc(p.title)}</h3>
          <span class="pill current">Active</span>
          <span class="kv" style="color:rgba(255,255,255,.55)">${esc(p.area)} &nbsp;·&nbsp; Lead ${pht('name')}</span>
        </span>
        <span class="bfig">${art(p.art)}</span>
      </a>`).join('')}
    </div>
  </div>
</section>

<section class="sec"><div class="wrap">
  ${sectionHead('Outputs','Publications, code and openings')}
  <div class="grid g3">
    <div class="card pad rv"><div class="card-b"><h4>Publications</h4><p>${pht('Papers, preprints, DOIs — empty until there are real entries')}</p></div></div>
    <div class="card pad rv"><div class="card-b"><h4>Open source</h4><p>Public repositories from Quantum Africa projects. ${pht('GitHub organisation URL')}</p></div></div>
    <div class="card pad rv"><div class="card-b"><h4>Open roles</h4><p>Contributor, student researcher, mentor.<a class="link-a mt16" href="#/join" style="display:inline-flex">Get involved <span class="ar" aria-hidden="true">&rarr;</span></a></p></div></div>
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  <div class="split">
    <div>${sectionHead('Propose','Bring us a project','If you have a project that needs collaborators, students or compute, tell us about it.')}
      <a class="btn" href="#/contact">Propose a project <span class="ar" aria-hidden="true">&rarr;</span></a>
    </div>
    <div>${media('lightcone','Optional: a photo of the team at work','1600×900 · JPG','tall')}</div>
  </div>
</div></section>`;

/* ---------- RESEARCH DETAIL ---------- */
PAGES.researchDetail = (slug) => {
  const p = PROJECTS.find(x=>x.slug===slug) || PROJECTS[0];
  return `
${crumb([{t:'Home',h:'#/'},{t:'Research',h:'#/research'},{t:p.title}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">Research project</span><i></i></div>
  <h1 class="mt24" style="font-size:clamp(2rem,4vw,3.2rem)">${esc(p.title)}</h1>
  <p class="lede">${esc(p.short)}</p>
  <div class="phero-meta"><span class="pill current">Active</span><span class="tag">${esc(p.area)}</span>${p.tech.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
</div></section>
<section class="sec flush" style="padding-top:0"><div class="wrap">${media(p.art||'circuit','Optional project photo. The generated figure is the default.','2400×1000 · SVG or PNG','wide')}</div></section>
<section class="sec"><div class="wrap"><div class="side">
  <div class="prose">
    <h3>Description</h3><p>${esc(p.short)}</p>
    <p>${pht('EXTENDED DESCRIPTION — 2 to 3 paragraphs written by the project lead')}</p>
    <h3>Objectives</h3><ul>${Array.from({length:3}).map(()=>`<li>${pht('Objective')}</li>`).join('')}</ul>
    <h3>Join this project</h3>
    <p>This project is open to new contributors. ${pht('Skills needed and time commitment')}</p>
    <a class="btn" href="#/join">Join this project <span class="ar" aria-hidden="true">→</span></a>
  </div>
  <aside>
    <div class="panel"><h5>Project</h5><dl class="dl-list">
      <div class="dl-item"><dt>Area</dt><dd>${esc(p.area)}</dd></div>
      <div class="dl-item"><dt>Status</dt><dd>Active</dd></div>
      <div class="dl-item"><dt>Started</dt><dd>${pht('DATE')}</dd></div>
      <div class="dl-item"><dt>Repository</dt><dd>${pht('GitHub URL')}</dd></div>
      <div class="dl-item"><dt>Publication</dt><dd>${pht('DOI / link')}</dd></div>
    </dl></div>
    <div class="panel mt16"><h5>Contributors</h5>
      ${Array.from({length:3}).map(()=>`<div class="dl-item"><dt style="text-transform:none;letter-spacing:0;font-family:inherit;font-size:.85rem;color:var(--ink-2)">${pht('Name')}</dt><dd class="xs">${pht('Role')}</dd></div>`).join('')}
    </div>
  </aside>
</div></div></section>
<section class="sec tint"><div class="wrap">
  ${sectionHead('More research','Other projects',null,{t:'All projects',h:'#/research'})}
  <div class="grid g3">${PROJECTS.filter(x=>x.slug!==p.slug).slice(0,3).map(projectCard).join('')}</div>
</div></section>`;
};

/* ---------- CHAPTERS ---------- */
PAGES.chapters = () => `
${crumb([{t:'Home',h:'#/'},{t:'Community',h:'#/chapters'},{t:'Chapters'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">Community · Chapters</span><i></i></div>
  <h1 class="mt24">Building Quantum Communities Across Africa</h1>
  <p class="lede">How Quantum Africa becomes local — own leadership, own events, own universities.</p>
</div></section>
<section class="sec"><div class="wrap">
  <div class="map-wrap">${africaMap()}${chapterList()}</div>
</div></section>
<section class="sec tint"><div class="wrap">
  ${sectionHead('All chapters','Seven chapters, one network')}
  <div class="grid g3">${CHAPTERS.map(chapterCard).join('')}</div>
  <div class="mt48 panel">
    <h5>Start a chapter</h5>
    <p class="small">Quantum Africa is developing chapters across the continent. If there is no chapter in your country and you want to start one, we will help.</p>
    <a class="btn sm mt16" href="#/join">Start a chapter <span class="ar" aria-hidden="true">→</span></a>
  </div>
</div></section>`;

PAGES.chapterDetail = (slug) => {
  const c = CHAPTERS.find(x=>x.slug===slug) || CHAPTERS[0];
  const nm = c.name;
  return `
${crumb([{t:'Home',h:'#/'},{t:'Chapters',h:'#/chapters'},{t:nm}])}
<section class="sec flush" style="padding:0"><div class="wrap">${media('network','Chapter hero — team or event photo','2400×1000 · JPG → assets/chapters/'+c.slug+'/hero.jpg','wide')}</div></section>
<section class="phero" style="padding-top:34px">${countryWatermark(c.code,'wm-chapter')}<div class="wrap">
  <div class="row" style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
    <span class="fl" style="width:56px;height:38px;border:1.5px dashed color-mix(in srgb,var(--ph) 45%,transparent);border-radius:2px;display:flex;align-items:center;justify-content:center;font-family:var(--f);font-size:1.1rem;color:var(--ph)" aria-hidden="true">${c.flag||'?'}</span>
    <span class="tag">National chapter · ${c.code ? c.code.toUpperCase() : '—'}</span>
    ${statusPill()}
  </div>
  <h1 class="mt16">Quantum ${esc(nm)}</h1>
  <p class="lede">${pht('CHAPTER DESCRIPTION — 3 to 4 sentences: when the chapter formed, what it focuses on, which universities are involved, and what it is working towards')}</p>
  <div class="phero-meta"><a class="btn sm grad" href="#/join">Join Quantum ${esc(nm)}</a><a class="btn sm ghost" href="#/contact">Contact the chapter</a></div>
</div></section>

<section class="stats-band"><div class="wrap"><div class="stats">
  <div class="stat"><div class="n tbd">[ ?? ]</div><div class="l">Members</div></div>
  <div class="stat"><div class="n tbd">[ ?? ]</div><div class="l">Universities</div></div>
  <div class="stat"><div class="n tbd">[ ?? ]</div><span class="u"></span><div class="l">Events held</div></div>
  <div class="stat"><div class="n tbd">[ ?? ]</div><span class="u"></span><div class="l">Research projects</div></div>
  <div class="stat"><div class="n tbd">[ ?? ]</div><span class="u"></span><div class="l">Partners</div></div>
  <div class="stat"><div class="n tbd">[ ?? ]</div><div class="l">Founded</div></div>
</div></div></section>

<section class="sec"><div class="wrap">
  ${sectionHead('Leadership','Who runs this chapter')}
  <div class="grid g4">${PEOPLE.slice(0,4).map(personCard).join('')}</div>
  <div class="mt48">${media('network','Chapter team photo','1600×900 · JPG','wide')}</div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead('Activity','Events and programmes',null,{t:'All events',h:'#/events'})}
  <div class="grid g3">${EVENTS.slice(0,3).map((e,i)=>eventCard(e,i)).join('')}</div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="grid g2">
    <div><h3>Universities &amp; institutions</h3><div class="mt16 grid g2">${Array.from({length:4}).map(()=>`<div class="logo-cell" style="height:78px"><span class="mk" style="width:30px;height:30px"></span>LOGO</div>`).join('')}</div></div>
    <div><h3>Chapter partners</h3><div class="mt16 grid g2">${Array.from({length:4}).map(()=>`<div class="logo-cell" style="height:78px"><span class="mk" style="width:30px;height:30px"></span>LOGO</div>`).join('')}</div></div>
  </div>
  <div class="mt48">
    <h3>Research &amp; education in ${esc(nm)}</h3>
    <div class="grid g3 mt16">${PROJECTS.slice(0,3).map(projectCard).join('')}</div>
  </div>
  <div class="mt48 panel">
    <h5>Photo gallery</h5>
    <div class="grid g4 mt16">${['circuit','wave','lattice','fringes'].map(k=>media(k,'Chapter photo','1200×800 · JPG','short')).join('')}</div>
  </div>
  <div class="mt48 panel">
    <h5>Chapter social media</h5>
    <p class="small">${pht('LinkedIn')} · ${pht('X')} · ${pht('Instagram')} · ${pht('WhatsApp / Telegram group')}</p>
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead('Network','Other chapters',null,{t:'All chapters',h:'#/chapters'})}
  <div class="grid g4">${CHAPTERS.filter(x=>x.slug!==c.slug).slice(0,4).map(chapterCard).join('')}</div>
</div></section>`;
};

/* ---------- EVENTS ---------- */
PAGES.events = () => `
${crumb([{t:'Home',h:'#/'},{t:'Events'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">Events</span><i></i></div>
  <h1>Webinars, workshops and chapter events.</h1>
  <p class="lede">Every session keeps a permanent page — abstract, speaker, recording, photographs.</p>
</div></section>

<section class="sec flush"><div class="wrap">
  <div class="news-lead">
    <a class="feature rv" href="#/events/${EVENTS[0].slug}">
      <div class="card-media">${media('bloch','Speaker portrait or event photograph for the next session','2400×1350 · JPG')}</div>
      <div class="fb">
        <div class="news-meta"><span class="t">Next up · ${esc(EVENTS[0].type)}</span><span>${pht('DATE')}</span><span>${pht('TIME GMT')}</span></div>
        <h3>${pht('Next session title')}</h3>
        <p>${pht('Abstract — three or four sentences on what the session covers and why it matters')}</p>
        <span class="link-a">Register <span class="ar" aria-hidden="true">&rarr;</span></span>
      </div>
    </a>
    <div>
      <div class="sec-idx" style="margin-bottom:10px"><span class="lbl">Also coming up</span><i></i></div>
      <div class="news-side">
        ${EVENTS.filter(e=>e.when==='upcoming').slice(1).concat(EVENTS.filter(e=>e.when==='past').slice(0,2)).map(e=>`<a class="news-row rv" href="#/events/${e.slug}">
          <div class="news-meta"><span class="t">${esc(e.type)}</span><span>${pht('DATE')}</span></div>
          <h4>${pht(e.n)}</h4></a>`).join('')}
      </div>
      <div class="news-more"><a class="btn ghost sm" href="#/join">Get the invitations <span class="ar" aria-hidden="true">&rarr;</span></a></div>
    </div>
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead('Archive','Every session we have run')}
  <div class="filters" data-filter="events">
    <div class="fgroup"><span class="fl">When</span>
      ${['All','Upcoming','Past'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="when" data-v="${a.toLowerCase()}">${a}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">Type</span>
      ${['All','Webinar','Workshop','Conference','Chapter event'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="type" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
  </div>
  <div class="result-n" id="evCount">${EVENTS.length} events</div>
  <div class="grid g3" id="evGrid">${EVENTS.map((e,i)=>eventCard(e,i)).join('')}</div>
  <div class="panel mt48">
    <h5>Looking for conferences elsewhere?</h5>
    <p class="small">Quantum conferences, workshops and summer schools worldwide are collected on the Opportunities page, alongside PhDs, postdocs and industry roles.</p>
    <a class="btn sm mt16" href="#/opportunities">See what is coming up <span class="ar" aria-hidden="true">&rarr;</span></a>
  </div>
</div></section>

`;

PAGES.eventDetail = (slug) => {
  const e = EVENTS.find(x=>x.slug===slug) || EVENTS[0];
  return `
${crumb([{t:'Home',h:'#/'},{t:'Events',h:'#/events'},{t:e.type}])}
<section class="sec flush" style="padding:0"><div class="wrap">${media('bloch','Event hero — speaker portrait or event photograph','2400×1000 · JPG','wide')}</div></section>
<section class="phero" style="padding-top:34px"><div class="wrap">
  <div class="phero-meta" style="margin:0 0 18px"><span class="tag">${esc(e.type)}</span>${e.series?`<span class="pill current">${esc(e.series)} · Edition ${esc(e.edition)}</span>`:`<span class="pill ${e.when==='upcoming'?'current':'future'}">${e.when}</span>`}</div>
  <h1 style="font-size:clamp(2rem,4vw,3.2rem)">${e.title ? esc(e.title) : pht(e.n)}</h1>
  ${e.series?`<p class="small mt16"><a class="link-a" href="#/events/workshops">Back to the ${esc(e.series)} series <span class="ar" aria-hidden="true">&rarr;</span></a></p>`:''}
  <p class="lede">${pht('ABSTRACT — 3 to 5 sentences describing the session, written so that someone outside the field understands why it matters')}</p>
</div></section>
<section class="sec"><div class="wrap"><div class="side">
  <div class="prose">
    <h3>About this session</h3><p>${pht('FULL DESCRIPTION')}</p>
    <h3>Agenda</h3>
    <div class="rows">${Array.from({length:4}).map(()=>`<div class="row-i" style="grid-template-columns:110px 1fr"><span class="dl">${pht('TIME')}</span><span><h4>${pht('Agenda item')}</h4></span></div>`).join('')}</div>
    <h3>Speakers</h3>
    <div class="grid g3" style="margin-bottom:16px">${PEOPLE.slice(0,3).map(personCard).join('')}</div>
    <h3>Photos &amp; recording</h3>
    <div class="grid g3">${['circuit','network','wave'].map(k=>media(k,'Event photo','1200×800 · JPG','short')).join('')}</div>
    <div class="mt16">${media('fringes','Recording embed — YouTube or Vimeo URL','Paste the video URL in the CMS','short')}</div>
    <h3>Outcomes</h3><p>${pht('OUTCOMES — attendance, what came out of it, follow-on activity. Only for past events.')}</p>
    <h3>Resources</h3><p>${pht('Slides, notebooks, reading list — upload files or link')}</p>
  </div>
  <aside>
    <div class="panel">
      <h5>Details</h5>
      <dl class="dl-list">
        <div class="dl-item"><dt>Date</dt><dd>${pht('DD MMM YYYY')}</dd></div>
        <div class="dl-item"><dt>Time</dt><dd>${pht('HH:MM–HH:MM GMT')}</dd></div>
        <div class="dl-item"><dt>Location</dt><dd>${pht('Online / venue')}</dd></div>
        <div class="dl-item"><dt>Language</dt><dd>${pht('English')}</dd></div>
        <div class="dl-item"><dt>Cost</dt><dd>Free</dd></div>
      </dl>
      <a class="btn teal mt16" href="#/join" style="width:100%;justify-content:center">${e.when==='upcoming'?'Register':'Watch recording'}</a>
      <p class="xs mt8">Registration goes to your existing tool (Luma, Zoom or Google Forms) — the event record just stores the URL.</p>
    </div>
    <div class="panel mt16"><h5>Organisers</h5><p class="small">${pht('Organising team / chapter')}</p></div>
    <div class="panel mt16"><h5>Partners</h5><div class="grid g2" style="gap:8px">${Array.from({length:2}).map(()=>`<div class="logo-cell" style="height:58px;font-size:.55rem"><span class="mk" style="width:22px;height:22px"></span>LOGO</div>`).join('')}</div></div>
  </aside>
</div></div></section>
<section class="sec tint"><div class="wrap">
  ${sectionHead('More','Related events',null,{t:'All events',h:'#/events'})}
  <div class="grid g3">${EVENTS.filter(x=>x.slug!==e.slug).slice(0,3).map((e,i)=>eventCard(e,i)).join('')}</div>
</div></section>`;
};


/* ---------- QML4AFRICA WORKSHOP SERIES ---------- */
PAGES.workshops = () => {
  const eds = EVENTS.filter(e => e.series === 'QML4Africa').sort((a,b)=>a.edition.localeCompare(b.edition));
  return `
${crumb([{t:'Home',h:'#/'},{t:'Events',h:'#/events'},{t:'Workshops'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">Workshop series</span><i></i></div>
  <h1>Quantum Machine Learning 4 Africa</h1>
  <p class="lede">A hands-on workshop series bringing quantum machine learning to African students and researchers. Two editions delivered.</p>
  <div class="phero-meta"><a class="btn teal" href="#/join">Join the next edition <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn ghost" href="#/events">All events</a></div>
  ${africaWatermark('wm-hero')}
</div></section>

<section class="sec flush"><div class="wrap">
  <div class="series-bar">
    <span>Series <b>QML4Africa</b></span>
    <span>Editions delivered <b>2</b></span>
    <span>Format <b>${pht('online / in person')}</b></span>
    <span>Participants <b>${pht('total')}</b></span>
    <span>Partners <b>${pht('count')}</b></span>
  </div>
  <div class="editions">
    ${eds.map(e=>`<a class="edition rv" href="#/events/${e.slug}">
      ${patternPanel('soft')}
      <span class="en">${esc(e.edition)}</span>
      <h3>${esc(e.title.replace('Quantum Machine Learning 4 Africa — ',''))}</h3>
      <p>${pht('One or two sentences on what this edition covered and who it was for')}</p>
      <span class="efoot">
        <span class="pill current">Delivered</span>
        <span class="kv" style="color:rgba(255,255,255,.6)">${pht('DATES')}</span>
        <span class="link-a">Edition page <span class="ar" aria-hidden="true">&rarr;</span></span>
      </span>
    </a>`).join('')}
    <div class="edition planned rv">
      ${patternPanel('soft','light')}
      <span class="en">03</span>
      <h3>Third edition</h3>
      <p>${pht('Confirm whether a third edition is planned, and when. Remove this panel if not.')}</p>
      <span class="efoot"><span class="pill future">Planned</span>
        <a class="link-a" href="#/join">Register interest <span class="ar" aria-hidden="true">&rarr;</span></a></span>
    </div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead('The series','What QML4Africa is','A practical route into quantum machine learning for people who already have the maths and the code, and need the quantum.')}
  <div class="grid g3">
    ${[['Who it is for','Students and researchers in physics, mathematics, computing and data science.'],
       ['What it covers',null],
       ['What you leave with',null]
      ].map(([t,d])=>`<div class="card pad rv"><div class="card-b">
        <h4>${esc(t)}</h4><p>${d ? esc(d) : pht('Supply this — three or four lines')}</p></div></div>`).join('')}
  </div>
  <div class="mt48 grid g2">
    <div class="panel"><h5>Organisers &amp; partners</h5><p class="small">${pht('Who ran each edition, and which institutions co-hosted')}</p></div>
    <div class="panel"><h5>Recordings &amp; materials</h5><p class="small">${pht('Video links, slides and notebooks for each edition')}</p></div>
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead('Gallery','From the workshops','Replace these with photographs from each edition.')}
  <div class="grid g4">${['circuit','kernel','lattice','network'].map(k=>media(k,'Workshop photograph','1600×900 · JPG','short')).join('')}</div>
</div></section>

<section class="cta-band">
  ${patternPanel('soft')}
  ${africaWatermark('wm-cta')}
  ${ringMark('cta-ring')}
  <div class="wrap"><div class="hero-eye">Bring it to your campus</div>
    <h2 class="mt24">Host the next QML4Africa.</h2>
    <div class="btns"><a class="btn teal" href="#/universities">University partnerships <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn inv ghost" href="#/contact">Get in touch</a></div>
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
        : `<span class="nm-l tbd">${pht('profile link')}</span>`; })()}
  </div>`).join('')}</div>`;
}

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
<section class="phero">${africaWatermark('wm-hero')}<div class="wrap">
  <div class="sec-idx"><span class="lbl">Conference series</span><i></i></div>
  <h1>Quantum Africa</h1>
  <p class="lede">Bringing the best quantum research to Africa. Seven editions since 2010, in South Africa, Morocco, Tunisia and Rwanda.</p>
  <div class="phero-meta"><a class="btn teal" href="#/conference/qa7">Quantum Africa 7 <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn ghost" href="#/join">Register interest in the next edition</a></div>
</div></section>

<section class="sec flush"><div class="wrap">
  <blockquote class="conf-quote">Quantum Africa is a conference series dedicated to promoting quantum science and technology across the continent. Held in various African countries, the series fosters collaboration both within Africa and with the global scientific community.
    <cite>quantumafrica.org</cite></blockquote>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead('Editions','Seven editions, four countries','Every edition since the series began in Durban in 2010. Each page carries the committees and speakers exactly as the series publishes them.')}
  <div class="tl">
    ${CONF.map(c=>`<a class="tl-i ${c.latest?'now':''}" href="#/conference/${c.slug}">
      <span class="dot"></span>
      <span class="ed">QA${c.n.replace(/^0/,'')}</span>
      <span class="yr">${c.year}</span>
      <span class="ct">${esc(c.city)}</span>
      <span class="cy">${cCountry(c.country)}</span>
    </a>`).join('')}
  </div>
  <div class="stats mt48">
    ${[[ '7','Editions'],['4','Host countries'],['15','Years'],[String(total),'People on record']]
      .map(([n,l])=>`<div class="stat rv"><span class="n" data-count="${n}">${n}</span><span class="l">${l}</span></div>`).join('')}
  </div>
</div></section>

<section class="sec inv">
  ${patternPanel('soft')}
  ${ringMark('cta-ring')}
  <div class="wrap">
    <div class="sec-idx"><span class="n">—</span><span class="lbl">Latest edition</span><i></i></div>
    <div class="conf-hero">
      <div>
        <h2>Quantum Africa 7</h2>
        <p class="lede mt16">${esc(latest.city)}, ${esc(latest.country)} · ${esc(latest.dates)}</p>
        <p class="small mt16">${esc(latest.venue)}</p>
        <div class="hero-cta">
          <a class="btn teal" href="#/conference/qa7">Edition page <span class="ar" aria-hidden="true">&rarr;</span></a>
          <a class="btn inv ghost" href="#/contact">Ask about QA8</a>
        </div>
      </div>
      <div>${media('network','Photograph from Quantum Africa 7','2400×1350 · JPG','tall')}</div>
    </div>
  </div>
</section>

<section class="sec tint"><div class="wrap">
  ${sectionHead('Speakers','Who has spoken at Quantum Africa','A selection across the seven editions. Every edition page carries its full line-up.')}
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
  ])}
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead('Governance','Steering committee','The committee that carries the series between editions, as published by Quantum Africa.')}
  ${nameGrid(CONF_SC)}
  <h4 class="mt48" style="font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-3)">Former steering committee members</h4>
  <div class="mt16">${nameGrid(CONF_SC_PAST)}</div>
  <div class="mt48 grid g2">
    <div class="panel">
      <h5>What the series covers</h5>
      <p class="small">Quantum science and technology across the continent — strengthening Africa’s role in quantum research and development, encouraging cross-border partnerships, and raising awareness among African stakeholders of the opportunities in the field.</p>
    </div>
    <div class="panel">
      <h5>Quantum Africa’s role</h5>
      <p class="small">${cx('conference.role', pht('STATE THE RELATIONSHIP — the series is run by its own steering committee. Say precisely what Quantum Africa does: attend, co-organise, sponsor, run a satellite workshop, sit on the committee. Do not imply ownership.'))}</p>
    </div>
  </div>
</div></section>

<section class="cta-band">
  ${patternPanel('soft')}
  ${africaWatermark('wm-cta')}
  <div class="wrap"><div class="hero-eye">Next edition</div>
    <h2 class="mt24">Be there for Quantum Africa 8.</h2>
    <div class="btns"><a class="btn teal" href="#/join">Register your interest <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn inv ghost" href="#/contact">Propose a host institution</a></div>
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
  ${sectionHead(label, title, note)}
  ${nameGrid(c[key], c[key].length > 18 ? 'compact' : '', {photo: key === 'keynote' ? 'sm' : false})}
</div></section>` : '';
  const groups = c.invitedGroups ? `
<section class="sec tint"><div class="wrap">
  ${sectionHead('Invited','Invited speakers', `${c.invitedGroups.reduce((t,g)=>t+g.list.length,0)} invited speakers, from industry and academia.`)}
  ${c.invitedGroups.map(g=>`
    <h4 class="grp-h">${esc(g.label)}</h4>
    ${nameGrid(g.list, g.list.length > 18 ? 'compact' : '', {photo:'sm'})}`).join('')}
</div></section>` : '';
  return `
${crumb([{t:'Home',h:'#/'},{t:'Conference',h:'#/conference'},{t:'QA'+num}])}
<section class="sec flush" style="padding:0"><div class="wrap">${media('lattice','Photograph from this edition','2400×1000 · JPG','wide')}</div></section>
<section class="phero" style="padding-top:34px"><div class="wrap">
  <div class="phero-meta" style="margin:0 0 16px">
    <span class="tag">Edition ${esc(c.n)}</span>
    <span class="pill ${c.latest?'current':'future'}">${c.latest?'Most recent':'Past edition'}</span>
    <span class="pill current">${people} people on record</span>
  </div>
  <h1 style="font-size:clamp(2rem,4vw,3.2rem)">Quantum Africa ${num}</h1>
  <p class="lede">${esc(c.city)}, ${cCountry(c.country)} · ${esc(c.dates)}</p>
  ${c.venue?`<p class="small mt16">${esc(c.venue)}</p>`:''}
</div></section>

${c.plenary?`
<section class="sec inv">
  ${patternPanel('soft')}
  <div class="wrap">
    <div class="sec-idx"><span class="n">—</span><span class="lbl">Plenary speakers</span><i></i></div>
    ${nameGrid(c.plenary,'big',{photo:'lg'})}
  </div>
</section>`:''}

${block('keynote','Keynotes','Keynote speakers', c.keynote?`${c.keynote.length} keynote talks.`:null, c.plenary?'':'')}
${c.invited?`
<section class="sec inv">
  ${patternPanel('soft')}
  <div class="wrap">
    <div class="sec-idx"><span class="n">—</span><span class="lbl">${esc(c.invitedLabel||'Invited speakers')}</span><i></i></div>
    ${nameGrid(c.invited, '', {photo:'sm'})}
  </div>
</section>`:''}
${groups}
${block('steering','Committee','Steering committee','As listed on this edition’s page.','tint')}
${block('ipc','Committee','Programme committee',null,'')}
${c.loc?`
<section class="sec tint"><div class="wrap">
  ${sectionHead('Committee', c.locLabel||'Organising committee', c.locNote || (c.loc.length>20?`${c.loc.length} members.`:null))}
  ${nameGrid(c.loc, c.loc.length > 18 ? 'compact' : '')}
</div></section>`:''}

${c.sponsors?`
<section class="sec"><div class="wrap">
  ${sectionHead('Sponsors','Supported by')}
  <div class="logo-wall">${c.sponsors.map(x=>`<div class="logo-cell"><span class="mk"></span>${esc(x)}</div>`).join('')}</div>
</div></section>`:''}

<section class="sec"><div class="wrap"><div class="side">
  <div class="prose">
    <h3>About this edition</h3>
    <p>Quantum Africa ${num} was held in ${esc(c.city)}, ${cCountry(c.country)}, ${esc(c.dates)}.</p>
    <h3>Programme</h3><p>${pht('Session titles, talk titles and schedule')}</p>
    <h3>Photographs</h3>
    <div class="grid g3 mt16">${['circuit','wave','network'].map(k=>media(k,'Conference photograph','1200×800 · JPG','short')).join('')}</div>
    <h3>Portraits and profiles</h3>
    <p>${pht('Every speaker and committee member above has an empty portrait slot and an empty profile link. Supply a 600×600 JPG and a URL — personal page, university page, ORCID or Google Scholar — per person. Use only photographs you have permission to publish.')}</p>
  </div>
  <aside>
    <div class="panel"><h5>At a glance</h5><dl class="dl-list">
      <div class="dl-item"><dt>Edition</dt><dd>QA${num}</dd></div>
      <div class="dl-item"><dt>Dates</dt><dd>${esc(c.dates)}</dd></div>
      <div class="dl-item"><dt>City</dt><dd>${esc(c.city)}</dd></div>
      <div class="dl-item"><dt>Country</dt><dd>${cCountry(c.country)}</dd></div>
      ${c.host?`<div class="dl-item"><dt>Host</dt><dd>${esc(c.host)}</dd></div>`:''}
      ${c.plenary?`<div class="dl-item"><dt>Plenary</dt><dd>${c.plenary.length}</dd></div>`:''}
      ${c.keynote?`<div class="dl-item"><dt>Keynotes</dt><dd>${c.keynote.length}</dd></div>`:''}
      ${c.invited?`<div class="dl-item"><dt>Invited</dt><dd>${c.invited.length}</dd></div>`:''}
      ${c.invitedGroups?`<div class="dl-item"><dt>Invited</dt><dd>${c.invitedGroups.reduce((t,g)=>t+g.list.length,0)}</dd></div>`:''}
      ${c.ipc?`<div class="dl-item"><dt>Programme cttee</dt><dd>${c.ipc.length}</dd></div>`:''}
      ${c.loc?`<div class="dl-item"><dt>Organisers</dt><dd>${c.loc.length}</dd></div>`:''}
    </dl></div>
    <div class="panel mt16"><h5>The series</h5>
      <a class="link-a" href="#/conference" style="display:flex">All seven editions <span class="ar" aria-hidden="true">&rarr;</span></a>
    </div>
  </aside>
</div></div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead('Series','Other editions',null,{t:'Full timeline',h:'#/conference'})}
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
  <div class="sec-idx"><span class="lbl">Support us</span><i></i></div>
  <h1 class="mt24">Pledge your support.</h1>
  <p class="lede">Quantum Africa runs on people who decide to help. There is more than one way to do that, and not all of them cost money.</p>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead('Ways in','Pick the one that fits','Every pledge is a conversation first. Tell us what you can offer and we will come back to you about what it would actually involve.')}
  <div class="grid g3">
    ${[['01','Fund a programme','Underwrite a workshop, a cohort of students, or a year of the AI Tutor.','Organisations and individuals'],
       ['02','Sponsor a student','Cover a conference fee, travel, or the cost of a masters application.','Individuals'],
       ['03','Host or co-organise','Bring a school or workshop to your campus. We bring the programme and the network.','Universities'],
       ['04','Mentor','An hour a month with a student or early-career researcher.','Researchers and professionals'],
       ['05','Teach','Give a webinar, run a session, or review our teaching material.','Anyone with something to teach'],
       ['06','Open a door','Introduce us to a lab, a funder, a company or a ministry.','Anyone'],
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
    <h3>Make a pledge</h3>
    <p>Fill this in and someone will reply personally. Nothing is published without your agreement.</p>
    <div class="form mt24">
      <div class="grid g2">
        <div class="field"><label>Your name</label><input placeholder="Name"></div>
        <div class="field"><label>Email</label><input placeholder="you@example.com"></div>
      </div>
      <div class="grid g2">
        <div class="field"><label>Organisation <span class="opt">optional</span></label><input placeholder="University, company or none"></div>
        <div class="field"><label>Country</label><select><option>Select…</option>${CHAPTERS.map(c=>`<option>${esc(c.name)}</option>`).join('')}<option>Other</option></select></div>
      </div>
      <div class="field"><label>What are you offering?</label>
        <select><option>Select…</option>
          ${['Funding a programme','Sponsoring a student','Hosting or co-organising','Mentoring','Teaching or speaking','An introduction','Something else'].map(o=>`<option>${esc(o)}</option>`).join('')}
        </select>
      </div>
      <div class="field"><label>Tell us more</label><textarea rows="4" placeholder="What you have in mind, and any constraints we should know about."></textarea></div>
      <button class="btn teal">Send my pledge <span class="ar" aria-hidden="true">&rarr;</span></button>
      <p class="xs mt16">${pht('WIRE THIS FORM UP — endpoint, autoresponder and where submissions land. Until then it does nothing.')}</p>
    </div>
  </div>
  <aside>
    <div class="panel"><h5>Giving money</h5>
      <p class="small">${cx('support.donation', pht('DONATION DETAILS — bank account, payment link, registered status and any tax position. Do not publish a donate button until this is real and the legal entity is confirmed.'))}</p>
    </div>
    <div class="panel mt16"><h5>Where support goes</h5>
      <dl class="dl-list">
        <div class="dl-item"><dt>Programmes</dt><dd>${cval('support.splitProgrammes')!=='' ? cval('support.splitProgrammes')+'%' : pht('%')}</dd></div>
        <div class="dl-item"><dt>Student costs</dt><dd>${cval('support.splitStudents')!=='' ? cval('support.splitStudents')+'%' : pht('%')}</dd></div>
        <div class="dl-item"><dt>Operations</dt><dd>${cval('support.splitOperations')!=='' ? cval('support.splitOperations')+'%' : pht('%')}</dd></div>
      </dl>
      <p class="xs mt16">${pht('Publish a real breakdown, or remove this panel. An invented split is worse than none.')}</p>
    </div>
    <div class="panel mt16"><h5>Partnering instead?</h5>
      <a class="link-a" href="#/partners" style="display:flex">Institutional partnerships <span class="ar" aria-hidden="true">&rarr;</span></a>
    </div>
  </aside>
</div></div></section>

<section class="cta-band">
  ${patternPanel('soft')}
  ${africaWatermark('wm-cta')}
  <div class="wrap"><div class="hero-eye">Thank you</div>
    <h2 class="mt24">Every pledge is a door<br>opening for someone.</h2>
    <div class="btns"><a class="btn teal" href="#/contact">Talk to us first <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn inv ghost" href="#/impact">See what we have done</a></div>
  </div>
</section>`;

/* ---------- OPPORTUNITIES ---------- */
const oppPick = (n) => allOpps().filter(o=>o.status!=='Closed').slice(0,n);

PAGES.opportunities = () => {
  const africa = allOpps().filter(o=>o.africa);
  return `
${crumb([{t:'Home',h:'#/'},{t:'Opportunities'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">Opportunities</span><i></i></div>
  <h1 class="mt24">Your Quantum Journey Starts Here</h1>
  <p class="lede">Every quantum PhD, postdoc, masters and industry role we can find, in one list — with anything based in Africa pushed to the top.</p>
  <p class="feed-note" id="opFeed">Loading the latest listings…</p>
</div></section>

<section class="sec flush" style="padding-bottom:0"><div class="wrap">
  <div class="af-panel">
    <div class="af-head">
      <span class="af-b lg">Africa</span>
      <div>
        <h3>Based in Africa</h3>
        <p class="small">Positions hosted at African institutions. These are rare — that is exactly why they sit here rather than buried in the list.</p>
      </div>
    </div>
    ${africa.length
      ? `<div class="opps">${africa.map(oppRow).join('')}</div>`
      : `<div class="af-empty"><h4>Nothing on the boards right now</h4><p class="small">No African-hosted position is currently listed on any of the three sources. The feed checks again every morning.</p></div>`}
    ${africa.length && !africa.some(o=>o.status!=='Closed')
      ? `<p class="xs mt16">All African listings in the current feed have passed their deadline. They stay visible so you can see who is hiring in quantum on the continent, and approach the group directly.</p>` : ''}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead('All listings','Search everything','Filters combine — pick a type, a region and a status together, or type a keyword.')}
  <div class="filters opp-filters" data-filter="opps">
    <div class="fgroup wide"><span class="fl">Search</span>
      <input class="opp-q" id="opQ" type="search" placeholder="Title, institution, city, country…" autocomplete="off">
    </div>
    <div class="fgroup"><span class="fl">Region</span>
      ${['All','Africa','Rest of world'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="reg" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">Type</span>
      ${['All'].concat(OPP_TYPES).map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="type" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">Status</span>
      ${['All','Open','Closing soon','Closed'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="st" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">Source</span>
      ${['All'].concat(Object.keys(OPP_SOURCES).map(k=>OPP_SOURCES[k].name)).map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="src" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">Sort</span>
      ${['Africa first','Deadline','A–Z'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="sort" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
  </div>
  <div class="opp-bar">
    <div class="result-n" id="opCount">${allOpps().length} listings</div>
    <button class="chip clear" id="opClear">Clear filters</button>
  </div>
  <div class="opps" id="opRows">${allOpps().map(oppRow).join('')}</div>

  <div class="grid g2 mt48">
    <div class="panel">
      <h5>Where this comes from</h5>
      <p class="small">Listings are collected automatically from ${Object.keys(OPP_SOURCES).map(k=>`<a class="link-a in" href="${esc(OPP_SOURCES[k].url)}" target="_blank" rel="noopener noreferrer">${esc(OPP_SOURCES[k].name)}</a>`).join(', ')}. Quantum Africa does not administer any of them — every card links straight to the original posting, where you apply.</p>
    </div>
    <div class="panel">
      <h5>Submit an opportunity</h5>
      <p class="small">Running a programme open to African applicants, or hiring in quantum on the continent? Send it to us and it goes in the list — the boards above rarely carry African positions.</p>
      <a class="btn sm mt16" href="#/contact">Submit an opportunity <span class="ar" aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead('Worldwide','Conferences, workshops and summer schools','The same collection, for events rather than posts: gathered from the quantum community calendars, linking straight to the organisers. Anything hosted in Africa sits at the top.')}
  <p class="feed-note" id="evFeed">Loading the calendar…</p>

  <div class="filters opp-filters mt24" data-filter="evtfeed">
    <div class="fgroup wide"><span class="fl">Search</span>
      <input class="opp-q" id="evQ" type="search" placeholder="Event, city, country…" autocomplete="off">
    </div>
    <div class="fgroup"><span class="fl">Region</span>
      ${['All','Africa','Online','Rest of world'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="reg" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">Type</span>
      ${['All'].concat(EVT_TYPES).map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="type" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">When</span>
      ${['Upcoming','Running now','Past','All'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="when" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">Sort</span>
      ${['Africa first','Date','A–Z'].map((a,i)=>`<button class="chip ${i===0?'on':''}" data-k="sort" data-v="${esc(a)}">${esc(a)}</button>`).join('')}
    </div>
  </div>
  <div class="opp-bar">
    <div class="result-n" id="evfCount"></div>
    <button class="chip clear" id="evClear">Clear filters</button>
  </div>
  <div class="opps" id="evfRows"></div>

  <div class="panel mt48">
    <h5>Running something in Africa?</h5>
    <p class="small">These calendars carry very few African events. If your department, chapter or partner is hosting a school, workshop or conference on the continent, send it to us — it goes straight in, above everything else on this list.</p>
    <a class="btn sm mt16" href="#/contact">Submit an event <span class="ar" aria-hidden="true">&rarr;</span></a>
  </div>
</div></section>`;
};


/* ---------- PEOPLE ---------- */
function mediaUrl(v){
  if(!v) return '';
  if(/^(https?:|data:)/.test(v)) return v;
  return FEED.base ? FEED.base.replace(/\/api$/, '/') + v : v;
}
/* ---------- photos and videos ----------
   A media item from the admin panel is one of three things, and everything on
   the page asks these helpers which, rather than guessing from a file name. */
function mKind(m){
  if(!m) return 'none';
  if(m.videoUrl) return 'embed';
  if(m.video)    return 'video';
  if(m.image)    return 'image';
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
  if(y) return `https://www.youtube-nocookie.com/embed/${y}?autoplay=1&rel=0`;
  const v = vimeoId(u);
  if(v) return `https://player.vimeo.com/video/${v}?autoplay=1`;
  return '';
}
/* The still we show before anyone presses play: the picture you uploaded, or
   YouTube's own thumbnail if you only gave us a link. */
function mPoster(m){
  if(m && m.image) return mediaUrl(m.image);
  const y = m && ytId(m.videoUrl);
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
  <div class="sec-idx"><span class="lbl">Team</span><i></i></div>
  <h1 class="mt24">The people behind<br>Quantum Africa.</h1>
  <p class="lede">A network is only its people. Everyone here writes their own entry — we do not describe anyone on their behalf.</p>
</div></section>

${PEOPLE_GROUPS.map(([g, note], gi) => `
<section class="sec ${gi % 2 ? 'tint' : ''}"><div class="wrap">
  ${sectionHead(g, g, note)}
  <div class="grid g4 pgrid">${PEOPLE.filter(p => p.group === g).map(personCard).join('')}</div>
</div></section>`).join('')}

<section class="sec"><div class="wrap">
  ${sectionHead('Everyone else','The wider community','Leadership is a handful of people. The network is four hundred and counting.')}
  <div class="grid g3">
    ${[['400+','Members','Across the continent and the diaspora.'],
       ['7','Chapters','Each with its own team.'],
       ['52','Countries reached','Members, attendees and collaborators.']
      ].map(([n,k,d])=>`<div class="pillar rv"><span class="pi">${esc(n)}</span><h3 style="font-size:1.22rem">${esc(k)}</h3><p>${esc(d)}</p></div>`).join('')}
  </div>
  <div class="panel mt48">
    <h5>Member directory</h5>
    <p class="small">Members who opt in appear in a searchable directory with their country, institution and research interests. ${pht('Opt-in only — needs a consent field in the CMS and a privacy note before it goes live.')}</p>
  </div>
</div></section>

<section class="cta-band">
  ${patternPanel('soft')}
  ${africaWatermark('wm-cta')}
  <div class="wrap"><div class="hero-eye">Join them</div>
    <h2 class="mt24">There is room here<br>for what you do.</h2>
    <div class="btns"><a class="btn teal" href="#/join">Join Quantum Africa <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn inv ghost" href="#/support">Pledge your support</a></div>
  </div>
</section>`;

/* ---------- PARTNERS ---------- */
PAGES.partners = () => `
${crumb([{t:'Home',h:'#/'},{t:'Partners'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">Partners</span><i></i></div>
  <h1 class="mt24">Partner With Quantum Africa</h1>
  <p class="lede">Institutions building Africa's quantum workforce with us.</p>
  <div class="phero-meta"><a class="btn teal sm" href="#/contact">Let's collaborate</a></div>
</div></section>
${PARTNER_CATS.map(cat=>`
<section class="sec"><div class="wrap">
  ${sectionHead(cat,cat+' partners')}
  <div class="grid g4">${Array.from({length:4}).map(()=>`<div class="card pad rv"><div class="ph-logo">PARTNER LOGO</div><div class="card-b" style="padding:16px 0 0"><h4>${pht('Partner name')}</h4><p>${pht('One line on the collaboration')}</p></div></div>`).join('')}</div>
</div></section>`).join('')}
<section class="sec tint"><div class="wrap">
  ${sectionHead('Become a partner','Six ways to work with us')}
  <div class="grid g3">
    ${[['Universities','Workshops, faculty training, student bootcamps, guest lectures, curriculum support and student chapters.'],
       ['Research institutions','Joint research projects, co-supervision, shared infrastructure and researcher mobility.'],
       ['Industry','Talent pipelines, internships, technical talks, tooling access and sponsored research.'],
       ['Governments','National quantum readiness, workforce development and policy input.'],
       ['Foundations','Funding education, research and chapter development with measurable outcomes.'],
       ['International organisations','Connecting African talent to global programmes, conferences and networks.']
      ].map(([t,d])=>`<div class="card pad rv"><div class="card-b"><h4>${esc(t)}</h4><p>${esc(d)}</p></div></div>`).join('')}
  </div>
</div></section>
<section class="cta-band">
  ${ringMark('cta-ring')}
  <div class="wrap"><h2>Let&rsquo;s collaborate.</h2>
  <div class="btns"><a class="btn teal" href="#/contact">Start a conversation</a><a class="btn inv ghost" href="#/universities">For universities</a></div>
</div></section>`;

/* ---------- FOR UNIVERSITIES ---------- */
PAGES.universities = () => `
${crumb([{t:'Home',h:'#/'},{t:'For Universities'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">For universities</span><i></i></div>
  <h1 class="mt24">Partner With Quantum Africa</h1>
  <p class="lede">Quantum education, research and opportunities for your students — without building a programme from scratch.</p>
  <div class="phero-meta"><a class="btn teal sm" href="#/contact">Start a university partnership</a><a class="btn sm ghost" href="#/education">See our programmes</a></div>
</div></section>
<section class="sec flush" style="padding-top:0"><div class="wrap">${media('lattice','Workshop at a university campus','2400×1000 · JPG','wide')}</div></section>
<section class="sec"><div class="wrap">
  ${sectionHead('Why partner','Quantum is arriving faster than curricula can change','The foundations are already there. The route into quantum is not. That is the gap we work in.')}
  <div class="grid g3">
    ${[['Quantum computing workshops','Delivered on your campus or online, for students and staff.','current'],
       ['Faculty training','Preparing your lecturers to teach quantum topics with confidence.','dev'],
       ['Student bootcamps','Intensive short programmes taking students from zero to running circuits.','dev'],
       ['Guest lectures','Speakers from the global quantum ecosystem into your classroom.','current'],
       ['Curriculum support','Help designing quantum modules and choosing teaching materials.','future'],
       ['Research collaboration','Joint projects, co-supervision and access to our research network.','current'],
       ['Student chapters','A Quantum Africa chapter on your campus, run by your students.','current'],
       ['Quantum AI Tutor access','Free access for your students as a learning companion.','dev'],
       ['International connections','Introductions to institutions, conferences and programmes abroad.','future']
      ].map(([t,d,s])=>`<div class="card pad rv"><div class="card-b">
        <div class="card-meta"><span class="pill ${s}">${s==='current'?'Current':s==='dev'?'In development':'Future vision'}</span></div>
        <h4>${esc(t)}</h4><p>${esc(d)}</p></div></div>`).join('')}
  </div>
</div></section>
<section class="sec tint"><div class="wrap">
  ${sectionHead('How it starts','From first conversation to first workshop')}
  ${[['Get in touch','Tell us your department, your students and what you are trying to build.'],
     ['Scoping call','We work out what is realistic in your first year — usually a workshop and a student chapter.'],
     ['Pilot activity','A first workshop or lecture series on your campus, co-organised with your staff.'],
     ['Ongoing partnership','Student chapter, research collaboration, faculty training and access to the wider network.']
    ].map(([t,d],i)=>`<div class="step"><span class="n">0${i+1}</span><div><h4>${esc(t)}</h4><p>${esc(d)}</p></div></div>`).join('')}
</div></section>
<section class="cta-band">
  ${ringMark('cta-ring')}
  <div class="wrap"><h2>Start a university partnership.</h2>
  <div class="btns"><a class="btn teal" href="#/contact">Start a university partnership</a></div>
</div></section>`;

/* ---------- FOR STUDENTS ---------- */
PAGES.students = () => `
${crumb([{t:'Home',h:'#/'},{t:'For Students'}])}
<section class="sec inv flush" style="padding:clamp(56px,7vw,92px) 0">
  ${ringMark('cta-ring')}
  <div class="wrap">
    <div class="sec-idx"><span class="lbl">For students</span><i></i></div>
    <h1 style="max-width:14ch">Start Your Quantum Journey</h1>
    <p class="lede mt24">No lab, no supervisor, no course required. Pick what you are looking for.</p>
  </div>
</section>

<section class="sec flush" style="padding-top:clamp(48px,6vw,80px)"><div class="wrap">
  <div class="chooser">
    ${[['01','Learn','Start with the AI Tutor, then webinars and workshops.','#/education'],
       ['02','Research','Join an open project as a contributor.','#/research'],
       ['03','Internship','Placements open to African students.','#/opportunities'],
       ['04','Scholarship','MSc, PhD and funding, filtered for eligibility.','#/opportunities'],
       ['05','Mentorship','Guidance from people already in the field.','#/join'],
       ['06','Community','Join your chapter — or start one.','#/chapters']
      ].map(([n,t,d,h])=>`<a class="choice rv" href="${h}">
        <span class="n">${n}</span><h3>${esc(t)}</h3><p>${esc(d)}</p>
        <span class="go">Go <span class="ar" aria-hidden="true">&rarr;</span></span>
      </a>`).join('')}
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead('Reality check','What you actually need','Curiosity, some linear algebra, and an internet connection. That is the entry bar.')}
  <div class="grid g3">
    ${[['No prior quantum','Every programme starts from first principles.'],
       ['Any discipline','Physics, maths and computing help. They are not required to begin.'],
       ['Free','Nothing Quantum Africa runs costs students money.']
      ].map(([t,d])=>`<div class="pillar rv"><h3 style="font-size:1.25rem">${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  ${sectionHead('Voices','Students already doing this',null,{t:'Member stories',h:'#/news'})}
  <div class="grid g3">${[0,1,2].map(()=>`<div class="quote rv"><p>${pht('Student quote')}</p>
    <div class="who">${avatar()}<span class="xs">${pht('Name')} · ${pht('University')} · ${pht('Country')}</span></div></div>`).join('')}</div>
</div></section>

<section class="cta-band">
  ${ringMark('cta-ring')}
  <div class="wrap"><div class="hero-eye">Get started</div>
    <h2 class="mt24">Join 400+ people already in the community.</h2>
    <div class="btns"><a class="btn teal" href="#/join">Join Quantum Africa <span class="ar" aria-hidden="true">&rarr;</span></a><a class="btn inv ghost" href="#/education">Browse programmes</a></div>
  </div>
</section>`;

/* ---------- FOR RESEARCHERS ---------- */
PAGES.researchers = () => `
${crumb([{t:'Home',h:'#/'},{t:'For Researchers'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">For researchers</span><i></i></div>
  <h1 class="mt24">Collaborate. Research. Build.</h1>
  <p class="lede">Open projects, open code. Bring one, join one, or supervise students through one.</p>
</div></section>
<section class="sec"><div class="wrap">
  ${sectionHead('Projects','Current research',null,{t:'All projects',h:'#/research'})}
  <div class="grid g2">${PROJECTS.map(projectCard).join('')}</div>
</div></section>
<section class="sec tint"><div class="wrap">
  <div class="grid g4">
    ${[['Open source','Publish code and analysis publicly so results are reproducible and reusable.'],
       ['Research opportunities','Positions, collaborations and calls circulated to the network.'],
       ['Mentorship','Supervise or co-supervise students working on quantum topics.'],
       ['Publications','Papers, preprints and conference contributions from the community.']
      ].map(([t,d])=>`<div class="pillar rv"><h3 style="font-size:1.2rem">${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}
  </div>
</div></section>
<section class="cta-band">
  ${ringMark('cta-ring')}
  <div class="wrap"><h2>Propose a research collaboration.</h2>
  <div class="btns"><a class="btn teal" href="#/contact">Get in touch</a><a class="btn inv ghost" href="#/research">Browse projects</a></div></div></section>`;

/* ---------- NEWS ---------- */
PAGES.news = () => `
${crumb([{t:'Home',h:'#/'},{t:'News & Articles'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">News &amp; articles</span><i></i></div>
  <h1>What the network is doing.</h1>
  <p class="lede">News, chapter updates, member stories and reports.</p>
</div></section>

<section class="sec"><div class="wrap">
  <div class="news-lead">
    ${articleFeature(ARTICLES[0])}
    <div class="news-side">${ARTICLES.slice(1,5).map(articleRow).join('')}</div>
  </div>
</div></section>

<section class="sec tint"><div class="wrap">
  ${sectionHead('Archive','Every article')}
  <div class="filters">
    <div class="fgroup"><span class="fl">Type</span>
      ${['All','News','Chapter update','Member story','Report'].map((a,i)=>`<button class="chip ${i===0?'on':''}">${esc(a)}</button>`).join('')}
    </div>
    <div class="fgroup"><span class="fl">Chapter</span>
      ${['All'].concat(CHAPTERS.map(c=>c.name)).map((a,i)=>`<button class="chip ${i===0?'on':''}">${esc(a)}</button>`).join('')}
    </div>
  </div>
  <div class="result-n">${ARTICLES.length} articles</div>
  <div class="grid g3">${ARTICLES.map(articleCard).join('')}</div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="split">
    <div>
      ${sectionHead('Newsletter','Get it in your inbox','One email a month: what happened, what is coming, and which deadlines are close.')}
    </div>
    <div class="panel">
      <form data-netlify="true" name="newsletter" method="POST" action="/?thanks=1" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="newsletter">
        <p class="sr" hidden><label>Don't fill this out: <input name="bot-field"></label></p>
        <h5>Subscribe</h5>
        <div class="field"><label>Name</label><input name="name" required placeholder="Your name"></div>
        <div class="field"><label>Email</label><input name="email" type="email" required placeholder="you@university.edu"></div>
        <div class="field"><label>Country</label><select name="country" required><option value="">Select…</option>${CHAPTERS.map(c=>`<option value="${esc(c.slug)}">${esc(c.name)}</option>`).join('')}<option value="other">Other</option></select></div>
        <button class="btn teal" type="submit">Subscribe <span class="ar" aria-hidden="true">&rarr;</span></button>
        <div class="form-msg mt16" hidden></div>
        <p class="xs mt16">Your email is handled via Netlify Forms and forwarded to the newsletter team.</p>
      </form>
    </div>
  </div>
</div></section>`;

PAGES.article = () => `
${crumb([{t:'Home',h:'#/'},{t:'News',h:'#/news'},{t:'Article'}])}
<section class="sec flush" style="padding:0"><div class="wrap">${media('network','Article hero image','2400×1000 · JPG','wide')}</div></section>
<section class="sec"><div class="wrap-n">
  <div class="news-meta" style="margin-bottom:20px"><span class="t">${pht('Type')}</span><span>${pht('DATE')}</span><span>${pht('READ TIME')}</span></div>
  <h1 style="font-size:clamp(1.9rem,3.4vw,2.9rem)">${pht('Article headline')}</h1>
  <p class="lede mt16">${pht('Standfirst — one or two sentences')}</p>
  <div class="prose mt32">
    <p>${pht('BODY — the full article, written by the chapter or the author and edited in the CMS.')}</p>
    <p>${pht('BODY continued')}</p>
    <h3>${pht('Subheading')}</h3>
    <p>${pht('BODY continued')}</p>
  </div>
  <div class="panel mt48"><h5>Author</h5>
    <div class="person" style="flex-direction:row;align-items:center;gap:14px">
      <div style="width:48px;flex:none">${avatar()}</div>
      <div><div class="nm" style="font-size:.9rem">${pht('Name')}</div><div class="xs">${pht('Role')} · ${pht('Chapter')}</div></div>
    </div>
  </div>
</div></section>
<section class="sec tint"><div class="wrap">
  ${sectionHead('More','Related articles',null,{t:'All articles',h:'#/news'})}
  <div class="grid g3">${ARTICLES.slice(1,4).map(articleCard).join('')}</div>
</div></section>`;

/* ---------- JOIN ---------- */
PAGES.join = () => `
${crumb([{t:'Home',h:'#/'},{t:'Join'}])}
<section class="phero"><div class="wrap">
  <div class="sec-idx"><span class="lbl">Join</span><i></i></div>
  <h1 class="mt24">Be Part of Africa's Quantum Future.</h1>
  <p class="lede">Free. Tell us who you are and we will point you at the right chapter and people.</p>
</div></section>
<section class="sec"><div class="wrap"><div class="side">
  <div>
    <h3>Membership form</h3>
    <p class="small mt8">Tell us who you are and we will point you at the right chapter and people.</p>
    <form class="mt24" data-netlify="true" name="join" method="POST" action="/?thanks=1" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="join">
      <p class="sr" hidden><label>Don't fill this out: <input name="bot-field"></label></p>
      <div class="grid g2">
        <div class="field"><label>Full name</label><input name="full_name" required placeholder="Your name"></div>
        <div class="field"><label>Email</label><input name="email" type="email" required placeholder="you@university.edu"></div>
        <div class="field"><label>Country</label><select name="country" required><option value="">Select…</option>${CHAPTERS.map(c=>`<option value="${esc(c.slug)}">${esc(c.name)}</option>`).join('')}<option value="other">Other</option></select></div>
        <div class="field"><label>Institution</label><input name="institution" placeholder="University or company"></div>
      </div>
      <div class="field"><label>I am a…</label><select name="role" required><option>Student</option><option>Researcher</option><option>Educator</option><option>Industry professional</option><option>Other</option></select></div>
      <div class="field"><label>What are you looking for?</label><textarea name="message" rows="4" placeholder="Learning, research, mentorship, opportunities, starting a chapter…"></textarea></div>
      <button class="btn teal" type="submit">Join Quantum Africa <span class="ar" aria-hidden="true">→</span></button>
      <div class="form-msg mt16" hidden></div>
    </form>
  </div>
  <aside>
    <div class="panel"><h5>What you get</h5>
      <ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--ink-2);line-height:1.9">
        <li>Invitations to every webinar and workshop</li>
        <li>Opportunities circulated before deadlines</li>
        <li>Access to open research projects</li>
        <li>Your national chapter's community</li>
        <li>The Quantum AI Tutor when it launches</li>
      </ul>
    </div>
    <div class="panel mt16"><h5>Other ways in</h5>
      <a class="link-a" href="#/partners" style="display:flex;margin-bottom:12px">Partner with us <span aria-hidden="true">→</span></a>
      <a class="link-a" href="#/universities" style="display:flex;margin-bottom:12px">Bring us to your university <span aria-hidden="true">→</span></a>
      <a class="link-a" href="#/chapters" style="display:flex">Start a chapter <span aria-hidden="true">→</span></a>
    </div>
  </aside>
</div></div></section>`;

/* ---------- CONTACT / LEGAL ---------- */
PAGES.contact = () => `
${crumb([{t:'Home',h:'#/'},{t:'Contact'}])}
<section class="phero"><div class="wrap"><div class="sec-idx"><span class="lbl">Contact</span><i></i></div>
  <h1 class="mt24">Get in touch.</h1>
  <p class="lede">Partnerships, media, speaking requests or questions.</p>
</div></section>
<section class="sec"><div class="wrap"><div class="side">
  <div>
    <form data-netlify="true" name="contact" method="POST" action="/?thanks=1" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact">
      <p class="sr" hidden><label>Don't fill this out: <input name="bot-field"></label></p>
      <div class="grid g2">
        <div class="field"><label>Name</label><input name="name" required placeholder="Your name"></div>
        <div class="field"><label>Email</label><input name="email" type="email" required placeholder="you@example.com"></div>
      </div>
      <div class="field"><label>Reason</label><select name="reason" required><option>Partnership</option><option>University collaboration</option><option>Media</option><option>Speaking request</option><option>Submit an opportunity</option><option>Other</option></select></div>
      <div class="field"><label>Message</label><textarea name="message" rows="6" required placeholder="How can we help?"></textarea></div>
      <button class="btn teal" type="submit">Send message</button>
      <div class="form-msg mt16" hidden></div>
    </form>
  </div>
  <aside><div class="panel"><h5>Direct</h5><dl class="dl-list">
    <div class="dl-item"><dt>Email</dt><dd><a href="mailto:contact@quantum-africa.org">contact@quantum-africa.org</a></dd></div>
    <div class="dl-item"><dt>LinkedIn</dt><dd><a href="https://www.linkedin.com/company/quantum-africa" target="_blank" rel="noopener">Quantum Africa</a></dd></div>
    <div class="dl-item"><dt>Based in</dt><dd>Pan-African — chapters across the continent</dd></div>
  </dl></div></aside>
</div></div></section>`;

PAGES.legal = () => `
${crumb([{t:'Home',h:'#/'},{t:'Legal'}])}
<section class="sec"><div class="wrap-n">
  <h1 style="font-size:clamp(1.8rem,3vw,2.4rem)">Privacy, Terms &amp; Code of Conduct</h1>
  <div class="prose mt32">
    <h3>Privacy Policy</h3><p>${pht('PRIVACY POLICY — required before collecting emails. Must cover what is collected, why, how long it is kept, and how to request deletion.')}</p>
    <h3>Terms of Use</h3><p>${pht('TERMS OF USE')}</p>
    <h3>Code of Conduct</h3><p>${pht('CODE OF CONDUCT — expected behaviour at events and in community channels, and how to report a problem. Universities and funders will look for this.')}</p>
  </div>
</div></section>`;

/* ---------- STYLE GUIDE ---------- */
PAGES.styleguide = () => `
${crumb([{t:'Home',h:'#/'},{t:'Design system'}])}
<section class="phero"><div class="wrap"><div class="sec-idx"><span class="lbl">Design system</span><i></i></div>
  <h1 class="mt24">The system this site is built from.</h1>
  <p class="lede">Midnight Blue is structural, Polished Gold is the signature accent, Teal Green carries secondary actions, and Warm Neutral holds the editorial space \u2014 the Visual Identity Guide, applied.</p>
</div></section>
<section class="sec"><div class="wrap">
  ${sectionHead('Colour','Palette')}
  <div class="grid g4">
    ${[['Midnight Blue','#001F3F','Structural — headings, navigation, dark sections, the map'],['Polished Gold','#C9A55B','Signature accent — primary CTAs, rules, premium highlights'],['Teal Green','#007736','Secondary interaction — labels, links, secondary actions'],['Warm Neutral','#F3EFE6','Editorial bands and card surfaces'],
       ['Gold light','#E2C68C','Accents on midnight blue and black'],['Ink 2','#4A5768','Body copy'],['Ink 3','#8A8F97','Labels and meta'],['Page','#FBF9F4','Warm page ground']
      ].map(([n,h,u])=>`<div class="card"><div style="height:76px;background:${h};border-bottom:1px solid var(--line)"></div><div style="padding:14px"><div style="font-weight:600;font-size:.88rem">${n}</div><div class="kv">${h}</div><div class="xs mt8">${u}</div></div></div>`).join('')}
  </div>
  <div class="mt24"><div style="height:6px;background:var(--grad-line)"></div><p class="xs mt8">Midnight Blue to Polished Gold. The 3px page rule, section numbers and statistics — never a background wash.</p></div>

  <div class="mt48">${sectionHead('Type','Gotham, with Poppins standing in')}
    <div class="card pad"><div style="font-family:var(--f);font-weight:500;font-size:clamp(2rem,4vw,3.4rem);letter-spacing:-.04em;line-height:1.02">We are building Africa’s quantum ecosystem.</div>
      <p class="xs mt8">Poppins 500 — display and headings, matching the logo wordmark.</p></div>
    <div class="card pad mt16"><p style="max-width:62ch;color:var(--ink-2)">One family carries everything — headings, body copy, labels and figures. Gotham is the brand face; Poppins stands in until the licensed Gotham web fonts are dropped into <code>assets/fonts/</code>, at which point the whole site switches over with no other change.</p>
      <p class="xs mt8">Gotham 400 — body. Poppins 400 while the files are missing.</p></div>
    <div class="card pad mt16"><div class="mono" style="font-size:.86rem;color:var(--ink-2);letter-spacing:.04em">DZ · EG · MA · NG · MR · ZM · UG &nbsp; | &nbsp; 12 NOV 2026 · 16:00 GMT+1 &nbsp; | &nbsp; STATUS: ACTIVE</div>
      <p class="xs mt8">Gotham 600, uppercase, wide tracking — dates, country codes, statuses and every machine-readable value.</p></div>
  </div>

  <div class="mt48">${sectionHead('Status','The evidence system','Required on every programme, chapter and project. It is what keeps ambition from reading as achievement.')}
    <div style="display:flex;gap:12px;flex-wrap:wrap"><span class="pill current">Current</span><span class="pill dev">In development</span><span class="pill future">Future vision</span><span class="pill">Status ?</span></div>
  </div>

  <div class="mt48">${sectionHead('Buttons','Actions')}
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
      <button class="btn teal">Primary — gold <span class="ar">→</span></button>
      <button class="btn">Midnight blue</button>
      <button class="btn ghost">Tertiary</button>
      <button class="btn sm ghost">Small</button>
      <a class="link-a" href="#/styleguide">Text link <span aria-hidden="true">→</span></a>
    </div>
  </div>

  <div class="mt48">${sectionHead('Placeholders','Everything you need to supply','Four placeholder types, all deliberately loud. Use the "Highlight placeholders" control at the bottom right to make every one of them jump off the page.')}
    <div class="grid g3">
      ${ph('IMAGE','Image slot','Says what the photo should show, its size and where the file goes')}
      <div class="card" style="padding:22px"><p class="small">Inline text: ${pht('TEXT — what to write here')}</p><p class="small mt16">Avatar:</p><div style="width:70px">${avatar()}</div></div>
      <div class="card" style="padding:22px"><p class="small">Logo slot:</p><div class="ph-logo mt8">PARTNER LOGO</div><p class="small mt16">Unverified figure:</p><div class="stat" style="border:0;padding:0"><div class="n tbd">[ ?? ]</div><span class="u"></span><div class="l">Countries reached</div></div></div>
    </div>
  </div>

  <div class="mt48">${sectionHead('Cards','One shell, eight variants')}
    <div class="grid g3">${eventCard(EVENTS[0])}${projectCard(PROJECTS[0])}${chapterCard(CHAPTERS[3])}</div>
  </div>
</div></section>`;

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
  [/^\/news\/(.+)$/,               () => PAGES.article()],
  [/^\/join$/,                     () => PAGES.join()],
  [/^\/contact$/,                  () => PAGES.contact()],
  [/^\/legal$/,                    () => PAGES.legal()],
  [/^\/styleguide$/,               () => PAGES.styleguide()],
];

function currentPath(){
  const h = location.hash.replace(/^#/, '');
  return h || '/';
}
function render(){
  const path = currentPath();
  __sec = 0;
  let html = null;
  for(const [re, fn] of ROUTES){
    const m = path.match(re);
    if(m){ html = fn(m); break; }
  }
  const view = document.getElementById('view');
  view.innerHTML = html === null ? PAGES.notFound() : html;
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
    <a class="dl" href="#/contact">Contact</a>
    <a class="dl" href="#/styleguide">Design system</a>`;
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
let slideTimer = null, slideIdx = 0;
function initSlider(){
  const stage = document.getElementById('stage');
  if(!stage) return;
  const slides = [...stage.querySelectorAll('.slide')];
  const dots = document.getElementById('dots');
  const cap = document.getElementById('slideCap');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.body.classList.contains('no-motion');
  slideIdx = 0;
  dots.innerHTML = slides.map((_,i)=>`<button class="dot-btn ${i===0?'on':''}" data-i="${i}" role="tab" aria-label="Slide ${i+1} of ${slides.length}"></button>`).join('');

  function go(i){
    slideIdx = (i + slides.length) % slides.length;
    slides.forEach((s,n)=>s.classList.toggle('on', n===slideIdx));
    [...dots.children].forEach((d,n)=>{ d.classList.remove('on'); if(n===slideIdx){ void d.offsetWidth; d.classList.add('on'); }});
    const meta = HERO_SLIDES[slideIdx] || {};
    cap.textContent = `Slide ${slideIdx+1} of ${slides.length} — ${meta.caption || meta.t || ''}`;
  }
  /* A video slide holds the stage until it ends; photos get ~2.5s so the
     hero rotates briskly without racing past readable copy. Videos are
     muted/inline and respect prefers-reduced-motion. */
  function stopAll(){
    stage.querySelectorAll('[data-hero-video]').forEach(v => { v.pause(); });
  }
  function playActive(){
    if(reduced) return;
    const v = slides[slideIdx] && slides[slideIdx].querySelector('[data-hero-video]');
    if(!v) return false;
    v.currentTime = 0;
    const p = v.play();
    if(p && p.catch) p.catch(()=>{});     // a browser may refuse; the poster stays
    return true;
  }
  function play(){
    if(reduced) return;
    clearInterval(slideTimer);
    stopAll();
    const isVideo = playActive();
    // Fall back to the timer even for video, in case it never fires 'ended'.
    slideTimer = setInterval(()=>{ go(slideIdx+1); play(); }, isVideo ? 8000 : 2500);
  }
  stage.querySelectorAll('[data-hero-video]').forEach(v => {
    v.addEventListener('ended', ()=>{
      if(slides[slideIdx] && slides[slideIdx].contains(v)){ go(slideIdx+1); play(); }
    });
  });
  go(0); play();

  dots.onclick = e => { const b = e.target.closest('.dot-btn'); if(b){ go(+b.dataset.i); play(); } };
  document.getElementById('prev').onclick = () => { go(slideIdx-1); play(); };
  document.getElementById('next').onclick = () => { go(slideIdx+1); play(); };
  const hero = stage.closest('.hero');
  hero.addEventListener('mouseenter', ()=>clearInterval(slideTimer));
  hero.addEventListener('mouseleave', play);
  // Nothing plays while the tab is in the background.
  document.addEventListener('visibilitychange', ()=>{
    if(document.hidden){ clearInterval(slideTimer); stopAll(); } else { play(); }
  });
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
        <h4>Chapter</h4>
        <p>${p.chapter ? esc(p.chapter) : pht('Chapter, if any')}</p>
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
function loadContent(){
  if(contentLoading || CONTENT_META.loaded) return;
  contentLoading = true;
  fetch(FEED.content, {cache:'no-store'})
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
    .then(d => {
      const doc = d && (d.content || d);
      if(!doc || typeof doc !== 'object') throw new Error('empty');
      CONTENT = doc;
      CONTENT_META = { loaded:true, updated: d.updated || null };
      rebuildFromContent();
    })
    .catch(()=>{ CONTENT_META.loaded = true; })
    .finally(()=>{ contentLoading = false; });
}

/* Collections that feed data structures rather than single fields have to be
   rebuilt before the page is drawn again. */
function rebuildFromContent(){
  const people = clist('people');
  if(people.length){
    PEOPLE = people.map((p, i) => Object.assign({ slug: p.id || ('p' + (i+1)),
      group: p.group || 'Leadership' }, p));
  }
  const chapters = clist('chapters');
  if(chapters.length){
    CHAPTERS = chapters.map(c => Object.assign({
      slug: (c.name||'chapter').toLowerCase().replace(/[^a-z0-9]+/g,'-'),
      code: (c.code||'').toLowerCase() || null, flag: c.flag || '?' }, c));
  }
  const events = clist('events');
  if(events.length){
    EVENTS = events.map((e, i) => Object.assign({
      slug: e.id || ('ev' + (i+1)), n: e.title || 'Event',
      when: (e.date && e.date >= new Date().toISOString().slice(0,10)) ? 'upcoming' : 'past'
    }, e));
  }
  const projects = clist('projects');
  if(projects.length){
    PROJECTS = projects.map((p, i) => Object.assign({
      slug: p.id || ((p.title||'project').toLowerCase().replace(/[^a-z0-9]+/g,'-')),
      tech: p.tech || [], area: p.area || '', short: p.short || '' }, p));
  }
  const articles = clist('articles');
  if(articles.length){
    // Newest first, so the lead on the homepage really is the latest thing.
    ARTICLES = articles
      .map((a, i) => Object.assign({ slug: a.id || ('a' + (i+1)), art: 'network',
                                     read: a.read || '' }, a))
      .sort((x, y) => String(y.date || '').localeCompare(String(x.date || '')));
  }
  const hero = cval('hero.statements');
  if(Array.isArray(hero) && hero.length){
    HERO_LINES = hero.map(h => ({ a: h.a || '', b: h.b || '', p: h.lede || '' }));
  }
  const slides = cval('hero.slides');
  if(Array.isArray(slides) && slides.length){
    HERO_SLIDES = slides.map((sl, i) => Object.assign(
      { t: sl.caption || ('Slide ' + (i+1)), s: '', f: sl.image || '', art: HERO_ART[i % HERO_ART.length] }, sl));
  }
  /* Opportunities entered by hand are pinned above the collected feed.
     They are kept in their own list, because the jobs feed and the content
     document load independently and either can finish last. */
  OWN_OPPS = clist('opportunities').map(o => ({
    id: 'own-' + (o.title||'').slice(0,24), title: o.title || '', org: o.org || '',
    city: o.city || '', country: o.country || '',
    africa: AFRICA_NAMES.has(String(o.country||'').toLowerCase()),
    type: o.type || 'Industry', deadline: o.deadline || null,
    status: !o.deadline ? 'Open'
      : (o.deadline < new Date().toISOString().slice(0,10) ? 'Closed' : 'Open'),
    source: 'own', url: o.url || '#/contact', own: true,
  }));
  render();
}

let OWN_OPPS = [];
function allOpps(){ return OWN_OPPS.concat(OPPS); }
const AFRICA_NAMES = new Set(['algeria','egypt','morocco','nigeria','mauritania','zambia',
  'uganda','south africa','tunisia','kenya','rwanda','ghana','senegal','ethiopia','cameroon']);
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
      if(home) home.innerHTML = oppPick(5).map(oppRow).join('');
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
    if(el.dataset.done) return;
    el.dataset.done = '1';
    const to = parseFloat(el.dataset.count), suf = el.dataset.suffix || '';
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
  const phBtn = document.getElementById("phToggle");
  phBtn.addEventListener("click", ()=>{
    document.body.classList.toggle('hl-ph');
    phBtn.classList.toggle("on", document.body.classList.contains("hl-ph"));
  });
  const th = document.getElementById('themeToggle');
  th.addEventListener('click', ()=>{
    const cur = document.documentElement.getAttribute('data-theme');
    const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = cur ? (cur === 'dark' ? 'light' : 'dark') : (sysDark ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', next);
    th.classList.toggle('on', true);
  });
  document.getElementById('burger').addEventListener('click', ()=>{
    document.getElementById('drawer').classList.add('open');
    document.body.style.overflow='hidden';
  });
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);
  document.getElementById('drawer').addEventListener('click', e=>{ if(e.target.closest('a')) closeDrawer(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeDrawer(); });
}

/* ---------- boot ---------- */
buildNav();
initControls();

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
      msg.style.cssText = 'padding:10px 14px;border-radius:4px;background:color-mix(in srgb,var(--gold) 20%,transparent);color:var(--ink)';
      msg.textContent = "Could not send right now. Please reload the page and try again, or email contact@quantum-africa.org directly.";
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
  if(reduced){ render(); return; }
  v.classList.add('leaving');
  setTimeout(()=>{ render(); v.classList.remove('leaving'); }, 220);
}
window.addEventListener('hashchange', transition);
const fr = document.getElementById('footRing');
if(fr) fr.innerHTML = ringMark().replace('class="ring "','class="ring"');
render();
