export const AppRoute = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: '/films/:id',
  AddReview: '/films/:id/review',
  Player: '/player/:id',
  Error: '/*',
};

export enum NameSpace {
  Auth = 'AUTH',
  Film = 'FILM',
  Main = 'MAIN',
  MyList = 'MYLIST',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  SimilarFilms = '/similar',
}

export enum Genre {
  All = 'All Genres',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  KidsFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thriller = 'Thriller',
}
