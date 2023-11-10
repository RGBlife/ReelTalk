import { Movie } from "@prisma/client";
import { PaginationSchema } from "../paginationFilter";

export const fetchMovies = async ({ limit = 10, page = 1, genre, runtime = 1000, release_from = 0, release_to = 10000 }: PaginationSchema) => {
  const baseString = `/api/movies?limit=${limit}&page=${page}&runtime=${runtime}&release_from=${release_from}&release_to=${release_to}`
  const genreString = genre ? `&genre=${genre}` : ""

  const response = await fetch(
    baseString + genreString,
  );
  
  const movies: Movie[] = await response.json();
  return movies;
};