"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import type z from "zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormLabel from "~/components/auth/FormLabel";
import { LoginSchema } from "~/app/utils/auth/authSchema";
import FormError from "~/components/auth/FormError";

// Types
type LoginForm = z.infer<typeof LoginSchema>;

export function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
  });

  const [error, setError] = useState<string | null>(null);

  // Todo - Figure out a working method to redirect user back to previously accessed page or redirect to homepage (as is presently)
  const callbackUrl = "/";

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    setError(null);

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
    } catch (err: unknown) {
      console.error(error);
      setError("Server error, please try again later");
    }
  };
  return (
    <>
      <form
        className="m-4 flex flex-col gap-2 rounded-lg border border-primary p-10 shadow-[3px_1px_38px_-15px] shadow-primary"
        action="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && (
          <p className="rounded-md  bg-red-500 p-3 text-center text-lg text-black shadow-sm shadow-black dark:bg-red-400">
            {error}
          </p>
        )}
        <FormLabel htmlFor="email" name="E-mail Address" />
        <input
          type="email"
          id="email"
          placeholder="e.g. abc123@email.com"
          {...register("email")}
          className="form-input"
        />
        {errors.email && <FormError message={errors.email.message} />}
        <FormLabel htmlFor="password" name="Password" />
        <input
          type="password"
          id="password"
          {...register("password")}
          className="form-input"
        />
        {errors.password && <FormError message={errors.password.message} />}
        <button
          type="submit"
          className="mt-3 rounded-md bg-primary p-4 text-black shadow-sm shadow-black hover:bg-primary hover:opacity-80 hover:shadow-md hover:shadow-black"
        >
          Login
        </button>
      </form>
    </>
  );
}
