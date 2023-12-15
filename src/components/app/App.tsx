import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/signIn-page/signIn-page';
import MyListPage from '../../pages/myList-page/myList-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/addReview-page/addReview-page';
import PlayerPage from '../../pages/player-page/player-page';
import Error404 from '../../pages/error-page/error404';
import { Loader } from '../loader/loader';
import PrivateRoute from '../privateRoute-page/priveteRoute-page';
import { useAppSelector } from '../../hook/useAppDispatch';
import { AppRoute } from '../const';

type AppProps = {
  filmTitle: string;
  filmGenre: string;
  filmYear: number;
};

function App(props: AppProps): JSX.Element {
  const films = useAppSelector((state) => state.sortedFilmList);
  const isLoading = useAppSelector((state) => state.dataIsLoading);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage {...props} />} />
          <Route path={AppRoute.SignIn} element={<SignInPage />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyListPage films={films} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film} element={<MoviePage />} />
          <Route path={AppRoute.AddReview} element={<AddReviewPage />} />
          <Route path={AppRoute.Player} element={<PlayerPage />} />
          <Route path={AppRoute.Error} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
