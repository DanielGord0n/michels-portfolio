export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  type: string;
  accent: string;
  bullets: string[];
  skills: string[];
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

export type DashViewKey = 'audience' | 'retention' | 'pipeline' | 'inquiries';

export interface DashBar {
  l: string;
  v: number;
}

export interface DashView {
  label: string;
  kpi: string;
  kpiLabel: string;
  accent: string;
  yLabel: string;
  insight: string;
  bars: DashBar[];
}

export const CAT_COLOR: Record<ProjectCategory, string> = {
  Analytics: '#764ba2',
  Strategy: '#3498db',
  Design: '#f5576c',
  Creative: '#667eea',
};
