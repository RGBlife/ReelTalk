"use client";

import { Movie } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Modal } from "~/components/Modal";
import { ModalOpenButton } from "~/components/ModalOpenButton";

export const ProfileMovieLists = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 p-4 sm:grid-cols-2">
      <WatchLaterList />
      <SeenList />
    </div>
  );
};

const WatchLaterList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("/api/users/watch-list")
      .then((res) => res.json())
      .then(setMovies)
      .catch(console.log);
  }, []);

  return (
    <>
      <ModalOpenButton
        id="watch-list"
        className="relative flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Watch List
      </ModalOpenButton>
      <Modal id="watch-list">
        <h2 className="mb-2 text-center text-xl font-bold">Watch List</h2>
        <div className="flex max-h-96 flex-col gap-4">
          {movies.map((movie) => (
            <Link key={movie.id} href={`/movies/${movie.id}`}>
              <div className="rounded-lg bg-gray-200 p-4">
                <h2 className="text-md font-semibold">{movie.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </Modal>
    </>
  );
};

const SeenList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("/api/users/seen-list")
      .then((res) => res.json())
      .then(setMovies)
      .catch(console.log);
  }, []);

  return (
    <>
      <ModalOpenButton
        id="seen-list"
        className="relative flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Seen List
      </ModalOpenButton>
      <Modal id="seen-list">
        <h2 className="mb-2 text-center text-xl font-bold">Seen List</h2>
        <div className="flex max-h-96 flex-col gap-4">
          {movies.map((movie) => (
            <Link key={movie.id} href={`/movies/${movie.id}`}>
              <div className="rounded-lg bg-gray-200 p-4">
                <h2 className="text-md font-semibold">{movie.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </Modal>
    </>
  );
};
