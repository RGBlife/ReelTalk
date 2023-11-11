import { db } from "~/server/db";
import { MoviesScreen } from "./MoviesScreen";
import { Movie } from "@prisma/client";

type Props = {
  searchParams: string | undefined;
};


export default async function MoviesPage({ searchParams }: Props) {
  const movies = await db.movie.findMany({ take: 8 });

  return <MoviesScreen movies={movies} searchParams={searchParams} />;
}
