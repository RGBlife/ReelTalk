"use client";

import { signIn, signOut } from "next-auth/react";

export const LogOutBtn = () => {
  return <button onClick={() => signOut()}>Log Out</button>;
};

export const LoginBtn = () => {
  return <button onClick={() => signIn()}>Sign In</button>;
};
