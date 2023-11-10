import { LoginPrompt } from "~/components/LoginPrompt";

import { ReviewsHeading } from "./ReviewsHeading";
import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "./ReviewList";
import { db } from "~/server/db";

type Props = {
  movieId: number;
};

const getReviewsByMovieId = (id: number) => {
  return db.review.findMany({
    where: {
      movie_id: id,
    },
    include: {
      author: {
        select: {
          id: true,
          username: true,
          avatar_url: true,
        },
      },
    },
  });
};

export const ReviewSection = async ({ movieId }: Props) => {
  const reviews = await getReviewsByMovieId(movieId);
  console.log("reviews ",reviews);

  const user = Math.random() < 0.5; // 50% chance of the user being logged in

  return (
    <section>
      <ReviewsHeading movieId={movieId} />
      {user ? <ReviewForm /> : <LoginPrompt actionText="post a review" />}
      <ReviewList reviews={reviews} />
    </section>
  );
};
