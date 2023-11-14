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

type moviegenre = {
  id: number;
  genre: string;
}

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
      const newScore = {
        user_id: userPreference.user_id,
        movie_id: movie.id,
        score: 0
      }
      genres.forEach((moviegenre: moviegenre) => {
          if (movie.genres.some((genre) => genre.genre === moviegenre.genre)){
            if (moviegenre.genre in userPreference)
              newScore.score += (userPreference[moviegenre.genre as keyof typeof userPreference] as number)/genres.length
          }
      });
      if (movie.imdb_rating >= userPreference.imdb_rating) {
          newScore.score += 5;
        };
        if (
          new Date(movie.release_date) >=
          new Date(userPreference.release_year)
        ) newScore.score += 5;

      const existingScore = scoreArray.find((score) => score.user_id === newScore.user_id && score.movie_id === newScore.movie_id);
      if (existingScore) {
        existingScore.score = newScore.score;
      } else {
        scoreArray.push(newScore);
      }
    })
  });   
      
  console.log(scoreArray, "scoreArray");
  scoreArray.map(async (rec) => {
    let recco: Prisma.UserCreateInput;
    const reccomendations = await db.recommendation.create({ data: rec });
  });
}

export default recommendation;
