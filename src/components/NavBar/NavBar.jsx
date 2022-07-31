import React from 'react';
import PropTypes from 'prop-types';

import { MODES } from 'utils/transactionConstants';
import s from './NavBar.module.css';

const NavBar = ({ mode, setMode }) => {
  return (
    <div className={s.container}>
      <nav className={s.navWrap}>
        <ul className={s.navList}>
          <li className={s.navListItem}>
            <button
              aria-label="Expense"
              type="button"
              className={mode === MODES.expenseMode ? s.linkActive : s.link}
              onClick={() => setMode(MODES.expenseMode)}
            >
              expenses
            </button>
          </li>
          <li className={s.navListItem}>
            <button
              aria-label="Income"
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

NavBar.propTypes = {
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
};
