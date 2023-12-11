import { Films } from '../../types/film';
import FilmCard from '../filmCard/filmCard';
import { useState } from 'react';

type CatalogFilmsListProps = {
  films: Films;
};

function FilmsList({ films }: CatalogFilmsListProps): JSX.Element {
  const [, setId] = useState<number | null>();

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onMouseEnter={() => setId(film.id)}
          onMouseLeave={() => setId(null)}
        />
      ))}
    </div>
  );
}

export default FilmsList;
