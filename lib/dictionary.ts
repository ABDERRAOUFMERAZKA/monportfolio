import type { Lang } from './i18n';

type Dict = {
  nav: { about: string; experience: string; skills: string; projects: string; contact: string };
  hero: {
    badge: string;
    titleTop: string;
    titleBottom: string;
    roles: string[];
    descriptionStrong: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
    scroll: string;
  };
  about: {
    label: string;
    title: string;
    p1Strong: string;
    p1: string;
    p2: string;
    p3: string;
    currently: string;
    currentRole: string;
    currentCompany: string;
    responsibilities: string[];
    coreExpertise: string;
    quote: string;
    stats: { value: string; label: string }[];
  };
  experience: {
    label: string;
    title: string;
    description: string;
    current: string;
    keyProjects: string;
  };
  skills: {
    label: string;
    title: string;
    description: string;
    bannerPrefix: string;
    bannerItems: string[];
    bannerSuffix: string;
  };
  projects: {
    label: string;
    title: string;
    description: string;
    all: string;
    featured: string;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    cards: { title: string; desc: string }[];
    findMe: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
    errorBody: string;
    errNameRequired: string;
    errEmailRequired: string;
    errEmailInvalid: string;
    errMessageRequired: string;
  };
  footer: { role: string };
};

export const dictionary: Record<Lang, Dict> = {
  fr: {
    nav: { about: 'À propos', experience: 'Expérience', skills: 'Compétences', projects: 'Projets', contact: 'Contact' },
    hero: {
      badge: 'Disponible pour de nouveaux projets',
      titleTop: 'Technical Lead',
      titleBottom: 'Front-End',
      roles: ['Technical Lead Front-End', 'Expert React & Flutter', 'Architecture & Performance'],
      descriptionStrong: '10+ ans d’expérience',
      description:
        ' à concevoir des applications web et mobiles à grande échelle. Spécialisé dans l’écosystème React, les design systems, l’optimisation des performances et le développement mobile avec Flutter.',
      ctaProjects: 'Voir les projets',
      ctaContact: 'Me contacter',
      scroll: 'Défiler',
    },
    about: {
      label: 'À propos',
      title: 'Concevoir des expériences digitales à grande échelle',
      p1Strong: '10 ans d’expérience',
      p1: 'Technical Lead Front-End avec plus de {strong} dans la construction de plateformes web et d’applications mobiles à grande échelle, pour des millions d’utilisateurs.',
      p2: 'Depuis 2019, je porte l’excellence front-end chez {company}, l’un des leaders mondiaux du transport public. Mon rôle va de la traduction de besoins métier complexes en architectures techniques robustes jusqu’au mentorat des équipes et à la définition de bonnes pratiques alignées sur le Green IT.',
      p3: 'Pour moi, un bon front-end ne se limite pas à écrire du code : il s’agit de bâtir des produits accessibles, performants et maintenables qui améliorent réellement le quotidien des gens.',
      currently: 'Actuellement',
      currentRole: 'Technical Lead Front-End',
      currentCompany: 'Keolis Group · 2019 – Présent',
      responsibilities: [
        'Traduction des besoins métier en architecture technique',
        'Conception de solutions maintenables (Green IT)',
        'Mentorat et coaching des équipes d’ingénierie',
        'Revues de code et accompagnement architectural',
        'Support technique aux filiales',
        'Mise en place des standards et bonnes pratiques',
      ],
      coreExpertise: 'Expertises clés',
      quote:
        '« J’ai à cœur de construire des produits rapides, accessibles et agréables — autant pour les utilisateurs que pour les développeurs qui les maintiennent. »',
      stats: [
        { value: '10+', label: 'Années d’expérience' },
        { value: '40+', label: 'Sites transport livrés' },
        { value: '5+', label: 'Apps mobiles publiées' },
        { value: '2', label: 'Grandes marques' },
      ],
    },
    experience: {
      label: 'Expérience',
      title: 'Mon parcours',
      description: 'Une carrière construite sur la livraison de systèmes front-end à grande échelle, en production.',
      current: 'Actuel',
      keyProjects: 'Projets clés',
    },
    skills: {
      label: 'Compétences',
      title: 'Les technologies que j’utilise',
      description: 'Une boîte à outils affinée par des années d’ingénierie en production.',
      bannerPrefix: 'Toujours en veille — j’explore actuellement ',
      bannerItems: ['le développement augmenté par l’IA', 'les Web Components', 'l’Edge computing'],
      bannerSuffix: '.',
    },
    projects: {
      label: 'Projets',
      title: 'Ce que j’ai construit',
      description: 'Une sélection de projets dont je suis fier — des plateformes corporate aux applications mobiles.',
      all: 'Tous les projets',
      featured: 'À la une',
    },
    contact: {
      label: 'Contact',
      title: 'Travaillons ensemble',
      description: 'Un projet en tête ou envie d’échanger ? J’adorerais avoir de vos nouvelles.',
      cards: [
        { title: 'Ouvert aux opportunités', desc: 'Postes de Technical Lead, Staff ou Principal Engineer.' },
        { title: 'Ouvert au conseil', desc: 'Revues d’architecture, audits front-end et missions de coaching.' },
        { title: 'Réponse rapide', desc: 'Je réponds généralement sous 24 heures.' },
      ],
      findMe: 'Retrouvez-moi sur',
      name: 'Nom',
      namePlaceholder: 'Votre nom',
      email: 'E-mail',
      emailPlaceholder: 'votre@email.com',
      message: 'Message',
      messagePlaceholder: 'Parlez-moi de votre projet ou de votre opportunité…',
      send: 'Envoyer le message',
      sending: 'Envoi…',
      successTitle: 'Message envoyé !',
      successBody: 'Merci de votre message. Je reviens vers vous très vite.',
      sendAnother: 'Envoyer un autre message',
      errorBody: 'Une erreur est survenue. Réessayez ou contactez-moi directement à ',
      errNameRequired: 'Le nom est requis.',
      errEmailRequired: 'L’e-mail est requis.',
      errEmailInvalid: 'Saisissez un e-mail valide.',
      errMessageRequired: 'Le message ne peut pas être vide.',
    },
    footer: { role: 'Technical Lead Front-End' },
  },
  en: {
    nav: { about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: {
      badge: 'Available for new projects',
      titleTop: 'Technical Lead',
      titleBottom: 'Front-End',
      roles: ['Technical Lead Front-End', 'React & Flutter Expert', 'Architecture & Performance'],
      descriptionStrong: '10+ years experience',
      description:
        ' building scalable web and mobile applications. Specialized in React ecosystems, design systems, performance optimization and mobile development with Flutter.',
      ctaProjects: 'View Projects',
      ctaContact: 'Contact Me',
      scroll: 'Scroll',
    },
    about: {
      label: 'About Me',
      title: 'Crafting digital experiences at scale',
      p1Strong: '10 years of experience',
      p1: 'Technical Lead Front-End with more than {strong} building large-scale web platforms and mobile applications for millions of users.',
      p2: 'Since 2019, I have been driving front-end excellence at {company}, one of the world’s leading public transport operators. My role spans from translating complex business requirements into robust technical architectures to mentoring engineering teams and defining best practices aligned with Green IT principles.',
      p3: 'I believe great front-end engineering is about more than writing code — it’s about building accessible, performant, and maintainable products that genuinely improve people’s daily lives.',
      currently: 'Currently',
      currentRole: 'Technical Lead Front-End',
      currentCompany: 'Keolis Group · 2019 – Present',
      responsibilities: [
        'Translating business needs into technical architecture',
        'Designing maintainable solutions (Green IT)',
        'Mentoring & coaching engineering teams',
        'Code reviews & architectural guidance',
        'Technical support to subsidiaries',
        'Standards & best practices enforcement',
      ],
      coreExpertise: 'Core Expertise',
      quote:
        '“I’m passionate about building products that are fast, accessible, and delightful to use — both for end users and for the developers maintaining them.”',
      stats: [
        { value: '10+', label: 'Years of Experience' },
        { value: '40+', label: 'Transport Sites Built' },
        { value: '5+', label: 'Mobile Apps Shipped' },
        { value: '2', label: 'Major Group Brands' },
      ],
    },
    experience: {
      label: 'Experience',
      title: 'Where I’ve worked',
      description: 'A career built on delivering large-scale, production-grade front-end systems.',
      current: 'Current',
      keyProjects: 'Key Projects',
    },
    skills: {
      label: 'Skills',
      title: 'Technologies I work with',
      description: 'A curated toolkit built through years of production-grade engineering.',
      bannerPrefix: 'Always learning — currently exploring ',
      bannerItems: ['AI-augmented development', 'Web Components', 'Edge computing'],
      bannerSuffix: '.',
    },
    projects: {
      label: 'Projects',
      title: 'Things I’ve built',
      description: 'A selection of projects I’m proud of — from corporate platforms to mobile apps.',
      all: 'All Projects',
      featured: 'Featured',
    },
    contact: {
      label: 'Contact',
      title: 'Let’s work together',
      description: 'Have a project in mind or want to connect? I’d love to hear from you.',
      cards: [
        { title: 'Open to opportunities', desc: 'Technical Lead, Staff Engineer or Principal Engineer roles.' },
        { title: 'Open to consulting', desc: 'Architecture reviews, front-end audits and coaching missions.' },
        { title: 'Quick response', desc: 'I typically respond within 24 hours.' },
      ],
      findMe: 'Find me on',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project or opportunity…',
      send: 'Send Message',
      sending: 'Sending…',
      successTitle: 'Message sent!',
      successBody: 'Thanks for reaching out. I’ll be in touch soon.',
      sendAnother: 'Send another message',
      errorBody: 'Something went wrong. Please try again or contact me directly at ',
      errNameRequired: 'Name is required.',
      errEmailRequired: 'Email is required.',
      errEmailInvalid: 'Enter a valid email.',
      errMessageRequired: 'Message cannot be empty.',
    },
    footer: { role: 'Technical Lead Front-End' },
  },
};

export function useDict(lang: Lang): Dict {
  return dictionary[lang];
}
