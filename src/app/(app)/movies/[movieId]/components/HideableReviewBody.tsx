"use client";

import { useState } from "react";

type Props = {
  body: string;
};

export const HideableReviewBody = ({ body }: Props) => {
  const [isShown, setIsShown] = useState(false);

  const toggleBody = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <p
      className="cursor-pointer"
      onClick={toggleBody}
      style={{ color: !isShown ? "red" : "" }}
    >
      {isShown
        ? body
        : "This review may contain spoilers. I can handle the truth"}
    </p>
  );
};
