"use client";

import { useState } from "react";
import { updateReviewLikeCount } from "../actions";

type Props = {
  id: number;
  vote_count: number;
  // is_liked: boolean;
};

export const ReviewLikeButtonOptimistic = ({
  id,
  vote_count, // is_liked: initialIsLiked,
  // once we have the Like table (which contains the user_id and review_id), when we fetch the reviews we will ask postgres to add a custom is_liked (boolean) property based on whether the requesting user has liked each review or not. here we are renaming is_liked to initialIsLiked which will be then the useState initial value
}: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = async () => {
    setIsLiked((prev) => !prev);

    const incVal = isLiked ? -1 : 1;

    try {
      await updateReviewLikeCount(id, incVal);
    } catch (err) {
      setIsLiked((prev) => !prev);
    }
  };

  return (
    <div>
      Likes: {isLiked ? vote_count + 1 : vote_count}
      <button
        onClick={handleClick}
        className="rounded-full bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
      >
        {isLiked ? "Liked " : "Like 👍"}
      </button>
    </div>
  );
};
