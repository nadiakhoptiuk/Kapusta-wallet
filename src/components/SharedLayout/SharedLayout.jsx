import { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  getIsLoadingRefresh,
  getIsLoggedIn,
} from '../../redux/auth/auth-selectors';
import UserMenu from 'components/UserMenu';
import s from './SharedLayout.module.css';
import Loader from '../Loader/Loader';
import CustomizedSwitches from '../Theme/ThemeBtn';

const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsLoadingRefresh);

  return (
    <Fragment>
      <header className={s.header}>
        <div className={s.logoWrapper}>
          <NavLink className={s.logo} to="/">
            <img
              src={require('../../images/logo.jpg')}
              alt="avatar"
              width={90}
              height={31}
            />
          </NavLink>
          <CustomizedSwitches />
        </div>
        {isLoggedIn && <UserMenu />}
      </header>
      <Suspense fallback={<Loader />}>
        <div>{isRefreshing ? <Loader /> : <Outlet />}</div>
      </Suspense>
    </Fragment>
  );
};

export default SharedLayout;
