import { LoginPrompt } from "~/components/LoginPrompt";

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

const getReviewCountByMovieId = (id: number) => {
  return db.review.count({ where: { movie_id: id } });
};

export const ReviewSection = async ({ movieId }: Props) => {
  const reviews: ReviewSectionReviews[] = await getReviewsByMovieId(movieId);
  const reviewCount = await getReviewCountByMovieId(movieId);

  const user = true; // 50% chance of the user being logged in

  return (
    <>
      {/* Customer reviews */}
      <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
        <div className="-mb-10 px-4">
          <div className="w-full px-2 lg:w-8/12 xl:w-6/12">
            {user ? (
              <ReviewForm movieId={movieId} />
            ) : (
              <LoginPrompt actionText="post a review" />
            )}
          </div>

          <h3 className="mt-8 text-lg text-gray-400">
            Customer Reviews ({reviewCount})
          </h3>

          <ReviewList reviews={reviews} />
        </div>
      </div>
    </>
  );
};
