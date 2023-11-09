import { AppRoute } from '../const';
import { MouseEventHandler } from 'react';
import {Link} from 'react-router-dom';

export type FilmCardProps = {
  name: string;
  imgSrc: string;
  onMouseEnter?: MouseEventHandler<HTMLElement> | undefined;
  onMouseLeave?: MouseEventHandler<HTMLElement> | undefined;
}

export const FilmCard = ({name, imgSrc, onMouseEnter, onMouseLeave}:FilmCardProps) => (
  <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <div className="small-film-card__image">
      <img src={imgSrc} alt={name} width="280" height="175"/>
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={AppRoute.Film}>{name}</Link>
    </h3>
  </article>
);
