import { type Movie } from "@prisma/client";
import { type PaginationSchema } from "../paginationFilter";
import queryString from "query-string";

export const fetchMovies = async ({ limit = 10, page = 1, genre, runtime, release_from, release_to }: PaginationSchema) => {
  const queryParams = queryString.stringify({ limit, page, genre, runtime, release_from, release_to })
  const url = `/api/movies?${queryParams}`

  const response = await fetch(url);
  
  return await response.json() as Movie[];
};