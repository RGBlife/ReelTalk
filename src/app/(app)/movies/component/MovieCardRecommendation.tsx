"use client";
import type { Movie } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { roundRating } from "~/app/utils/roundRating";

// type Props = {
//   movie: Movie;
// };

export function MovieCardRecommendation({ movie }) {
  return (
    <article className="bg-primary max-w-xs overflow-hidden rounded shadow-lg ">
      <Link href={`/movies/${movie.movie_recc.movie_id}`}>
        <Image
          src={movie.movie_recc.poster_url}
          alt={movie.movie_recc.title}
          width={164}
          height={246}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Link>
      <ul className="flex flex-col justify-between gap-2 px-6 py-4">
        <li className="text-neutral list-none text-xl font-bold  ">
          {movie.movie_recc.title}
        </li>
        <li className="text-neutral flex list-none items-center text-xl font-bold">
          <FaStar className="text-yellow-200 " />
          {roundRating(movie?.movie_recc.imdb_rating)}
        </li>
        <li className="text-neutral flex list-none items-center text-xl font-bold">
          Score: {movie.score}
        </li>
      </ul>
    </article>
  );
}
