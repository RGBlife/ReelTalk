import Link from "next/link";
import { LoginForm } from "./LoginForm";

export default function Login() {
  return (
    <section className="flex h-screen w-[50vw] flex-col items-center gap-2 p-10">
      <h1 className="text-center text-xl font-bold">Login to your Account</h1>
      <LoginForm />
      <p className="text-center font-semibold text-black">
        Not got an account?{" "}
        <Link
          href="/auth/register"
          className=" hover:text-primary hover:underline hover:underline-offset-4"
        >
          Create one
        </Link>
      </p>
    </section>
  );
}
