import { Fragment, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SharedLayout from './SharedLayout';
import 'react-toastify/dist/ReactToastify.css';
import routes from 'utils/routes';
import AuthForm from './AuthForm/AuthForm';

import HomeView from 'views/HomeView';

const { home, app, reports, income, expenses } = routes;

export const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path={home} element={<AuthForm />}>
          {/* <Route index element={<div>Home View Auth</div>} />
          <Route path={app} element={<div>Balance Bar View</div>}>
            <Route path={app} element={<div>Transactions View</div>}>
              <Route path={expenses} element={<div>Expenses Table</div>} />
              <Route path={income} element={<div>Income Table</div>} />
            </Route>
            <Route path={reports} element={<div>Reports View</div>} />
  </Route>*/}
        </Route>
      </Routes>
      <ToastContainer />
    </Fragment>
  );
};
