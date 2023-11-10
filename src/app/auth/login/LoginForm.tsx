"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";

type LoginInputs = {
  email: string;
  password: string;
};

export function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputs>();

  const [error, setError] = useState<string | null>(null);

  // Todo - Figure out a working method to redirect user back to previously accessed page or redirect to homepage (as is presently)
  const callbackUrl = "/";

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const { email, password } = data;
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
        reset();
        router.push(callbackUrl);
      } else {
        setError("Invalid Credentials");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <>
      {error && (
        <p className="border border-black bg-red-500 text-center text-2xl">
          {error}
        </p>
      )}
      <form
        className="m-3 flex flex-col items-center gap-4 border border-black p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email" className="">
          E-mail Address:
        </label>
        <input
          type="email"
          id="email"
          placeholder="e.g. abc123@email.com"
          {...register("email", {
            required: "E-mail is required",
          })}
          aria-invalid={errors.email ? "true" : "false"}
          className="rounded-md border border-black p-2"
        />
        {errors.email?.type === "required" && (
          <p className="bg-red-500 p-5" role="alert">
            {errors.email.message}
          </p>
        )}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
          })}
          aria-invalid={errors.password ? "true" : "false"}
          className="rounded-md border border-black p-2"
        />
        {errors.password?.type === "required" && (
          <p className="bg-red-500 p-5" role="alert">
            {errors.password.message}
          </p>
        )}
        <button
          type="submit"
          className="rounded-md border border-black p-4 hover:bg-black hover:text-white"
        >
          Login
        </button>
      </form>
    </>
  );
}
