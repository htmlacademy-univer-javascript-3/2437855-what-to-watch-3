import { useState } from 'react';
import {
  getFilms,
  getSelectedGenre,
} from '../../store/main-reducer/main-selector';
import { useAppSelector } from '../../hook/useAppDispatch';

function ShowMore(): JSX.Element {
  const films = useAppSelector(getFilms);
  const currentGenre = useAppSelector(getSelectedGenre);

  const filmsToShow =
    currentGenre === 'All Genres'
      ? films
      : films.filter((film) => film.genre === currentGenre);
  const initialNumberOfFilms = filmsToShow.length > 8 ? 8 : filmsToShow.length;
  const [numberOfFilmsToShow, setNumberOfFilmsToShow] =
    useState(initialNumberOfFilms);

  return (
    <div>
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
    </div>
  );
}

export default ShowMore;
