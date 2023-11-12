import { Review } from "@prisma/client";
import { revalidatePath } from "next/cache";
import React, { Fragment } from "react";
import { db } from "~/server/db";
import { SubmitButton } from "../ReviewFormSubmitButton";

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
        {/* {{[1, 2, 3, 4, 5].map((num) => {
          return (
            <Fragment key={num}>
              <input
                type="radio"
                name="rating"
                value={num - 0.5}
                className="mask mask-star-2 mask-half-1 bg-green-500"
              />
              <input
                type="radio"
                name="rating"
                value={num}
                className="mask mask-star-2 mask-half-2 bg-green-500"
              />
            </Fragment>
          );
        })} }*/}

        <div className="rating rating-half rating-md">
          <input
            type="radio"
            name="rating"
            value="0"
            defaultChecked
            className="rating-hidden"
          />
          <input
            required
            type="radio"
            name="rating"
            value="0.5"
            className="mask mask-half-1 mask-star-2 bg-yellow-500"
          />
          <input
            type="radio"
            name="rating"
            value="1"
            className="mask mask-half-2 mask-star-2 bg-yellow-500"
          />
          <input
            type="radio"
            name="rating"
            value="1.5"
            className="mask mask-half-1 mask-star-2 bg-yellow-500"
          />
          <input
            type="radio"
            name="rating"
            value="2"
            className="mask mask-half-2 mask-star-2 bg-yellow-500"
          />
          <input
            type="radio"
            name="rating"
            value="2.5"
            className="mask mask-half-1 mask-star-2 bg-yellow-500"
          />
          <input
            type="radio"
            name="rating"
            value="3"
            className="mask mask-half-2 mask-star-2 bg-yellow-500"
          />
          <input
            type="radio"
            name="rating"
            value="3.5"
            className="mask mask-half-1 mask-star-2 bg-yellow-500"
          />
          <input
            type="radio"
            name="rating"
            value="4"
            className="mask mask-half-2 mask-star-2 bg-yellow-500"
          />
          <input
            type="radio"
            name="rating"
            value="4.5"
            className="mask mask-half-1 mask-star-2 bg-yellow-500"
          />
          <input
            type="radio"
            name="rating"
            value="5"
            className="mask mask-half-2 mask-star-2 bg-yellow-500"
          />
        </div>
      </div>
      <div>
        <textarea
          name="title"
          required
          placeholder="Give your review a title..."
        />
      </div>
      <div>
        <textarea
          name="body"
          required
          placeholder="Write your review here..."
        />
      </div>

      <div>
        <p>Does this review contain spoilers?</p>
        <label>
          <input type="radio" name="has_spoilers" value="no" required /> No
        </label>
        <label>
          <input type="radio" name="has_spoilers" value="yes" /> Yes
        </label>
      </div>
      <SubmitButton />
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};
