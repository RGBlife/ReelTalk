"use server";

import { db } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import recommendation from "backend/recommendation";

type Preferences = {
  action: number;
  adventure: number;
  animation: number;
  comedy: number;
  crime: number;
  documentary: number;
  drama: number;
  family: number;
  fantasy: number;
  history: number;
  horror: number;
  music: number;
  mystery: number;
  romance: number;
  science_fiction: number;
  tv_movie: number;
  thriller: number;
  war: number;
  western: number;
  release_year: string;
  imdb_rating: number;
};

export const submitPreferences = async (preferences: Preferences) => {
  const session = await getServerAuthSession();

  await db.preference.upsert({
    where: {
      user_id: Number(session?.user.id),
    },
    create: {
      ...preferences,
      user: {
        connect: {
          id: Number(session?.user.id),
        },
      },
    },
    update: preferences,
  });
  recommendation().catch((error) => {
    console.log(error);
  });
};
