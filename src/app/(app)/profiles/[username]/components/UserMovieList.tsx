import { Movie } from "@prisma/client";
import Link from "next/link";
import { db } from "~/server/db";
import { convertMinsToHoursStr } from "~/utils/date-formatters";

export const getMoviesToWatch = async (userId: number) => {
  const usersToMovies = await db.userToMovieWatch.findMany({
    where: { user_id: userId },
    include: {
      movie: true,
    },
  });

  return usersToMovies.map((userToMovie) => userToMovie.movie);
};

type Props = {
  userId: number;
};

export const UserMovieList = async ({ userId }: Props) => {
  const movies = await getMoviesToWatch(userId);

  return (
    <div>
      <h2>My Watch Later Movies</h2>
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <MoviePreviewCard {...movie} />
        </Link>
      ))}
    </div>
  );
};

const MoviePreviewCard = (movie: Movie) => {
  const { title, release_date, imdb_rating, vote_count, poster_url, runtime } =
    movie;

  return (
    <div className="mx-auto overflow-hidden rounded-xl bg-white shadow-lg">
      <img
        className="h-48 w-full object-cover object-center"
        src={poster_url}
        alt={title}
      />

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">
          {title} ({release_date.getFullYear()})
        </h2>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-gray-700">
            Runtime: {convertMinsToHoursStr(runtime)}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-gray-700">{imdb_rating.toFixed(1)} ⭐</p>
          <p className="text-gray-700">Vote Count: {vote_count}</p>
        </div>
      </div>
    </div>
  );
};
