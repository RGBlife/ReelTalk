import { BsSearch } from "react-icons/bs";
import { AiFillBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import React from "react";

export default function TopBar() {
  return (
    <div className="sticky top-0 w-full flex-1">
      <nav className="top-nav px-6 py-4 shadow-md">
        <div className="nav-icons flex items-center justify-end gap-2 ">
          <input
            type="text"
            placeholder="Search..."
            className="rounded border px-4 py-2"
          />
          <BsSearch color="#b996f7" size="20px" />
          <AiFillBell color={"#b996f7"} size="24px" />
          <CgProfile color={"#b996f7"} size="24px" />
        </div>
      </nav>
    </div>
  );
}
