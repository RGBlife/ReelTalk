import { type ReactNode } from "react";
import SideNav from "~/components/SideNav";
type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="container flex items-start">
      <SideNav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
