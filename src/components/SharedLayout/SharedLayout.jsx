import { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import authSelectors from 'redux/auth/auth-selectors';
// import Loader from 'components/Loader';
import UserMenu from 'components/UserMenu';
import s from './SharedLayout.module.css';
import Loader from '../Loader/Loader';
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
      <Suspense fallback={<Loader />}>
        <div>
          <Outlet />
        </div>
      </Suspense>
    </Fragment>
  );
};

export default SharedLayout;
