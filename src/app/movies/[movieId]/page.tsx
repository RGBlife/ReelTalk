import { MovieDetailSection } from "./components/MovieDetailSection";
import { db } from "~/server/db";

type Context = {
  params: {
    movieId: string;
  };
};

const getMovieById = async (id: number) => {
  return await db.movie.findUnique({ where: { id } });
};

export default async function SingleMoviePage(context: Context) {
  const movie = await getMovieById(+context.params.movieId);

  if (!movie) return <p>No movie found...</p>;

  return (
    <>
      <MovieDetailSection movie={movie} />
    </>
  );
}
