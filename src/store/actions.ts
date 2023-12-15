import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, Genre } from '../components/const';
import { UserData } from '../types/authorization';
import { Film, Films } from '../types/film';
import { ReviewArray } from '../types/review';

export const Action = {
  CHANGE_GENRE: 'main/changeGenre',
  SET_FILM_CARD_COUNT: 'setFilmCardCount',
  SHOW_MORE_FILMS: 'main/showMoreFilms',
  RESET_SHOWN_FILMS: 'resetShownFilms',
  FILL_FILMS: 'fillFilms',
  SET_AUTH_STATUS: 'setAuthStatus',
  SET_DATA_IS_LOADING: 'setDataIsLoading',
  APP_SET_ERROR: 'app/setError',
  SAVE_USER: 'saveUser',
  LOAD_FILM: 'loadFilm',
  LOAD_REVIEWS: 'loadReviews',
  LOAD_SIMILAR: 'loadSimilarFilms',
};

export const changeGenre = createAction<Genre>(
  Action.CHANGE_GENRE,
  (genre: Genre) => ({ payload: genre }),
);
export const setFilmCardCount = createAction(Action.SET_FILM_CARD_COUNT);
export const fillFilms = createAction<Films>(Action.FILL_FILMS);
export const setDataIsLoading = createAction<boolean>(
  Action.SET_DATA_IS_LOADING,
);
export const setAuthorizationStatus = createAction<AuthorizationStatus>(
  Action.SET_AUTH_STATUS,
);
export const setError = createAction<string | null>(Action.APP_SET_ERROR);
export const saveUser = createAction<UserData>(Action.SAVE_USER);
export const loadFilm = createAction<Film>(Action.LOAD_FILM);
export const loadReviews = createAction<ReviewArray>(Action.LOAD_REVIEWS);
export const loadSimilarFilms = createAction<Films>(Action.LOAD_SIMILAR);
