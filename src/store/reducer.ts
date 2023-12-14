import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus, Genre } from '../components/const';
import {
  changeGenre,
  fillFilms,
  setAuthorizationStatus,
  setDataIsLoading,
  setError,
  setFilmCardCount,
} from './actions';
import { Films } from '../types/film';

type InitialState = {
  genre: Genre;
  filmList: Films;
  sortedFilmList: Films;
  filmCardCount: number;
  dataIsLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};

export const initialState: InitialState = {
  genre: Genre.All,
  filmList: [],
  sortedFilmList: [],
  filmCardCount: 8,
  dataIsLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.sortedFilmList =
        state.genre === Genre.All
          ? state.filmList
          : state.filmList.filter((film) => film.genre === state.genre);
      state.filmCardCount = Math.min(state.sortedFilmList.length, 8);
    })
    .addCase(setFilmCardCount, (state) => {
      const currentFilmsCount = state.sortedFilmList.length;
      state.filmCardCount =
        state.filmCardCount + 8 > currentFilmsCount
          ? currentFilmsCount
          : state.filmCardCount + 8;
    })
    .addCase(fillFilms, (state, action) => {
      state.filmList = action.payload;
      state.sortedFilmList = action.payload;
      state.filmCardCount = Math.min(state.filmList.length, 8);
    })
    .addCase(setDataIsLoading, (state, action) => {
      state.dataIsLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
});

export { reducer };
