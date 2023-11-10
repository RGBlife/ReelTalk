import { HideableReviewBody } from "./HideableReviewBody";
import { ReviewLikeButton } from "./ReviewLikeButton";
import { ReviewDeleteButton } from "./ReviewDeleteButton";
import format from "date-fns/format";
import Image from "next/image";
import type { ReviewSectionReviews } from "./ReviewSection";

type Props = {
  review: ReviewSectionReviews; //specifying review type causes tsc errors atm
};

export const Review = ({ review }: Props) => {
  console.log("created at", review.created_at);

  return (
    <article className="border border-blue-500 p-4">
      <p>{review.rating}/5 ⭐</p>
      <p>Posted on {format(new Date(review.created_at), "MM/dd/yyyy")}</p>
      <div className="flex">
        <Image src={review.author.avatar_url} width={20} alt={review.author.username} />
        <h4>By {review.author.username}</h4>
        <h3>{review.title}</h3>
      </div>
      {review.has_spoilers ? (
        <HideableReviewBody body={review.body ?? ''} />
      ) : (
        <p>{review.body}</p>
      )}
      <p>Upvotes: {review.vote_count}</p>
      <ReviewLikeButton />
      <ReviewDeleteButton id={review.id} />
    </article>
  );
};
