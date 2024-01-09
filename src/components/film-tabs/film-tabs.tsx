import { useMemo, useState } from 'react';

import Overview from '../film-tabs/overview/overview';
import Details from '../film-tabs/details/details';
import Reviews from '../film-tabs/reviews/reviews';
import { Film } from '../../types/film';

type FilmTabs = {
  filmInfo: Film;
};

function FilmTabs(props: FilmTabs) {
  const tabsNames = ['Overview', 'Details', 'Reviews'];
  const [tab, setTab] = useState(tabsNames[0]);

  const renderNavigation = () => {
    const tabs = [];

    for (const content of tabsNames) {
      const className = content === tab ? 'film-nav__item--active' : '';
      tabs.push(
        <li className={`film-nav__item ${className}`} key={content}>
          <button
            className="film-nav__link"
            onClick={() => setTab(content)}
            style={{ background: 'transparent', border: 'none' }}
            data-testid={`${content}-tab`}
          >
            {content}
          </button>
        </li>,
      );
    }

    return (
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">{tabs}</ul>
      </nav>
    );
  };

  const renderTab = (name: string) => {
    switch (name) {
      case 'Details':
        return <Details filmInfo={props.filmInfo} />;
      case 'Reviews':
        return <Reviews />;
      default:
        return <Overview filmInfo={props.filmInfo} />;
    }
  };

  const tabContent = useMemo(() => renderTab(tab), [tab]);

  return (
    <div className="film-card__desc">
      {renderNavigation()}
      {tabContent}
    </div>
  );
}

export default FilmTabs;
