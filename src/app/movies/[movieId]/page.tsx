import { AddToWatchListButton } from "./components/AddToWatchListButton";
import { AddToFavouritesButton } from "./components/AddToFavouritesButton";

import movies from "./data/movies.json";
import reviews from "./data/reviews.json";

const movie: any = movies[0];

type ContextType = {
  params: { movieId: string };
};

// const getMovieById = async (id: string) => {
//    return await prisma.movie.findUnique({ where: { id } })
// };

const SingleMoviePage = async (context: ContextType) => {
  // const movie = await getMovieById(context.params.movieId)

  return (
    <>
      <AddToWatchListButton />
      <AddToFavouritesButton />
      <MovieDetailSection />
      <ReviewSection />
    </>
  );
};

const MovieDetailSection = () => {
  return (
    <section>
      <img src={movie.poster_url} alt={`Poster of ${movie.title}`} />
      <h2>
        {movie.title} ({movie.release_date})
      </h2>
    </section>
  );
};

const ReviewSection = () => {
  return (
    <section>
      <ReviewForm />
      <ReviewList />
    </section>
  );
};

const ReviewForm = () => {
  return (
    <form className="">
      <textarea placeholder="Have your say..." />
      <button type="submit">Submit</button>
    </form>
  );
};

const ReviewList = () => {
  return (
    <div>
      {reviews.map((review: any) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

const Review = (review: any) => {
  return (
    <article className="border border-blue-500 p-4">
      <h3>"{review.title}"</h3>
      <p>{review.body}</p>
      <p>Upvotes: {review.vote_count}</p>
    </article>
  );
};

export default SingleMoviePage;
