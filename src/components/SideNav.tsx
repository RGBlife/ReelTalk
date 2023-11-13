import React from "react";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { LogOutBtn, LoginBtn } from "./auth/AuthBtns";

export default async function SideNav() {
  const session = await getServerAuthSession();

  return (
    <nav className="top-0 flex flex-col justify-between px-2 py-4">
      <ul className="flex h-[90vh] flex-col items-start gap-5 whitespace-nowrap">
        <li className="rounded-md border-2 border-solid border-black">
          <Link href={`/`}>Home</Link>
        </li>
        <li className="rounded-md border-2 border-solid border-black">
          Profile
        </li>
        <li className="rounded-md border-2 border-solid border-black">
          <Link href={`/movies`}>All Movies</Link>
        </li>
        <li className="rounded-md border-2 border-solid border-black">
          <Link href={`/movies/recommendations`}>Recommendations</Link>
        </li>
      </ul>
      {session ? <LogOutBtn /> : <LoginBtn />}
    </nav>
  );
}
