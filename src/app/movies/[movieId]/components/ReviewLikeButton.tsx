"use client";

import { useState } from "react";

export const ReviewLikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-full bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
    >
      {/* line 18 is temporary :D */}
      {isLiked ? "Liked 👍" : "Like? 🤔"}
    </button>
  );
};
