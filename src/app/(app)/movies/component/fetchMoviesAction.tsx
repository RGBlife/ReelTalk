"use server";
import { db } from "~/server/db";

export const fetchMoviesAction = async (searchTerm) => {
  const result = await db.movie.findMany({
    where: { title: { contains: searchTerm } },
  });
  return result;
};
