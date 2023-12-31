import React from "react";
import { db } from "~/server/db";
import { MovieCarousel } from "./MovieCarousel";

export default async function PopularReview() {
  const reviews = await db.review.findMany({
    orderBy: {
      vote_count: "desc",
    },
    take: 10,
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
        Most Popular Reviews
      </h3>
      <MovieCarousel movies={movies} />
    </section>
  );
}
