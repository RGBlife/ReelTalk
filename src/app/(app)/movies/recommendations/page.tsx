import React from "react";
import { db } from "~/server/db";
import RecommendationsByUser from "./components/RecommendationsByUser";
import { getSessionOrThrow } from "~/server/auth";
import recommendation from "backend/recommendation";


export default async function RecommendationPage() {
  // const currentUser = await getSessionOrThrow();
recommendation()

  const recommendations = await db.recommendation.findMany({
    where: {
      user_id: 1,
    },
  });

  return <RecommendationsByUser recommendations={recommendations} />;
}
