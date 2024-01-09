import { store } from '../store';
import User from '../components/user/user';
import { Review } from './review';
import { Film, Films } from './film';
import { AuthorizationStatus, LogInError } from './authorization';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AuthProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
  loginError: LogInError;
};

export type FilmData = {
  film: Film | null;
  similarFilms: Films;
  reviews: Review[];
  postReviewError: string | null;
  similarFilmsLoaded: boolean;
};

export type MainData = {
  films: Films;
  promoFilm: Film | null;
  genres: string[];
  selectedGenre: string;
  isLoading: boolean;
};

export type MyListData = {
  myList: Films;
  myListLength: number;
  changedFilm: {
    filmId: number;
    status: boolean;
  } | null;
};
