"use client";

import type { Movie } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchMovies } from "~/app/utils/api/fetchMovies";
import { fetchMoviesAction } from "./component/fetchMoviesAction";

type Props = {
  movies: Movie[];
};

export function MoviesScreen({
  movies: initialMovies,
  searchParams,
}: {
  searchParams: { id: string | undefined };
  movies: Props;
}) {
  const [movies, setMovies] = useState<Movie[]>(initialMovies.movies);
  const [currentPage, setCurrentPage] = useState(1);
  const [endOfPage, setEndOfPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handlePageChange = async (newPage: number) => {
    const result = await fetchMovies({ limit: 8, page: newPage });
    if (!result || result.length === 0) return setEndOfPage(true);
    setEndOfPage(false);
    setMovies(result);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const handleSearchTerm = async (searchTerm: string) => {
      const result = await fetchMoviesAction(searchTerm);
      setMovies(result);
    };

    if (searchTerm) {
      void handleSearchTerm(searchTerm);
    } else {
      setMovies(initialMovies.movies);
      setCurrentPage(1);
      setEndOfPage(false);
    }
  }, [searchTerm, initialMovies.movies]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="my-2 text-center text-3xl font-bold text-gray-950">
        Movies
      </h1>
      <input
        className="peer mb-2 block w-full rounded-md border border-gray-400 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={"Enter a movie title"}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="max-w-xs overflow-hidden rounded bg-primary shadow-lg"
          >
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
            <div className="px-6 py-4">
              <p className="mb-2 text-xl font-bold text-neutral">
                {movie.title}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="mx-2 mb-2 rounded bg-gray-950 px-4 py-2 font-bold text-white hover:bg-gray-700"
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="mx-2 mb-2 rounded bg-[#b895f7] px-4 py-2 font-bold text-white hover:bg-blue-700"
          disabled={endOfPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
