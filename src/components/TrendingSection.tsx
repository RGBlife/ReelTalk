import React from "react";
import { db } from "~/server/db";
import Carousel from "./Carousel";

export default async function TrendingSection() {
  const trendingMovies = await db.movie.findMany({
    orderBy: {
      vote_count: "desc",
    },
    take: 10,
  });

  return (
    <section>
      <h2 className="m-2 ml-4 justify-center text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
        Trending Now{" "}
      </h2>
      <div className="mt-10">
        <Carousel trendingMovies={trendingMovies}></Carousel>
      </div>
    </section>
  );
}
