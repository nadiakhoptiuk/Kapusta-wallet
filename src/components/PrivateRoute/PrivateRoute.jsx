import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import routes from 'utils/routes';

export const PrivateRoute = ({ navTo = routes.home, children }) => {
  const isLogged = useSelector(getIsLoggedIn);
  if (!isLogged) {
    return <Navigate to={navTo} />;
  }
  return children;
};
