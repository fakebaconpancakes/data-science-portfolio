export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description: string;
  coursework: string[];
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience';
  side?: 'left' | 'right';
}

export interface Paper {
  id: string;
  title: string;
  authors: string;
  venue: string;
  date: string;
  abstract: string;
  link?: string;
  pdfUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: string;
  date?: string;
  link?: string;
}
