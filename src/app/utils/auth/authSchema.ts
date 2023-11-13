import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email()
    .trim()
    .min(1, { message: "E-mail Address is required" })
    .toLowerCase(),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z
  .object({
    email: z.string().email().trim().toLowerCase(),
    password: z
      .string()
      .min(6, { message: "Password must be a minimum of 6 characters" })
      .max(24),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be a minimum of 6 characters" })
      .max(24),
    username: z.string().trim().toLowerCase().min(2, {
      message: "Username must be a minimum of 2 or more characters",
    }),
    favouriteMovie: z.string().trim().min(2, {
      message: "Favourite movie must be a minimum of 2 or more characters",
    }),
    avatarURL: z
      .string()
      .trim()
      .toLowerCase()
      .url()
      .optional()
      .or(z.literal("")),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
