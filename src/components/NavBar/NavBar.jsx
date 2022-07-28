import s from './NavBar.module.css';
import { MODES } from 'utils/transactionConstants';

const NavBar = ({ setMode }) => {
  return (
    <div className={s.container}>
      <nav className={s.navWrap}>
        <ul className={s.navList}>
          <li className={s.navListItem}>
            <button
              type="button"
              className={s.link}
              onClick={() => setMode(MODES.expenseMode)}
            >
              expenses
            </button>
          </li>
          <li className={s.navListItem}>
            <button
              type="button"
              className={s.link}
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
