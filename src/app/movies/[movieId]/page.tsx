import { MovieDetailSection } from "./components/MovieDetailSection";
import { db } from "~/server/db";

const getMovieById = (id: number) => {
  return db.movie.findUniqueOrThrow({ where: { id } });
};

type Context = {
  params: {
    movieId: string;
  };
};

export default async function SingleMoviePage({ params }: Context) {
  const movieId = Number(params.movieId);
  const movie = await getMovieById(movieId);

  return (
    <>
      <MovieDetailSection movie={movie} />
    </>
  );
}
