import Logo from '../logo/logo';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <section className="film-card">
    <div className="film-card__bg">
      <img src="img/bg-header.jpg" />
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <header className="page-header">
      <Logo isLight />

      <div className="user-block">
        <Link to="sign-in.html" className="user-block__link">
          Sign in
        </Link>
      </div>
    </header>
  </section>
);
