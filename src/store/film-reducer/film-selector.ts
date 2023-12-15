import { State } from '../../types/state';
import { NameSpace } from '../../components/const';
import { Film, Films } from '../../types/film';
import { Review } from '../../types/Review';

export const getFilm = (state: State): Film | null =>
  state[NameSpace.Film].film;

export const getSimilarFilms = (state: State): Films =>
  state[NameSpace.Film].similarFilms;

export const getSimilarFilmsLoaded = (state: State): boolean =>
  state[NameSpace.Film].similarFilmsLoaded;

export const getReviews = (state: State): Review[] =>
  state[NameSpace.Film].reviews;

export const getPostReviewError = (state: State): string | null =>
  state[NameSpace.Film].postReviewError;
