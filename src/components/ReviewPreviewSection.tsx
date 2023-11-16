import { Review, User } from "@prisma/client";
import { db } from "~/server/db";
import { ReviewPreviewCard } from "./ReviewPreviewCard";
import Link from "next/link";

export type ReviewSectionReviews = Review & {
  author: Pick<User, "id" | "username" | "avatar_url">;
  movie: { title: string };
};

const getReviews = () => {
  return db.review.findMany({
    orderBy: {
      created_at: "desc",
    },
    include: {
      author: {
        select: {
          id: true,
          username: true,
          avatar_url: true,
        },
      },
      movie: {
        select: {
          title: true,
        },
      },
    },
    take: 3,
  });
};

export const ReviewPreviewSection = async () => {
  const reviews: ReviewSectionReviews[] = await getReviews();

  return (
    <section>
      <h2 className="mx-4 my-16 text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
        Most Recent Reviews
      </h2>
      <div className="flex flex-wrap items-stretch gap-6">
        {reviews.map((review) => (
          <Link
            key={review.id}
            className="flex-1"
            href={`/movies/${review.movie_id}`}
          >
            <ReviewPreviewCard review={review} />
          </Link>
        ))}
      </div>
    </section>
  );
};
