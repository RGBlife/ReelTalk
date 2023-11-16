"use client";

import type { Movie } from "@prisma/client";
import { useEffect, useState } from "react";
import { fetchMovies } from "~/app/utils/api/fetchMovies";
import { fetchMoviesAction } from "./component/fetchMoviesAction";
import { MovieCard } from "./component/MovieCard";

type Props = {
  searchParams: { id: string | undefined };
  movies: Movie[];
};

export function MoviesScreen({ movies: initialMovies }: Props) {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [currentPage, setCurrentPage] = useState(1);
  const [endOfPage, setEndOfPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string>("");

  const handlePageChange = async (newPage: number) => {
    try {
      const result = await fetchMovies({ limit: 8, page: newPage });
      if (!result || result.length === 0) return setEndOfPage(true);
      setEndOfPage(false);
      setMovies(result);
      setCurrentPage(newPage);
    } catch (error) {
      setSearchError("An error occurred while fetching movies.");
    }
  };

  useEffect(() => {
    const handleSearchTerm = async (searchTerm: string) => {
      setIsSearching(true);
      setSearchError("");

      try {
        const result = await fetchMoviesAction(searchTerm);
        if (result.length === 0) {
          return setSearchError(
            "No movies found, please try different keywords.",
          );
        } else {
          setMovies(result);
        }
      } catch (error) {
        setSearchError("An error occurred while fetching movies.");
      }
      setIsSearching(false);
    };

    if (searchTerm) {
      void handleSearchTerm(searchTerm);
    } else {
      setMovies(initialMovies);
      setCurrentPage(1);
      setEndOfPage(false);
    }
  }, [searchTerm, initialMovies]);

  return (
    <div className="px-4 pt-4 w-full h-full">
      <h1 className="my-2 text-center text-3xl font-bold text-gray-950">
        Movies
      </h1>

      <input
        type="text"
        className="peer mb-2 block w-full rounded-md border border-gray-400 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={"Enter a movie title"}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-flow-row gap-4">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
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
