import { createReducer } from '@reduxjs/toolkit';
import { FILMS } from '../mocks/films.ts';
import {changeGenre, getGenreFilms, setFilmCardCount} from './actions.ts';
import { Genre } from '../components/const';

export const initialState = {
  genre: Genre.All,
  films: FILMS,
  filmCardCount: 8,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getGenreFilms, (state) => {
      switch (state.genre) {
        case Genre.All:
          state.films = FILMS;
          break;
        default:
          state.films = FILMS.filter((film) => film.filmGenre === state.genre);
          break;
      }
    })
    .addCase(setFilmCardCount, (state) => {
      const currentFilmsCount = state.films.length;
      state.filmCardCount =
        state.filmCardCount + 8 > currentFilmsCount
          ? currentFilmsCount
          : state.filmCardCount + 8;
    });
});

export { reducer };
