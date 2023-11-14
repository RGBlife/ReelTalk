"use client";

import { useFormStatus } from "react-dom";

export function ReviewFormSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Posting review..." : "Submit"}
    </button>
  );
}
