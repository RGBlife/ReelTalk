import { z } from "zod";

export type SearchSchema = z.infer<typeof searchFilterSchema>;

export const searchFilterSchema = z.object({
  term: z.string(),
});

export const searchFilter = ({ term }: SearchSchema) => {
  return {
    where: {
      title: {
        contains: term,
      },
    },
  };
};
