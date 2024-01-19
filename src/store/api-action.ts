import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AppDispatch, State } from '../types/state';
import { Film, Films } from '../types/film';
import { UserData, UserAuthData } from '../types/authorization';
import { Review } from '../types/review';
import { dropToken, saveToken } from '../services/token';
import { redirectToRoute } from './actions';
import { setGenres } from './main-reducer/main-reducer';

export const getAuthStatus = createAsyncThunk<
  UserData,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('auth/getAuthStatus', async (_arg, { extra: api }) => {
  const { data } = await api.get<UserData>('/login');
  saveToken(data.token);
  return data;
});

export const login = createAsyncThunk<
  UserData,
  UserAuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('auth/login', async ({ email, password }, { extra: api }) => {
  const { data } = await api.post<UserData>('/login', { email, password });
  saveToken(data.token);
  return data;
});

export const logout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('auth/logout', async (_arg, { extra: api }) => {
  await api.delete('/logout');
  dropToken();
});

export const fetchFilms = createAsyncThunk<
  Films,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('main/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Films>('/films');
  dispatch(setGenres(data));
  return data;
});

export const fetchPromoFilm = createAsyncThunk<
  Film,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('main/fetchPromoFilm', async (_arg, { extra: api }) => {
  const { data } = await api.get<Film>('/promo');
  return data;
});

export const fetchMyList = createAsyncThunk<
  Films,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('myList/fetchMyList', async (_args, { extra: api }) => {
  const { data } = await api.get<Films>('/favorite');
  return data;
});

export const changeFilmStatus = createAsyncThunk<
  Film,
  { filmId: number; status: number },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('myList/postReview', async ({ filmId, status }, { extra: api }) => {
  const { data } = await api.post<Film>(`/favorite/${filmId}/${status}`, {
    filmId,
    status,
  });
  return data;
});

export const fetchFilm = createAsyncThunk<
  Film,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('film/fetchFilm', async (filmId, { extra: api }) => {
  const { data } = await api.get<Film>(`/films/${filmId}`);
  return data;
});

export const fetchSimilarFilms = createAsyncThunk<
  Films,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('film/fetchSimilarFilms', async (filmId, { extra: api }) => {
  const { data } = await api.get<Films>(`/films/${filmId}/similar`);
  return data;
});

export const fetchReviews = createAsyncThunk<
  Review[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('film/fetchReviews', async (filmId, { extra: api }) => {
  const { data } = await api.get<Review[]>(`/comments/${filmId}`);
  return data;
});

export const postReview = createAsyncThunk<
  Review[],
  { filmId: number; comment: string; rating: number },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'film/postReview',
  async ({ filmId, comment, rating }, { dispatch, extra: api }) => {
    const { data } = await api.post<Review[]>(`/comments/${filmId}`, {
      comment,
      rating,
    });
    dispatch(redirectToRoute(`/films/${filmId}`));
    return data;
  },
);
