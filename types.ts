
import type { ReactNode } from 'react';

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  stack: string[];
  description: string;
  features: string[];
  objective: string;
  image: string;
  githubLink: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  missions: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    specialties: string[];
    badge?: string;
}

export interface Strength {
    title: string;
    icon: ReactNode;
}
