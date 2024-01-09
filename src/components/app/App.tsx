import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/signIn-page/signIn-page';
import MyListPage from '../../pages/myList-page/myList-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/addReview-page/addReview-page';
import PlayerPage from '../../pages/player-page/player-page';
import Error404 from '../../pages/error-page/error404';
import PrivateRoute from '../privateRoute/priveteRoute';
import { AppRoute } from '../const';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />
          <Route path={AppRoute.SignIn} element={<SignInPage />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyListPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film} element={<MoviePage />} />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute>
                <AddReviewPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Player} element={<PlayerPage />} />
          <Route path={AppRoute.Error} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
