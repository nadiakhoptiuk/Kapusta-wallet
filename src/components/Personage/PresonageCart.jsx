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
          {/* <div className={s.wrapDialog}>
            <div className={s.container}>
              <img
                className={s.dialog}
                src={require('./png/obl.png')}
                alt="personage"
                width={150}
                height={100}
              />
              <div className={s.text}>
                The best revenge is massive success (Frank Sinatra)
              </div>
            </div>
          </div> */}
        </NavLink>
      )}
    </>
  );
};
export default PersonageCart;
