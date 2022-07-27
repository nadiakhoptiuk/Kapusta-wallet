import { Fragment, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SharedLayout from './SharedLayout';
import 'react-toastify/dist/ReactToastify.css';
import routes from 'utils/routes';
import AuthForm from './AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import { getSid } from 'redux/auth/auth-selectors';

const { home } = routes;

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Fragment>
      <Routes>
        <Route path={home} element={<AuthForm />}>
          {/* <Route index element={<div>Home View Auth</div>} />
          <Route path={app} element={<div>Balance Bar View</div>}>
            <Route
              path={transactions}
              element={<div>Transactions View</div>}
            ></Route>
          </Route> */}
        </Route>
      </Routes>
      <ToastContainer />
    </Fragment>
  );
};
