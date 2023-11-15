
"use server"

import { db } from "~/server/db";
import { Genre, Prisma } from "@prisma/client";
import { Preference } from "@prisma/client";
import { getServerAuthSession } from "~/server/auth";

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
    imdb_rating: number
} 



export const submitPreferences = async (preferences: Preferences) => {

  const session = await getServerAuthSession()

    const createdPreferences: Preference = await db.preference.update({
      where: {
        user_id: Number(session?.user.id)
      },
      data: {  
        action: preferences.action,
        adventure: preferences.adventure,
        animation: preferences.animation       ,
        comedy: preferences.comedy ,
        crime: preferences.crime,
        documentary: preferences.documentary     ,
        drama: preferences.drama,
        family:preferences.family ,
        fantasy: preferences.fantasy,
        history: preferences.history,
        horror: preferences.horror ,
        music: preferences.music,
        mystery: preferences.mystery,
        romance: preferences.romance,
        science_fiction: preferences.science_fiction ,
        tv_movie: preferences.tv_movie        ,
        thriller: preferences.thriller        ,
        war: preferences.war  ,
        western: preferences.western,
        release_year: preferences.release_year    ,
        imdb_rating: preferences.imdb_rating
      },
    });

  };
