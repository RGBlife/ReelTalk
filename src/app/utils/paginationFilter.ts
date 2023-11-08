import { z } from "zod";

export type PaginationSchema = z.infer<typeof paginationSchema>;

export const paginationSchema = z.object({
  page: z.coerce.number(),
  limit: z.coerce.number(),
});

export const paginationFilter = ({ limit, page }: PaginationSchema) => {
  return {
    skip: (page - 1) * limit,
    take: limit,
  };
};
