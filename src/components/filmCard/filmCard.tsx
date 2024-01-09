import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Film } from '../../types/film';
import VideoPlayer from '../video-player/VideoPlayer';
import { AppRoute } from '../const';
import './filmCard.css';

export type FilmCardProps = {
  film: Film;
};

function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [needToActiveVideo, setNeedToActiveVideo] = useState(false);

  useEffect(() => {
    if (needToActiveVideo) {
      setIsPlaying(true);
    }
  }, [needToActiveVideo]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setNeedToActiveVideo(true)}
      onMouseLeave={() => {
        setNeedToActiveVideo(false);
        setIsPlaying(false);
      }}
    >
      <Link className="small-film-card__link" to={AppRoute.Film}>
        <div className="small-film-card__image">
          {!isPlaying ? (
            <img src={film.previewImage} alt={film.name} />
          ) : (
            <VideoPlayer
              isPlaying={isPlaying}
              src={film.previewImage}
              poster={film.name}
            />
          )}
        </div>
        <h3 className="small-film-card__title">{film.name}</h3>
      </Link>
    </article>
  );
}

export default FilmCard;
