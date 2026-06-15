import type { ReactNode } from 'react';
import './Modal.css';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

/** Full-screen overlay with a centered card. Backdrop click closes. */
export default function Modal({ onClose, children }: ModalProps) {
  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal__card">{children}</div>
    </div>
  );
}
