import { FILMS } from '../../mocks/films.ts';
import { changeGenre, getGenreFilms } from '../../store/actions.ts';
import { Genre } from '../const.ts';
import { useAppSelector, useAppDispatch } from '../../hook/useAppDispatch.ts';

function GenreList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genre);
  const genres: (Genre | string)[] = [
    Genre.All,
    ...new Set(FILMS.map((x) => x.filmGenre)),
  ];

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
              dispatch(changeGenre(genre));
              dispatch(getGenreFilms());
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
