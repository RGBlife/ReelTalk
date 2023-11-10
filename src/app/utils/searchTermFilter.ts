import { z } from "zod";

export type SearchSchema = z.infer<typeof searchTermSchema>;

export const searchTermSchema = z.string();

export const searchFilter = ( term : SearchSchema) => {
  return {
    where: {
      title: {
        contains: term,
      },
    },
  };
};
