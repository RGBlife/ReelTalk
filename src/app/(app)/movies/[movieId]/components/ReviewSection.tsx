import { LoginPrompt } from "~/components/LoginPrompt";

import { ReviewsHeading } from "./ReviewsHeading";
import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "./ReviewList";
import { db } from "~/server/db";
import type { Review, User } from "@prisma/client";
import { getServerAuthSession } from "~/server/auth";

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
  const session = await getServerAuthSession();

  return (
    <section>
      <ReviewsHeading movieId={movieId} />
      {session ? (
        <ReviewForm movieId={movieId} />
      ) : (
        <LoginPrompt actionText="post a review" />
      )}
      <ReviewList reviews={reviews} />
    </section>
  );
};
