import { useState } from 'react';
import Rating from '../rating/rating';

function generateRatingList(min: number, max: number): number[] {
  return Array.from({ length: max - min + 1 }, (_, i) => max - i);
}

const MIN = 1;
const MAX = 10;

const ratingList = generateRatingList(MIN, MAX);

function CommentForm(): JSX.Element {
  const [text, setText] = useState('');

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {ratingList.map((value) => (<Rating key={value} num={value} />))}
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
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
