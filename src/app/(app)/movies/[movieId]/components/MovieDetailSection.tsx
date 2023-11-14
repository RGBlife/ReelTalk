import format from "date-fns/format";
import { AddToWatchListButton } from "./AddToWatchListButton";
import { AddToWatchedListButton } from "./AddToWatchedListButton";
import { MovieTrailerButton } from "./MovieTrailerButton";
import { type Movie } from "@prisma/client";
import Image from "next/image";
import { db } from "~/server/db";

type Props = {
  movie: Movie;
};

db.user
  .findUnique({ where: { id: 1 }, include: { to_watch: true } })
  .then(console.log);

export const MovieDetailSection = ({ movie }: Props) => {
  return (
    <section>
      <Image
        src={movie.poster_url}
        width={20}
        height={60}
        alt={`Poster of ${movie.title}`}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
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
