"use client";

import { Movie } from "@prisma/client";
import { useState } from "react";
import { fetchMovies } from "../utils/api/fetchMovies";

type Props = {
  movies: Movie[];
};

export function MoviesScreen({ movies: initialMovies }: Props) {
  const [movies, setMovies] = useState(initialMovies);

  const handleClick = async () => {
    const result = await fetchMovies({ limit: 5, page: 1, genre: 12, runtime: 200, release_from: 2010, release_to: 2020 });
    console.log(result);
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
    </div>
  );
}
