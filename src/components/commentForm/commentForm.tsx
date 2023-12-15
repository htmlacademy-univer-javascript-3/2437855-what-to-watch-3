import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import Rating from '../rating/rating';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hook/useAppDispatch';
import { postReview } from '../../store/api-action';

function generateRatingList(min: number, max: number): number[] {
  return Array.from({ length: max - min + 1 }, (_, i) => max - i);
}

const MIN = 1;
const MAX = 10;

const ratingList = generateRatingList(MIN, MAX);

function CommentForm(): JSX.Element {
  const [text, setText] = useState('');
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const film = useAppSelector((state) => state.film);
  const [filmRating, setFilmRating] = useState(0);
  const dispatch = useAppDispatch();

  const doOnSubmit = (rating: number, comment: string) => {
    dispatch(postReview({ filmId: film.id, rating, comment }));
    navigate(`/films/${film.id}`);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (filmRating && commentRef.current?.value) {
      doOnSubmit(filmRating, commentRef.current.value);
    }
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFilmRating(Number(evt.target.value));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {ratingList.map((value) => (
              <Rating key={value} num={value} onChange={handleInputChange} />
            ))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            defaultValue={''}
            ref={commentRef}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={
                !filmRating ||
                !commentRef.current?.value ||
                commentRef.current?.value.length < 50 ||
                commentRef.current?.value.length > 400
              }
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
