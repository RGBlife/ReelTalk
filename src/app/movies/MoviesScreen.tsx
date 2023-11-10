"use client";

import { Movie } from "@prisma/client";
import { useState } from "react";
import { fetchMovies } from "../utils/api/fetchMovies";

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
  console.log(searchParams);

  const [movies, setMovies] = useState(initialMovies);
  const [currentPage, setCurrentPage] = useState(1);
  const [endOfPage, setEndOfPage] = useState(false);

  const handlePageChange = async (newPage: number) => {
    const result = await fetchMovies({ limit: 8, page: newPage });
    if (!result || result.length === 0) return setEndOfPage(true);
    setMovies(result);
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="my-8 text-center text-3xl font-bold">Movie</h1>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="max-w-sm overflow-hidden rounded p-4 shadow-lg"
          >
            <img className="w-full" src={movie.poster_url} alt={movie.title} />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">{movie.title}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="mx-2 rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="mx-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          disabled={endOfPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
