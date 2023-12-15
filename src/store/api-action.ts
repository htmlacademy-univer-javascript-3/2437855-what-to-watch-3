import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute, AuthorizationStatus } from '../components/const';
import { AppDispatch, Film, State } from '../types/film';
import {fillFilms, setAuthorizationStatus, setDataIsLoading, setError} from './actions';
import { AuthData, UserData } from '../types/authorization';
import { dropToken, saveToken } from '../services/token';

export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataIsLoading(true));
  const { data } = await api.get<Film[]>(APIRoute.Films);
  dispatch(fillFilms(data));
  dispatch(setDataIsLoading(false));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  } catch {
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
});

export const logInAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  },
);

export const logOutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
});

export const clearError = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => {
      dispatch(setError(null));
    }, 2000);
  }
);
