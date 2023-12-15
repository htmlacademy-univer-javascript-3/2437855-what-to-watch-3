import React from 'react';
import { useParams } from 'react-router-dom';
import { Films } from '../../../types/film';

type DetailsProps = {
  films: Films;
};

function Details({ films }: DetailsProps): JSX.Element {
  const { id } = useParams();
  const currentFilmId = Number(id);
  const film = films.at(currentFilmId);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {film.starring.map((actor) => (
              <React.Fragment key={actor}>
                {actor}, <br />{' '}
              </React.Fragment>
            ))}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">1h 39m</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.filmGenre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.filmYear}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
