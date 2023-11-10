"use client";

import { useTransition } from "react";
import { addMovieToWatchList } from "../actions";

type Props = {
  movieId: number;
};

export const AddToWatchListButton = ({ movieId }: Props) => {
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      const record = await addMovieToWatchList(movieId, 2);
    });
  };

  return (
    <button
      onClick={handleClick}
      className="rounded bg-black px-4 py-2 text-white"
    >
      Add to Watch List
    </button>
  );
};
