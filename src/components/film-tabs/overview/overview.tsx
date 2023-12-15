import { useParams } from 'react-router-dom';
import { Films } from '../../../types/film';

type OverviewProps = {
  films: Films;
};

function Overview({ films }: OverviewProps): JSX.Element {
  const { id } = useParams();
  const currentFilmId = Number(id);
  const film = films.at(currentFilmId);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating.score}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.rating.level}</span>
          <span className="film-rating__count">{film.rating.count}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.textPart1}</p>

        <p>{film.textPart2}</p>

        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {film.starring}</strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
