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
  walid
} from "../assets";


export const navLinks = [
  {
    id: "about-us",
    title: "About Us",
    path: "/#about",  // Hash link for smooth scrolling
    isScroll: true,   // Indicates that this link should use smooth scroll
  },
  {
    id: "research-initiatives",
    title: "Research & Initiatives",
    path: "/#research-initiatives",  // Hash link for smooth scrolling
    isScroll: true,   // Indicates that this link should use smooth scroll
  },
  {
    id: "events",
    title: "Events",
    path: "/event",  // Regular path for separate page
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
    description: 'Yousra is a Researcher in Quantum Computing and Optimisation at the National Institute of Applied Science INSA Lyon. Her research and leadership have earned her international awards and recognitions, including the Quantum Rising Star Award Finalist for Women in Quantum 2024 and the Young Arab Pioneers Award 2024 in Quantum Computing. Yousra is a passionate advocate for empowering women in technology. As the former president of the Women Techmakers Algiers community and Google Women Techmaker Ambassador, she has been instrumental in encouraging women in Algeria to pursue careers in STEM. Her drive to advance quantum research in Africa led her to found Quantum Africa, her vision is to build a thriving quantum community in Africa and connect quantum researchers and enthusiasts across the region.',
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
    description: 'Walid is a Researcher and a Ph.D. student in quantum machine learning at Hassan II University in Casablanca, Morocco. With a background in physics, Walid’s research focuses on quantum machine learning applications and security. In addition to his academic work, Walid is actively involved in the quantum computing community. He has presented at international conferences and engaged in mentoring through hackathons and internships, helping early-career researchers and developers build expertise in the field. A passionate advocate for inclusivity and diversity in STEM, Walid strives to foster a supportive environment for students from diverse backgrounds. Looking ahead, he is eager to continue his research in quantum machine learning, focusing on addressing some of the field’s most pressing challenges.',
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

];