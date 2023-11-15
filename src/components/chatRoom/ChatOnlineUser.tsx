import Link from "next/link";
import { type FC } from "react";

interface User {
  id: number;
  username: string;
}

interface UserProps {
  user: User;
}

export const ChatOnlineUser: FC<UserProps> = ({ user }) => {
  return (
    <li className="text-black">
      <Link
        href={`/profiles/${user.username}`}
        className="hover:text-primary hover:underline"
      >
        {user.username}
      </Link>
    </li>
  );
};
