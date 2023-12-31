// import { type User } from "@prisma/client";
import { compare } from "bcrypt";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// import { env } from "~/env.mjs";
import { db } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    username: string;
  }

  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      username: string;
      avatarURL: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your email",
        },
      },
      // You need to customise the `DefaultUser` type from the next-auth lib
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials.password) {
            return null;
          }

          // Find user in the database
          const user = await db.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          // If user cannot be found
          if (!user) {
            return null;
          }

          // Comparing the password stored in database versus passed via form - https://www.npmjs.com/package/bcrypt#to-check-a-password
          const isPwdValid = await compare(credentials.password, user.password);

          // If passwords do not match, do not pass go
          if (!isPwdValid) {
            return null;
          }
          // Return object with useful use information
          return {
            id: user.id.toString(),
            username: user.username,
            email: user.email,
            image: user.avatar_url,
          };
        } catch (error) {
          // Todo - Confirm what to do with these possible errors
          console.error(error);
          return null;
          // throw new Error("Not found");
        }
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      // console.log("Session Callback", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username,
        },
      };
    },
    jwt: ({ token, user }) => {
      // console.log("JWT Callback", { token, user });
      if (user) {
        return {
          ...token,
          id: user.id,
          username: user.username,
        };
      }
      return token;
    },
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);

export const getAuthUser = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
};

/**
 * Wrapper for `getServerSession` that throws an error if the user is not authenticated.
 */
// Most likely won't be needed when protected routes implemented
export const getSessionOrThrow = async () => {
  const currentUser = await getServerAuthSession();

  if (!currentUser?.user) {
    // throw new Error("Not authenticated");
  }

  return currentUser;
};
