"use server";

import Link from "next/link";
import React from "react";
import { db } from "~/server/db";

type Props = {};

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
              <Link href={`/movies/${movie.id}`}>
                <img
                  src={movie.poster_url}
                  className="w-[10vw]"
                  alt={movie.title}
                />
              </Link>
            </>
          );
        })}
      </div>
    </section>
  );
}
