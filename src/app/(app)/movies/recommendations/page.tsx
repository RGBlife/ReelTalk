import React from "react";
import { db } from "~/server/db";
import RecommendationsByUser from "./components/RecommendationsByUser";
import { getSessionOrThrow } from "~/server/auth";

export default async function RecommendationPage() {
  const recommendations = await db.recommendation.findMany({});

  return <RecommendationsByUser recommendations={recommendations} />;
}
