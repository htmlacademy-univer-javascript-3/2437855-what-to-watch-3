import React, { useState } from 'react';
import Rating from '../rating/rating';

import { useAppDispatch, useAppSelector } from '../../hook/useAppDispatch';
import { postReview } from '../../store/api-action';
import { getPostReviewError } from '../../store/film-reducer/film-selector';
import { setPostReviewError } from '../../store/film-reducer/film-reducer';

function generateRatingList(min: number, max: number): number[] {
  return Array.from({ length: max - min + 1 }, (_, i) => max - i);
}

const MIN = 1;
const MAX = 10;

const ratingList = generateRatingList(MIN, MAX);

function CommentForm({ filmId }: { filmId: number }): JSX.Element {
  const dispatch = useAppDispatch();
  const postReviewError = useAppSelector(getPostReviewError);
  const [formData, setFormData] = useState({
    rating: -1,
    reviewText: '',
  });

  const onChange = (
    evt:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    dispatch(setPostReviewError(null));
  };

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(
      postReview({
        filmId: filmId,
        comment: formData.reviewText,
        rating: formData.rating,
      }),
    );
  };

  return (
    <div className="add-review">
      <form className="add-review__form" onSubmit={onSubmit}>
        {postReviewError && (
          <p style={{ textAlign: 'center', color: 'darkred' }}>
            {postReviewError}
          </p>
        )}
        <div className="rating">
          <div className="rating__stars">
            {ratingList.map((value) => (
              <Rating key={value} num={value} onChange={onChange} />
            ))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            onChange={onChange}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            defaultValue={''}
          />
          <div className="add-review__submit">
            {
              formData.rating !== -1 && formData.reviewText.length >= 50 ?
                <button className="add-review__btn" type="submit">Post</button> :
                <button className="add-review__btn" type="submit" disabled>Post</button>
            }
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
