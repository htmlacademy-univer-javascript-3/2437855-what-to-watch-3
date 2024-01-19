export const MIN = 1;
export const MAX = 10;
export const MIN_LENGTH_REVIEW = 50;
export const MAX_LENGTH_REVIEW = 400;
export const VISIBLE_FILM_CARD_COUNT = 8;
export const TIMEOUT_ACTIVE_VIDEO = 1000;
export const RE_PASSWORD = /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}/;
export const RE_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export enum ScoreRating {
  Bad_min = 0,
  Bad_max = 3,
  Normal_min = 3,
  Normal_max = 5,
  Good_min = 5,
  Good_max = 8,
  VeryGood_min = 8,
  VeryGood_max = 10,
}

export const AppRoute = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: '/films/:id',
  AddReview: '/films/:id/review',
  Player: '/player/:id',
  Error: '*',
};

export enum NameSpace {
  Auth = 'AUTH',
  Film = 'FILM',
  Main = 'MAIN',
  MyList = 'MYLIST',
}
