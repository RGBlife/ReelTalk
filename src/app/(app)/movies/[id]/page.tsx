import { MovieDetailSection } from "./components/MovieDetailSection";
import { ReviewSection } from "./components/ReviewSection";
import { db } from "~/server/db";

const getMovieById = (id: number) => {
  return db.movie.findUniqueOrThrow({ where: { id } });
};

type Context = {
  params: {
    id: string;
  };
};

export default async function SingleMoviePage({ params }: Context) {
  const movieId = Number(params.id);
  const movie = await getMovieById(movieId);

  return (
    <>
      <MovieDetailSection movie={movie} />
      {/* <ReviewSection movieId={movieId} /> */}
    </>
  );
}
