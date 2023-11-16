import React from "react";
import { db } from "~/server/db";
import { MovieCarousel } from "./MovieCarousel";
import { ReviewPreviewCard } from "./ReviewPreviewCard";

export default async function RecentReview() {
  const reviews = await db.review.findMany({
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
    },
    take: 9,
  });

  const reviewMovieId = reviews.map((review) => {
    return review.movie_id;
  });

  const movies = await db.movie.findMany({
    where: { id: { in: reviewMovieId } },
  });

  return (
    <section>
      <h3 className="m-2 ml-4 text-2xl font-bold text-gray-800 md:text-5xl lg:text-2xl">
        Most Recent Reviews
      </h3>
      <div className="flex flex-row gap-6 overflow-x-auto px-4 py-4">
        {/* <MovieCarousel movies={movies} /> */}
        {reviews.map((review) => (
          <ReviewPreviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
