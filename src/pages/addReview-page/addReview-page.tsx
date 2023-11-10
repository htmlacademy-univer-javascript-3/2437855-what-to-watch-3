import Logo from '../../components/logo/logo';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Film } from '../../types/film';
import {AppRoute} from '../../components/const';
import CommentForm from '../../components/commentForm/commentForm';

type AddReviewProps = {
  film: Film;
}


function AddReviewPage({film}: AddReviewProps): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <Helmet><title>Add Review</title></Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.src} alt={film.alt}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo isLight={false}/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="film-page.html" className="breadcrumbs__link">{film.filmName}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={AppRoute.AddReview} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.srcPoster} alt={film.altPoster} width="218" height="327"/>
        </div>
      </div>

      <CommentForm />

    </section>
  );
}

export default AddReviewPage;
