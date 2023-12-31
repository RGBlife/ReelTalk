import { z } from "zod";
import type { Prisma } from "@prisma/client";

export type PaginationSchema = z.infer<typeof movieFilterSchema>;

export const movieFilterSchema = z.object({
  page: z.coerce.number(),
  limit: z.coerce.number(),
  genre: z.coerce.number().optional(),
  runtime: z.coerce.number().optional(),
  release_from: z.string().optional(),
  release_to: z.string().optional(),
});

export const paginationFilter = ({
  limit,
  page,
  genre,
  runtime,
  release_from,
  release_to,
}: PaginationSchema) => {
  return {
    skip: (page - 1) * limit,
    take: limit,
    where: {
      genres: {
        some: {
          id: genre,
        },
      },
      runtime: {
        lte: runtime,
      },
      release_date: {
        lte: release_to ? new Date(release_to) : undefined,
        gte: release_from ? new Date(release_from) : undefined,
      },
    },
  } satisfies Prisma.MovieFindManyArgs;
};
