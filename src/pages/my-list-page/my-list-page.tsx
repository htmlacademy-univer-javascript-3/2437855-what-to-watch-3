import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/film-list/film-list';
import User from '../../components/user/user';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { getMyList } from '../../store/my-list-reducer/my-list-selector';
import { getAuthStatus } from '../../store/user-reducer/user-selector';
import { AuthorizationStatus } from '../../types/authorization';
import { fetchMyList } from '../../store/api-action';
import { AppRoute } from '../../components/const';

function MyListPage(): JSX.Element {
  const myList = useAppSelector(getMyList);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      dispatch(fetchMyList());
      navigate(`${AppRoute.SignIn}`);
    }

    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchMyList());
      navigate(`${AppRoute.MyList}`);
    }
  }, [authorizationStatus, dispatch, navigate]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLight />
        <h1 className="page-title user-page__title">
          My list<span className="user-page__film-count">{myList.length}</span>
        </h1>
        <User />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={myList} genre={'All Genres'} />
      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;
