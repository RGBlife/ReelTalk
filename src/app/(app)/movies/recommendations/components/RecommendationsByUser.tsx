import type { Recommendation } from "@prisma/client";
import type { Session } from "next-auth";

type Props = {
  recommendations: Recommendation[];
  user: Session['user']
};

export default function RecommendationsByUser({
  recommendations,
}: Props) {
  return (
    <>
      {recommendations.map((rec) => {
        return (
          <>
            <h2>Movie: {rec.movie_id}</h2>
            <h2>Score: {rec.score}</h2>
          </>
        );
      })}
    </>
  );
}
