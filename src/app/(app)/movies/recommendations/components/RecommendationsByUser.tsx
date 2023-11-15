import type { Recommendation } from "@prisma/client";
import { MovieCardRecommendation } from "../../component/MovieCardRecommendation";
import { db } from "~/server/db";

type Props = {
  recommendations: Recommendation[];
};

// type MovieWithScore = Movie & {
//   score: number;
// };

export default function RecommendationsByUser({ recommendations }: Props) {
  let movies = [];
  movies = recommendations.map(async (recc) => {
    const result = await db.movie.findUnique({
      where: { id: recc.movie_id },
    });
    return result ? { movie_recc: result, score: recc.score } : null;
  });

  return (
    <div className="container mx-auto px-4">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {movies.map(async (moviePromise) => {
          const movie = await moviePromise;
          if (movie) {
            return (
              <>
                <MovieCardRecommendation movie={movie} />
              </>
            );
          }
        })}
      </ul>
    </div>
  );
}
