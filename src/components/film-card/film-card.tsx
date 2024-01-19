import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';
import { TIMEOUT_ACTIVE_VIDEO } from '../const';
import './film-card.css';

export type FilmCardProps = {
  film: Film;
};

function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [needToActiveVideo, setNeedToActiveVideo] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (needToActiveVideo) {
      setTimeout(() => isMounted && setIsPlaying(true), TIMEOUT_ACTIVE_VIDEO);
    }

    return () => {
      isMounted = false;
    };
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
      <Link className="small-film-card__link" to={`/films/${film.id}`}>
        <div className="small-film-card__image">
          {!isPlaying ? (
            <img src={film.previewImage} alt={film.name} />
          ) : (
            <VideoPlayer
              isPlaying={isPlaying}
              isMuting
              src={film.previewVideoLink}
              poster={film.previewImage}
            />
          )}
        </div>
        <h3 className="small-film-card__title">{film.name}</h3>
      </Link>
    </article>
  );
}

export default FilmCard;
