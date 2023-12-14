import { createReducer } from '@reduxjs/toolkit';
import { FILMS } from '../mocks/films.ts';
import { changeGenre, getGenreFilms } from './actions.ts';
import { Genre } from '../components/const';

export const initialState = {
  genre: Genre.All,
  films: FILMS,
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
    });
});

export { reducer };
