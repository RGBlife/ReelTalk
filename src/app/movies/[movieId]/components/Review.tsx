import { Review as ReviewType } from "@prisma/client";
import { HideableReviewBody } from "./HideableReviewBody";
import { ReviewLikeButton } from "./ReviewLikeButton";
import { ReviewDeleteButton } from "./ReviewDeleteButton";

type Props = {
  review: any; //specifying review type causes tsc errors atm
};

export const Review = ({ review }: Props) => {
  return (
    <article className="border border-blue-500 p-4">
      <p>{review.rating}/5 ⭐</p>
      <p>Posted on {review.created_at.toString()}</p>
      <div className="flex">
        <img src={review.author.avatar_url} />
        <h4>By {review.author.username}</h4>
        <h3>"{review.title}"</h3>
      </div>
      {review.has_spoilers ? (
        <HideableReviewBody body={review.body} />
      ) : (
        <p>{review.body}</p>
      )}
      <p>Upvotes: {review.vote_count}</p>
      <ReviewLikeButton />
      <ReviewDeleteButton id={review.id} />
    </article>
  );
};
