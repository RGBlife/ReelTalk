"use client";
import type { Movie } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { roundRating } from "~/app/utils/roundRating";

type Props = {
  movie: Movie;
};

export function MovieCard({ movie }: Props) {
  return (
    <article className="bg-primary max-w-xs overflow-hidden rounded shadow-lg ">
      <Link href={`/movies/${movie.id}`}>
        <Image
          src={movie.poster_url}
          alt={movie.title}
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
          {movie.title}
        </li>
        <li className="text-neutral flex list-none items-center text-xl font-bold">
          <FaStar className="text-yellow-200 " />
          {roundRating(movie?.imdb_rating)}
        </li>
      </ul>
    </article>
  );
}
