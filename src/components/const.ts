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
