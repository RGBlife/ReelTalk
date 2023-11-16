import { type Movie } from "@prisma/client";
import { type SearchSchema } from "../searchTermFilter";

export const fetchSearchMovie = async (term: SearchSchema) => {
  const response = await fetch(`/api/movies/search?term=${term}`);
  return (await response.json()) as Movie[];
};
