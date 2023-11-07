type ContextType = {
  params: { movieId: string };
};

const movie = {
  id: 1,
  title: "The Shawshank Redemption",
  genres: ["Drama", "Crime"],
  release_date: 1994,
  overview:
    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  imdb_rating: 9.3,
  runtime: 142,
  poster_url:
    "https://www.vintagemovieposters.co.uk/wp-content/uploads/2015/07/shawshankquadlarge1.jpg",
  trailer_url:
    "https://www.youtube.com/watch?v=PLl99DlL6b4&ab_channel=WarnerBros.Entertainment",
  vote_count: 10,
};

// const getMovieById = async (id: string) => {
//    return await prisma.movie.findUnique({ where: { id } })
// };

const SingleMoviePage = async (context: ContextType) => {
  // const movie = await getMovieById(context.params.movieId)

  return <MovieDetail />;
};

const MovieDetail = () => {
  return (
    <div>
      <h2>
        {movie.title} ({movie.release_date})
      </h2>
    </div>
  );
};

export default SingleMoviePage;
