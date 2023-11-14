"use client";

import { useTransition } from "react";
import { addMovieToWatchList, removeMovieFromWatchList } from "../actions";
import { useAuthUser } from "~/hooks/useAuthUser";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

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
    <button onClick={handleClick} className="relative" disabled={isPending}>
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
