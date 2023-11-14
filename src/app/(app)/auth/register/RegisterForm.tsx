"use client";

import { type SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

// Components
import FormError from "~/components/auth/FormError";
import FormLabel from "~/components/auth/FormLabel";
import { RegisterSchema } from "~/app/utils/auth/authSchema";
import { useState } from "react";
import { signIn } from "next-auth/react";

// Types
type RegisterForm = z.infer<typeof RegisterSchema>;
type DBError = {
  code: string;
  message: string;
};

export function RegisterForm() {
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    setError(null);

    const { email, username, password, avatarURL, favouriteMovie } = data;

    const userData = {
      username,
      email,
      password,
      avatarURL,
      favouriteMovie,
    };

    // Check if an avatar URL was supplied
    if (avatarURL?.length !== 0) {
      userData.avatarURL = avatarURL;
    }

    // Register User in Database
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        // Error has occurred
        const resError = (await res.json()) as DBError;
        // Unique Constraints
        if (resError.code === "P2002") {
          if (resError.message.includes("email")) {
            setError("E-mail address already register");
          } else if (resError.message.includes("username")) {
            setError("Username already taken");
          }
        } else {
          console.error("Missed DB Error: ", resError);
          setError("Something has gone wrong, please try again later");
        }

        return;
      }

      // Registration Successful
      await signIn("credentials", {
        redirect: true,
        email,
        password,
        callbackUrl: "/",
      });
    } catch (error) {
      console.error(error);
      setError("Server error, please try again later");
    }
  };

  return (
    <>
      <form
        action="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="m-4 flex flex-col gap-2 rounded-lg border border-primary p-10 shadow-[3px_1px_38px_-15px] shadow-primary"
      >
        {error && (
          <p
            className="rounded-md  bg-red-500 p-3 text-center text-lg text-black shadow-sm shadow-black dark:bg-red-400"
            role="alert"
          >
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
        {errors.email && <FormError message={errors.email?.message} />}
        <FormLabel htmlFor="username" name="Username" />
        <input
          type="text"
          id="username"
          placeholder="e.g. Username"
          {...register("username")}
          className="form-input"
        />
        {errors.username && <FormError message={errors.username?.message} />}
        <FormLabel htmlFor="password" name="Password" />
        <input
          type="password"
          id="password"
          {...register("password")}
          className="form-input"
        />
        {errors.password && <FormError message={errors.password?.message} />}
        <FormLabel htmlFor="confirmPassword" name="Confirm Password" />
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
          className="form-input"
        />
        {errors.confirmPassword && (
          <FormError message={errors.confirmPassword?.message} />
        )}
        <FormLabel htmlFor="avatarURL" name="Avatar URL" />
        <input
          type="text"
          id="avatarURL"
          {...register("avatarURL")}
          placeholder="e.g. https://google.com/img.png"
          className="form-input"
        />
        {errors.avatarURL && <FormError message={errors.avatarURL?.message} />}
        <FormLabel htmlFor="favouriteMovie" name="Favourite Movie" />
        <input
          type="text"
          id="favouriteMovie"
          {...register("favouriteMovie")}
          placeholder="e.g. Tangled"
          className="form-input"
        />
        {errors.favouriteMovie && (
          <FormError message={errors.favouriteMovie?.message} />
        )}
        <button
          type="submit"
          className="mt-3 rounded-md bg-primary p-4 text-black shadow-sm shadow-black hover:bg-primary hover:opacity-80 hover:shadow-md hover:shadow-black"
        >
          Register
        </button>
      </form>
    </>
  );
}
