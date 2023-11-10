import { Review as ReviewType } from "@prisma/client";
import { Review } from "./Review";

type Props = {
  reviews: ReviewType[];
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
