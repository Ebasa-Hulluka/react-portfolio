import {
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLock,
  FaMobileAlt,
  FaLinkedin,
  FaNodeJs,
  FaProjectDiagram,
  FaReact,
  FaServer,
  FaTelegramPlane,
  FaVideo,
} from 'react-icons/fa';
import {
  SiDocker,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTailwindcss,
} from 'react-icons/si';
import birthImage from '../assets/birth.jpg';
import certificate1 from '../assets/certificate1.jpg';
import certificate2 from '../assets/certificate2.jpg';
import certificate3 from '../assets/certificate3.jpg';
import certificate4 from '../assets/certificate4.png';
import certificate5 from '../assets/certificate5.png';
import certificate6 from '../assets/certificate6.png';
import certificate7 from '../assets/certificate7.png';
import projectManagerImage from '../assets/project manager.png';
import supermarketImage from '../assets/supermarket.jpg';

export const profile = {
  name: 'Ebasa Hulluka ',
  role: 'Full-Stack Web Developer',
  headline: 'Node.js, Express.js, MongoDB, React.js | RESTful APIs & Git',
  email: 'ebasahuluka1@gmail.com',
  phone: '+251949529880',
  location: 'Jimma, Ethiopia',
  summary:
    'I am a Full-Stack Web Developer and Software Engineering student passionate about building modern web applications and solving real-world problems. I specialize in React.js, Node.js, Express.js, MongoDB, and RESTful API development to create responsive and scalable solutions. Beyond development, I also create professional video content and enjoy turning ideas into complete digital products while focusing on clean code, reliability, and great user experiences.',
  credentials: [
    'Software Engineering student at Jimma University',
    'Udacity Programming Fundamentals Nanodegree',
    'freeCodeCamp Responsive Web Design certification, 300+ hours',
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/Ebasa-Hulluka', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ebasa-huluka', icon: FaLinkedin },
    { label: 'Telegram', href: 'https://t.me/ebo1234e', icon: FaTelegramPlane },
  ],
};

export const navItems = [
  'Home',
  'About',
  'Skills',
  'Certifications',
  'Projects',
  'Experience',
  'Services',
  'Testimonials',
  'Contact',
];

export const stats = [
  { value: '300+', label: 'Certified study hours' },
  { value: '8+', label: 'Core technologies' },
  { value: '4', label: 'Service areas' },
];

export const skills = [
  {
    category: 'Frontend Skills',
    icon: FaReact,
    items: [
      { name: 'React.js', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Responsive Web Design', icon: FaHtml5 },
    ],
  },
  {
    category: 'Backend Skills',
    icon: FaNodeJs,
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST API Development', icon: FaServer },
      { name: 'Authentication & Integration', icon: FaLock },
    ],
  },
  {
    category: 'Database Skills',
    icon: FaDatabase,
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'SQL', icon: SiMysql },
      { name: 'Schema Design', icon: FaProjectDiagram },
      { name: 'Data Validation', icon: FaCheckCircle },
    ],
  },
  {
    category: 'Tools & Technologies',
    icon: FaCode,
    items: [
      { name: 'Git & Version Control', icon: FaGitAlt },
      { name: 'Docker', icon: SiDocker },
      { name: 'Postman', icon: SiPostman },
      { name: 'Video Editing Workflows', icon: FaVideo },
    ],
  },
];

export const techIcons = [
  { name: 'React.js', icon: FaReact },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Video Editing', icon: FaVideo },
];

export const certifications = [
  { title: 'Certificate 1', image: certificate1 },
  { title: 'Certificate 2', image: certificate2 },
  { title: 'Certificate 3', image: certificate3 },
  { title: 'Certificate 4', image: certificate4 },
  { title: 'Certificate 5', image: certificate5 },
  { title: 'Certificate 6', image: certificate6 },
  { title: 'Certificate 7', image: certificate7 },
];

export const projects = [
  {
    title: 'Project, Task & Team Management System',
    description:
      'A full-stack project and task management app for organizing projects, assigning tasks, tracking progress, and improving collaboration. It supports five user roles with RBAC, real-time chat, notifications, bug tracking, dashboard analytics, calendar scheduling, JWT authentication, and a responsive UI.',
    image: projectManagerImage,
    stack: ['Node.js', 'ExpressJS', 'React', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/Ebasa-Hulluka/Project-Task-Management-.git',
    live: 'https://example.com/',
  },
  {
    title: 'Birth Certificate Registration System',
    description:
      'A PHP and MySQL web system that reduces queues and paperwork delays for birth certificate services. It includes five dashboards for Admin, Hospital, Kebele, Officer, and User Support workflows, with newborn registration, ID issuing, approval, email support, and QR code generation.',
    image: birthImage,
    stack: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'JavaScript'],
    github: 'https://github.com/Ebasa-Hulluka/birth-certificate-registration-system.git',
    live: 'https://example.com/',
  },
  {
    title: 'RetailFlow - Inventory & Sales Manager',
    description:
      'A full-stack retail dashboard for tracking products, sales, and store operations. Built with a Node and Express API, MongoDB backend, and React + Vite frontend. It includes product CRUD, sales recording, company login, protected routes, and a clean admin UI with Tailwind CSS.',
    image: supermarketImage,
    stack: ['Node.js', 'ExpressJS', 'RESTful API', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/Ebasa-Hulluka/smart-supermarket-system.git',
    live: 'https://example.com/',
  },
];

export const experiences = [
  {
    type: 'Full-Stack Development',
    title: 'Project-Based Developer',
    period: '2024 - Present',
    description:
      'Built responsive full-stack applications using React, Node.js, Express, and MongoDB with tested REST endpoints and clean frontend interfaces.',
  },
  {
    type: 'Internship & Learning',
    title: 'Software Engineering Student',
    period: 'Jimma University',
    description:
      'Developed foundations in software engineering, backend logic, database workflows, and collaborative problem solving through academic and independent projects.',
  },
  {
    type: 'Freelance & Creative',
    title: 'Developer and Video Editor',
    period: 'Ongoing',
    description:
      'Delivered web interfaces and edited YouTube content, promos, short films, and social assets using Premiere Pro, DaVinci Resolve, and Final Cut Pro.',
  },
];

export const services = [
  {
    title: 'Full-Stack Web Development',
    icon: FaCode,
    description:
      'Custom web applications using React, Node.js, Express, and MongoDB with responsive interfaces and maintainable code.',
  },
  {
    title: 'REST API Development',
    icon: FaServer,
    description:
      'Clean API endpoints with database integration, validation, authentication-ready structure, and tested functionality.',
  },
  {
    title: 'Responsive Front-End Interfaces',
    icon: FaFigma,
    description:
      'Mobile-friendly, accessible UI implementation using Tailwind CSS, React components, and modern JavaScript patterns.',
  },
  {
    title: 'Professional Video Editing',
    icon: FaVideo,
    description:
      'YouTube videos, promos, social content, and short films with color grading, audio editing, and narrative-focused cuts.',
  },
];

export const testimonials = [
  {
    name: 'Startup Founder',
    role: 'Web App Client',
    quote:
      'Clear communication, steady delivery, and a final product that worked exactly as expected across mobile and desktop.',
  },
  {
    name: 'Content Creator',
    role: 'Video Editing Client',
    quote:
      'The editing felt professional and intentional, with strong pacing, clean audio, and polished visual flow.',
  },
  {
    name: 'Small Business Owner',
    role: 'Website Client',
    quote:
      'Reliable from start to finish. Expectations were confirmed early, and the delivered site was fast and easy to use.',
  },
];
