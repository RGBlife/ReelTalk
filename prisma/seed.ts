import { PrismaClient } from "@prisma/client";
import { moviesSeedData } from "./seed-data/movies";
import { genresSeedData } from "./seed-data/genres";
import { reviewsSeedData } from "./seed-data/reviews";
import { getUsersSeedData } from "./seed-data/users";
import { chatroomSeedData } from "./seed-data/chatrooms";
import { preferencesSeedData } from "./seed-data/preferences";

const prisma = new PrismaClient();

const formattedMovies = moviesSeedData.map((movie) => {
  return {
    ...movie,
    release_date: new Date(movie.release_date),
  };
});

async function main() {

  // Create genres
  await prisma.genre.createMany({
    data: genresSeedData,
  });

  // Create movies
  for (const movie of formattedMovies) {
    await prisma.movie.create({
      data: {
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        imdb_rating: movie.imdb_rating,
        overview: movie.overview,
        poster_url: movie.poster_url,
        release_year: Number(movie.release_year),
        runtime: movie.runtime,
        trailer_url: movie.trailer_url,
        vote_count: movie.vote_count,
        genres: {
          connect: movie.genres.map((genre) => ({ id: genre })),
        },
      }
    });
  }


  // Create users
  await prisma.user.createMany({
    data: await getUsersSeedData(),
  });

  // Create reviews
  await prisma.review.createMany({
    data: reviewsSeedData,
  });

  // Create chatrooms
  await prisma.chatRoom.createMany({
    data: chatroomSeedData,
  });

  // Create preferences
  await prisma.preference.createMany({
    data: preferencesSeedData
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
