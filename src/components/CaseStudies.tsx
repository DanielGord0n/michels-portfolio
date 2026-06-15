import { useState } from 'react';
import './CaseStudies.css';

type CaseView = 'mars' | 'lonestar';

const MARS_BARS: { h: number; bg: string }[] = [
  { h: 46, bg: 'linear-gradient(180deg,#a78bdb,#764ba2)' },
  { h: 62, bg: 'linear-gradient(180deg,#a78bdb,#764ba2)' },
  { h: 54, bg: 'linear-gradient(180deg,#a78bdb,#764ba2)' },
  { h: 78, bg: 'linear-gradient(180deg,#f0a8d8,#f093fb)' },
  { h: 70, bg: 'linear-gradient(180deg,#a78bdb,#764ba2)' },
  { h: 92, bg: 'linear-gradient(180deg,#f0a8d8,#f093fb)' },
];

const MARS_TAGS = ['Power BI', 'SQL', 'GenAI', 'Databricks Genie', 'Trade Promotion Mgmt'];
const LONESTAR_TAGS = ['BigQuery', 'ARIMA modelling', 'Looker Studio', 'SQL'];

function MarsPanel() {
  return (
    <div className="case case--mars">
      <div className="case__blob" style={{ background: 'radial-gradient(circle,rgba(240,147,251,0.32),transparent 70%)' }} />
      <div className="case__grid">
        <div>
          <div className="case__id">
            <div className="case__logo case__logo--mars">M</div>
            <div>
              <div className="case__title">Sales analytics &amp; AI-powered reporting</div>
              <div className="case__sub case__sub--mars">Mars Wrigley, Business Analytics Co-op</div>
            </div>
          </div>
          <div className="case__block">
            <div className="case__label">The problem</div>
            <p className="case__text case__text--mars">
              Trade promotion and sales teams needed clearer visibility into customer and sales
              performance, and faster ways to turn large, messy data sources into decisions they
              could trust.
            </p>
          </div>
          <div className="case__block">
            <div className="case__label">My approach</div>
            <p className="case__text case__text--mars">
              I developed and enhanced Power BI dashboards for Trade Promotion Management and Sales
              Analytics, and used GenAI with SQL to accelerate analysis, validate datasets and
              surface trends across large sales and operational data. I then built and deployed an
              AI-powered sales planning tool using Databricks Genie for automated insight generation.
            </p>
          </div>
          <div className="case__tags">
            {MARS_TAGS.map((t) => (
              <span key={t} className="case__tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="case__panel">
            <div className="case__panel-head">
              <div className="case__panel-title case__panel-title--mars">Customer &amp; sales performance</div>
              <span className="case__pill case__pill--mars">Power BI view</span>
            </div>
            <div className="case__bars">
              {MARS_BARS.map((b, i) => (
                <div key={i} className="case__bar" style={{ height: `${b.h}%`, background: b.bg }} />
              ))}
            </div>
            <div className="case__caption">Representative dashboard layout</div>
          </div>
          <div className="case__tiles">
            <div className="case__tile">
              <div className="case__tile-num">Genie</div>
              <div className="case__tile-cap case__tile-cap--mars">AI sales-planning tool, deployed</div>
            </div>
            <div className="case__tile">
              <div className="case__tile-num">TPM</div>
              <div className="case__tile-cap case__tile-cap--mars">trade &amp; sales dashboards</div>
            </div>
          </div>
          <div className="case__result">
            <div className="case__label">The result</div>
            <p className="case__result-text">
              Stakeholders gained a reliable, self-serve view of trade and customer trends, with
              automated insight generation that improved reporting efficiency and data reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoneStarPanel() {
  return (
    <div className="case case--lonestar">
      <div className="case__blob" style={{ background: 'radial-gradient(circle,rgba(118,75,162,0.4),transparent 70%)' }} />
      <div className="case__grid">
        <div>
          <div className="case__id">
            <div className="case__logo case__logo--lonestar">
              <img src="/assets/lone-star-texas-grill.png" alt="Lone Star" />
            </div>
            <div>
              <div className="case__title">Labour forecasting with ARIMA</div>
              <div className="case__sub case__sub--lonestar">Lone Star Texas Grill, Data Analytics Intern</div>
            </div>
          </div>
          <div className="case__block">
            <div className="case__label">The problem</div>
            <p className="case__text case__text--lonestar">
              Managers were scheduling staff on intuition, with no reliable way to anticipate demand.
              The business needed a defensible, data-backed forecast to control labour cost without
              under-staffing.
            </p>
          </div>
          <div className="case__block">
            <div className="case__label">My approach</div>
            <p className="case__text case__text--lonestar">
              In BigQuery I joined, cleansed and profiled the RawSales and RawLab tables to ensure
              data integrity, then built an ARIMA model to forecast labour demand. I surfaced it all
              in an interactive Looker Studio dashboard, and documented methodology, findings and
              compliance considerations in a full report.
            </p>
          </div>
          <div className="case__tags">
            {LONESTAR_TAGS.map((t) => (
              <span key={t} className="case__tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="case__panel">
            <div className="case__panel-title case__panel-title--lonestar" style={{ marginBottom: 18 }}>
              Forecasted staffing demand, by week
            </div>
            <svg viewBox="0 0 320 150" className="case__svg">
              <line x1="0" y1="120" x2="320" y2="120" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="0" y1="80" x2="320" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="0" y1="40" x2="320" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <path d="M0,108 L53,96 L106,100 L160,72 L213,80 L266,48 L320,40 L320,150 L0,150 Z" fill="url(#csArea)" />
              <path
                d="M0,108 L53,96 L106,100 L160,72 L213,80 L266,48 L320,40"
                fill="none"
                stroke="#a78bdb"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0,114 L53,104 L106,108 L160,84 L213,90 L266,62 L320,55"
                fill="none"
                stroke="#f093fb"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="csArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#667eea" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#667eea" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="case__svg-legend">
              <span>
                <span className="case__svg-dot" style={{ background: '#a78bdb' }} />
                Forecast
              </span>
              <span>
                <span className="case__svg-dot" style={{ background: '#f093fb' }} />
                Trend
              </span>
            </div>
          </div>
          <div className="case__tiles">
            <div className="case__tile">
              <div className="case__tile-num case__tile-num--lg">Looker</div>
              <div className="case__tile-cap case__tile-cap--lonestar">live dashboard for managers</div>
            </div>
            <div className="case__tile">
              <div className="case__tile-num case__tile-num--lg">2 tables</div>
              <div className="case__tile-cap case__tile-cap--lonestar">joined, cleansed, profiled</div>
            </div>
          </div>
          <div className="case__result">
            <div className="case__label">The result</div>
            <p className="case__result-text">
              A repeatable forecasting workflow that let managers schedule from data instead of
              guesswork, improving labour efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [view, setView] = useState<CaseView>('mars');

  return (
    <section id="casestudy" className="mv-section casestudies">
      <div className="mv-shell">
        <div className="casestudies__bar">
          <span className="mv-eyebrow">Flagship case studies</span>
          <div className="casestudies__tabs">
            <button
              type="button"
              className={`casestudies__tab${view === 'mars' ? ' is-active' : ''}`}
              onClick={() => setView('mars')}
            >
              Mars Wrigley
            </button>
            <button
              type="button"
              className={`casestudies__tab${view === 'lonestar' ? ' is-active' : ''}`}
              onClick={() => setView('lonestar')}
            >
              Lone Star
            </button>
          </div>
          <span className="casestudies__rule" />
        </div>

        {view === 'mars' ? <MarsPanel /> : <LoneStarPanel />}
      </div>
    </section>
  );
}
