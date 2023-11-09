import { Films } from '../../types/film';
import {FilmCard} from '../filmCard/filmCard';
import { useState } from 'react';

type CatalogFilmsListProps = {
  films: Films;
}

function FilmsList({ films }: CatalogFilmsListProps): JSX.Element {
  const [, setId] = useState<number | null>();

  return (
    <>
      <div className="catalog__films-list">
        {films.map(({id: filmId, alt, src}) =>
          (
            <FilmCard key={filmId} alt={alt} src={src} onMouseEnter={() => setId(filmId)} onMouseLeave={() => setId(null)}/>
          ))}
      </div>
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    </>
  );
}

export default FilmsList;
