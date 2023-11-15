"use client";
import type { Movie } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { roundRating } from "~/app/utils/roundRating";

type Props = {
  movie: Movie;
  href?: string;
};

export function MovieCard({ movie, href }: Props) {
  return (
    <Link
      className="relative h-full flex-shrink-0 overflow-hidden rounded shadow-lg transition-all ease-in-out hover:outline outline-4 outline-primary hover:scale-[1.02] hover:z-10"
      href={href ?? `/movies/${movie.id}`}
    >
      <Image
        src={movie.poster_url}
        alt={movie.title}
        width={1280}
        height={960}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <ul className="absolute bottom-0 left-0 right-0 z-50 flex h-1/2 flex-col justify-end gap-2 bg-gradient-to-t from-black px-6 py-4">
        <li className="list-none text-xl font-bold text-neutral">
          {movie.title}
        </li>
        <li className="flex gap-1 list-none items-center text-xl font-bold text-neutral">
          <FaStar className="text-yellow-200 " />
          {roundRating(movie?.imdb_rating)}
        </li>
      </ul>
    </Link>
  );
}
