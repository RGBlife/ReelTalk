import { type Preference } from "prisma/prisma-client";

// TODO: change to function to allow for dynamically passing in user_id
export const preferencesSeedData = [
  {
    id: 1,
    user_id: 1,
    action:5,
    adventure: 5,
    animation: 5,
    comedy: 5,
    crime: 5,
    documentary: 5,
    drama: 5,
    family: 5,
    fantasy: 5,
    history: 5,
    horror: 10,
    music: 5,
    mystery: 5,
    romance: 5,
    science_fiction: 5,
    tv_movie: 5,
    thriller: 10,
    war: 5,
    western: 5,
    release_year: "2000-01-01",
    imdb_rating: 7,
  },
  {
    id: 2,
    user_id: 2,
    action:10,
    adventure: 5,
    animation: 5,
    comedy: 10,
    crime: 5,
    documentary: 5,
    drama: 5,
    family: 5,
    fantasy: 5,
    history: 5,
    horror: 5,
    music: 5,
    mystery: 5,
    romance: 5,
    science_fiction: 5,
    tv_movie: 5,
    thriller: 5,
    war: 5,
    western: 5,
    release_year: "2005-01-01",
    imdb_rating: 7,
  },
] satisfies Preference[];
