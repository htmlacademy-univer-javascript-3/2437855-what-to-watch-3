import { State } from '../../types/state';
import { NameSpace } from '../../components/const';

export const getAuthStatus = (state: State) =>
  state[NameSpace.Auth].authorizationStatus;

export const getUser = (state: State) => state[NameSpace.Auth].user;

export const getLoginError = (state: State) =>
  state[NameSpace.Auth].loginError;
