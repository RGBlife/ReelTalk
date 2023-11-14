import Link from "next/link";
import { db } from "~/server/db";

export const getMoviesToWatch = async (userId: number) => {
  const mtws = await db.moviesToWatch.findMany({
    where: { user_id: userId, has_watched: false },
    include: {
      movie: true,
    },
  });

  return mtws.map((mtw) => mtw.movie);
};

type Props = {
  userId: number;
};

export const UserMovieList = async ({ userId }: Props) => {
  const movies = await getMoviesToWatch(userId);

  return (
    <div>
      <div className="mx-auto max-w-2xl p-4">
        <div className="rounded-md bg-white p-4 shadow-md">
          <h2>My Movies</h2>
          {movies.map((movie) => (
            <Link key={movie.id} href={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
