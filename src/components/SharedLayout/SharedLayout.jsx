import { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import UserMenu from 'components/UserMenu';
import s from './SharedLayout.module.css';
import Loader from '../Loader/Loader';
const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Fragment>
      <header className={s.header}>
        <NavLink to="/">
          <img
            src={require('../../images/logo.jpg')}
            alt="avatar"
            width={90}
            height={31}
          />
        </NavLink>

        {isLoggedIn && <UserMenu />}
      </header>
      <Suspense fallback={<Loader />}>
        <div>
          <Outlet />
        </div>
      </Suspense>
    </Fragment>
  );
};

export default SharedLayout;
