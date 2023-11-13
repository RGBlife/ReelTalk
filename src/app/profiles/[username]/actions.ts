"use server";

import { revalidatePath } from "next/cache";
import { db } from "~/server/db";

export const updateUser = async (id: number, formData: FormData) => {
  const { favourite_movie, is_watch_list_public, is_watched_list_public } =
    Object.fromEntries(formData);

  await db.user.update({
    where: { id },
    data: {
      favourite_movie: favourite_movie as string,
      is_watch_list_public: Boolean(is_watch_list_public),
      is_watched_list_public: Boolean(is_watched_list_public),
    },
  });

  revalidatePath("/profiles/" + id);
};
