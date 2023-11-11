import { Review } from "./Review";
import type { ReviewSectionReviews } from "./ReviewSection";

type Props = {
  reviews: ReviewSectionReviews[];
};

export const ReviewList = ({ reviews }: Props) => {
  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};
