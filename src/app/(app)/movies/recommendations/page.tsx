import React from "react";
import { db } from "~/server/db";
import RecommendationsByUser from "./components/RecommendationsByUser";
import { getSessionOrThrow } from "~/server/auth";


export default async function RecommendationPage() {
  const currentUser = await getSessionOrThrow();

  const recommendations = await db.recommendation.findMany({
    where: {
      user_id: Number(currentUser.user.id),
    },
  });

  return <RecommendationsByUser recommendations={recommendations} user={currentUser.user} />;
}
