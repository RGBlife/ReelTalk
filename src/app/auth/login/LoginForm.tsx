"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Will check where they tried to access and redirect there, otherwise to homepage
  const callbackUrl = searchParams.get("search") ?? "/";

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      // Login user
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl,
      });

      if (!res?.error) {
        setEmail("");
        setPassword("");
        router.push(callbackUrl);
      } else {
        setError("Invalid Credentials");
      }
    } catch (error: any) {
      setError(error.message);
    }
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
      {error && <p className="bg-red-500 p-4">{error}</p>}
      <button
        type="submit"
        className="rounded-md border border-black p-4 hover:bg-black hover:text-white"
      >
        Login
      </button>
    </form>
  );
}
