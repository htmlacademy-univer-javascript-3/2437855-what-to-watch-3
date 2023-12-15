import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Logo from '../../components/logo/logo';
import { Films } from '../../types/film';
import { AppRoute } from '../../components/const';
import CommentForm from '../../components/commentForm/commentForm';
import User from '../../components/user/user';

type AddReviewProps = {
  films: Films;
};

function AddReviewPage({ films }: AddReviewProps): JSX.Element {
  const { id } = useParams();
  const currentFilmId = Number(id);
  const film = films.at(currentFilmId);

  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Add Review</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.src} alt={film.alt} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo isLight={false} />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="film-page.html" className="breadcrumbs__link">
                  {film.filmName}
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
            src={film.srcPoster}
            alt={film.altPoster}
            width="218"
            height="327"
          />
        </div>
      </div>

      <CommentForm />
    </section>
  );
}

export default AddReviewPage;
