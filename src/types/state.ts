import { store } from '../store';
import User from '../components/user/user';
import { Reviews } from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AuthProcess = {
  authorizationStatus: AuthStatus;
  user: User | null;
  loginError: LogInError;
};

export type FilmData = {
  film: FilmInfo | null;
  similarFilms: FilmInfo[];
  reviews: Reviews;
  postReviewError: string | null;
  similarFilmsLoaded: boolean;
};

export type MainData = {
  films: FilmInfo[];
  promoFilm: FilmInfo | null;
  genres: string[];
  selectedGenre: string;
  isLoading: boolean;
};

export type MyListData = {
  myList: FilmInfo[];
  myListLength: number;
  changedFilm: {
    filmId: number;
    status: boolean;
  } | null;
};
