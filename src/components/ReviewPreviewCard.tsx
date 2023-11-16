import { StarIcon } from "@heroicons/react/20/solid";
import { genRelativeDateStr } from "~/utils/date-formatters";
import { createClassName } from "~/utils/string-formatters";
import { ReviewSectionReviews } from "./ReviewPreviewSection";

type Props = {
  review: ReviewSectionReviews & { movie: { title: string } };
};

export const ReviewPreviewCard = ({ review }: Props) => {
  return (
    <article className="flex h-full flex-col justify-between gap-5 rounded-2xl p-8 shadow-lg transition duration-500 hover:shadow-2xl">
      <div className="flex flex-col gap-2.5">
        <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
          {review.movie.title}
        </h3>
        <h3 className="text-lg font-semibold text-gray-700">
          &quot;{review.title}&quot;
        </h3>
        <div className="flex">
          {[0, 1, 2, 3, 4].map((rating) => {
            return (
              <StarIcon
                key={rating}
                className={createClassName(
                  review.rating > rating + 1
                    ? "text-yellow-400"
                    : "text-gray-500",
                  "h-5 w-5 flex-shrink-0",
                )}
                aria-hidden="true"
              />
            );
          })}
        </div>
        <p className="text-md line-clamp-4 text-gray-600">{review.body}</p>
      </div>
      {/* Reviewer: */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="">
            <img
              className="h-8 w-8 rounded-full"
              src={review.author.avatar_url ?? ""}
              alt="author avatar"
            />
          </div>
          <div className="text-sm font-semibold text-gray-500">
            {review.author.username} •{" "}
            <span className="font-normal">
              {genRelativeDateStr(review.created_at)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
