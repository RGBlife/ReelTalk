import { LoginPrompt } from "~/components/LoginPrompt";

import reviews from "../data/reviews.json";

import { ReviewsHeading } from "./ReviewsHeading";
import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "./ReviewList";

type Props = {
  movieId: number;
};

export const ReviewSection = async ({ movieId }: Props) => {
  const user = Math.random() < 0.5; // 50% chance of the user being logged in

  return (
    <section>
      <ReviewsHeading movieId={movieId} />
      {user ? <ReviewForm /> : <LoginPrompt actionText="post a review" />}
      <ReviewList reviews={reviews} />
    </section>
  );
};
