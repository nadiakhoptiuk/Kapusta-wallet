import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './TransactionsModal.module.css';

const modalRoot = document.querySelector('#modal-root');

function TransactionsModal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    console.log('e.target', e.target);
    console.log('e.currentTarget', e.currentTarget);
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot
  );
}

export default TransactionsModal;
