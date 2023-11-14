import { type ReactNode } from "react";
import SideNav from "~/components/SideNav";
type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex items-start">
      <SideNav />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
