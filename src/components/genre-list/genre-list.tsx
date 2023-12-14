import { changeGenre } from '../../store/actions.ts';
import { useAppSelector, useAppDispatch } from '../../hook/useAppDispatch.ts';
import { Genre } from '../const';

function GenreList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => state.filmList);
  const genres: (Genre | string)[] = [
    Genre.All,
    ...new Set(films.map((x) => x.filmGenre)),
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
