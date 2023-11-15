import Link from "next/link";

export const ChatOnlineUser = ({ user }) => {
  return (
    <li className="text-black">
      <Link href="/users/profile/user" className="hover:underline">
        {user.username}
      </Link>
    </li>
  );
};
