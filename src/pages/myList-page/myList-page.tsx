import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/filmList/filmList';
import User from '../../components/user/user';
import { useAppSelector } from '../../hook/useAppDispatch';
import { getMyList } from '../../store/myList-reducer/myList-selector';

function MyListPage(): JSX.Element {
  const myList = useAppSelector(getMyList);

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
