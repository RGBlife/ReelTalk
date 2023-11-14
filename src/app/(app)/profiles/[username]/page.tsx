import { db } from "~/server/db";
import { ProfileUpdateModal } from "./components/ProfileUpdateModal";
import { UserMovieList } from "./components/UserMovieList";
import type { User } from "@prisma/client";
import { getAuthUser, getServerAuthSession } from "~/server/auth";

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
  const authUser = await getAuthUser();
  const profileUser = await getUserByUsername(params.username);

  const isAuthUser = authUser?.id === profileUser.id.toString();

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="rounded-md bg-white p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src={profileUser.avatar_url!}
            alt={profileUser.username}
            className="h-16 w-16 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">{profileUser.username}</h1>
            <span className="text-sm text-gray-500">{profileUser.role}</span>
          </div>
        </div>

        <hr className="my-4 border-t" />

        <div className="space-y-4">
          <div>
            <h2 className="font-bold">Email:</h2>
            <p>{profileUser.email}</p>
          </div>

          <div>
            <h2 className="font-bold">Favorite Movie:</h2>
            <p>{profileUser.favourite_movie || "Not specified"}</p>
          </div>

          {/* <div>
            <h2 className="font-bold">Watched List is:</h2>
            <p>{profileUser.is_watched_list_public ? "Public" : "Private"}</p>
          </div> */}
          {isAuthUser && <ProfileUpdateModal user={profileUser} />}
        </div>
      </div>

      {profileUser.is_watch_list_public && (
        <UserMovieList userId={profileUser.id} />
      )}
    </div>
  );
}
