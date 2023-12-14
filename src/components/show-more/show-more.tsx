import { MouseEvent } from 'react';
import { setFilmCardCount } from '../../store/actions';
import { useAppDispatch } from '../../hook/useAppDispatch';

function ShowMore(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={(evt: MouseEvent<HTMLButtonElement>) => {
          evt.preventDefault();
          dispatch(setFilmCardCount());
        }}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMore;
