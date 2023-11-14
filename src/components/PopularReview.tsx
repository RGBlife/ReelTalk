"use server";

import Link from "next/link";
import React from "react";
import { db } from "~/server/db";

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
      <div className="flex flex-col content-center w-1/2 m-5 rounded border-[#b895f7] bg-gray-900 text-white p-10 border-4">
      <h3 className="text-2xl text-center">Most Popular Reviews</h3>
      </div>
      <div className="flex flex-row gap-10 p-5 w-1/2">
        
        {reviews.map((review) => {
          return (
            <>
            <div className="flex flex-col gap-5 border-transparent rounded border-4 p-5 hover:border-[#b895f7] hover:cursor-pointer ">
            <h2 className="text-xl"> “{review.title}”</h2>
            <div className="w-48 h-72 relative" >
              <Link href={`/movies/${review.movie_id}`}>
                {movies.map((movie) => {
                  if (movie.id === review.movie_id) {
                    return (
                      <>
                        <img
                          src={movie.poster_url}
                          alt={movie.title}
                        />
                      </>
                    );
                  }
                })}
                </Link>
                <h2>by {review.author_id}</h2>
                </div>
                </div>              
              
            </>
          );
        })}
      </div>
    </section>
  );
}
