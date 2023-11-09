"use client";

import { Movie } from "@prisma/client";
import { useState } from "react";
import { fetchMovies } from "../utils/api/fetchMovies";
import { fetchSearchMovie } from "../utils/api/searchTerm";

type Props = {
  movies: Movie[];
};

type Term = {
  searchTerm: string;
};

export function MoviesScreen({ movies: initialMovies }: Props) {
  const [movies, setMovies] = useState(initialMovies);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = async () => {
    const result = await fetchMovies({
      limit: 50,
      page: 1,
      release_from: 2000,
      release_to: 2024,
    });
    console.log(result);
    setMovies(result);
  };

  const handleSearchTerm = async () => {
    const result = await fetchSearchMovie(searchTerm as string);
    console.log(searchTerm, "searchTerm");

    console.log(result, "result");
    setMovies(result);
  };

  return (
    <div>
      <h1>Movie Page</h1>
      <button onClick={handleClick}>filter</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>

      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={"Enter a movie title"}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button onClick={handleSearchTerm}>Search</button>
    </div>
  );
}
