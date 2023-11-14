"use client";

import { useTransition } from "react";
import { deleteReview } from "../actions";

type Props = {
  id: number;
};

export const ReviewDeleteButton = ({ id }: Props) => {
  const [isDeleting, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      deleteReview(id);
    });
  };

  return (
    <button onClick={handleClick} disabled={isDeleting}>
      Delete 🗑️
    </button>
  );
};
