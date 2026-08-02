import { Experience, Project, SkillCategory } from '@/types';

export const NAV_ITEMS: { key: 'about' | 'experience' | 'skills' | 'projects' | 'contact'; href: string }[] = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'keolis',
    company: 'Keolis Group',
    role: { en: 'Technical Lead Front-End', fr: 'Technical Lead Front-End' },
    period: { en: '2019 – Present', fr: '2019 – Présent' },
    current: true,
    description: [
      {
        en: 'Translation of business requirements into robust technical front-end architecture',
        fr: 'Traduction des besoins métier en architecture technique front-end robuste',
      },
      {
        en: 'Design of maintainable, scalable solutions aligned with Green IT principles',
        fr: 'Conception de solutions maintenables et évolutives, alignées sur le Green IT',
      },
      {
        en: 'Mentoring and coaching of cross-functional engineering teams',
        fr: 'Mentorat et coaching d’équipes d’ingénierie pluridisciplinaires',
      },
      {
        en: 'Conducting thorough code reviews and guiding architectural decisions',
        fr: 'Revues de code approfondies et accompagnement des décisions d’architecture',
      },
      {
        en: 'Providing technical support across international subsidiaries',
        fr: 'Support technique auprès des filiales internationales',
      },
      {
        en: 'Establishing coding standards, best practices and CI/CD pipelines with Azure DevOps',
        fr: 'Mise en place des standards, bonnes pratiques et pipelines CI/CD avec Azure DevOps',
      },
      {
        en: 'Championing digital accessibility (WCAG 2.1 AA) across all products',
        fr: 'Promotion de l’accessibilité numérique (WCAG 2.1 AA) sur tous les produits',
      },
      {
        en: 'Implementing Google Tag Manager tracking strategies',
        fr: 'Mise en œuvre des stratégies de tracking Google Tag Manager',
      },
    ],
    projects: [
      {
        id: 'keolis-corp',
        title: 'Keolis Corporate Website',
        description: {
          en: 'Global corporate website for Keolis Group, a world leader in public transport. Built with JAMstack architecture for performance and scalability.',
          fr: 'Site corporate mondial du groupe Keolis, leader du transport public. Architecture JAMstack pour la performance et la scalabilité.',
        },
        stack: ['React', 'Gatsby', 'GraphQL', 'DatoCMS', 'TypeScript'],
        url: 'https://www.keolis.com',
      },
      {
        id: 'voyages-keolis',
        title: 'Voyages Keolis',
        description: {
          en: 'Travel booking platform for Keolis passengers — coach travel across France with real-time availability and booking flows.',
          fr: 'Plateforme de réservation pour les voyageurs Keolis — trajets en autocar partout en France, disponibilités en temps réel et parcours de réservation.',
        },
        stack: ['React', 'Gatsby', 'GraphQL', 'REST API', 'DatoCMS'],
        url: 'https://voyages.keolis.com',
      },
      {
        id: 'info-voyageurs',
        title: 'Information Voyageurs Factory',
        description: {
          en: 'A site factory powering 40+ transport network websites — dynamic, localised passenger information portals built from a single codebase.',
          fr: 'Une usine à sites propulsant plus de 40 réseaux de transport — portails d’information voyageurs dynamiques et localisés, générés depuis une base de code unique.',
        },
        stack: ['React', 'Gatsby', 'GraphQL', 'TypeScript'],
        url: 'https://www.amelys.fr/',
      },
      {
        id: 'ilevia',
        title: 'Site web filiale Keolis Lille',
        description: {
          en: "Redesign and RGAA compliance for the subsidiary's website, ensuring accessibility for all users. Implemented WCAG 2.1 AA standards across the site.",
          fr: 'Refonte et mise en conformité RGAA du site de la filiale, garantissant l’accessibilité à tous. Standards WCAG 2.1 AA appliqués à l’ensemble du site.',
        },
        stack: ['React', 'Next.js', 'Bolt CMS', 'TypeScript', 'WCAG'],
        url: 'https://www.ilevia.fr/',
      },
      {
        id: 'mobile-factory',
        title: 'Mobility on demand – Flutter',
        description: {
          en: 'Multi-app mobile for on-demand transport services across France. Scalable architecture enabling rapid white-label deployments.',
          fr: 'Application mobile multi-apps pour le transport à la demande en France. Architecture scalable permettant des déploiements white-label rapides.',
        },
        stack: ['Flutter', 'Dart', 'REST APIs', 'Mobile Architecture'],
      },
      {
        id: 'mobile-info-travelers',
        title: 'Mobile information travelers – Flutter',
        description: {
          en: 'Mobile app for real-time passenger information. Used across multiple cities, offline-capable and accessible by design.',
          fr: 'Application mobile d’information voyageurs en temps réel. Déployée dans plusieurs villes, disponible hors ligne et accessible par conception.',
        },
        stack: ['Flutter', 'Dart', 'REST APIs', 'Firebase', 'Mobile Architecture'],
      },
      {
        id: 'keolis-keometre',
        title: 'Keolis Keometre',
        description: {
          en: 'Mobile application for bus mileage tracking — scan license plates and odometer readings using camera and OCR for automated data capture.',
          fr: 'Application mobile de suivi du kilométrage des bus — lecture des plaques et compteurs via caméra et OCR pour une saisie automatisée.',
        },
        stack: ['Flutter', 'Dart', 'Firebase', 'Camera', 'OCR'],
      },
      {
        id: 'keolis-kopilot',
        title: 'Keolis Kopilot',
        description: {
          en: 'Driver assistance mobile app — provides real-time decision support with nearby stops and connecting train schedules based on geolocation.',
          fr: 'Application d’aide à la conduite — aide à la décision en temps réel avec arrêts à proximité et correspondances, basée sur la géolocalisation.',
        },
        stack: ['Flutter', 'Dart', 'Firebase', 'Geolocation', 'Real-time Data'],
      },
      {
        id: 'keolis-soti',
        title: 'Keolis Soti',
        description: {
          en: 'Mobile fleet management application — enables centralized control and monitoring of company mobile devices across the organization.',
          fr: 'Application de gestion de flotte mobile — contrôle et supervision centralisés des terminaux mobiles de l’entreprise.',
        },
        stack: ['Flutter', 'Dart', 'Firebase', 'Device Management'],
      },
      {
        id: 'mobile-Oskar',
        title: 'KEOLIS OSKAR - Flutter',
        description: {
          en: 'Internal fraud control application for transport inspectors. Real-time data, offline-capable mobile app used across multiple cities.',
          fr: 'Application interne de lutte contre la fraude pour les contrôleurs. Données en temps réel, mode hors ligne, déployée dans plusieurs villes.',
        },
        stack: ['Flutter', 'Dart', 'REST APIs', 'MVVM Architecture'],
      },
      {
        id: 'ktf-tarif-solidaire',
        title: 'KTF – Tarif Solidaire Power App',
        description: {
          en: 'Power Apps solution for Keolis Thionville (KTF) agents to instantly verify a passenger’s eligibility for solidarity fares. Integrates the French government “API Particulier” (France K’onnect) to retrieve official income and social status data (job seekers, RSA, professional training, seniors), applying business rules such as the 80% SMIC threshold.',
          fr: 'Solution Power Apps pour les agents de Keolis Thionville (KTF) permettant de vérifier instantanément l’éligibilité d’un voyageur au Tarif Solidaire. Intègre l’« API Particulier » (France K’onnect) de l’État pour récupérer les données officielles de revenus et de statut social (demandeurs d’emploi, RSA, stagiaires de la formation professionnelle, seniors), avec application des règles métier comme le seuil des 80 % du SMIC.',
        },
        stack: ['Power Apps', 'Power Platform', 'API Particulier', 'Power Fx', 'REST API'],
      },
    ],
    technologies: [
      'React', 'Gatsby', 'Next.js', 'TypeScript', 'GraphQL',
      'Flutter', 'Dart', 'Azure DevOps', 'CI/CD', 'DatoCMS',
      'Google Tag Manager', 'WCAG', 'Green IT', 'Power Apps',
    ],
  },
  {
    id: 'adomik',
    company: 'Adomik',
    role: { en: 'Front-End Developer', fr: 'Développeur Front-End' },
    period: { en: '2016 – 2019', fr: '2016 – 2019' },
    description: [
      {
        en: 'Contributed to the development of the Adomik SaaS ad monetisation analytics platform',
        fr: 'Contribution au développement de la plateforme SaaS d’analytics de monétisation publicitaire Adomik',
      },
      {
        en: 'Built reusable React component library aligned with product design system',
        fr: 'Création d’une bibliothèque de composants React réutilisables alignée sur le design system produit',
      },
      {
        en: 'Developed complex data visualisation dashboards for programmatic advertising insights',
        fr: 'Développement de tableaux de bord de dataviz complexes pour la publicité programmatique',
      },
      {
        en: 'Wrote comprehensive unit tests using Jest to maintain code quality',
        fr: 'Rédaction de tests unitaires complets avec Jest pour garantir la qualité du code',
      },
      {
        en: 'Managed static assets deployment via AWS S3',
        fr: 'Gestion du déploiement des assets statiques via AWS S3',
      },
    ],
    technologies: ['React', 'Redux', 'Recharts', 'D3.js', 'Jest', 'AWS S3', 'JavaScript', 'CSS3'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'keolis-corp',
    title: 'Keolis Corporate Website',
    description: {
      en: 'Global corporate website for Keolis Group — one of the world\'s leading public transport operators. JAMstack architecture, multilingual, WCAG compliant.',
      fr: 'Site corporate mondial du groupe Keolis — l’un des leaders du transport public. Architecture JAMstack, multilingue, conforme WCAG.',
    },
    stack: ['React', 'Gatsby', 'GraphQL', 'DatoCMS', 'TypeScript'],
    url: 'https://www.keolis.com',
    featured: true,
  },
  {
    id: 'voyages-keolis',
    title: 'Voyages Keolis',
    description: {
      en: 'Coach travel booking platform for Keolis passengers. Real-time seat availability, booking flows and dynamic pricing.',
      fr: 'Plateforme de réservation d’autocars pour les voyageurs Keolis. Disponibilités en temps réel, parcours de réservation et tarification dynamique.',
    },
    stack: ['React', 'Gatsby', 'GraphQL', 'REST API', 'DatoCMS'],
    url: 'https://voyages.keolis.com',
    featured: true,
  },
  {
    id: 'info-voyageurs',
    title: 'Information Voyageurs Factory',
    description: {
      en: 'A site factory delivering 40+ transport network websites from a single unified codebase. Dynamic, localised and accessible passenger info portals.',
      fr: 'Une usine à sites livrant plus de 40 réseaux de transport depuis une base de code unifiée. Portails d’information voyageurs dynamiques, localisés et accessibles.',
    },
    stack: ['React', 'Gatsby', 'GraphQL', 'TypeScript'],
    url: 'https://www.amelys.fr/',
    featured: true,
  },
  {
    id: 'ilevia',
    title: 'Site web filiale Keolis Lille',
    description: {
      en: "Redesign and RGAA compliance for the subsidiary's website, ensuring accessibility for all users. Implemented WCAG 2.1 AA standards across the site.",
      fr: 'Refonte et mise en conformité RGAA du site de la filiale, garantissant l’accessibilité à tous. Standards WCAG 2.1 AA appliqués à tout le site.',
    },
    stack: ['React', 'Next.js', 'Bolt CMS', 'TypeScript', 'WCAG'],
    url: 'https://www.ilevia.fr/',
  },
  {
    id: 'mobile-factory',
    title: 'Mobility on demand – Flutter',
    description: {
      en: 'White-label Flutter mobile app factory for on-demand transport. Powers multiple iOS & Android apps across different Keolis networks.',
      fr: 'Usine à applications Flutter white-label pour le transport à la demande. Propulse plusieurs apps iOS et Android sur différents réseaux Keolis.',
    },
    stack: ['Flutter', 'Dart', 'REST APIs'],
    featured: true,
  },
  {
    id: 'oskar',
    title: 'KEOLIS OSKAR',
    description: {
      en: 'Internal fraud control application for transport inspectors. Real-time data, offline-capable mobile app used across multiple cities.',
      fr: 'Application interne de lutte contre la fraude pour les contrôleurs. Données en temps réel, mode hors ligne, déployée dans plusieurs villes.',
    },
    stack: ['Flutter', 'Dart', 'REST APIs'],
    featured: true,
  },
  {
    id: 'mobile-info-travelers',
    title: 'Mobile information travelers – Flutter',
    description: {
      en: 'Mobile app for real-time passenger information. Used across multiple cities, offline-capable and accessible by design.',
      fr: 'Application mobile d’information voyageurs en temps réel. Déployée dans plusieurs villes, disponible hors ligne et accessible par conception.',
    },
    stack: ['Flutter', 'Dart', 'REST APIs', 'Firebase', 'Mobile Architecture'],
    featured: true,
  },
  {
    id: 'pam75',
    title: 'PAM 75 Platform',
    description: {
      en: 'On-demand transport booking platform for people with disabilities in Paris. Accessible by design, WCAG AA compliant.',
      fr: 'Plateforme de réservation de transport à la demande pour les personnes en situation de handicap à Paris. Accessible par conception, conforme WCAG AA.',
    },
    stack: ['Flutter', 'Dart', 'REST APIs'],
    featured: true,
  },
  {
    id: 'keolis-keometre',
    title: 'Keolis Keometre',
    description: {
      en: 'Mobile application for bus mileage tracking — scan license plates and odometer readings using camera and OCR for automated data capture.',
      fr: 'Application mobile de suivi du kilométrage des bus — lecture des plaques et compteurs via caméra et OCR pour une saisie automatisée.',
    },
    stack: ['Flutter', 'Dart', 'Firebase', 'Camera', 'OCR'],
    featured: true,
  },
  {
    id: 'keolis-kopilot',
    title: 'Keolis Kopilot',
    description: {
      en: 'Driver assistance mobile app — provides real-time decision support with nearby stops and connecting train schedules based on geolocation.',
      fr: 'Application d’aide à la conduite — aide à la décision en temps réel avec arrêts à proximité et correspondances, basée sur la géolocalisation.',
    },
    stack: ['Flutter', 'Dart', 'Firebase', 'Geolocation', 'Real-time Data'],
    featured: true,
  },
  {
    id: 'keolis-soti',
    title: 'Keolis Soti',
    description: {
      en: 'Mobile fleet management application — enables centralized control and monitoring of company mobile devices across the organization.',
      fr: 'Application de gestion de flotte mobile — contrôle et supervision centralisés des terminaux mobiles de l’entreprise.',
    },
    stack: ['Flutter', 'Dart', 'Firebase', 'Device Management'],
    featured: true,
  },
  {
    id: 'ktf-tarif-solidaire',
    title: 'KTF – Tarif Solidaire Power App',
    description: {
      en: 'Power Apps solution for Keolis Thionville (KTF) agents to instantly verify a passenger’s eligibility for solidarity fares. Integrates the French government “API Particulier” (France K’onnect) to retrieve official income and social status data, applying business rules such as the 80% SMIC threshold and the 65+ non-taxable senior case.',
      fr: 'Solution Power Apps pour les agents de Keolis Thionville (KTF) permettant de vérifier instantanément l’éligibilité d’un voyageur au Tarif Solidaire. Intègre l’« API Particulier » (France K’onnect) de l’État pour récupérer les données officielles de revenus et de statut social, avec application des règles métier comme le seuil des 80 % du SMIC et le cas senior (65 ans et non imposable).',
    },
    stack: ['Power Apps', 'Power Platform', 'API Particulier', 'Power Fx', 'REST API'],
    featured: true,
  },
  {
    id: 'adomik',
    title: 'Adomik SaaS Dashboard',
    description: {
      en: 'Analytics SaaS platform for programmatic advertising. Complex data visualisation dashboards handling millions of ad transaction records.',
      fr: 'Plateforme SaaS d’analytics pour la publicité programmatique. Tableaux de bord de dataviz complexes gérant des millions de transactions publicitaires.',
    },
    stack: ['React', 'Redux', 'D3.js', 'Recharts', 'Jest', 'AWS S3'],
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    label: { en: 'Frontend', fr: 'Frontend' },
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
    label: { en: 'Mobile', fr: 'Mobile' },
    icon: '📱',
    skills: [
      { name: 'Flutter' },
      { name: 'Dart' },
    ],
  },
  {
    id: 'architecture',
    label: { en: 'Architecture', fr: 'Architecture' },
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
    label: { en: 'Data & Viz', fr: 'Data & Viz' },
    icon: '📊',
    skills: [
      { name: 'D3.js' },
      { name: 'Recharts' },
    ],
  },
  {
    id: 'backend-api',
    label: { en: 'Backend & APIs', fr: 'Backend & APIs' },
    icon: '🔗',
    skills: [
      { name: 'GraphQL' },
      { name: 'REST API' },
    ],
  },
  {
    id: 'devops',
    label: { en: 'DevOps', fr: 'DevOps' },
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
