import ReviewItem from './review-item';
import { useAppSelector } from '../../../hook/useAppDispatch';
import { getReviews } from '../../../store/film-reducer/film-selector';
import { Review } from '../../../types/review';

function Reviews() {
  const reviews = useAppSelector<Review[]>(getReviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2).map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
