import {Link, Navigate} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Logo from '../../components/logo/logo';
import { AppRoute } from '../../components/const';
import CommentForm from '../../components/commentForm/commentForm';
import User from '../../components/user/user';
import { useAppSelector } from '../../hook/useAppDispatch';
import { getFilm } from '../../store/film-reducer/film-selector';

function AddReviewPage(): JSX.Element {
  const film = useAppSelector(getFilm);

  return film ? (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Add Review</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo isLight={false} />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="film-page.html" className="breadcrumbs__link">
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={AppRoute.AddReview} className="breadcrumbs__link">
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

          <User />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <CommentForm filmId={film.id}/>
    </section>
  ) : (
    <Navigate to={AppRoute.Error} />
  );
}

export default AddReviewPage;
