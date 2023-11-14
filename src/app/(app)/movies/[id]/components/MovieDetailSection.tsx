import format from "date-fns/format";
import { WatchLaterButton } from "./WatchLaterButton";
import { AddToWatchedListButton } from "./AddToWatchedListButton";
import { MovieTrailerButton } from "./MovieTrailerButton";
import { type Movie } from "@prisma/client";
import Image from "next/image";
import { db } from "~/server/db";
import { getAuthUser } from "~/server/auth";
import { MovieTrailerModal } from "./MovieTrailerModal";

type Props = {
  movie: Movie;
};

const getAuthUserWatchList = async (userId: number) => {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: { to_watch: true },
  });
  return user?.to_watch;
};

export const MovieDetailSection = async ({ movie }: Props) => {
  const authUser = await getAuthUser();

  let isInWatchList = false;
  if (authUser) {
    const watchList = await getAuthUserWatchList(Number(authUser.id));

    if (watchList) {
      isInWatchList = watchList?.some((mtw) => mtw.movie_id === movie.id);
    }
  }

  return (
    <section>
      <Image
        src={movie.poster_url}
        width={20}
        height={60}
        alt={`Poster of ${movie.title}`}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <h2>
        {movie.title} {format(new Date(movie.release_date), "MM/dd/yyyy")}
      </h2>
      <div>
        <WatchLaterButton movieId={movie.id} isInWatchList={isInWatchList} />
      </div>
      {/* <div>
        <AddToWatchedListButton movieId={movie.id} />
      </div> */}
      <div>
        <MovieTrailerButton />
        <MovieTrailerModal src={movie.trailer_url} />
      </div>
      <p>Overview: {movie.overview}</p>
    </section>
  );
};
