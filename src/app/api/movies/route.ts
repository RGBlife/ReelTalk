import { NextRequest } from "next/server";
import {
  movieFilterSchema,
  paginationFilter,
} from "~/app/utils/paginationFilter";
import { db } from "~/server/db";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const { page, limit, genre, runtime, release_from, release_to } = movieFilterSchema.parse({
    page: searchParams.get("page"),
    limit: searchParams.get("limit"),
    genre: searchParams.get("genre") ?? undefined,
    runtime: searchParams.get("runtime") ?? undefined,
    release_from: searchParams.get("release_from") ?? undefined,
    release_to: searchParams.get("release_to") ?? undefined
  });

  try {
    const movies = await db.movie.findMany(paginationFilter({ page, limit, genre, runtime, release_from, release_to }));

    return Response.json(movies);
  } catch (error) {
    console.log(error);
    
    return Response.json(
      { error: "Unable to retrieve movies." },
      { status: 500 },
    );
  }
};
