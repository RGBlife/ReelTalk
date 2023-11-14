import { Review } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";

import ReviewFormTextArea from "./ReviewFormTextArea";
import ReviewSpoilerToggle from "./ReviewSpoilerToggle";
import { ReviewStarRater } from "./ReviewStarRater";
import { getServerAuthSession } from "~/server/auth";

type Props = {
  movieId: number;
};

export const ReviewForm = async ({ movieId }: Props) => {
  const session = await getServerAuthSession();
  const userId = Number(session?.user.id);

  const createReview = async (formData: FormData) => {
    "use server";
    const { title, body, rating, has_spoilers } = Object.fromEntries(formData);

    const createdReview: Review = await db.review.create({
      data: {
        author_id: userId,
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
        <p className=" text-gray-500">Does this review contain spoilers?</p>
        <ReviewSpoilerToggle />
      </div>
    </form>
  );
};
