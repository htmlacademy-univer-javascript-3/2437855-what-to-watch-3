import { State } from '../../types/state';
import { Films } from '../../types/film';
import { NameSpace } from '../../components/const';

export const getMyList = (state: State): Films =>
  state[NameSpace.MyList].myList;

export const getMyListLength = (state: State): number =>
  state[NameSpace.MyList].myListLength;

export const getChangedFilm = (
  state: State,
): { filmId: number; status: boolean } | null =>
  state[NameSpace.MyList].changedFilm;
