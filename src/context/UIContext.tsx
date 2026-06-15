import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type ModalState =
  | { kind: 'project'; index: number }
  | { kind: 'cert'; index: number }
  | null;

interface LightboxState {
  src: string;
  alt: string;
}

interface UIContextValue {
  modal: ModalState;
  lightbox: LightboxState | null;
  openProjectModal: (index: number) => void;
  openCertModal: (index: number) => void;
  closeModal: () => void;
  openLightbox: (src: string, alt?: string) => void;
  closeLightbox: () => void;
}

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<ModalState>(null);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openProjectModal = useCallback((index: number) => setModal({ kind: 'project', index }), []);
  const openCertModal = useCallback((index: number) => setModal({ kind: 'cert', index }), []);
  const closeModal = useCallback(() => setModal(null), []);
  const openLightbox = useCallback((src: string, alt = '') => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  // Escape closes the lightbox first, then the modal.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (lightbox) setLightbox(null);
      else if (modal) setModal(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox, modal]);

  // Lock body scroll while a modal or the lightbox is open.
  useEffect(() => {
    const open = Boolean(modal || lightbox);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modal, lightbox]);

  const value = useMemo<UIContextValue>(
    () => ({
      modal,
      lightbox,
      openProjectModal,
      openCertModal,
      closeModal,
      openLightbox,
      closeLightbox,
    }),
    [modal, lightbox, openProjectModal, openCertModal, closeModal, openLightbox, closeLightbox],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within a UIProvider');
  return ctx;
}
