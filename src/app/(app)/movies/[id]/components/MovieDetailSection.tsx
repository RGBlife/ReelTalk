import format from "date-fns/format";
import { AddToWatchedListButton } from "./AddToWatchedListButton";
import { MovieTrailerButton } from "./MovieTrailerButton";
import { type Movie } from "@prisma/client";
import { StarIcon } from "@heroicons/react/20/solid";

import { createClassName } from "~/utils/string-formatters";
import { MovieDetailBadge } from "./MovieDetailBadge";
import { db } from "~/server/db";
import { getAuthUser } from "~/server/auth";
import { MovieTrailerModal } from "./MovieTrailerModal";
import { WatchLaterButton } from "./WatchLaterButton";

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
    <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      {/* Movie */}
      <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        {/* Movie image */}
        <div className="lg:col-span-3 lg:row-end-1">
          <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
            <img
              src={movie.poster_url}
              alt="movie-cover-image"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Movie details */}
        <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
          <div className="flex flex-col-reverse">
            <div className="mt-4">
              <h1 className="text-2xl font-bold tracking-tight text-gray-600 sm:text-3xl">
                {movie.title}
              </h1>
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>
              <div className="space-between mt-1 flex flex-wrap gap-2">
                <MovieDetailBadge text={`${movie.runtime} mins`} />
                {/* TODO: map through genre codes to render multiple badges */}
                <MovieDetailBadge text={`horror/thriller`} />
                <MovieDetailBadge
                  text={format(new Date(movie.release_date), "MM/dd/yyyy")}
                />
              </div>
            </div>

            <div>
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => {
                  return (
                    <StarIcon
                      key={rating}
                      className={createClassName(
                        movie.imdb_rating / 2 > rating + 1
                          ? "text-yellow-400"
                          : "text-gray-500",
                        "h-5 w-5 flex-shrink-0",
                      )}
                      aria-hidden="true"
                    />
                  );
                })}
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {(movie.imdb_rating / 2).toFixed(1)} out of 5 stars
              </p>
            </div>
          </div>

          <p className="mt-6 text-gray-600">{movie.overview}</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <WatchLaterButton
              movieId={movie.id}
              isInWatchList={isInWatchList}
            />
            <AddToWatchedListButton movieId={movie.id} />
          </div>

          <div className="mt-5">
            <MovieTrailerButton />
            <MovieTrailerModal src={movie.trailer_url} />
          </div>
        </div>
      </div>
    </div>
  );
};
