import { LoginPrompt } from "~/components/LoginPrompt";

import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "./ReviewList";
import { db } from "~/server/db";
import type { Review, ReviewLikes, User } from "@prisma/client";
import { getServerAuthSession } from "~/server/auth";

type Props = {
  movieId: number;
};

type ReviewAuthor = Pick<User, "id" | "username" | "avatar_url">;

export type ReviewWithLike = Review & {
  author: ReviewAuthor;
  isLiked: boolean;
  likeCount: number;
};

const getReviewsByMovieId = async (id: number, authUserId: number) => {
  const reviews = await db.review.findMany({
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
      likes: true,
    },
  });

  const reviewsWithLike = reviews.map((review) => {
    const reviewWithLike = {
      ...review,
      isLiked: review.likes.some((like) => like.user_id === authUserId),
      likeCount: review.likes.length,
    };

    // delete reviewWithLike.likes; 🚧 // "The operand of a 'delete' operator must be optional"

    return reviewWithLike;
  });

  return reviewsWithLike;
};

const getReviewCountByMovieId = (id: number) => {
  return db.review.count({ where: { movie_id: id } });
};

export const ReviewSection = async ({ movieId }: Props) => {
  const session = await getServerAuthSession();
  const authUserId = Number(session?.user.id);

  const reviews = await getReviewsByMovieId(movieId, authUserId);
  const reviewCount = await getReviewCountByMovieId(movieId);

  const hasReviews = Boolean(reviewCount);

  return (
    <>
      <div className="mx-auto w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
        <div className="-mb-10 px-4">
          <div className="w-full px-2 lg:w-8/12 xl:w-6/12">
            {session ? (
              <ReviewForm movieId={movieId} />
            ) : (
              <LoginPrompt actionText="post a review" />
            )}
          </div>

          {hasReviews ? (
            <>
              <h3 className="text-gray-00 mt-8 text-lg">
                Customer Reviews ({reviewCount})
              </h3>
              <ReviewList reviews={reviews} />{" "}
            </>
          ) : (
            <h3 className="text-gray-00 mt-8 text-lg">
              There are no reviews yet
            </h3>
          )}
        </div>
      </div>
    </>
  );
};
