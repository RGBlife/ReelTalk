"use server";

import { revalidatePath } from "next/cache";
import { db } from "~/server/db";

export const updateReviewLikeCount = async (id: number, incVal: number) => {
  await db.review.update({
    where: { id },
    data: { vote_count: { increment: incVal } },
  });
};

export const deleteReview = async (id: number) => {
  await db.review.delete({ where: { id } });

  revalidatePath("/");
};

export const addMovieToWatchList = async (movieId: number, userId: number) => {
  await db.userToMovieWatch.create({
    data: {
      movie_id: movieId,
      user_id: userId,
    },
  });

  revalidatePath("/");
};

export const removeMovieFromWatchList = async (
  movieId: number,
  userId: number,
) => {
  await db.userToMovieWatch.delete({
    where: {
      movie_id_user_id: {
        movie_id: movieId,
        user_id: userId,
      },
    },
  });

  revalidatePath("/");
};
