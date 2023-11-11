import { HideableReviewBody } from "./HideableReviewBody";
import { ReviewLikeButton } from "./ReviewLikeButton";
import { ReviewDeleteButton } from "./ReviewDeleteButton";
import { genRelativeDateStr } from "~/utils/date-formatters";
import Image from "next/image";
import type { ReviewSectionReviews } from "./ReviewSection";

type Props = {
  review: ReviewSectionReviews; // specifying review type causes tsc errors atm
};

export const Review = ({ review }: Props) => {
  return (
    <article className="border border-blue-500 p-4">
      <p>{review.rating}/5 ⭐</p>
      <p>{genRelativeDateStr(review.created_at)}</p>
      <div className="flex">
        <Image
          src={review.author.avatar_url}
          width={20}
          height={60}
          alt={review.author.username}
        />
        <h4>By {review.author.username}</h4>
        <h3>{review.title}</h3>
      </div>
      {review.has_spoilers ? (
        <HideableReviewBody body={review.body ?? ""} />
      ) : (
        <p>{review.body}</p>
      )}
      <p>Upvotes: {review.vote_count}</p>
      <ReviewLikeButton />
      <ReviewDeleteButton id={review.id} />
    </article>
  );
};
