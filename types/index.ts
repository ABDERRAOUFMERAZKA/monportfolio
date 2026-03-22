export interface ExperienceProject {
  id: string;
  title: string;
  description: string;
  stack: string[];
  url?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string[];
  projects?: ExperienceProject[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
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
  label: string;
  icon: string;
  skills: Skill[];
}

export interface NavItem {
  label: string;
  href: string;
}

export type Theme = 'light' | 'dark';
