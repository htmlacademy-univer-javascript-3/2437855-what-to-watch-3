import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../components/const';

export const changeGenre = createAction('main/changeGenre', (genre: Genre) => ({
  payload: genre,
}));

export const getGenreFilms = createAction('main/getGenreFilms');
