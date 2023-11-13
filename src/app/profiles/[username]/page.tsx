import { db } from "~/server/db";
import { ProfileUpdateModal } from "./components/ProfileUpdateModal";
import { UserMovieList } from "./components/UserMovieList";
import type { User } from "@prisma/client";

type Props = {
  params: {
    username: string;
  };
};


const getUserByUsername = (username: string) => {
  return db.user.findUniqueOrThrow({
    where: { username },
    select: {
      id: true,
      avatar_url: true,
      username: true,
      role: true,
      email: true,
      favourite_movie: true,
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
  });
};

export default async function ProfilePage({ params }: Props) {
  const user = await getUserByUsername(params.username);

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="rounded-md bg-white p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar_url!}
            alt={user.username}
            className="h-16 w-16 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.username}</h1>
            <span className="text-sm text-gray-500">{user.role}</span>
          </div>
        </div>

        <hr className="my-4 border-t" />

        <div className="space-y-4">
          <div>
            <h2 className="font-bold">Email:</h2>
            <p>{user.email}</p>
          </div>

          <div>
            <h2 className="font-bold">Favorite Movie:</h2>
            <p>{user.favourite_movie || "Not specified"}</p>
          </div>

          <div>
            <h2 className="font-bold">Watch List is:</h2>
            <p>{user.is_watch_list_public ? "Public" : "Private"}</p>
          </div>

          <div>
            <h2 className="font-bold">Watched List is:</h2>
            <p>{user.is_watched_list_public ? "Public" : "Private"}</p>
          </div>
          <ProfileUpdateModal user={user} />
        </div>
      </div>

      <UserMovieList userId={user.id} />
    </div>
  );
}
