"use server";

import { db } from "~/server/db";

export const addMovieToWatchList = (movieId: number, userId: number) => {
  return db.moviesToWatch.create({
    data: {
      movie_id: movieId,
      user_id: userId,
      has_watched: false,
    },
  });
};
