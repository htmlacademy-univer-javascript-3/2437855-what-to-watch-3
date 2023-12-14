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
      <div className="small-film-card__image">
        {!isPlaying ? (
          <img src={film.srcPoster} alt={film.filmName}/>
        ) : (
          <VideoPlayer
            isPlaying={isPlaying}
            isMuting
            src={film.src}
            poster={film.srcPoster}
          />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>
          {film.filmName}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
