import { useMemo } from 'react';

import { Film } from '../../../types/film';
import { ScoreRating } from '../../const';

function Overview({ filmInfo }: { filmInfo: Film }): JSX.Element {
  const getScore = (rating: number) => {
    if (ScoreRating.Bad_min <= rating && rating < ScoreRating.Bad_max) {
      return 'Bad';
    } else if (
      ScoreRating.Normal_min <= rating &&
      rating < ScoreRating.Normal_max
    ) {
      return 'Normal';
    } else if (
      ScoreRating.Good_min <= rating &&
      rating < ScoreRating.Good_max
    ) {
      return 'Good';
    } else if (
      ScoreRating.VeryGood_min <= rating &&
      rating < ScoreRating.VeryGood_max
    ) {
      return 'Very good';
    } else {
      return 'Awesome';
    }
  };
  const score = useMemo(() => getScore(filmInfo.rating), [filmInfo.rating]);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{filmInfo.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{score}</span>
          <span className="film-rating__count">
            {`${filmInfo.scoresCount} ${
              filmInfo.scoresCount === 1 ? 'rating' : 'ratings'
            }`}
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{filmInfo.description}</p>
        <p className="film-card__director">
          <strong>Director: {filmInfo.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {filmInfo.starring.join(', ')} and other</strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
