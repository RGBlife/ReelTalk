import { ReviewSection } from "./components/ReviewSection";
import { db } from "~/server/db";
import { MovieDetailSection } from "~/app/(app)/movies/[movieId]/components/MovieDetailSection";

const getMovieById = (id: number) => {
  return db.movie.findUniqueOrThrow({ where: { id } });
};

type Context = {
  params: {
    movieId: string;
  };
};

export function Badge({ text }) {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
      {text}
    </span>
  );
}

export default async function SingleMoviePage({ params }: Context) {
  const movieId = Number(params.movieId);
  const movie = await getMovieById(movieId);

  return (
    <>
      <MovieDetailSection movie={movie} />
      <ReviewSection movieId={movieId} />
    </>
  );
}
