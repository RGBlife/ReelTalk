"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export function LoginForm() {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("search") ?? "/";

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Login user
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl,
      });


      if (!res?.ok) {
        console.log("Uh oh!");
        console.log(res);
      } else {
        console.error("Invalid details?");
      }
    } catch (error) {
      console.error(error);
    }

    //   .then((res) => {
    //     if (res?.ok) {
    //       // Redirect user?
    //       console.log("Everything a ok!");
    //     } else {
    //       console.error("Uh oh");
    //       console.error(res?.error);
    //       setError("Problem!!!");
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };
  return (
    <form
      className="m-3 flex flex-col items-center gap-4 border border-black p-5"
      onSubmit={onSubmit}
    >
      <label htmlFor="email" className="">
        E-mail Address:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="e.g. abc123@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-md border border-black p-2"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-md border border-black p-2"
      />
      {error && <p className="bg-red-500 p-4">An error has occurred!</p>}
      <button
        type="submit"
        className="rounded-md border border-black p-4 hover:bg-black hover:text-white"
      >
        Login
      </button>
    </form>
  );
}
