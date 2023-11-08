import { Movie } from "@prisma/client";
import { PaginationSchema } from "../paginationFilter";

export const fetchMovies = async ({ limit, page }: PaginationSchema) => {
  const response = await fetch(`/api/movies?limit=${limit}&page=${page}`);
  const movies: Movie[] = await response.json();
  return movies;
};
