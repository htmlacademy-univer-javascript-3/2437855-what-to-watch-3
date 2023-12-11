import { Films } from '../../types/film';
import FilmCard from '../filmCard/filmCard';


type CatalogFilmsListProps = {
  films: Films;
};

function FilmsList({ films }: CatalogFilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

export default FilmsList;
