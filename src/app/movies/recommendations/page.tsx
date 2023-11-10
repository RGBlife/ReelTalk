import React from "react";
import { db } from "~/server/db";
import RecommendationsByUser from "./components/RecommendationsByUser";

export default async function recommendation() {
  const recommendations = await db.recommendation.findMany({});

  return <RecommendationsByUser recommendations={recommendations} />;
}
