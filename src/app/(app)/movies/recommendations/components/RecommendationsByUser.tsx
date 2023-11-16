import type { Recommendation } from "@prisma/client";
import { MovieCardRecommendation } from "../../component/MovieCardRecommendation";
import { db } from "~/server/db";
import Link from "next/link";

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
      <h1 className="m-2 ml-4 justify-center text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
        Recommended Movies for You
      </h1>
      <Link href={"/setpreferences"}>
        <button className="btn btn-outline m-4">Set Preferences</button>
      </Link>
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
