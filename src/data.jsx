import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Robert Dacian',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'But',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '42 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Romanian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Natal/Brazil',
  },

  {
    id: 7,
    title: 'Phone/WhatsApp : ',
    description: '+55 (84) 99976-9744',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'paxdacian@icloud.com',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Romanian, Portuguese',
  },
];

export const stats = [
  {
    id: 1,
    no: '5+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '30+',
    title: 'UI/UX <br /> Designs',
  },

  {
    id: 4,
    no: '3+',
    title: ' Development  <br /> Platforms',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'PRESENT',
    title: 'Web Designer & Developer <span> Folqi </span>',
    desc: 'Leveraging my web development and design skills, I crafted a smooth and engaging online experience for Folqi, significantly enhancing the company"s online presence, user activity, and overall business growth.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'PRESENT',
    title: 'Digital Marketing <span> Folqi </span>',
    desc: 'Using my digital marketing skills, I managed to improve Folqi"s online brand identity, which in turn increased user interest and engagement.',
  },
  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2017-2021',
    title: 'Web Design & Marketing <span> Freelance </span>',
    desc: 'Through self-learning in web design and marketing, I cultivated the necessary skills to freelance and deliver visually captivating projects that leave a lasting impression on clients and users.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023 - PRESENT',
    title: 'UX/UI Design <span> Noroff University </span>',
    desc: 'Studying UX/UI Design was a key turning point; it enhanced my understanding of design, emphasizing the user"s role in effective interaction.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021-2023',
    title: 'Frontend Development Degree <span> Noroff University</span>',
    desc: 'Diving into front-end web development was enlightening, as it bridged the gap between design and functionality, resulting in a seamless user experience.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016-2021',
    title: 'Self- Learning <span> Udemy, LinkedIn Learning  </span>',
    desc: 'My journey into web design, development, and digital marketing began on Udemy and LinkedIn Learning, pivotal platforms in shaping my expertise.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '90',
  },

  {
    id: 2,
    title: 'CSS',
    percentage: '80',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '60',
  },

  {
    id: 4,
    title: 'React',
    percentage: '60',
  },

  {
    id: 5,
    title: 'Svelte',
    percentage: '40',
  },

  {
    id: 6,
    title: 'Wordpress',
    percentage: '80',
  },

  {
    id: 7,
    title: 'Webflow',
    percentage: '90',
  },

  {
    id: 8,
    title: 'Squarespace',
    percentage: '80',
  },

  {
    id: 9,
    title: 'UX/UI',
    percentage: '90',
  },

  {
    id: 10,
    title: 'Marketing',
    percentage: '90',
  },

  {
    id: 11,
    title: 'SEO',
    percentage: '60',
  },

  {
    id: 12,
    title: 'Photo/Video',
    percentage: '80',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    projectTitle: 'Rainy Days',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Rainy Days',
      },
      {
        icon: <FiExternalLink />,
        title: 'GitHub : ',
        url: 'https://github.com/RobertDacian/Rainy-Days-Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS and JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        url: 'https://rainy-days-project.netlify.app',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    projectTitle: 'Science Museum',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Science Museum',
      },
      {
        icon: <FiExternalLink />,
        title: 'GitHub : ',
        url: 'https://github.com/RobertDacian/Community-Science-Museum-Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML and CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        url: 'https://semester-1-project.netlify.app',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    projectTitle: 'The Reader',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'The Reader',
      },
      {
        icon: <FiExternalLink />,
        title: 'GitHub : ',
        url: 'https://github.com/RobertDacian/The-Reader-Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS and JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        url: 'https://project-exam-one.netlify.app',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    projectTitle: 'Biding Site',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Biding Site',
      },
      {
        icon: <FiExternalLink />,
        title: 'GitHub : ',
        url: 'https://github.com/RobertDacian/semester-project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS and JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        url: 'https://auction.dev-squid.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    projectTitle: 'E-commerce React Site',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'E-commerce React Site',
      },
      {
        icon: <FiExternalLink />,
        title: 'GitHub : ',
        url: 'https://github.com/RobertDacian/Robert-React-CA',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        url: 'https://robert-react-ca.netlify.app',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    projectTitle: 'Holidaze Booking Site',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Holidaze Booking Site',
      },
      {
        icon: <FiExternalLink />,
        title: 'GitHub : ',
        url: 'https://github.com/RobertDacian/Holidaze-project-exam-2',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Website : ',
        url: 'https://holidaze-rob.netlify.app/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },
];
