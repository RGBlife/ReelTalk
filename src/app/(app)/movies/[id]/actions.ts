"use server";

import { revalidatePath } from "next/cache";
import { db } from "~/server/db";

export const likeReview = async (userId: number, reviewId: number) => {
  await db.reviewLikes.create({
    data: { user_id: userId, review_id: reviewId },
  });
};

export const unlikeReview = async (userId: number, reviewId: number) => {
  await db.reviewLikes.delete({
    where: {
      user_id_review_id: {
        user_id: userId,
        review_id: reviewId,
      },
    },
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
