import { getAuthUser } from "~/server/auth";
import { MovieDetailSection } from "./components/MovieDetailSection";
import { ReviewSection } from "./components/ReviewSection";
import { db } from "~/server/db";

const getMovieById = async (id: number, authUserId: number) => {
  const listFilter = {
    where: {
      movie_id: id,
      user_id: authUserId,
    },
  };

  const movie = await db.movie.findUniqueOrThrow({
    where: { id },
    include: {
      genres: true,
      ...(authUserId && {
        moviesToWatch: listFilter,
        moviesSeen: listFilter,
      }),
    },
  });

  const updatedMovie = {
    ...movie,
    isWatchLater: Boolean(movie.moviesToWatch?.length),
    isSeen: Boolean(movie.moviesSeen?.length),
  };

  // delete updatedMovie.moviesToWatch // 🚧
  // delete updatedMovie.moviesSeen // 🚧

  return updatedMovie;
};

type Context = {
  params: {
    id: string;
  };
};

export default async function SingleMoviePage({ params }: Context) {
  const authUser = await getAuthUser();

  const movieId = Number(params.id);
  const movie = await getMovieById(movieId, Number(authUser?.id));

  return (
    <>
      <MovieDetailSection movie={movie} />
      <ReviewSection movieId={movieId} />
    </>
  );
}
