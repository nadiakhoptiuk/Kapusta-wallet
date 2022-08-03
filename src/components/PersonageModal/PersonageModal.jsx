import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';
import s from './PersonageModal.module.css';

const modalRoot = document.querySelector('#modal-root');
const Modal = ({ onClose, setCurrentCharacter, characters }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <ul className={s.personageList}>
          <li className={s.item}>
            <button
              aria-label="personage"
              className={s.personage}
              onClick={() => {
                setCurrentCharacter(characters.minion);
                onClose();
              }}
            >
              <img
                src={require('../Personage/png/Minions-graf.png')}
                alt="personage"
                width={200}
                height={165}
                className={s.galleryImg}
              />
            </button>
          </li>
          <li className={s.item}>
            <button
              aria-label="personage"
              className={s.personage}
              onClick={() => {
                setCurrentCharacter(characters.bunny);
                onClose();
              }}
            >
              <img
                src={require('../Personage/png/banny-gud.png')}
                alt="personage"
                width={200}
                height={165}
                className={s.galleryImg}
              />
            </button>
          </li>
          <li className={s.item}>
            <button
              aria-label="personage"
              className={s.personage}
              onClick={() => {
                setCurrentCharacter(characters.sonic);
                onClose();
              }}
            >
              <img
                src={require('../Personage/png/son-gud.png')}
                alt="personage"
                width={200}
                height={165}
                className={s.galleryImg}
              />
            </button>
          </li>
        </ul>
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default Modal;
