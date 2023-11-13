import { type ReactNode } from "react";
import SideNav from "~/components/SideNav";
import TopBar from "~/components/TopBar";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="parent grid grid-rows-[auto,1fr] grid-cols-[auto,1fr] gap-0 min-h-screen">
      <div className="sidebar row-span-2 bg-red-200">
        <SideNav />
      </div>
      <div className="topbar bg-green-200">
        <TopBar />
      </div>
      <main className="scrollable-content bg-blue-200">{children}</main>
    </div>
  );
};

export default Layout;
