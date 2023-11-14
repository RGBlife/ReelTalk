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
