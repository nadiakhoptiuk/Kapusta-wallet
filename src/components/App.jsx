import { Fragment } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SharedLayout from './SharedLayout';
import 'react-toastify/dist/ReactToastify.css';
import routes from 'utils/routes';
import HomeView from 'views/HomeView';
import ReportView from 'views/ReportView';

import HomeView from 'views/HomeView';

const { home, app, reports, income, expenses } = routes;

export const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path={home} element={<SharedLayout />}>
          <Route index element={<HomeView />} />
          <Route path={app} element={<div>Balance Bar View</div>}>
            <Route path={app} element={<div>Transactions View</div>}>
              <Route path={expenses} element={<div>Expenses Table</div>} />
              <Route path={income} element={<div>Income Table</div>} />
            </Route>
            <Route path={reports} element={<ReportView />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </Fragment>
  );
};
