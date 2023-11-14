"use client";

import { useTransition } from "react";
import { addMovieToWatchList, removeMovieFromWatchList } from "../actions";

type Props = {
  movieId: number;
};

const authUser = {
  id: 1,
  username: "oceanic",
  email: "oceanic@gmail.com",
  password: "$2b$12$Tux5AC8Sns/V/SHY8I.Tfe6y4vJX55JOX.LMKV9Q/cn.hTAUV6vXW",
  avatar_url:
    "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
  role: "Admin",
  favourite_movie: "The Abyss",
  is_watch_list_public: true,
  is_watched_list_public: true,
  to_watch: [{ movie_id: 762430, user_id: 1, has_watched: false }],
};

export const AddToWatchListButton = ({ movieId }: Props) => {
  const [isPending, startTransition] = useTransition();

  const isInWatchList = false;

  const handleClick = () => {
    startTransition(async () => {
      const request = isInWatchList
        ? removeMovieFromWatchList
        : addMovieToWatchList;

      const record = await request(movieId, 1);
    });
  };

  return (
    <button onClick={handleClick} className="relative" disabled={isPending}>
      {isInWatchList ? "Remove from" : "Add to"} Watch List
      {isPending && <Loader />}
    </button>
  );
};

const Loader = () => {
  return (
    <span className="loading loading-infinity loading-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
  );
};
