import { LoginPrompt } from "~/components/LoginPrompt";

import { ReviewsHeading } from "./ReviewsHeading";
import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "./ReviewList";
import { db } from "~/server/db";
import type { Review, User } from "@prisma/client";

type Props = {
  movieId: number;
};

export type ReviewSectionReviews = Review & {
  author: Pick<User, "id" | "username" | "avatar_url">;
};

const getReviewsByMovieId = (id: number) => {
  return db.review.findMany({
    orderBy: {
      created_at: "desc",
    },
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
  }) satisfies Promise<ReviewSectionReviews[]>;
};

export const ReviewSection = async ({ movieId }: Props) => {
  const reviews = await getReviewsByMovieId(movieId);
  const user = true; // 50% chance of the user being logged in

  return (
    <section>
      <ReviewsHeading movieId={movieId} />
      {user ? (
        <ReviewForm movieId={movieId} />
      ) : (
        <LoginPrompt actionText="post a review" />
      )}
      <ReviewList reviews={reviews} />
    </section>
  );
};
