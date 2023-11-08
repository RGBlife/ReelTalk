import { getYearFromDateStr } from "~/utils/date-formatters";

import { AddToWatchListButton } from "./AddToWatchListButton";
import { AddToWatchedListButton } from "./AddToWatchedListButton";
import { MovieTrailerButton } from "./MovieTrailerButton";

import movies from "../data/movies.json";

export const MovieDetailSection = () => {
  const movie = movies[0]!;

  return (
    <section>
      <img src={movie.poster_url} alt={`Poster of ${movie.title}`} />
      <h2>
        {movie.title} ({getYearFromDateStr(movie.release_date)})
      </h2>
      <div>
        <AddToWatchListButton />
      </div>
      <div>
        <AddToWatchedListButton />
      </div>
      <div>
        <MovieTrailerButton />
      </div>
      <p>Overview: {movie.overview}</p>
    </section>
  );
};
