import { MovieDetailSection } from "./components/MovieDetailSection";

type Context = {
  params: {
    movieId: string;
  };
};

// const getMovieById = async (id: string) => {
//    return await prisma.movie.findUnique({ where: { id } })
// };

export default async function SingleMoviePage(context: Context) {
  const { movieId } = context.params;
  // const movie = await getMovieById(context.params.movieId)

  return (
    <>
      <MovieDetailSection />
    </>
  );
}
