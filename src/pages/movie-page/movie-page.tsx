import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import { Films } from '../../types/film';
import { AuthorizationStatus } from '../../components/const';
import FilmTabs from '../../components/film-tabs/film-tabs';
import User from '../../components/user/user';
import { useAppDispatch, useAppSelector } from '../../hook/useAppDispatch';
import { setDataIsLoading } from '../../store/actions';
import {
  fetchFilmByID,
  fetchReviewsByID,
  fetchSimilarByID,
} from '../../store/api-action';
import FilmsList from '../../components/filmList/filmList';


function MoviePage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => state.film);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus,
  );

  useEffect(() => {
    dispatch(setDataIsLoading(true));
    dispatch(fetchFilmByID(String(id)));
    dispatch(fetchSimilarByID(String(id)));
    dispatch(fetchReviewsByID(String(id)));
    dispatch(setDataIsLoading(false));
  }, [id, dispatch]);
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.src} alt={film.alt} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isLight={false} />

            <User />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.filmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.filmGenre}</span>
                <span className="film-card__year">{film.filmYear}</span>
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
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <Link
                    to={`/films/${film.id}/review`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.srcPoster}
                alt={film.altPoster}
                width="218"
                height="327"
              />
            </div>

            <FilmTabs />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmsList films={similarFilms} />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
