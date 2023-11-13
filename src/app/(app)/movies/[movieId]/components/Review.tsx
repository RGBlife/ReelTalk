import { HideableReviewBody } from "./HideableReviewBody";
import { ReviewDeleteButton } from "./ReviewDeleteButton";
import { genRelativeDateStr } from "~/utils/date-formatters";
import Image from "next/image";
import type { ReviewSectionReviews } from "./ReviewSection";
import { ReviewLikeButtonOptimistic } from "./ReviewLikeButtonOptimistic";
import Link from "next/link";

type Props = {
  review: ReviewSectionReviews; // specifying review type causes tsc errors atm
};

export const Review = ({ review }: Props) => {
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
      <ReviewDeleteButton id={review.id} />
    </article>
  );
};