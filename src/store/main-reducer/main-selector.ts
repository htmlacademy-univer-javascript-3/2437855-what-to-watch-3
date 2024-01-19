import { State } from '../../types/state';
import { Film, Films } from '../../types/film';
import { NameSpace } from '../../components/const';

export const getFilms = (state: State): Films =>
  state[NameSpace.Main].films;

export const getPromoFilm = (state: State): Film | null =>
  state[NameSpace.Main].promoFilm;

export const getGenres = (state: State): string[] =>
  state[NameSpace.Main].genres;

export const getSelectedGenre = (state: State): string =>
  state[NameSpace.Main].selectedGenre;

export const getIsLoading = (state: State): boolean =>
  state[NameSpace.Main].isLoading;
