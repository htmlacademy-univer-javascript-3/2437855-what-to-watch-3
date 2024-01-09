import { useAppSelector, useAppDispatch } from '../../hook/useAppDispatch.ts';
import {
  getGenres,
  getSelectedGenre,
} from '../../store/main-reducer/main-selector';
import { setSelectedGenre } from '../../store/main-reducer/main-reducer';

function GenreList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getSelectedGenre);
  const genres = useAppSelector(getGenres);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${
            genre === currentGenre ? 'catalog__genres-item--active' : ''
          }`}
        >
          <button
            className="catalog__genres-link"
            onClick={() => {
              dispatch(setSelectedGenre(genre));
            }}
            style={{ background: 'transparent', border: 'none' }}
          >
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
