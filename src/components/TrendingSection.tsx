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
      <div className="flex flex-col content-center w-1/2 m-5 rounded border-[#b895f7] bg-gray-900 text-white p-10 border-4">
      <h3 className="text-2xl text-center">Today's Trending Movies</h3>
      </div>
      <div className="flex flex-row gap-10 p-5 w-1/2">
        {trendingMovies.map((movie) => {
          return <>
          <div className="w-64 h-96 relative border-transparent rounded border-4 hover:border-[#b895f7]" >
            <Link href={`/movies/${movie.id}`}>
              <Image
                src={movie.poster_url}
                fill={true}
                alt={movie.title}
                />
            </Link>
            </div>
          </>;
        })}
        </div>
        
    </section>
  );
}
