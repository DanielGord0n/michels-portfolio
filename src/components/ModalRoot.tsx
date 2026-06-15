import type { Project } from '../types';
import { projects } from '../data/projects';
import { certs } from '../data/certs';
import { useUI } from '../context/UIContext';
import Modal from './Modal';

function ProjectMedia({
  project,
  onEnlarge,
}: {
  project: Project;
  onEnlarge: (src: string, alt: string) => void;
}) {
  const { media, title } = project;
  if (media.type === 'image') {
    return (
      <img
        className="modal__media modal__media--img"
        src={media.src}
        alt={title}
        title="Click to enlarge"
        onClick={() => onEnlarge(media.src, title)}
      />
    );
  }
  if (media.type === 'video') {
    return <video className="modal__media modal__media--video" src={media.src} controls playsInline />;
  }
  if (media.type === 'pdf') {
    return <iframe className="modal__media modal__media--pdf" src={media.src} title={title} />;
  }
  return null;
}

function ProjectModal({ index }: { index: number }) {
  const { closeModal, openLightbox } = useUI();
  const p = projects[index];

  return (
    <>
      <div className="modal__header">
        <div className="modal__id">
          <button
            type="button"
            className="modal__logo"
            title="Click to enlarge logo"
            onClick={() => openLightbox(p.icon, `${p.title} logo`)}
          >
            <img src={p.icon} alt="" />
          </button>
          <div>
            <div className="modal__title">{p.title}</div>
            <div className="modal__subtitle">{p.cat} project</div>
          </div>
        </div>
        <button type="button" className="modal__close" aria-label="Close" onClick={closeModal}>
          ×
        </button>
      </div>

      <div className="modal__body">
        <ProjectMedia project={p} onEnlarge={openLightbox} />
        <div className="modal__content">
          <div className="modal__label">Project overview</div>
          <p className="modal__overview">{p.full}</p>

          {p.results && (
            <div className="modal__section">
              <div className="modal__label">Results</div>
              <div className="modal__chips">
                {p.results.map((r) => (
                  <span key={r} className="modal__result">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="modal__section">
            <div className="modal__label">Skills &amp; tools</div>
            <div className="modal__chips">
              {p.skills.map((s) => (
                <span key={s} className="modal__chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {(p.caseStudy || p.link || p.tiktok || p.media.type === 'pdf') && (
            <div className="modal__actions">
              {p.caseStudy && (
                <button
                  type="button"
                  className="modal__btn modal__btn--primary"
                  onClick={() => {
                    closeModal();
                    window.location.hash = '#casestudy';
                  }}
                >
                  View full case study →
                </button>
              )}
              {p.link && (
                <a
                  className="modal__btn modal__btn--pink"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.linkText} ↗
                </a>
              )}
              {p.tiktok && (
                <a
                  className="modal__btn modal__btn--ghost"
                  href={p.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View TikTok ↗
                </a>
              )}
              {p.media.type === 'pdf' && (
                <a
                  className="modal__btn modal__btn--ghost"
                  href={p.media.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open PDF ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function CertModal({ index }: { index: number }) {
  const { closeModal, openLightbox } = useUI();
  const c = certs[index];

  return (
    <>
      <div className="modal__header">
        <div>
          <div className="modal__title">{c.title} Certified</div>
          <div className="modal__subtitle">HubSpot Academy</div>
        </div>
        <button type="button" className="modal__close" aria-label="Close" onClick={closeModal}>
          ×
        </button>
      </div>
      <div className="modal__cert-body">
        <img
          className="modal__cert-img"
          src={c.img}
          alt={`${c.title} certificate`}
          title="Click to enlarge"
          onClick={() => openLightbox(c.img, `${c.title} certificate`)}
        />
      </div>
    </>
  );
}

export default function ModalRoot() {
  const { modal, closeModal } = useUI();
  if (!modal) return null;

  return (
    <Modal onClose={closeModal}>
      {modal.kind === 'project' ? (
        <ProjectModal index={modal.index} />
      ) : (
        <CertModal index={modal.index} />
      )}
    </Modal>
  );
}
