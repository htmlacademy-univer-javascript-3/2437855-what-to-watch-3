import Footer from '../../components/footer/footer';
import FilmsList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import User from '../../components/user/user';
import { fetchPromoFilm } from '../../store/api-action';
import { useEffect } from 'react';
import {
  getFilms,
  getIsLoading,
  getPromoFilm,
  getSelectedGenre,
} from '../../store/main-reducer/main-selector';
import { Loader } from '../../components/loader/loader';
import FilmCardDescription from '../../components/film-card-description/film-card-description';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, [dispatch]);
  const films = useAppSelector(getFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const isLoading = useAppSelector(getIsLoading);
  const currentGenre = useAppSelector(getSelectedGenre);

  return (
    <>
      {promoFilm && (
        <section className="film-card">
          {promoFilm.backgroundImage ? (
            <div className="film-card__bg">
              <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
            </div>
          ) : (
            <div
              className="film-card__bg"
              data-testid="film-card-background-color"
              style={{ backgroundColor: promoFilm.backgroundColor }}
            />
          )}
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <User />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__info">
              <div className="film-card__poster">
                <img
                  src={promoFilm.posterImage}
                  alt={promoFilm.name}
                  width="218"
                  height="327"
                />
              </div>

              <FilmCardDescription filmInfo={promoFilm} />
            </div>
          </div>
        </section>
      )}

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />

          {isLoading ? (
            <Loader />
          ) : (
            <FilmsList films={films} genre={currentGenre} />
          )}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
