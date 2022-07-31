import { useSelector } from 'react-redux';
import s from './Personage.module.css';
import { getUserData, getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';

const Personage = () => {
  const userData = useSelector(getUserData);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const balance = userData.balance;

  return (
    <>
      {isLoggedIn && (
        <NavLink aria-label="personage" to="/" className={s.personage}>
          {balance > 1000 ? (
            <>
              <img
                src={require('./png/Minions-graf.png')}
                alt="personage"
                width={80}
                height={80}
              />
              <div className={s.wrapDialog}>
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
              </div>
            </>
          ) : (
            <>
              <img
                src={require('./png/minions-bed.png')}
                alt="personage"
                width={80}
                height={80}
              />
              <div className={s.wrapDialog}>
                <div className={s.container}>
                  <img
                    src={require('./png/obl.png')}
                    alt="personage"
                    width={125}
                    height={100}
                  />
                  <div className={s.text}>
                    If you don’t walk today, you’ll have to run tomorrow
                  </div>
                </div>
              </div>
            </>
          )}
        </NavLink>
      )}
    </>
  );
};
export default Personage;
