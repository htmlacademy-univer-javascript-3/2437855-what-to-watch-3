import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { logout } from '../../store/api-action';
import { getAuthStatus, getUser } from '../../store/user-reducer/user-selector';
import { redirectToRoute } from '../../store/actions';
import { AuthorizationStatus } from '../../types/authorization';
import { useAppDispatch, useAppSelector } from '../../hook/useAppDispatch';
import { AppRoute } from '../const';

function User(): JSX.Element | null {
  const userData = useAppSelector(getUser);
  const authorizationStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();

  function getUserBlock(authStatus: AuthorizationStatus) {
    switch (authStatus) {
      case AuthorizationStatus.Auth:
        return (
          <>
            <li className="user-block__item">
              <div
                className="user-block__avatar"
                onClick={() => {
                  dispatch(redirectToRoute(AppRoute.MyList));
                }}
              >
                <img
                  src={userData?.avatarUrl}
                  alt="User avatar"
                  width="63"
                  height="63"
                />
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
          </>
        );
      case AuthorizationStatus.NoAuth:
        return (
          <li className="user-block__item">
            <Link to={AppRoute.SignIn} className="user-block__link">
              Sign in
            </Link>
          </li>
        );
      case AuthorizationStatus.Unknown:
        return null;
    }
  }

  const userBlock = useMemo(
    () => getUserBlock(authorizationStatus),
    [authorizationStatus],
  );

  return <ul className="user-block">{userBlock}</ul>;
}

export default User;
