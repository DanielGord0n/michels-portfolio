import { experience } from '../data/experience';
import './ExperienceTimeline.css';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="mv-section experience">
      <div className="experience__shell">
        <div className="mv-eyebrow experience__eyebrow">Experience</div>
        <h2 className="experience__h2">A timeline of my work</h2>
        <div className="experience__list">
          {experience.map((e, i) => {
            const last = i === experience.length - 1;
            return (
              <div key={`${e.company}-${e.title}`} className="experience__row">
                <div className="experience__rail">
                  <div className="experience__period">{e.period}</div>
                  <div className="experience__type">{e.type}</div>
                </div>
                <div
                  className="experience__line"
                  style={{ paddingBottom: last ? 4 : 26 }}
                >
                  <span className="experience__node" style={{ borderColor: e.accent }} />
                  <div className="mv-card experience__card">
                    <div className="experience__head">
                      <div>
                        <h3 className="experience__title">{e.title}</h3>
                        <div className="experience__company" style={{ color: e.accent }}>
                          {e.company}
                        </div>
                      </div>
                    </div>
                    <ul className="experience__bullets">
                      {e.bullets.map((b, bi) => (
                        <li key={bi}>
                          <span className="experience__bullet-dot" style={{ background: e.accent }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="experience__skills">
                      {e.skills.map((s) => (
                        <span key={s} className="experience__skill">
                          {s}
                        </span>
                      ))}
                    </div>
                    {e.images && (
                      <div className="experience__gallery">
                        {e.imagesLabel && (
                          <div className="experience__gallery-label">{e.imagesLabel}</div>
                        )}
                        <div className="experience__photos">
                          {e.images.map((img) => (
                            <figure key={img.src} className="experience__photo">
                              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
                            </figure>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
