import Link from "next/link";
import { RegisterForm } from "./RegisterForm";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";

export default async function Register() {
  const session = await getServerAuthSession();

  // If user already logged in
  if (session && session.user) {
    return redirect("/");
  }
  return (
    <section className=" flex h-screen w-[50vw] flex-col items-center gap-2 p-3">
      <h1 className="text-center text-xl font-bold">
        Register for a new account
      </h1>
      <RegisterForm />
      <p className="text-center font-semibold text-black">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className=" hover:text-primary hover:underline hover:underline-offset-4"
        >
          Sign In
        </Link>
      </p>
    </section>
  );
}
