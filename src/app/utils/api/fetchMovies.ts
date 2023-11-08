import { Movie } from "@prisma/client";
import { PaginationSchema } from "../paginationFilter";

export const fetchMovies = async ({ limit, page }: PaginationSchema) => {
  const result = await fetch(`/api/movies?limit=${limit}&page=${page}`);
  return (await result.json()) as Movie[];
};
