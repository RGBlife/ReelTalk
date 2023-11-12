import { db } from "~/server/db";

type Props = {
  params: {
    userId: string;
  };
};

const getUserById = (id: number) => {
  return db.user.findUnique({
    where: { id },
    // select: { username: true },
  });
};

export default async function ProfilePage({ params }: Props) {
  const user = await getUserById(Number(params.userId));

  if (!user) return <p>That user does not exist</p>;


 return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white shadow-md p-4 rounded-md">
        <div className="flex items-center space-x-4">
          <img src={user.avatar_url} alt={user.username} className="w-16 h-16 rounded-full" />
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
            <p>{user.favourite_movie || 'Not specified'}</p>
          </div>

          <div>
            <h2 className="font-bold">Watch List Privacy:</h2>
            <p>{user.is_watch_list_public ? 'Public' : 'Private'}</p>
          </div>

          <div>
            <h2 className="font-bold">Watched List Privacy:</h2>
            <p>{user.is_watched_list_public ? 'Public' : 'Private'}</p>
          </div>

          {/* Add more properties as needed */}
        </div>
      </div>
    </div>
  );
}
