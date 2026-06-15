import { certs } from '../data/certs';
import { useUI } from '../context/UIContext';
import './Certifications.css';

export default function Certifications() {
  const { openCertModal } = useUI();

  return (
    <section id="certifications" className="mv-section certs">
      <div className="mv-shell">
        <div className="mv-eyebrow certs__eyebrow">Credentials</div>
        <h2 className="certs__h2">Certifications &amp; achievements</h2>

        <div className="certs__grid">
          <div>
            <div className="certs__row-head">
              <div className="certs__subhead">HubSpot Academy certifications</div>
              <span className="certs__note">Click to view certificate</span>
            </div>
            <div className="certs__cards">
              {certs.map((c, i) => (
                <button
                  key={c.title}
                  type="button"
                  className="mv-cert certs__card"
                  onClick={() => openCertModal(i)}
                >
                  <div className="certs__thumb">
                    <img src={c.img} alt={`${c.title} certificate`} />
                    <span className="mv-cert-view certs__view">🔍 View</span>
                  </div>
                  <div className="certs__card-title">{c.title}</div>
                  <div className="certs__card-sub">HubSpot Academy</div>
                </button>
              ))}
            </div>

            <div className="certs__subhead certs__subhead--gap">Competitions &amp; academics</div>
            <div className="certs__list">
              <div className="certs__item">
                <div className="certs__icon" style={{ background: 'linear-gradient(135deg,#667eea,#764ba2)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM5 6H3v1a3 3 0 003 3M19 6h2v1a3 3 0 01-3 3"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="certs__item-title">PepsiCo 7 Case, Semi-Finalist</div>
                  <div className="certs__item-sub">Canadian Marketing League case competition</div>
                </div>
              </div>
              <div className="certs__item">
                <div className="certs__icon" style={{ background: 'linear-gradient(135deg,#3498db,#667eea)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 10L12 4 2 10l10 6 10-6zM6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="certs__item-title">Schulich School of Business, BBA</div>
                  <div className="certs__item-sub">York University, expected 2026</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="certs__subhead">Athletic achievements</div>
            <div className="certs__athletic">
              <div className="certs__athletic-intro">
                National-team rhythmic gymnast, bringing elite discipline to every analytical
                project.
              </div>
              <div className="certs__athletic-list">
                <div className="certs__athletic-item">
                  <span className="certs__athletic-tag">CAN</span>
                  <div>
                    <div className="certs__athletic-title">Team Canada member</div>
                    <div className="certs__athletic-sub">2017 to 2022</div>
                  </div>
                </div>
                <div className="certs__athletic-item">
                  <span className="certs__athletic-tag">2020</span>
                  <div>
                    <div className="certs__athletic-title">Tokyo Olympic Games, long-listed</div>
                    <div className="certs__athletic-sub">national long-list selection</div>
                  </div>
                </div>
                <div className="certs__athletic-item">
                  <span className="certs__athletic-tag">12th</span>
                  <div>
                    <div className="certs__athletic-title">2019 Junior World Championships</div>
                    <div className="certs__athletic-sub">Moscow, out of 62 athletes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
