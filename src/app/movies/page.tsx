import { db } from "~/server/db";
import { MoviesScreen } from "./MoviesScreen";

export default async function MoviesPage() {
  const movies = await db.movie.findMany();

  return <MoviesScreen movies={movies} />;
}
