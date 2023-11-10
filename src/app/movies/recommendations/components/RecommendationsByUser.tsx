"use server";
import { Recommendation } from "@prisma/client";
import { getServerAuthSession } from "~/server/auth";

type Props = {
  recommendations: Recommendation[];
};

export default async function RecommendationsByUser({
  recommendations: recommendations,
}: Props) {
  const currentUser = await getServerAuthSession();

  if (currentUser === null) {
    return (
      <>
        <h1>You must be logged in to view your preferences!</h1>
        <h2>Please log in to continue!</h2>
      </>
    );
  } else {
    const recsByUser = recommendations
      .filter((recommendation) => {
        return recommendation.user_id === currentUser.id;
      })
      .map((recommendation) => {
        return {
          user_id: recommendation.user_id,
          movie_id: recommendation.movie_id,
          score: recommendation.score,
        };
      });
    return (
      <>
        {recsByUser.map((rec) => {
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
}
