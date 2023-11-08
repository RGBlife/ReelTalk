import { db } from "~/server/db";

type Props = {
  params: {
    userId: string;
  };
};

const getUserById = (id: number) => {
  return db.user.findUnique({
    where: { id },
    select: { username: true },
  });
};

export default async function ProfilePage({ params }: Props) {
  const user = await getUserById(Number(params.userId));

  if (!user) return <p>That user does not exist</p>;

  return <div>{user.username}</div>;
}
