import { Fragment } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SharedLayout from './SharedLayout';
import 'react-toastify/dist/ReactToastify.css';
import routes from 'utils/routes';
import HomeView from 'views/HomeView';
import ReportView from 'views/ReportView';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import Balance from './Balance';
import TransactionsView from 'views/TransactionsView';
import Container from './Container/Container';

const { home, app, reports, income, expenses, transactions } = routes;

export const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route
          path={home}
          element={
            <PublicRoute>
              <SharedLayout />
            </PublicRoute>
          }
        >
          <Route
            index
            element={
              <PublicRoute restricted navTo={`${app}/${transactions}`}>
                <HomeView />
              </PublicRoute>
            }
          />
          <Route
            path={app}
            element={
              <PrivateRoute>
                <Container>
                  <Balance />
                </Container>
              </PrivateRoute>
            }
          >
            <Route path={transactions} element={<TransactionsView />}>
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
