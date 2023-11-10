"use client";

import { ReactNode, useTransition } from "react";

type Props = {
  movieId: number;
  action: any; // ❌ just for now
  children: ReactNode;
};

const userId = 1;

export const AddToMovieListButton = ({ movieId, action, children }: Props) => {
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      const record = await action(movieId, userId);
    });
  };

  return (
    <button
      onClick={handleClick}
      className="rounded bg-black px-4 py-2 text-white"
    >
      {children}
    </button>
  );
};
