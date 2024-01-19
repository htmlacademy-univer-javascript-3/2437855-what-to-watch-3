import React, { Fragment, JSX } from 'react';

import { Film } from '../../../types/film';

function Details({ filmInfo }: { filmInfo: Film }): JSX.Element {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{filmInfo.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {filmInfo.starring.map((actor, index) =>
              index + 1 === filmInfo.starring.length ? (
                actor
              ) : (
                <Fragment key={actor}>
                  {actor}, <br />
                </Fragment>
              ),
            )}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{filmInfo.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{filmInfo.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{filmInfo.released}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
