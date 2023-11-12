import { type Preference } from "prisma/prisma-client";

// TODO: change to function to allow for dynamically passing in user_id
export const preferencesSeedData = [
  {
    id: 1,
    user_id: 1,
    preference_genre_a: "Horror",
    genre_a_weighting: 8,
    preference_genre_b: "Thriller",
    genre_b_weighting: 6,
    preference_release_year: "2000-01-01",
    release_year_weighting: 5,
    preference_imdb_rating: 7,
    imdb_rating_weighting: 9,
  },
  {
    id: 2,
    user_id: 2,
    preference_genre_a: "Action",
    genre_a_weighting: 6,
    preference_genre_b: "Comedy",
    genre_b_weighting: 5,
    preference_release_year: "2005-01-01",
    release_year_weighting: 8,
    preference_imdb_rating: 7,
    imdb_rating_weighting: 10,
  },
] satisfies Preference[];
