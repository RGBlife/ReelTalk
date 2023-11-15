"use client";

import { HideableReviewBody } from "./HideableReviewBody";
import { ReviewDeleteButton } from "./ReviewDeleteButton";
import { genRelativeDateStr } from "~/utils/date-formatters";
import Image from "next/image";
import type { ReviewSectionReviews } from "./ReviewSection";
import { ReviewLikeButton } from "./ReviewLikeButton";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { createClassName } from "~/utils/string-formatters";
import { StarIcon } from "@heroicons/react/20/solid";

type Props = {
  review: ReviewSectionReviews;
  index: number;
};

export const Review2 = ({ review }: Props) => {
  const session = useSession();

  const isAuthUsers = Number(session.data?.user.id) === review.author.id;

  return (
    <article className="border border-blue-500 p-4">
      <p className=" text-gray-500">{review.rating}/5 ⭐</p>
      <p className="text-gray-600">{genRelativeDateStr(review.created_at)}</p>
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
      </div>
      {review.has_spoilers ? (
        <HideableReviewBody body={review.body ?? ""} />
      ) : (
        <p className=" text-gray-500">{review.body}</p>
      )}
      <ReviewLikeButton
        id={review.id}
        vote_count={review.vote_count}

        // is_liked={review.is_liked}
      />
      {isAuthUsers && <ReviewDeleteButton id={review.id} />}
    </article>
  );
};

export const Review = ({ review, index }: Props) => {
  const session = useSession();

  const isAuthUsers = Number(session.data?.user.id) === review.author.id;

  return (
    <article
      key={review.id}
      className="flex w-full space-x-4 text-sm text-gray-500"
    >
      <div
        className={createClassName(
          index === 0 ? "py-4" : "border-t border-gray-400 py-10",
          "w-full",
        )}
      >
        <div className="flex justify-between ">
          <div>
            <Link href={`/profiles/${review.author.username}`}>
              <h3 className="font-medium text-gray-700">
                {review.author.username}
              </h3>
            </Link>
            <p className="text-gray-600">
              {genRelativeDateStr(review.created_at)}
            </p>
          </div>

          <div>
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={createClassName(
                    review.rating > rating
                      ? "text-yellow-400"
                      : "text-gray-500",
                    "h-5 w-5 flex-shrink-0",
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-500">
              {review.rating.toFixed(1)} out of 5 stars
            </p>
          </div>
        </div>

        <div className="prose-sm prose mt-4 max-w-none text-justify text-gray-500">
          {review.has_spoilers ? (
            <HideableReviewBody body={review.body} />
          ) : (
            <p className=" text-gray-500">{review.body}</p>
          )}
        </div>

        <div className="mt-8 flex justify-between">
          <ReviewLikeButton
            id={review.id}
            vote_count={review.vote_count}
            // is_liked={review.is_liked}
          />
          {isAuthUsers && <ReviewDeleteButton id={review.id} />}
        </div>
      </div>
    </article>
  );
};
