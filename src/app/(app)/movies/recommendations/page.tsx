import React from "react";
import { db } from "~/server/db";
import RecommendationsByUser from "./components/RecommendationsByUser";
import { getServerAuthSession, getSessionOrThrow } from "~/server/auth";
import { Movie } from "@prisma/client";

type recommendations = {
  [x: string]: any;
  user_id: number;
  movie_id: number;
  score: number;
};

type Sort = recommendations & {
  sort(arg0: (a: { score: number }, b: { score: number }) => number): unknown;
};

async function sortRecommendation(recommendations: recommendations[]) {
  let sortedReccs = recommendations?.sort(
    (a: { score: number }, b: { score: number }) => b.score - a.score,
  );
  return sortedReccs;
}

export default async function RecommendationPage() {
  let recommendations: recommendations[] = [];
  const currentUser = await getServerAuthSession();
  if (currentUser !== null) {
    recommendations = await db.recommendation.findMany({
      where: {
        user_id: Number(currentUser.user.id),
      },
    });
  }

  let result = await sortRecommendation(recommendations);

  if (result !== undefined) {
    return <RecommendationsByUser recommendations={result} />;
  }
}
