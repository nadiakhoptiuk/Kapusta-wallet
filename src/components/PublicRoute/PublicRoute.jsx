import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import routes from 'utils/routes';

export const PublicRoute = ({
  restricted = false,
  navTo = routes.app,
  children,
}) => {
  const isLogged = useSelector(getIsLoggedIn);
  if (isLogged && restricted) {
    return <Navigate to={navTo} />;
  }
  return children;
};
