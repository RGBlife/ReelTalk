import { MovieCard } from "~/app/(app)/movies/component/MovieCard";
import type { Movie } from "@prisma/client";

type Props = {
  movies: Movie[];
};

export function MovieCarousel({ movies }: Props) {
  return (
    <div className="px-4 flex flex-row gap-6 overflow-x-auto py-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
