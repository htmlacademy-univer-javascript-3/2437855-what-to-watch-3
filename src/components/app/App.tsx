import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignInPage from '../../pages/signIn-page/signIn-page';
import MyListPage from '../../pages/myList-page/myList-page';
import {AppRoute, AuthorizationStatus} from '../const';
import {HelmetProvider} from 'react-helmet-async';
import PrivateRoute from '../privateRoute-page/priveteRoute-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/addReview-page/addReview-page';
import PlayerPage from '../../pages/player-page/player-page';
import Error404 from '../../pages/error-page/error404';


type AppProps = {
  filmTitle: string;
  filmGenre: string;
  filmYear: number;
}


function App(props: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage {...props} />}/>
          <Route path={AppRoute.SignIn} element={<SignInPage />}/>
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <MyListPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film} element={<MoviePage/>} />
          <Route path={AppRoute.AddReview} element={<AddReviewPage/>} />
          <Route path={AppRoute.Player} element={<PlayerPage/>} />
          <Route path={AppRoute.Error} element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
