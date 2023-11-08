import { db } from "~/server/db";

type Props = {
  movieId: number;
};

const getReviewCountByMovieId = (id: number) => {
  return db.review.count({ where: { movie_id: id } });
};

export const ReviewsHeading = async ({ movieId }: Props) => {
  const reviewCount = getReviewCountByMovieId(movieId);

  return <h2>Reviews ({reviewCount}):</h2>;
};
