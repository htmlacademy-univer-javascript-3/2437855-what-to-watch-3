import { Films } from '../../types/film';
import FilmCard from '../filmCard/filmCard';
import { useMemo, useState } from 'react';

type FilmsListProps = {
  films: Films;
  genre: string;
};

function FilmsList({ films, genre }: FilmsListProps): JSX.Element {
  const filmsToShow =
    genre === 'All Genres'
      ? films
      : films.filter((film) => film.genre === genre);
  const initialNumberOfFilms = filmsToShow.length > 8 ? 8 : filmsToShow.length;
  const [numberOfFilmsToShow, setNumberOfFilmsToShow] =
    useState(initialNumberOfFilms);

  const renderFilms = (filmsToRender: Films, numberOfFilms: number) => {
    const filmCards = [];
    let i = 0;

    while (i < filmsToRender.length && i < numberOfFilms) {
      filmCards.push(
        <FilmCard key={filmsToRender[i].id} film={filmsToRender[i]} />,
      );
      i++;
    }

    return filmCards;
  };
  const filmsList = useMemo(
    () => renderFilms(filmsToShow, numberOfFilmsToShow),
    [filmsToShow, numberOfFilmsToShow],
  );

  return (
    <>
      <div className="catalog__films-list">{filmsList}</div>
      {numberOfFilmsToShow < filmsToShow.length && (
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={() => setNumberOfFilmsToShow(numberOfFilmsToShow + 8)}
          >
            Show more
          </button>
        </div>
      )}
    </>
  );
}

export default FilmsList;
