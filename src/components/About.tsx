import type { ReactNode } from 'react';
import './About.css';

interface Capability {
  title: string;
  desc: string;
  grad: string;
  icon: ReactNode;
}

const CAPABILITIES: Capability[] = [
  {
    title: 'Data Analytics & BI',
    desc: 'SQL, BigQuery, Power BI, Looker Studio, customer and sales analytics',
    grad: 'linear-gradient(135deg,#667eea,#764ba2)',
    icon: (
      <path
        d="M4 20V10M10 20V4M16 20v-7M22 20H2"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Forecasting & Modelling',
    desc: 'ARIMA forecasting, A/B testing, Python, scenario and trend analysis',
    grad: 'linear-gradient(135deg,#764ba2,#9a72c4)',
    icon: (
      <>
        <path
          d="M3 17l5-5 4 4 8-9"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 7h4v4"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    title: 'Reporting & Visualisation',
    desc: 'Dashboards, executive reporting, data storytelling, stakeholder communication',
    grad: 'linear-gradient(135deg,#3498db,#667eea)',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#fff" strokeWidth="2" />
        <path d="M3 9h18M9 21V9" stroke="#fff" strokeWidth="2" />
      </>
    ),
  },
  {
    title: 'Marketing Analytics',
    desc: 'Campaign performance, market research, Google Analytics, social analytics',
    grad: 'linear-gradient(135deg,#f093fb,#f5576c)',
    icon: (
      <>
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="#fff" strokeWidth="2" />
        <path
          d="M12 8v4l3 2"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="mv-section about">
      <div className="about__grid">
        <div>
          <div className="mv-eyebrow about__eyebrow">About</div>
          <h2 className="about__h2">An analyst who turns data into decisions.</h2>
          <p className="about__p">
            I am a Business Analytics professional and final-year Schulich BBA student who lives in
            the space between raw data and the business decision it should inform. My work spans the
            full pipeline: cleaning and modelling data in SQL and BigQuery, building dashboards in
            Power BI and Looker Studio, and translating the result into clear recommendations
            stakeholders can act on.
          </p>
          <p className="about__p about__p--last">
            That foundation is paired with a marketing background, so I understand the customer
            behind the numbers as well as the metric. Years as a national-team gymnast also taught me
            the discipline and composure that show up in how I approach deadlines and detail.
          </p>
        </div>
        <div className="about__cards">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="mv-card about__card">
              <div className="about__icon" style={{ background: c.grad }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  {c.icon}
                </svg>
              </div>
              <h3 className="about__card-title">{c.title}</h3>
              <p className="about__card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about__future">
        <div className="about__future-head">
          <div className="mv-eyebrow">Looking ahead</div>
          <h3 className="about__future-title">Where I see myself in 5 years</h3>
          <p className="about__future-lede">
            My goal is to grow out of pure analytics and into the commercial side of the business —
            closer to the customer, the planning and the decisions that move it.
          </p>
        </div>
        <div className="about__roadmap">
          <div className="about__stage">
            <div className="about__stage-tag">Next move</div>
            <div className="about__stage-role about__stage-role--sm">
              Sales Operations &amp; Business Intelligence Lead
            </div>
            <div className="about__stage-note">
              Owning the data and reporting behind commercial decisions.
            </div>
          </div>
          <div className="about__arrow" aria-hidden="true">
            →
          </div>
          <div className="about__stage">
            <div className="about__stage-tag">Building toward</div>
            <div className="about__stage-roles">
              <span>Account Management</span>
              <span>Demand Planning</span>
              <span>Category Management</span>
            </div>
            <div className="about__stage-note">
              Owning relationships, forecasts and the category.
            </div>
          </div>
          <div className="about__arrow" aria-hidden="true">
            →
          </div>
          <div className="about__stage">
            <div className="about__stage-tag">Long term</div>
            <div className="about__stage-role">Director</div>
            <div className="about__stage-note">Leading a function and the team behind it.</div>
          </div>
          <div className="about__arrow" aria-hidden="true">
            →
          </div>
          <div className="about__stage about__stage--star">
            <div className="about__stage-tag">Shooting for the stars</div>
            <div className="about__stage-role">
              General Manager <span className="about__star">✦</span>
            </div>
            <div className="about__stage-note">Running a business end to end.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
