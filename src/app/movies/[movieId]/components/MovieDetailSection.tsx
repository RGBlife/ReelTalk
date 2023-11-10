import { getYearFromDateStr } from "~/utils/date-formatters";
import format from "date-fns/format";

import { AddToWatchListButton } from "./AddToWatchListButton";
import { AddToWatchedListButton } from "./AddToWatchedListButton";
import { MovieTrailerButton } from "./MovieTrailerButton";

import { Movie } from "@prisma/client";

type Props = {
  movie: Movie;
};

export const MovieDetailSection = ({ movie }: Props) => {
  return (
    <section>
      <img src={movie.poster_url} alt={`Poster of ${movie.title}`} />
      <h2>
        {movie.title} {format(new Date(movie.release_date), "MM/dd/yyyy")}
      </h2>
      <div>
        <AddToWatchListButton movieId={movie.id} />
      </div>
      <div>
        <AddToWatchedListButton movieId={movie.id} />
      </div>
      <div>
        <MovieTrailerButton />
      </div>
      <p>Overview: {movie.overview}</p>
    </section>
  );
};
