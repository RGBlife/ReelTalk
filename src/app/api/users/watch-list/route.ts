import { type NextRequest } from "next/server";
import { getAuthUser } from "~/server/auth";

import { db } from "~/server/db";

export const GET = async (request: NextRequest) => {
  const authUser = await getAuthUser();

  try {
    const usersToMovies = await db.userToMovieWatch.findMany({
      where: { user_id: Number(authUser?.id) },
      include: {
        movie: true,
      },
    });

    const movies = usersToMovies.map((userToMovie) => userToMovie.movie);

    return Response.json(movies);
  } catch (error) {
    return Response.json(
      { error: "Unable to retrieve watch list" },
      { status: 500 },
    );
  }
};
