import { type NextRequest } from "next/server";
import { getAuthUser } from "~/server/auth";

import { db } from "~/server/db";

export const GET = async (request: NextRequest) => {
  const authUser = await getAuthUser();

  try {
    const usersToMovies = await db.userToMovieSeen.findMany({
      where: { user_id: Number(authUser?.id) },
      include: {
        movie: true,
      },
    });

    const movies = usersToMovies.map((userToMovie) => userToMovie.movie);

    console.log(movies.map((m) => m.title));

    return Response.json(movies);
  } catch (error) {
    return Response.json(
      { error: "Unable to retrieve seen list" },
      { status: 500 },
    );
  }
};
