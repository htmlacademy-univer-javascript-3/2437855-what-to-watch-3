import { State } from '../../types/state';
import { UserData, UserAuthData, LogInError } from '../../types/authorization';
import { NameSpace } from '../../components/const';

export const getAuthStatus = (state: State): UserAuthData =>
  state[NameSpace.Auth].authorizationStatus;

export const getUser = (state: State): UserData | null =>
  state[NameSpace.Auth].user;

export const getLoginError = (state: State): LogInError =>
  state[NameSpace.Auth].loginError;
