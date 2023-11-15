"use server"

import { db } from "~/server/db"
import { type Preference } from "@prisma/client"
import { getServerAuthSession } from "~/server/auth"


export const fetchPreferencesAction = async () => {

    const session = await getServerAuthSession()
    const result = await db.preference.findUniqueOrThrow({
    where: {user_id: Number(session?.user.id)},
    select: {
        action: true,
  adventure: true,
  animation: true,
  comedy: true,
  crime: true,
  documentary: true,
  drama: true,
  family: true,
  fantasy: true,
  history: true,
  horror: true,
  music: true,
  mystery: true,
  romance: true,
  science_fiction: true,
  tv_movie: true,
  thriller: true,
  war: true,
  western: true,
  release_year: true,
  imdb_rating: true,
    }
  })
    return result
  }