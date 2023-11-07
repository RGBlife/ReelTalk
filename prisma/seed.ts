import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  let genre: Prisma.UserCreateInput;
  const deleteUsers = await prisma.genre.deleteMany({});
  const genres = await prisma.genre.createMany({
    data: [
      {
        id: 28,
        genre: "Action",
      },
      {
        id: 12,
        genre: "Adventure",
      },
      {
        id: 16,
        genre: "Animation",
      },
      {
        id: 35,
        genre: "Comedy",
      },
      {
        id: 80,
        genre: "Crime",
      },
      {
        id: 99,
        genre: "Documentary",
      },
      {
        id: 18,
        genre: "Drama",
      },
      {
        id: 10751,
        genre: "Family",
      },
      {
        id: 14,
        genre: "Fantasy",
      },
      {
        id: 36,
        genre: "History",
      },
      {
        id: 27,
        genre: "Horror",
      },
      {
        id: 10402,
        genre: "Music",
      },
      {
        id: 9648,
        genre: "Mystery",
      },
      {
        id: 10749,
        genre: "Romance",
      },
      {
        id: 878,
        genre: "Science Fiction",
      },
      {
        id: 10770,
        genre: "TV Movie",
      },
      {
        id: 53,
        genre: "Thriller",
      },
      {
        id: 10752,
        genre: "War",
      },
      {
        id: 37,
        genre: "Western",
      },
    ],
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
