import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/filmList/filmList';
import { Films } from '../../types/film';
import User from '../../components/user/user';

type MyListPageProps = {
  films: Films;
};

function MyListPage({ films }: MyListPageProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLight />

        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
        <User />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films} />
      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;
