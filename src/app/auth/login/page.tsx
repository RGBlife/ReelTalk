import Link from "next/link";
import { LoginForm } from "./LoginForm";

export default function Login() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <section className="border border-black p-5 text-center">
        <h1>Login to your Account</h1>
        <LoginForm />
        <p className="mt-3">
          Not got an account?{" "}
          <Link href="/auth/register" className="hover:underline">
            Create one
          </Link>
        </p>
      </section>
    </div>
  );
}
