import { HideableReviewBody } from "./HideableReviewBody";

type Props = {
  review: any;
};

export const Review = ({ review }: Props) => {
  return (
    <article className="border border-blue-500 p-4">
      <p>{review.rating}/10 ⭐</p>
      <p>Posted on {review.created_at}</p>
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
    </article>
  );
};