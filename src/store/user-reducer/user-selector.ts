import { State } from '../../types/state';
import {
  UserData,
  AuthorizationStatus,
  LogInError,
} from '../../types/authorization';
import { NameSpace } from '../../components/const';

export const getAuthStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.Auth].authorizationStatus;

export const getUser = (state: State): UserData => state[NameSpace.Auth].user;

export const getLoginError = (state: State): LogInError =>
  state[NameSpace.Auth].loginError;
