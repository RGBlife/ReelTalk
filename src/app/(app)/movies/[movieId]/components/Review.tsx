import { HideableReviewBody } from "./HideableReviewBody";
import { ReviewDeleteButton } from "./ReviewDeleteButton";
import { genRelativeDateStr } from "~/utils/date-formatters";
import Image from "next/image";
import type { ReviewSectionReviews } from "./ReviewSection";
import { ReviewLikeButtonOptimistic } from "./ReviewLikeButtonOptimistic";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/20/solid";

type Props = {
  review: ReviewSectionReviews;
  index: number;
};

function createClassName(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

//removed key from props
export const Review = ({ review, index }: Props) => {
  return (
    <>
      <div
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
                <h3 className="font-medium text-gray-400">
                  {review.author.username}
                </h3>
              </Link>
              <p>{genRelativeDateStr(review.created_at)}</p>
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

          <div className="prose-sm prose mt-4 max-w-none text-gray-500">
            {review.has_spoilers ? (
              <HideableReviewBody body={review.body ?? ""} />
            ) : (
              <p>{review.body}</p>
            )}
          </div>

          <div className="mt-8 flex justify-between">
            <ReviewLikeButtonOptimistic
              id={review.id}
              vote_count={review.vote_count}
              // is_liked={review.is_liked}
            />
            <ReviewDeleteButton id={review.id} />
          </div>
        </div>
      </div>
    </>
  );
};
