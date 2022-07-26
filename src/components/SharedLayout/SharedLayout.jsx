import { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import authSelectors from 'redux/auth/auth-selectors';
// import Loader from 'components/Loader';
import UserMenu from 'components/UserMenu';
import s from './SharedLayout.module.css';
import Spinner from 'react-spinkit';
const SharedLayout = () => {
  //   const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  return (
    <Fragment>
      <header className={s.header}>
        <img
          src={require('../../images/logo.jpg')}
          alt="avatar"
          width={90}
          height={31}
        />

        {
          // isLoggedIn &&
          <UserMenu />
        }
      </header>
      <Suspense fallback={<Spinner name="pacman" color="steelblue" />}>
        <div>
          <Outlet />
        </div>
      </Suspense>
    </Fragment>
  );
};

export default SharedLayout;
