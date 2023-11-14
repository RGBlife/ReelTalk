"use server";
import { Recommendation } from "@prisma/client";
import { log } from "console";
import { getServerAuthSession } from "~/server/auth";

type Props = {
  recommendations: Recommendation[];
};

export default async function RecommendationsByUser({
  recommendations: recommendations,
}: Props) {
  const currentUser = await getServerAuthSession();
  console.log(currentUser);

  if (currentUser === null) {
    return (
      <>
        <h1>You must be logged in to view your preferences!</h1>
        <h2>Please log in to continue!</h2>
      </>
    );
  } else {
    const test = "this is a test";
    console.log(currentUser.user.id);

    const recsByUser = recommendations
      .filter((recommendation) => {
        return recommendation.user_id === Number(currentUser.user.id);
      })
      .map((recommendation) => {
        return {
          user_id: recommendation.user_id,
          movie_id: recommendation.movie_id,
          score: recommendation.score,
        };
      });
    console.log(recsByUser);

    return (
      <>
        <h2>{test}</h2>
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
