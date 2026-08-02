import type { Localized } from '@/lib/i18n';

export interface ExperienceProject {
  id: string;
  title: string;
  description: Localized;
  stack: string[];
  url?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: Localized;
  period: Localized;
  current?: boolean;
  description: Localized[];
  projects?: ExperienceProject[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: Localized;
  stack: string[];
  url?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level?: number;
}

export interface SkillCategory {
  id: string;
  label: Localized;
  icon: string;
  skills: Skill[];
}

export interface NavItem {
  label: string;
  href: string;
}

export type Theme = 'light' | 'dark';
