import { Movie } from "@prisma/client";
import { PaginationSchema } from "../paginationFilter";

export const fetchMovies = async ({ limit, page, genre, runtime, release_from, release_to }: PaginationSchema) => {
  const response = await fetch(
    `/api/movies?limit=${limit}&page=${page}&genre=${genre}&runtime=${runtime}&rrelease_from=${release_from}&release_to=${release_to}`,
  );
  
  const movies: Movie[] = await response.json();
  console.log(movies);
  return movies;
};
