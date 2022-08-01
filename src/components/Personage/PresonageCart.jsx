import { useSelector } from 'react-redux';
import s from './Personage.module.css';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';

const PersonageCart = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <NavLink aria-label="personage" to="/" className={s.grupPersonage}>
          <img
            src={require('./png/Group-Minions-PNG-File.png')}
            alt="personage"
            width={150}
            height={175}
          />
        </NavLink>
      )}
    </>
  );
};
export default PersonageCart;
