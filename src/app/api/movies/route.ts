import { NextRequest } from "next/server";
import {
  paginationSchema,
  paginationFilter,
} from "~/app/utils/paginationFilter";
import { db } from "~/server/db";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const { page, limit } = paginationSchema.parse({
    page: searchParams.get("page"),
    limit: searchParams.get("limit"),
  });

  try {
    const movies = await db.movie.findMany(
      paginationFilter({ page, limit }),
    );

    return Response.json(movies);
  } catch (error) {
    return Response.json(
      { error: "Unable to retrieve movies." },
      { status: 500 },
    );
  }
};
