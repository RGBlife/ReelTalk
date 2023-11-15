"use server";

import Link from "next/link";
import React from "react";
import { db } from "~/server/db";
import { MovieCard } from "~/app/(app)/movies/component/MovieCard";

export default async function PopularReview() {
  const reviews = await db.review.findMany({
    orderBy: {
      vote_count: "desc",
    },
    take: 3,
  });

  const reviewMovieId = reviews.map((review) => {
    return review.movie_id;
  });

  const movies = await db.movie.findMany({
    where: { id: { in: reviewMovieId } },
  });

  return (
    <section>
      <h3 className="m-2 ml-4 text-2xl font-bold text-gray-800 md:text-5xl lg:text-2xl">Most Popular Reviews</h3>
      <div className="ml-4 grid grid-cols-4 gap-4">
        {reviews.map((review) => {
          return (
            <>
              <Link href={`/movies/${review.movie_id}`}>
                {movies.map((movie) => {
                  if (movie.id === review.movie_id) {
                    return (
                      <>
                        <MovieCard movie={movie} />
                      </>
                    );
                  }
                })}
                <h2>{review.title}</h2>
              </Link>
            </>
          );
        })}
      </div>
    </section>
  );
}
