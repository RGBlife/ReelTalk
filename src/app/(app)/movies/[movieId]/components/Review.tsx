"use client";

import { HideableReviewBody } from "./HideableReviewBody";
import { ReviewDeleteButton } from "./ReviewDeleteButton";
import { genRelativeDateStr } from "~/utils/date-formatters";
import Image from "next/image";
import type { ReviewSectionReviews } from "./ReviewSection";
import { ReviewLikeButtonOptimistic } from "./ReviewLikeButtonOptimistic";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { useSession } from "next-auth/react";

type Props = {
  review: ReviewSectionReviews; // specifying review type causes tsc errors atm
};

export const Review = ({ review }: Props) => {
  const session = useSession();

  const isAuthUsers = Number(session.data?.user.id) === review.author.id;

  return (
    <article className="border border-blue-500 p-4">
      <p>{review.rating}/5 ⭐</p>
      <p>{genRelativeDateStr(review.created_at)}</p>
      <div>
        <div className="flex">
          <Image
            src={
              "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360"
            }
            width={20}
            height={20}
            alt={review.author.username}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <h4>
            By{" "}
            <Link href={`/profiles/${review.author.username}`}>
              {review.author.username}
            </Link>{" "}
          </h4>
        </div>
        <h3> {review.title}</h3>
      </div>
      {review.has_spoilers ? (
        <HideableReviewBody body={review.body ?? ""} />
      ) : (
        <p>{review.body}</p>
      )}
      <ReviewLikeButtonOptimistic
        id={review.id}
        vote_count={review.vote_count}
        // is_liked={review.is_liked}
      />
      {isAuthUsers && <ReviewDeleteButton id={review.id} />}
    </article>
  );
};
