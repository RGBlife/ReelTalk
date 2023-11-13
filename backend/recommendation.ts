import { type Prisma } from "@prisma/client";
import { db } from "../src/server/db";
import { type Genre, type Preference } from "@prisma/client";
import { type Movie } from "@prisma/client";

type scoreArray = {
  user_id: number;
  movie_id: number;
  score: number;
};

type MovieExtended = Movie & {
  genres: Genre[];
};

async function recommendation() {
  const deleteRecommendations = await db.recommendation.deleteMany({});
  const preferences: Preference[] = await db.preference.findMany({});
  const movies: MovieExtended[] = await db.movie.findMany({
    include: { genres: true },
  });
  const genres = await db.genre.findMany({});
  const scoreArray: scoreArray[] = [];

  preferences.forEach((userPreference) => {
    movies.forEach((movie) => {
      scoreArray.push({
        user_id: userPreference.user_id,
        movie_id: movie.id,
        score: 0,
      })
      const genres: genres[] = movie.genres;
      genres.forEach((moviegenre: moviegenre) => {
          if (movie.genres.includes(moviegenre) && scoreArray[scoreArray.length -1]){
              console.log(movie.id)
              console.log(genres)
              scoreArray[scoreArray.length - 1].score += (userPreference[moviegenre.genre]/genres.length)
          }
      });
      if (movie.imdb_rating >= userPreference.imdb_rating) {
        scoreArray.forEach((movieScore) => {
          if (
            movieScore.movie_id === movie.id &&
            movieScore.user_id === userPreference.user_id
          ) {
            movieScore.score += 5;
            //removed the weighting from this, it may as well just be 10 or some other value we decide
          }
        });
        if (
          new Date(movie.release_date) >=
          new Date(userPreference.release_year)
        ) {
          scoreArray.forEach((movieScore) => {
            if (
              movieScore.movie_id === movie.id &&
              movieScore.user_id === userPreference.user_id
            ) {
              movieScore.score += 5;
              //removed the weighting from this, it may as well just be 10 or some other value we decide
            }
          });
        }
      }
    });
    
  });
  console.log(scoreArray, "scoreArray");
  scoreArray.map(async (rec) => {
    let recco: Prisma.UserCreateInput;
    const reccomendations = await db.recommendation.create({ data: rec });
  });
}

export default recommendation;
