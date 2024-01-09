import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmTabs from '../../components/film-tabs/film-tabs';
import User from '../../components/user/user';
import { useAppDispatch, useAppSelector } from '../../hook/useAppDispatch';
import {
  fetchFilm,
  fetchReviews,
  fetchSimilarFilms,
} from '../../store/api-action';
import FilmsList from '../../components/filmList/filmList';
import { getAuthStatus } from '../../store/user-reducer/user-selector';
import {
  getFilm,
  getSimilarFilms,
  getSimilarFilmsLoaded,
} from '../../store/film-reducer/film-selector';
import FilmCardDescription from '../../components/filmCardDescription/filmCardDescription';
import { AuthorizationStatus } from '../../types/authorization';
import ShowMore from '../../components/show-more/show-more';


function MoviePage(): JSX.Element {
  const params = useParams();
  const filmId = params.id;

  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const similarFilmsLoaded = useAppSelector(getSimilarFilmsLoaded);
  const authorizationStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    if (filmId !== undefined) {
      dispatch(fetchFilm(filmId));
      dispatch(fetchSimilarFilms(filmId));
      dispatch(fetchReviews(filmId));
    }
  }, [dispatch, filmId]);

  return (
    <>
      {film && (
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            props.backgroundImgSrc ?
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt={film.name} />
            </div>{' '}
            :
            <div
              className="film-card__bg"
              data-testid="film-card-background-color"
              style={{ backgroundColor: film.backgroundColor }}
            />
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header film-card__head">
              <Logo isLight={false} />

              <User />
            </header>
            <div className="film-card__wrap">
              <FilmCardDescription filmInfo={film}>
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <Link
                    to={`/films/${film.id}/review`}
                    className="btn film-card__button"
                    data-testid="add-review-link"
                  >
                    Add review
                  </Link>
                )}
              </FilmCardDescription>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img
                  src={film.posterImage}
                  alt={film.name}
                  width="218"
                  height="327"
                />
              </div>

              <FilmTabs />
            </div>
          </div>
        </section>
      )}

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {similarFilmsLoaded && film ? (
            <div className="catalog__films-list">
              <FilmsList films={similarFilms} />
              <ShowMore />
            </div>
          ) : (
            <ShowMore />
          )}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
