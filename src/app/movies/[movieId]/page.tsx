import { ReviewSection } from "./components/ReviewSection";

type Context = {
  params: { movieId: string };
};

export default function SingleMoviePage(context: Context) {
  const movieId = Number(context.params.movieId);

  return (
    <>
      <ReviewSection movieId={movieId} />
    </>
  );
}
