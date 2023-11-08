type Props = {
  movieId: number;
};

export const ReviewsHeading = async ({ movieId }: Props) => {
  const reviewCount = 100; // This would need to be the total number of reviews

  return <h2>Reviews ({reviewCount}):</h2>;
};
