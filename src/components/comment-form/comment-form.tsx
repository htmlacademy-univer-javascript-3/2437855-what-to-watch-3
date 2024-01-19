import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { postReview } from '../../store/api-action';
import { getPostReviewError } from '../../store/film-reducer/film-selector';
import { setPostReviewError } from '../../store/film-reducer/film-reducer';
import Rating from '../rating/rating';
import { MAX, MAX_LENGTH_REVIEW, MIN, MIN_LENGTH_REVIEW } from '../const';

function generateRatingList(min: number, max: number): number[] {
  return Array.from({ length: max - min + 1 }, (_, i) => i + 1);
}

const ratingList = generateRatingList(MIN, MAX);

function CommentForm({ filmId }: { filmId: number }): JSX.Element {
  const dispatch = useAppDispatch();
  const postReviewError = useAppSelector(getPostReviewError);
  const [formData, setFormData] = useState({
    rating: -1,
    reviewText: '',
  });

  const handleDataChange = (
    evt:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    dispatch(setPostReviewError(null));
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
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
      <form className="add-review__form" onSubmit={handleFormSubmit}>
        {postReviewError && (
          <p style={{ textAlign: 'center', color: 'darkred' }}>
            {postReviewError}
          </p>
        )}
        <div className="rating">
          <div className="rating__stars">
            {ratingList.reverse().map((value) => (
              <Rating key={value} num={value} onChange={handleDataChange} />
            ))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            onChange={handleDataChange}
            className="add-review__textarea"
            name="reviewText"
            id="reviewText"
            placeholder="Review text"
            minLength={MIN_LENGTH_REVIEW}
            maxLength={MAX_LENGTH_REVIEW}
            defaultValue={''}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={
                formData.rating === -1 ||
                formData.reviewText.length < MIN_LENGTH_REVIEW
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
