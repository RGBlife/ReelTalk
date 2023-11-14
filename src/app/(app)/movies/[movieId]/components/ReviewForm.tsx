import { Review } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";
import ReviewFormTextArea from "~/app/(app)/movies/[movieId]/components/ReviewFormTextArea";
import Toggle from "~/app/(app)/movies/[movieId]/components/Toggle";
import { ReviewStarRater } from "~/app/(app)/movies/[movieId]/components/ReviewStarRater";

type Props = {
  movieId: number;
};

export const ReviewForm = ({ movieId }: Props) => {
  const createReview = async (formData: FormData) => {
    "use server"; // ensures this function is only ever executed on the server

    const { title, body, rating, has_spoilers } = Object.fromEntries(formData);

    const createdReview: Review = await db.review.create({
      data: {
        author_id: 8, //hardcoded for now
        movie_id: movieId,
        title: title as string,
        body: body as string,
        has_spoilers: has_spoilers === "yes",
        rating: Number(rating),
        vote_count: 0, // need to set this to default 0
      },
    });

    revalidatePath("/");
  };

  return (
    // Unique key to reset the form
    <form action={createReview} key={Math.random()}>
      <div className="rating rating-half rating-lg">
        <div className="flex items-center">
          <ReviewStarRater />
        </div>
      </div>
      <div className="my-4">
        <ReviewFormTextArea />
      </div>
      <div className="flex justify-start space-x-3">
        <p>Does this review contain spoilers?</p>
        <Toggle />
      </div>
    </form>
  );
};
