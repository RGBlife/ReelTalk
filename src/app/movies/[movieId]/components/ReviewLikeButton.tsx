"use client";

import { useState } from "react";

export const ReviewLikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked((prev) => !prev);
  };

  return <button onClick={handleClick}>{isLiked ? "Liked" : "Like"}</button>;
};
