import ReviewItem from './review-item';
import { ReviewArray } from '../../../types/review';

type ReviewsProps = {
  reviews: ReviewArray;
};

function Reviews({ reviews }: ReviewsProps) {
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
