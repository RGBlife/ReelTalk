"use server";

import Image from "next/image";
import Link from "next/link";
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
      <h3>Trending Now </h3>
      <h3>Trending Chatroom </h3>
      <div className="flex flex-row gap-5">
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
