"use client";

import React from "react";

import { useState } from "react";

import { User } from "@prisma/client";
import { updateUser } from "../actions";

type Props = {
  user: Omit<User, "password">;
};

export const ProfileUpdateModal = ({ user }: Props) => {
  const [state, setState] = useState({ ...user });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setState((prev) => ({ ...prev, [name]: checked }));
  };

  const handleOpenButtonClick = () => {
    const modal = document.getElementById(
      "profile-update-modal",
    ) as HTMLDialogElement;
    modal.showModal();
  };

  const handleCloseButtonClick = () => {
    const modal = document.getElementById(
      "profile-update-modal",
    ) as HTMLDialogElement;
    modal.close();
  };

  return (
    <>
      <button
        className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
        onClick={handleOpenButtonClick}
      >
        🖊️
      </button>
      <dialog id="profile-update-modal" className="modal">
        <div className="modal-box">
          <form action={updateUser.bind(null, user.id)}>
            <button
              className="absolute right-2 top-2 text-gray-500"
              onClick={handleCloseButtonClick}
            >
              ✕
            </button>
            <label className="mb-2 block">
              Favourite Movie:
              <input
                name="favourite_movie"
                value={state.favourite_movie}
                onChange={handleInputChange}
                className="w-full rounded border border-gray-300 p-2"
              />
            </label>
            <label className="mb-2 block">
              Public Watch List:
              <input
                type="checkbox"
                name="is_watch_list_public"
                checked={state.is_watch_list_public}
                onChange={handleCheckboxChange}
                className="ml-2"
              />
            </label>

            {/* <label className="mb-2 block">
              Public Watched List:
              <input
                type="checkbox"
                name="is_watched_list_public"
                checked={state.is_watched_list_public}
                onChange={handleCheckboxChange}
                className="ml-2"
              />
            </label> */}

            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Update Profile
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};
