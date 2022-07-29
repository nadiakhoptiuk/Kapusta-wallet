import s from './BalanceModal.module.css';

const modalRoot = document.querySelector('#modal-root');
// const bodyEl = document.querySelector('body');

export default function BalanceModal() {
  return (
    (
      <div className={s.backdrop}>
        <div className={s.modalBalance}>
          <div className={s.modalTop}></div>
          <p className={s.modalText}>
            Hello! To get started, enter the current balance of your account!
          </p>
          <p className={s.modalAfterText}>
            You can't spend money until you have it :)
          </p>
        </div>
      </div>
    ),
    modalRoot
  );
}
