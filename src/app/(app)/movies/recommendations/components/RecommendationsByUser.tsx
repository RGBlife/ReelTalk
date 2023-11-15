import type { Recommendation, Movie } from "@prisma/client";
import type { Session } from "next-auth";
import { MovieCardRecommendation } from "../../component/MovieCardRecommendation";
import { db } from "~/server/db";

type Props = {
  recommendations: Recommendation[];
  movies: Movie[];
};

export default function RecommendationsByUser({ recommendations }: Props) {
  let movies = [];
  movies = recommendations.map(async (recc) => {
    const result = await db.movie.findUnique({
      where: { id: recc.movie_id },
    });
    return { movie_recc: result, score: recc.score };
  });

  return (
    <div className="container mx-auto px-4">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {movies.map(async (movie) => {
          return (
            <>
              <MovieCardRecommendation movie={await movie} />
            </>
          );
        })}
      </ul>
    </div>
  );
}
