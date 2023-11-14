"use client";

import { useAuthUser } from "~/hooks/useAuthUser";

import Link from "next/link";
import { CgProfile } from "react-icons/cg";

export const ProfileLink = () => {
  const authUser = useAuthUser();

  const href = authUser ? `/profiles/${authUser.username}` : "/auth/login";

  return (
    <Link className="p-2 hover:rounded-md hover:bg-[#b895f7]" href={href}>
      <li className="flex flex-row items-center gap-2">
        <CgProfile />
        Profile
      </li>
    </Link>
  );
};
