import { createPortal } from 'react-dom';
import s from './PalyanytsyaModal.module.css';
import Sprite from '../../images/sprite.svg';
import Polunytsya from '../../images/polun.png';
import Palyanytsya from '../../images/palan.png';

export default function PalyanytsyaModal({ onClickYes, onClickNo }) {
  return createPortal(
    <div className={s.backdrop}>
      <div className={s.modal}>
        <button className={s.crossBtn} onClick={onClickNo} type="button">
          <svg className={s.crossIcon} width="12" height="12">
            <use href={`${Sprite}#close-icon`}></use>
          </svg>
        </button>
        <p className={s.title}>Оберіть, будь ласка, ПАЛЯНИЦЮ:</p>
        <div className={s.btnsBox}>
          <img
            className={s.img}
            onClick={onClickNo}
            width="80"
            src={Polunytsya}
            alt="Полуниця"
          />
          <img
            className={s.img}
            onClick={onClickYes}
            width="80"
            src={Palyanytsya}
            alt="Паляниця"
          />
        </div>
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
}
