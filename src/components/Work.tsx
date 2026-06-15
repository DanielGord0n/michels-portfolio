import { projects } from '../data/projects';
import { CAT_COLOR } from '../types';
import { useUI } from '../context/UIContext';
import './Work.css';

export default function Work() {
  const { openProjectModal, openLightbox } = useUI();

  return (
    <section id="work" className="mv-section work">
      <div className="mv-shell">
        <div className="work__head">
          <div>
            <div className="mv-eyebrow work__eyebrow">Selected work</div>
            <h2 className="work__h2">Projects &amp; deliverables</h2>
          </div>
          <div className="work__hint">Click any project to view details</div>
        </div>

        <div className="work__grid">
          {projects.map((p, i) => {
            const color = CAT_COLOR[p.cat];
            return (
              <div
                key={p.title}
                className="mv-proj work__card"
                onClick={() => openProjectModal(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProjectModal(i);
                  }
                }}
              >
                <div className="work__card-top">
                  <button
                    type="button"
                    className="work__logo"
                    title="Click to enlarge logo"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(p.icon, `${p.title} logo`);
                    }}
                  >
                    <img src={p.icon} alt={p.title} loading="lazy" decoding="async" />
                  </button>
                  <span
                    className="work__cat"
                    style={{ color, background: `${color}14` }}
                  >
                    {p.cat}
                  </span>
                </div>
                <h3 className="work__card-title">{p.title}</h3>
                <p className="work__card-desc">{p.desc}</p>
                <div className="work__chips">
                  {p.skills.slice(0, 3).map((s) => (
                    <span key={s} className="work__chip">
                      {s}
                    </span>
                  ))}
                </div>
                <span className="work__more">
                  View details <span aria-hidden="true">→</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
