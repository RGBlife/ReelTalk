
"use server"

import { db } from "~/server/db";
import { Genre, Prisma } from "@prisma/client";
import { Preference } from "@prisma/client";

type GenrePreferences = {
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
} 



export const submitPreferences = async (genrePreferences: GenrePreferences, datePreference: string, ratingPreference: number) => {

   

console.log(genrePreferences)
console.log(datePreference)
console.log(ratingPreference)


    const createdPreferences: Preference = await db.preference.update({
      where: {
        user_id: 15
      },
      data: {
        user_id: 15,   //hardcoded   
        action: genrePreferences.action,
        adventure: genrePreferences.adventure,
        animation: genrePreferences.animation       ,
        comedy: genrePreferences.comedy ,
        crime: genrePreferences.crime,
        documentary: genrePreferences.documentary     ,
        drama: genrePreferences.drama,
        family:genrePreferences.family ,
        fantasy: genrePreferences.fantasy,
        history: genrePreferences.history,
        horror: genrePreferences.horror ,
        music: genrePreferences.music,
        mystery: genrePreferences.mystery,
        romance: genrePreferences.romance,
        science_fiction: genrePreferences.science_fiction ,
        tv_movie: genrePreferences.tv_movie        ,
        thriller: genrePreferences.thriller        ,
        war: genrePreferences.war  ,
        western: genrePreferences.western,
        release_year: datePreference    ,
        imdb_rating: ratingPreference
      },
    });

  };
