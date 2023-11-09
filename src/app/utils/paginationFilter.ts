import { z } from "zod";

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
          genre_id: genre,
        },
      },
      runtime: {
        lte: runtime,
      },
      release_date: {
        gte: release_from ? new Date(release_from) : undefined,
        lte: release_to ? new Date(release_to) : undefined,
      },
    },
  };
};
