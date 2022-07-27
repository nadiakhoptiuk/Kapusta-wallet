import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import routes from '../../utils/routes';

const { expenses, income } = routes;

const NavBar = () => {
  return (
    <div className={s.container}>
      <nav className={s.navWrap}>
        <ul className={s.navList}>
          <li className={s.navListItem}>
            <NavLink className={s.link} to={`/${expenses}`}>
              expenses
            </NavLink>
          </li>
          <li className={s.navListItem}>
            <NavLink className={s.link} to={`/${income}`}>
              income
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
