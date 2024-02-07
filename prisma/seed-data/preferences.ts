import { type Preference } from "prisma/prisma-client";

// TODO: change to function to allow for dynamically passing in user_id

export const preferencesSeedData = [
  {
    id: 1,
    user_id: 1,
    action:0,
    adventure: 0,
    animation: 0,
    comedy: 0,
    crime: 0,
    documentary: 0,
    drama: 0,
    family: 0,
    fantasy: 0,
    history: 0,
    horror: 10,
    music: 0,
    mystery: 0,
    romance: 0,
    science_fiction: 0,
    tv_movie: 0,
    thriller: 10,
    war: 0,
    western: 0,
    release_year: "2000-01-01",
    imdb_rating: 7,
  },
  {
    id: 2,
    user_id: 2,
    action:10,
    adventure: 0,
    animation: 0,
    comedy: 10,
    crime: 0,
    documentary: 0,
    drama: 0,
    family: 0,
    fantasy: 0,
    history: 0,
    horror: 0,
    music: 0,
    mystery: 0,
    romance: 0,
    science_fiction: 0,
    tv_movie: 0,
    thriller: 0,
    war: 0,
    western: 0,
    release_year: "2005-01-01",
    imdb_rating: 7,
  },
] satisfies Preference[];
