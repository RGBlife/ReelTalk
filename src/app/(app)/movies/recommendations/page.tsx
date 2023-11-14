import React from "react";
import { db } from "~/server/db";
import RecommendationsByUser from "./components/RecommendationsByUser";
import { getServerAuthSession, getSessionOrThrow } from "~/server/auth";

export default async function RecommendationPage() {
  let recommendations;
  const currentUser = await getServerAuthSession();
  if (currentUser !== null) {
    recommendations = await db.recommendation.findMany({
      where: {
        user_id: Number(currentUser.user.id),
      },
    });
  }
  if (recommendations !== undefined) {
    return <RecommendationsByUser recommendations={recommendations} />;
  }
}
