import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { db } from "~/server/db";

type DBError = {
  code: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const { username, email, password, avatarURL, favouriteMovie } =
      (await req.json()) as {
        username: string;
        email: string;
        password: string;
        avatarURL: string;
        favouriteMovie: string;
      };

    // Secure the password
    const hashed = await hash(password, 12);

    // Create User in DB
    const user = await db.user.create({
      data: {
        username,
        email,
        password: hashed,
        avatar_url: avatarURL,
        favourite_movie: favouriteMovie,
      },
    });

    // Return User when created
    return NextResponse.json({
      user: {
        email: user.email,
        username: user.username,
        avatarURL: user.avatar_url,
      },
    });
  } catch (error: unknown) {
    console.error("Creation Error:", error);
    const errResponse = error as DBError;
    return new NextResponse(
      JSON.stringify({
        code: errResponse.code,
        message: errResponse.message,
      }),
      {
        status: 500,
      },
    );
  }
}
