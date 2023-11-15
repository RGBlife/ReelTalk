"use client";

import { useTransition } from "react";
import { addMovieToWatchList, removeMovieFromWatchList } from "../actions";
import { useAuthUser } from "~/hooks/useAuthUser";
import { useRouter } from "next/navigation";

type Props = {
  movieId: number;
  isInWatchList: boolean;
};

export const WatchLaterButton = ({ movieId, isInWatchList }: Props) => {
  const authUser = useAuthUser();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    if (!authUser) return router.push("/auth/login");

    startTransition(async () => {
      const request = isInWatchList
        ? removeMovieFromWatchList
        : addMovieToWatchList;

      await request(movieId, Number(authUser.id));
    });
  };

  return (
    <button
      onClick={handleClick}
      className="relative flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      disabled={isPending}
    >
      {isInWatchList ? "Remove from" : "Add to"} Watch Later
      {isPending && <Loader />}
    </button>
  );
};

const Loader = () => {
  return (
    <span className="loading loading-infinity loading-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
  );
};
