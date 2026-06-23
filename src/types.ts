export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  type: string;
  accent: string;
  bullets: string[];
  skills: string[];
  /** Optional photos shown in the timeline card (e.g. gymnastics). */
  images?: { src: string; alt: string }[];
  /** Optional caption above the photo gallery. */
  imagesLabel?: string;
}

export type ProjectCategory = 'Analytics' | 'Strategy' | 'Design' | 'Creative';

export type ProjectMedia =
  | { type: 'none' }
  | { type: 'image'; src: string }
  | { type: 'video'; src: string }
  | { type: 'pdf'; src: string };

export interface Project {
  title: string;
  cat: ProjectCategory;
  icon: string;
  desc: string;
  full: string;
  skills: string[];
  media: ProjectMedia;
  results?: string[];
  link?: string;
  linkText?: string;
  tiktok?: string;
  caseStudy?: boolean;
}

export interface Cert {
  title: string;
  img: string;
}

export interface MsCert {
  title: string;
  img: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
}

export const CAT_COLOR: Record<ProjectCategory, string> = {
  Analytics: '#764ba2',
  Strategy: '#3498db',
  Design: '#f5576c',
  Creative: '#667eea',
};
