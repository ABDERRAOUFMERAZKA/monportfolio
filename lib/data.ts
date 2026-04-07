import { Experience, Project, SkillCategory, NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'keolis',
    company: 'Keolis Group',
    role: 'Technical Lead Front-End',
    period: '2019 – Present',
    current: true,
    description: [
      'Translation of business requirements into robust technical front-end architecture',
      'Design of maintainable, scalable solutions aligned with Green IT principles',
      'Mentoring and coaching of cross-functional engineering teams',
      'Conducting thorough code reviews and guiding architectural decisions',
      'Providing technical support across international subsidiaries',
      'Establishing coding standards, best practices and CI/CD pipelines with Azure DevOps',
      'Championing digital accessibility (WCAG 2.1 AA) across all products',
      'Implementing Google Tag Manager tracking strategies',
    ],
    projects: [
      {
        id: 'keolis-corp',
        title: 'Keolis Corporate Website',
        description:
          'Global corporate website for Keolis Group, a world leader in public transport. Built with JAMstack architecture for performance and scalability.',
        stack: ['React', 'Gatsby', 'GraphQL', 'DatoCMS', 'TypeScript'],
        url: 'https://www.keolis.com',
      },
      {
        id: 'voyages-keolis',
        title: 'Voyages Keolis',
        description:
          'Travel booking platform for Keolis passengers — coach travel across France with real-time availability and booking flows.',
        stack: ['React', 'Gatsby', 'GraphQL', 'REST API', 'DatoCMS'],
        url: 'https://voyages.keolis.com',
      },
      {
        id: 'info-voyageurs',
        title: 'Information Voyageurs Factory',
        description:
          'A site factory powering 40+ transport network websites — dynamic, localised passenger information portals built from a single codebase.',
        stack: ['React', 'Gatsby', 'GraphQL', 'TypeScript'],
        url: 'https://www.amelys.fr/',
      },
      {
        id: 'ilevia',
        title: 'Site web filalie keolis lille',
        description:
          "Dump version and RGAA compliance for the subsidiary's website, ensuring accessibility for all users. Implemented WCAG 2.1 AA standards across the site.",
        stack: ['React', 'Next.js', 'Bolt CMS', 'TypeScript', 'WCAG'],
        url: 'https://www.ilevia.fr/',
      },
      {
        id: 'mobile-factory',
        title: 'Mobility on demand – Flutter',
        description:
          'Multi-app mobile for on-demand transport services across France. Scalable architecture enabling rapid white-label deployments.',
        stack: ['Flutter', 'Dart', 'REST APIs', 'Mobile Architecture'],
      },
      {
        id: 'mobile-info-travelers',
        title: 'Mobile information travelers – Flutter',
        description:
          'Mobile app for real-time passenger information. Used across multiple cities, offline-capable and accessible by design.',
        stack: ['Flutter', 'Dart', 'REST APIs', 'Firebase', 'Mobile Architecture'],
      },
      {
        id: 'keolis-keometre',
        title: 'Keolis Keometre',
        description:
          'Mobile application for bus mileage tracking — scan license plates and odometer readings using camera and OCR for automated data capture.',
        stack: ['Flutter', 'Dart', 'Firebase', 'Camera', 'OCR'],
      },
      {
        id: 'keolis-kopilot',
        title: 'Keolis Kopilot',
        description:
          'Driver assistance mobile app — provides real-time decision support with nearby stops and connecting train schedules based on geolocation.',
        stack: ['Flutter', 'Dart', 'Firebase', 'Geolocation', 'Real-time Data'],
      },
      {
        id: 'keolis-soti',
        title: 'Keolis Soti',
        description:
          'Mobile fleet management application — enables centralized control and monitoring of company mobile devices across the organization.',
        stack: ['Flutter', 'Dart', 'Firebase', 'Device Management'],
      },
      {
        id: 'mobile-Oskar',
        title: 'KEOLIS OSKAR - Flutter',
        description:
          'Internal fraud control application for transport inspectors. Real-time data, offline-capable mobile app used across multiple cities.',
        stack: ['Flutter', 'Dart', 'REST APIs', 'MVVM Architecture'],
      },
    ],
    technologies: [
      'React', 'Gatsby', 'Next.js', 'TypeScript', 'GraphQL',
      'Flutter', 'Dart', 'Azure DevOps', 'CI/CD', 'DatoCMS',
      'Google Tag Manager', 'WCAG', 'Green IT',
    ],
  },
  {
    id: 'adomik',
    company: 'Adomik',
    role: 'Front-End Developer',
    period: '2016 – 2019',
    description: [
      'Contributed to the development of the Adomik SaaS ad monetisation analytics platform',
      'Built reusable React component library aligned with product design system',
      'Developed complex data visualisation dashboards for programmatic advertising insights',
      'Wrote comprehensive unit tests using Jest to maintain code quality',
      'Managed static assets deployment via AWS S3',
    ],
    technologies: ['React', 'Redux', 'Recharts', 'D3.js', 'Jest', 'AWS S3', 'JavaScript', 'CSS3'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'keolis-corp',
    title: 'Keolis Corporate Website',
    description:
      'Global corporate website for Keolis Group — one of the world\'s leading public transport operators. JAMstack architecture, multilingual, WCAG compliant.',
    stack: ['React', 'Gatsby', 'GraphQL', 'DatoCMS', 'TypeScript'],
    url: 'https://www.keolis.com',
    featured: true,
  },
  {
    id: 'voyages-keolis',
    title: 'Voyages Keolis',
    description:
      'Coach travel booking platform for Keolis passengers. Real-time seat availability, booking flows and dynamic pricing.',
    stack: ['React', 'Gatsby', 'GraphQL', 'REST API', 'DatoCMS'],
    url: 'https://voyages.keolis.com',
    featured: true,
  },
  {
    id: 'info-voyageurs',
    title: 'Information Voyageurs Factory',
    description:
      'A site factory delivering 40+ transport network websites from a single unified codebase. Dynamic, localised and accessible passenger info portals.',
    stack: ['React', 'Gatsby', 'GraphQL', 'TypeScript'],
    url: 'https://www.amelys.fr/',
    featured: true,
  },
  {
    id: 'ilevia',
    title: 'Site web filalie keolis lille',
    description:
      "Dump version and RGAA compliance for the subsidiary's website, ensuring accessibility for all users. Implemented WCAG 2.1 AA standards across the site.",
    stack: ['React', 'Next.js', 'Bolt CMS', 'TypeScript', 'WCAG'],
    url: 'https://www.ilevia.fr/',
  },
  {
    id: 'mobile-factory',
    title: 'Mobility on demand – Flutter',
    description:
      'White-label Flutter mobile app factory for on-demand transport. Powers multiple iOS & Android apps across different Keolis networks.',
    stack: ['Flutter', 'Dart', 'REST APIs'],
    featured: true,
  },
  {
    id: 'oskar',
    title: 'KEOLIS OSKAR',
    description:
      'Internal fraud control application for transport inspectors. Real-time data, offline-capable mobile app used across multiple cities.',
    stack: ['Flutter', 'Dart', 'REST APIs'],
    featured: true,
  },
    {
    id: 'mobile-info-travelers',
    title: 'Mobile information travelers – Flutter',
    description:
      'Mobile app for real-time passenger information. Used across multiple cities, offline-capable and accessible by design.',
    stack: ['Flutter', 'Dart', 'REST APIs', 'Firebase', 'Mobile Architecture'],
    featured: true,
  },
  {
    id: 'pam75',
    title: 'PAM 75 Platform',
    description:
      'On-demand transport booking platform for people with disabilities in Paris. Accessible by design, WCAG AA compliant.',
    stack: ['Flutter', 'Dart', 'REST APIs'],
    featured: true,
  },
  {
    id: 'keolis-keometre',
    title: 'Keolis Keometre',
    description:
      'Mobile application for bus mileage tracking — scan license plates and odometer readings using camera and OCR for automated data capture.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Camera', 'OCR'],
    featured: true,
  },
  {
    id: 'keolis-kopilot',
    title: 'Keolis Kopilot',
    description:
      'Driver assistance mobile app — provides real-time decision support with nearby stops and connecting train schedules based on geolocation.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Geolocation', 'Real-time Data'],
    featured: true,
  },
  {
    id: 'keolis-soti',
    title: 'Keolis Soti',
    description:
      'Mobile fleet management application — enables centralized control and monitoring of company mobile devices across the organization.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Device Management'],
    featured: true,
  },
  {
    id: 'adomik',
    title: 'Adomik SaaS Dashboard',
    description:
      'Analytics SaaS platform for programmatic advertising. Complex data visualisation dashboards handling millions of ad transaction records.',
    stack: ['React', 'Redux', 'D3.js', 'Recharts', 'Jest', 'AWS S3'],
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '⚡',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Gatsby' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'CSS3 / Sass' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: '📱',
    skills: [
      { name: 'Flutter' },
      { name: 'Dart' },
    ],
  },
  {
    id: 'architecture',
    label: 'Architecture',
    icon: '🏗️',
    skills: [
      { name: 'Design Systems' },
      { name: 'Front-End Architecture' },
      { name: 'Performance Optimization' },
      { name: 'Scalability' },
      { name: 'Accessibility (WCAG)' },
    ],
  },
  {
    id: 'data',
    label: 'Data & Viz',
    icon: '📊',
    skills: [
      { name: 'D3.js' },
      { name: 'Recharts' },
    ],
  },
  {
    id: 'backend-api',
    label: 'Backend & APIs',
    icon: '🔗',
    skills: [
      { name: 'GraphQL' },
      { name: 'REST API' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    icon: '🔧',
    skills: [
      { name: 'Azure DevOps' },
      { name: 'CI/CD' },
      { name: 'AWS S3' },
      { name: 'Green IT' },
    ],
  },
];

export const EXPERTISE_TAGS = [
  'React', 'Next.js', 'Gatsby', 'Flutter', 'TypeScript',
  'GraphQL', 'CI/CD', 'Front-End Architecture',
  'Performance Optimization', 'Accessibility', 'Design Systems',
];
