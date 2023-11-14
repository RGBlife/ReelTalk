"use server";

import { revalidatePath } from "next/cache";
import { db } from "~/server/db";

export const updateReviewLikeCount = async (id: number, incVal: number) => {
  await db.review.update({
    where: { id },
    data: { vote_count: { increment: incVal } },
  });
};

// Increment:
// prisma.table.update({
//   where: { id: 1234 },
//   data: {vote_count: {increment: 1}}
// });

export const addMovieToWatchList = async (movieId: number, userId: number) => {
  await db.moviesToWatch.create({
    data: {
      movie_id: movieId,
      user_id: userId,
      has_watched: false,
    },
  });

  revalidatePath("/");
};

export const removeMovieFromWatchList = async (
  movieId: number,
  userId: number,
) => {
  await db.moviesToWatch.delete({
    where: {
      movie_id_user_id: {
        movie_id: movieId,
        user_id: userId,
      },
    },
  });

  revalidatePath("/");
};
