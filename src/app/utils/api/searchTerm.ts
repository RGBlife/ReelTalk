import { Movie } from "@prisma/client";
import { SearchSchema } from "../searchTermFilter";

export const fetchSearchMovie = async ( term : SearchSchema) => {
  console.log(term);

  const response = await fetch(`/api/movies/search?term=${term}`);

  const movies: Movie[] = await response.json();
  return movies;
};
