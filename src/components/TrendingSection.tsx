"use server";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { db } from "~/server/db";

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
                <Image
                  src={movie.poster_url}
                  width={20} height={60}
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
