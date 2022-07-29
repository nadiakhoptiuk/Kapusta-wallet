import s from './NavBar.module.css';
import { MODES } from 'utils/transactionConstants';

const NavBar = ({ mode, setMode }) => {
  return (
    <div className={s.container}>
      <nav className={s.navWrap}>
        <ul className={s.navList}>
          <li className={s.navListItem}>
            <button
              type="button"
              className={mode === MODES.expenseMode ? s.linkActive : s.link}
              onClick={() => setMode(MODES.expenseMode)}
            >
              expenses
            </button>
          </li>
          <li className={s.navListItem}>
            <button
              type="button"
              className={mode === MODES.incomeMode ? s.linkActive : s.link}
              onClick={() => setMode(MODES.incomeMode)}
            >
              income
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
