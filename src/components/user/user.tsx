import React from 'react';
import { Link } from 'react-router-dom';

import { logOutAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hook/useAppDispatch';
import { AuthorizationStatus } from '../const';

function User(): JSX.Element {
  const userData = useAppSelector((state) => state.userData);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  const signOutClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logOutAction());
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to='/login' className='user-block__link'>Sign in</Link>
        </li>
      </ul>
    );
  }
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={userData?.avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={signOutClickHandler}>Sign out</a>
      </li>
    </ul>
  );
}

export default User;
