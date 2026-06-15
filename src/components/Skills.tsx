import type { ReactNode } from 'react';
import './Skills.css';

interface SkillCard {
  title: string;
  grad: string;
  chip: 'neutral' | 'purple' | 'pink';
  icon: ReactNode;
  items: string[];
}

const CARDS: SkillCard[] = [
  {
    title: 'Technical & tools',
    grad: 'linear-gradient(135deg,#667eea,#764ba2)',
    chip: 'neutral',
    icon: (
      <path
        d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    items: [
      'SQL',
      'BigQuery',
      'Power BI',
      'Looker Studio',
      'Excel',
      'Python',
      'GitHub',
      'Google Analytics',
      'Databricks',
    ],
  },
  {
    title: 'Business & analytics',
    grad: 'linear-gradient(135deg,#3498db,#667eea)',
    chip: 'purple',
    icon: (
      <path
        d="M4 19V5M4 19h16M8 15l3-4 3 2 4-6"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    items: [
      'Business Analysis',
      'Process Documentation',
      'Customer & Sales Analytics',
      'Data Visualisation',
      'Reporting',
      'Stakeholder Communication',
    ],
  },
  {
    title: 'Marketing & CRM',
    grad: 'linear-gradient(135deg,#f093fb,#f5576c)',
    chip: 'pink',
    icon: (
      <path
        d="M3 11l18-8-8 18-2-7-8-3z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    items: [
      'Campaign Development',
      'Email Marketing',
      'Social Media Analytics',
      'Event Marketing',
      'Market Research',
      'A/B Testing',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mv-section skills">
      <div className="mv-shell">
        <div className="mv-eyebrow skills__eyebrow">Toolbox</div>
        <h2 className="skills__h2">Skills &amp; competencies</h2>
        <div className="skills__grid">
          {CARDS.map((card) => (
            <div key={card.title} className="mv-card skills__card">
              <div className="skills__card-head">
                <span className="skills__icon" style={{ background: card.grad }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                    {card.icon}
                  </svg>
                </span>
                <h3 className="skills__card-title">{card.title}</h3>
              </div>
              <div className="skills__chips">
                {card.items.map((item) => (
                  <span key={item} className={`skills__chip skills__chip--${card.chip}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
