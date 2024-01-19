import { Navigate } from 'react-router-dom';

import { AppRoute } from '../const';
import { useAppSelector } from '../../hook/hook';
import { getAuthStatus } from '../../store/user-reducer/user-selector';
import { AuthorizationStatus } from '../../types/authorization';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);

  return authorizationStatus === AuthorizationStatus.Auth ? (
    props.children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
