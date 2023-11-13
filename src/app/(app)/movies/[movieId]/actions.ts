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
