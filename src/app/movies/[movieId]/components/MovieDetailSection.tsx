"use client";

import format from "date-fns/format";

import { convertMinsToHoursStr } from "~/utils/date-formatters";
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
      <p>{movie.imdb_rating} ⭐</p>
      {/* <div>
        <AddToMovieListButton
          movieId={movie.id}
          action={addMovieToWatchList}
          children="Add to Watch Later"
        />
      </div> */}

      <div>
        <MovieTrailerButton />
        <MovieTrailerModal src={movie.trailer_url} />
      </div>
      <p>Overview: {movie.overview}</p>
      <p>Runtime: {convertMinsToHoursStr(movie.runtime)}</p>
    </section>
  );
};

const MovieTrailerModal = ({ src }: { src: string }) => {
  return (
    <dialog id="trailer-modal" className="modal">
      <div className="modal-box">
        <iframe width="560" height="315" src={src} allowFullScreen />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
};
