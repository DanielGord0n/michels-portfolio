import { useUI } from '../context/UIContext';
import './Hero.css';

const RESUME = '/assets/Michel_Vivier_Resume.pdf';
const PHOTO = '/assets/MichelPFP.png';
const TOOLS = ['Power BI', 'Excel', 'SQL', 'BigQuery', 'Looker Studio', 'Python', 'Databricks'];

export default function Hero() {
  const { openLightbox } = useUI();

  return (
    <section id="home" className="hero">
      <div className="hero__blob" aria-hidden="true" />
      <div className="hero__grid">
        <div className="hero__left">
          <div className="hero__eyebrow">Portfolio / 2026</div>
          <h1 className="hero__title">
            Michel
            <br />
            <span className="hero__title-grad">Vivier</span>
          </h1>
          <div className="hero__role">
            <span className="hero__role-name">Business &amp; Data Analyst</span>
            <span className="hero__dot" />
            <span className="hero__role-sub">Schulich BBA, 2026</span>
          </div>
          <div className="hero__status">
            <span className="hero__status-icon">
              <span className="hero__status-pulse" />
            </span>
            <span className="hero__status-text">
              Currently <strong>Business Analytics Co-op</strong> at{' '}
              <strong className="hero__status-mars">Mars Wrigley</strong>
            </span>
          </div>
          <p className="hero__intro">
            I turn sales, operations and customer data into clear dashboards and forecasts that drive
            business decisions, across analytics and marketing.
          </p>
          <div className="hero__cta">
            <a className="mv-btn-primary" href="#work">
              View my work
            </a>
            <a className="mv-btn-ghost" href={RESUME} target="_blank" rel="noopener noreferrer">
              Download resume <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero__tools">
            <div className="hero__tools-label">Tools I work in</div>
            <div className="hero__tools-row">
              {TOOLS.map((t) => (
                <span key={t} className="mv-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__photo-glow" aria-hidden="true" />
          <button
            type="button"
            className="hero__photo"
            onClick={() => openLightbox(PHOTO, 'Michel Vivier')}
            aria-label="Enlarge headshot"
          >
            <img src={PHOTO} alt="Michel Vivier" />
            <span className="hero__photo-badge">🔍 Enlarge</span>
          </button>
          <div className="hero__float">
            <div className="hero__float-label">Open to</div>
            <div className="hero__float-value">Analytics roles</div>
          </div>
        </div>
      </div>
    </section>
  );
}
