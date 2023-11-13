"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

// Like React Context?

export const Providers = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
