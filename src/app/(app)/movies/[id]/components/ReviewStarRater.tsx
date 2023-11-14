"use client";

import { StarIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { createClassName } from "~/utils/string-formatters";

export const ReviewStarRater = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((key) => {
        return (
          <div className="relative" key={key}>
            <StarIcon
              className={createClassName(
                rating >= key ? "text-yellow-400" : "text-gray-500",
                "h-8 w-8 flex-shrink-0",
              )}
              aria-hidden="true"
            />
            <input
              type="radio"
              name="rating"
              required
              value={key}
              onChange={(e) => setRating(Number(e.target.value))}
              className="absolute -top-0.5 cursor-pointer appearance-none border-none  bg-transparent p-4 checked:border-none
                         checked:bg-transparent  checked:bg-none checked:shadow-none checked:outline-none
                         checked:ring-0 checked:ring-offset-0 hover:checked:bg-transparent focus:border-none
                         focus:bg-transparent focus:shadow-none  focus:outline-none focus:ring-0
                         focus:checked:border-none focus:checked:bg-transparent  focus:checked:ring-0 focus:checked:ring-offset-0 active:ring-0 active:ring-offset-0"
            />
          </div>
        );
      })}
    </div>
  );
};
