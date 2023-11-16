import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { AiFillBulb } from "react-icons/ai";
import { getServerAuthSession } from "~/server/auth";
import { LogOutBtn, LoginBtn } from "./auth/AuthBtns";
import { ProfileLink } from "./ProfileLink";
import { IoIosChatboxes } from "react-icons/io";

export default async function SideNav() {
  const session = await getServerAuthSession();

  return (
    <nav className="sticky left-0 top-0 z-[100] flex h-[100vh] flex-col justify-between bg-gradient-to-b from-gray-900 to-gray-950 px-2 py-4 text-white">
      <ul className=" m-2 flex  flex-col items-start gap-5 whitespace-nowrap">
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
        <Link
          className="p-2 hover:rounded-md hover:bg-[#b895f7]"
          href={`/chat-room`}
        >
          <li className="flex flex-row items-center gap-2">
            <IoIosChatboxes />
            Chatroom
          </li>
        </Link>
      </ul>
      <span className="ml-2 mt-auto">
        {session ? <LogOutBtn /> : <LoginBtn />}
      </span>
    </nav>
  );
}
