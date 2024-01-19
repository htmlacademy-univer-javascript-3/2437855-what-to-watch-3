import { Link } from 'react-router-dom';

import { logout } from '../../store/api-action';
import { getAuthStatus, getUser } from '../../store/user-reducer/user-selector';
import { redirectToRoute } from '../../store/actions';
import { AuthorizationStatus } from '../../types/authorization';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { AppRoute } from '../const';

function User(): JSX.Element | null {
  const userData = useAppSelector(getUser);
  const authorizationStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div
            className="user-block__avatar"
            onClick={() => {
              dispatch(redirectToRoute(AppRoute.MyList));
            }}
          >
            <Link to={AppRoute.MyList}>
              <img
                src={userData?.avatarUrl}
                alt="User avatar"
                width="63"
                height="63"
              />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <button
            onClick={() => {
              dispatch(logout());
            }}
            className="user-block__link"
            style={{ background: 'transparent', border: 'none' }}
          >
            Sign out
          </button>
        </li>
      </ul>
    );
  }
  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to={AppRoute.SignIn} className="user-block__link">
            Sign in
          </Link>
        </li>
      </ul>
    );
  }
  return null;
}

export default User;
