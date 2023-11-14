import { revalidatePath } from "next/cache";
import { db } from "~/server/db";

type Props = {
  id: number;
};

export const ReviewDeleteButton = ({ id }: Props) => {
  const deleteReview = async () => {
    "use server";

    await db.review.delete({ where: { id } });
    revalidatePath("/");
  };

  return (
    <form action={deleteReview}>
      <button type="submit">Delete 🗑️</button>
    </form>
  );
};
