"use client";

import { signIn, signOut } from "next-auth/react";

export const LogOutBtn = () => {
  return <button className="mt-auto" onClick={() => signOut()}>Log Out</button>;
};

export const LoginBtn = () => {
  return <button className="mt-auto" onClick={() => signIn()}>Sign In</button>;
};
