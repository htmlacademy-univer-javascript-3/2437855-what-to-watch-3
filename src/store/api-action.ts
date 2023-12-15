import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute, AuthorizationStatus } from '../components/const';
import { AppDispatch, Film, State } from '../types/film';
import {
  fillFilms,
  loadFilm,
  loadReviews,
  loadSimilarFilms,
  setAuthorizationStatus,
  setDataIsLoading,
  setError,
} from './actions';
import { AuthData, UserData } from '../types/authorization';
import { dropToken, saveToken } from '../services/token';
import { ReviewArray, UserReview } from '../types/review';

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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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

export const clearError = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('clearError', (_arg, { dispatch }) => {
  setTimeout(() => {
    dispatch(setError(null));
  }, 2000);
});

export const fetchFilmByID = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchFilmById', async (filmId: string, { dispatch, extra: api }) => {
  const { data } = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
  dispatch(loadFilm(data));
});

export const fetchReviewsByID = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchReviewsById', async (filmId: string, { dispatch, extra: api }) => {
  const { data } = await api.get<ReviewArray>(`${APIRoute.Reviews}/${filmId}`);
  dispatch(loadReviews(data));
});

export const fetchSimilarByID = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchSimilarById', async (filmId: string, { dispatch, extra: api }) => {
  const { data } = await api.get<Film[]>(
    `${APIRoute.Films}/${filmId}${APIRoute.SimilarFilms}`,
  );
  dispatch(loadSimilarFilms(data));
});

export const postReview = createAsyncThunk<
  void,
  UserReview,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/postFilmReview',
  async ({ comment, rating, filmId }, { dispatch, extra: api }) => {
    dispatch(setDataIsLoading(true));
    await api.post<UserReview>(`${APIRoute.Reviews}/${filmId}`, {
      comment,
      rating,
    });
    dispatch(setDataIsLoading(false));
  },
);
