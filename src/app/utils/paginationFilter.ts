import { z } from "zod";

export type PaginationSchema = z.infer<typeof movieFilterSchema>;

export const movieFilterSchema = z.object({
  page: z.coerce.number(),
  limit: z.coerce.number(),
  genre: z.coerce.number(),
  runtime: z.coerce.number(),
  release_from: z.coerce.number(),
  release_to: z.coerce.number(),
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
          genre_id: genre,
        },
      },
      runtime: {
        lte: runtime,
      },
      AND: [
        {
          release_date: {
            gte: release_from,
          },
        },
        {
          release_date: {
            lte: release_to,
          },
        },
      ],
    },
  };
};
