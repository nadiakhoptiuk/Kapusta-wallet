import { Fragment } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from 'utils/routes';

import FinancialReport from './FinancialReport';

const { home } = routes;

export const App = () => {
  return (
    <Fragment>
      <FinancialReport />

      <Routes>
        <Route path={home} element={<div>Shared Layout</div>}>
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
