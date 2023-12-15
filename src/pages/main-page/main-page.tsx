import Footer from '../../components/footer/footer';
import FilmsList from '../../components/filmList/filmList';
import GenreList from '../../components/genre-list/genre-list';
import { useAppDispatch, useAppSelector } from '../../hook/useAppDispatch';
import ShowMore from '../../components/show-more/show-more';
import User from '../../components/user/user';
import { fetchPromoFilm } from '../../store/api-action';
import { useEffect } from 'react';
import {
  getFilms,
  getGenres,
  getIsLoading,
  getPromoFilm,
  getSelectedGenre,
} from '../../store/main-reducer/main-selector';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, [dispatch]);
  const isLoading = useAppSelector(getIsLoading);
  const selectedGenre = useAppSelector(getSelectedGenre);
  const films = useAppSelector(getFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const genres = useAppSelector(getGenres);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

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
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmGenre}</span>
                <span className="film-card__year">{filmYear}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />

          <div className="catalog__films-list">
            <FilmsList films={filmsGenre.slice(0, filmCardCount)} />
          </div>

          {filmCardCount !== filmsGenre.length && <ShowMore />}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
