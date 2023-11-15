"use server";

import React from "react";
import { db } from "~/server/db";
import { MovieCard } from "~/app/(app)/movies/component/MovieCard";

export default async function TrendingSection() {
  const trendingMovies = await db.movie.findMany({
    orderBy: {
      vote_count: "desc",
    },
    take: 3,
  });

  return (
    <section>
        <h3 className="m-2 ml-4 text-4xl font-bold text-gray-800 md:text-5xl lg:text-2xl">
          Trending Now{" "}
        </h3>
      <div className="ml-4 grid grid-cols-4 gap-4">
        {trendingMovies.map((movie) => {
          return (
            <>
              <MovieCard movie={movie} />
            </>
          );
        })}
      </div>
    </section>
  );
}
