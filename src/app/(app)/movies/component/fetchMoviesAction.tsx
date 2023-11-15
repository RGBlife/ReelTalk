"use server";
import { db } from "~/server/db";

export const fetchMoviesAction = async (searchTerm: string) => {
  const result = await db.movie.findMany({
    where: { title: { contains: searchTerm, mode: "insensitive" } },
  });
  return result;
};
