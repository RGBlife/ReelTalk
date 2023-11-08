import { Review } from "./Review";

type Props = {
  reviews: any[];
};

export const ReviewList = ({ reviews }: Props) => {
  return (
    <div>
      {reviews.map((review: any) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};
