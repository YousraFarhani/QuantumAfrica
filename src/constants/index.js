import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star,
  yousra,
  walid,
  gamal
} from "../assets";


export const navLinks = [
  {
    id: "about-us",
    title: "About Us",
    path: "/#about",  // Hash link for smooth scrolling
    isScroll: true,   // Indicates that this link should use smooth scroll
  },
  {
    id: "research",
    title: "Research",
    path: "/#research-initiatives",  // Hash link for smooth scrolling
    isScroll: true,   // Indicates that this link should use smooth scroll
  },
  {
    id: "events-initiatives",
    title: "Events & Initiatives",
    path: "/event",  // Regular path for separate page
    isScroll: false,  // This is not a scroll link
  },
  {
    id: "chapters",
    title: "Chapters",
    path: "/chapters",  // Regular path for separate page
    isScroll: false,  // This is not a scroll link
  },
  {
    id: "our-team",
    title: "Our Team",
    path: "/our-team",  // Regular path for separate page
    isScroll: false,    // This is not a scroll link
  },
  {
    id: "contact-us",
    title: "Contact Us",
    path: "/#contact",  // Hash link for smooth scrolling
    isScroll: true,   // Indicates that this link should use smooth scroll
  }
];



export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Educational Empowerment and Access",
    content:
      "Establish educational programs, workshops, and certification opportunities to train the next generation of African quantum researchers and professionals, and facilitate access to high-quality learning materials.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Research and Innovation",
    content:
      "Support cutting-edge research in quantum computing and related fields such as quantum cryptography, quantum optimization, and quantum artificial intelligence, with a focus on solving African-specific challenges.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Industry Applications",
    content:
      "Engage with African industries to integrate quantum solutions, enhancing their competitiveness and efficiency in areas such as cryptography, logistics, and pharmaceuticals.",
  },
  {
    id: "feature-4",
    icon: star,
    title: "Global Collaboration",
    content:
      "Establish strong partnerships with leading global quantum institutions, universities, and tech companies, ensuring African researchers and industries can collaborate internationally and access the latest advancements in the field.",
  },
];


export const projectData = [
  {
    title: 'Quantum Research Projects',
    description: 'access to global research networks for African quantum researchers and work on transformative research and open-source projects.',
    img: '/path-to-image.jpg', // Optional image path
  },
  {
    title: 'Quantum for Industry Program',
    description: 'Aimed at helping African industries understand and adopt quantum computing solutions to solve complex problems in sectors such as healthcare, finance, energy, and telecommunications.',
    img: '', // You can leave this blank if no image is needed
  },
  {
    title: 'Women in Quantum',
    description: 'A dedicated initiative to support African women in quantum technology by offering scholarships, mentorship, and leadership opportunities in the quantum field.',
  },
  {
    title: 'Quantum Learning Resource Hub',
    description: 'A centralized portal providing African students and researchers with free or discounted access to quantum learning platforms, research papers, tutorials, and other educational materials, ensuring equitable access to the latest knowledge.',
  },
  {
    title: 'Quantum Education Program',
    description: 'Offers hands-on training in quantum computing, quantum algorithms, and quantum hardware through workshops, online courses, and collaborations with universities, and quantum companies. The program also focuses on providing access to global learning materials, enabling African students and researchers to learn directly from top-tier resources.',
  },
  // Add more projects as needed
]
export const stats = [
  {
    id: "stats-1",
    title: "Researcher",
    value: "10+",
  },
  {
    id: "stats-2",
    title: "Industry Partner",
    value: "5+",
  },
  {
    id: "stats-3",
    title: "Community Partner",
    value: "10+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Contact Us",
        link: "https://www.quantumafric/Contact Us/",
      },
      {
        name: "Terms & Services",
        link: "https://www.quantumafric/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.quantumafrica/help-center/",
      },
      {
        name: "Blog",
        link: "https://www.quantumafrica/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.quantumafrica/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partners",
        link: "https://www.quantumafrica/our-partner/",
      },
      
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/quantumafricaorg/",
  },
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },

  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const teamData = [
  {
    id: 1,
    name: 'Yousra Farhani',
    role: 'Founder & CEO of Quantum Africa',
    img: yousra, // Replace with actual image path
    description: 'Quantum Computing Researcher, Eng, Winner of the Arab Young Pioneers Award in Quantum, and the Quantum Women Rising Star Award',
    socialMedia: [
      {
        id: 'linkedin',
        icon: linkedin,
        link: 'https://www.linkedin.com/in/yousra-farhani-7a416219a/',
      },
      {
        id: 'twitter',
        icon: twitter,
        link: 'https://x.com/FarhaniYousra',
      },
    ],
  },
  {
    id: 2,
    name: 'Walid El Maouaki',
    role: 'Co-founder & CTO of Quantum Africa',
    img: walid, // Replace with actual image path
    description: 'Postdoc Researcher at New York Uiversity of Abu Dhabi, Quantum Machine Learning Researcher',
    socialMedia: [
      {
        id: 'linkedin',
        icon: linkedin,
        link: 'https://www.linkedin.com/in/walid-el-maouaki-8b6328190/',
      },
      {
        id: 'twitter',
        icon: twitter,
        link: 'https://x.com/Walid_Mk99',
      },
    ],
    
  },
  {
    id: 3,
    name: 'Gamal Moneep',
    role: 'HR Lead of Quantum Africa',
    img: gamal, // Replace with actual image path
    description: 'Deep Learning Engineer, postgraduate in Computer Science at Cairo University, IBM Qiskit Advocate and contributor to Egypt’s quantum community',
    socialMedia: [
      {
        id: 'linkedin',
        icon: linkedin,
        link: 'https://www.linkedin.com/in/gamal-moneep/',
      },
      {
        id: 'twitter',
        icon: twitter,
        link: 'https://x.com/zmoneep?s=21&t=GaIxFkoDMMCdFpzMtI84xw',
      },
    ],
    
  },
];

export const chaptersData = [
  {
    id: 'mauritania',
    name: 'Mauritania',
    description: 'Quantum Africa Mauritania Chapter',
    flagCode: 'mr',
    flagUrl: 'https://flagcdn.com/mr.svg',
    status: 'active'
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
    description: 'Quantum Africa Nigeria Chapter',
    flagCode: 'ng',
    flagUrl: 'https://flagcdn.com/ng.svg',
    status: 'active'
  },
  {
    id: 'ethiopia',
    name: 'Ethiopia',
    description: 'Quantum Africa Ethiopia Chapter',
    flagCode: 'et',
    flagUrl: 'https://flagcdn.com/et.svg',
    status: 'active'
  },
  {
    id: 'egypt',
    name: 'Egypt',
    description: 'Quantum Africa Egypt Chapter',
    flagCode: 'eg',
    flagUrl: 'https://flagcdn.com/eg.svg',
    status: 'active'
  },
  {
    id: 'algeria',
    name: 'Algeria',
    description: 'Quantum Africa Algeria Chapter',
    flagCode: 'dz',
    flagUrl: 'https://flagcdn.com/dz.svg',
    status: 'active'
  },
  {
    id: 'morocco',
    name: 'Morocco',
    description: 'Quantum Africa Morocco Chapter',
    flagCode: 'ma',
    flagUrl: 'https://flagcdn.com/ma.svg',
    status: 'active'
  },
];