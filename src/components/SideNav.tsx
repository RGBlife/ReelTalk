import React from "react";
import Link from "next/link";

export default function SideNav() {
  return (
    <nav className="sticky left-0 top-0 z-50 flex flex-col justify-between rounded-md border-r-2 border-solid border-black px-2 py-4">
      <ul className="flex h-[95vh] flex-col items-start gap-5 whitespace-nowrap">
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          Profile
        </li>
        <li>
          <Link href={`/movies`}>All Movies</Link>
        </li>
        <li>
          <Link href={`/movies/recommendations`}>Recommendations</Link>
        </li>

        <button className="mt-auto">
          Log In/Out
        </button>
      </ul>
    </nav>
  );
}
