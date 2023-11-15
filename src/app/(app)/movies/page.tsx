import { db } from "~/server/db";
import { MoviesScreen } from "./MoviesScreen";

type Props = {
  searchParams: string | undefined;
};

export default async function MoviesPage({ searchParams }: Props) {
  const movies = await db.movie.findMany({ take: 8 });

  const searchParamsObject = { id: searchParams };

  return <MoviesScreen movies={movies} searchParams={searchParamsObject} />;
}
