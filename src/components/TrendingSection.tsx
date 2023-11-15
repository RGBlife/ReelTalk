import React from "react";
import { db } from "~/server/db";
import { MovieCarousel } from "./MovieCarousel";

export default async function TrendingSection() {
  const trendingMovies = await db.movie.findMany({
    orderBy: {
      vote_count: "desc",
    },
    take: 10,
  });

  return (
    <section>
      <h3 className="m-2 ml-4 text-4xl font-bold text-gray-800 md:text-5xl lg:text-2xl">
        Trending Now{" "}
      </h3>
      <MovieCarousel movies={trendingMovies} />
    </section>
  );
}
