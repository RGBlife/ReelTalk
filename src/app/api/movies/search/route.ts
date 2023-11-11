import { type NextRequest } from "next/server";
import { db } from "~/server/db";
import { searchFilter } from "~/app/utils/searchTermFilter";
import { searchTermSchema } from "~/app/utils/searchTermFilter";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const term = searchTermSchema.parse({
    term: searchParams.get("term"),
  });

  try {
    const movies = await db.movie.findMany(searchFilter( term ));

    return Response.json(movies);
  } catch (error) {
    console.log(error);

    return Response.json(
      { error: "Unable to retrieve movie." },
      { status: 500 },
    );
  }
};

