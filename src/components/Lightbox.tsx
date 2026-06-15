import { useUI } from '../context/UIContext';
import './Lightbox.css';

export default function Lightbox() {
  const { lightbox, closeLightbox } = useUI();
  if (!lightbox) return null;

  return (
    <div className="lightbox" onClick={closeLightbox}>
      <img className="lightbox__img" src={lightbox.src} alt={lightbox.alt} />
      <button type="button" className="lightbox__close" aria-label="Close" onClick={closeLightbox}>
        ×
      </button>
    </div>
  );
}
