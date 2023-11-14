import { Review } from "./Review";
import type { ReviewSectionReviews } from "./ReviewSection";

type Props = {
  reviews: ReviewSectionReviews[];
};

export const ReviewList = ({ reviews }: Props) => {
  return (
    <div className="w-full">
      {reviews.map((review, index) => (
        <Review key={review.id} review={review} index={index} />
      ))}
    </div>
  );
};
