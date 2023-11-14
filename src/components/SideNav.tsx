import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { AiFillBulb } from "react-icons/ai";
import { getServerAuthSession } from "~/server/auth";
import { LogOutBtn, LoginBtn } from "./auth/AuthBtns";
import { ProfileLink } from "./ProfileLink";

export default async function SideNav() {
  const session = await getServerAuthSession();

  return (
    <nav className="sticky left-0 top-0 z-50 flex h-full flex-col justify-between border-r-2 border-solid border-black bg-gradient-to-b from-gray-900 to-gray-950 px-2 py-4 text-white">
      <ul className=" m-2 flex h-[95vh] flex-col items-start gap-5 whitespace-nowrap">
        <Link className="p-2 hover:rounded-md hover:bg-[#b895f7]" href={`/`}>
          <li className="flex flex-row items-center gap-2">
            <AiFillHome />
            Home
          </li>
        </Link>
        <ProfileLink />
        <Link
          className="p-2 hover:rounded-md hover:bg-[#b895f7]"
          href={`/movies`}
        >
          <li className="flex flex-row items-center gap-2">
            <MdLocalMovies />
            All Movies
          </li>
        </Link>
        <Link
          className="p-2 hover:rounded-md hover:bg-[#b895f7]"
          href={`/movies/recommendations`}
        >
          <li className="flex flex-row items-center gap-2">
            <AiFillBulb />
            Recommendations
          </li>
        </Link>

        {session ? <LogOutBtn /> : <LoginBtn />}
      </ul>
    </nav>
  );
}
