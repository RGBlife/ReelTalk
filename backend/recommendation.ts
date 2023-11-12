import { type Prisma } from "@prisma/client";
import { db } from "../src/server/db";
import { type Genre, type Preference } from "@prisma/client";
import { type Movie } from "@prisma/client";

type scoreArray = {
  user_id: number;
  movie_id: number;
  score: number;
};

type MovieExtended = {
  genres: Genre[];
} & Movie;

async function recommendation() {
  const deleteRecommendations = await db.recommendation.deleteMany({});
  const preferences: Preference[] = await db.preference.findMany({});
  const movies: MovieExtended[] = await db.movie.findMany({
    include: { genres: true },
  });
  const genres = await db.genre.findMany({});
  const scoreArray: scoreArray[] = [];

  preferences.forEach((userPreference) => {
    const preferedGenreA: Genre[] | undefined = genres.filter((genre) => {
      return userPreference.preference_genre_a === genre.genre;
    });
    const preferedGenreB: Genre[] | undefined = genres.filter((genre) => {
      return userPreference.preference_genre_b === genre.genre;
    });

    movies.forEach((movie) => {
      const genres = movie.genres;
      genres.forEach((moviegenre) => {
        if (moviegenre.id === preferedGenreA[0]?.id) {
          scoreArray.push({
            user_id: userPreference.user_id,
            movie_id: movie.id,
            score: userPreference.genre_a_weighting,
          });
        }
        if (moviegenre.id === preferedGenreB[0]?.id) {
          scoreArray.forEach((movieScore) => {
            if (
              movieScore.movie_id === movie.id &&
              userPreference.genre_b_weighting &&
              movieScore.user_id === userPreference.user_id
            ) {
              movieScore.score += userPreference.genre_b_weighting;
            }
          });
        }
      });
      if (movie.imdb_rating >= userPreference.preference_imdb_rating) {
        scoreArray.forEach((movieScore) => {
          if (
            movieScore.movie_id === movie.id &&
            movieScore.user_id === userPreference.user_id
          ) {
            movieScore.score += userPreference.imdb_rating_weighting;
          }
        });
        if (
          new Date(movie.release_date) >=
          new Date(userPreference.preference_release_year)
        ) {
          scoreArray.forEach((movieScore) => {
            if (
              movieScore.movie_id === movie.id &&
              movieScore.user_id === userPreference.user_id
            ) {
              movieScore.score += userPreference.release_year_weighting;
            }
          });
        }
      }
    });
    // console.log(scoreArray, "scoreArray");
  });
  scoreArray.map(async (rec) => {
    let recco: Prisma.UserCreateInput;
    const reccomendations = await db.recommendation.create({ data: rec });
  });
}

export default recommendation;
