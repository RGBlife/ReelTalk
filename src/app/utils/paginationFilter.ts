import { z } from "zod";

export type PaginationSchema = z.infer<typeof movieFilterSchema>;

export const movieFilterSchema = z.object({
  page: z.coerce.number(),
  limit: z.coerce.number(),
  genre: z.coerce.number().optional(),
  runtime: z.coerce.number().optional(),
  release_from: z.coerce.number().optional(),
  release_to: z.coerce.number().optional(),
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
          genre_id: genre ? genre : undefined,
        },
      },
      runtime: {
        lte: runtime ? runtime : undefined,
      },
      release_date: {
        lte: release_to ? release_to : undefined,
        gte: release_from ? release_from : undefined,
      },
    },
  };
};
