"use client";

import Link from "next/link";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ProfileErrorPage({ error, reset }: Props) {
  return (
    <div>
      <p>{error.message}</p>
      <Link href="/">Go Home</Link>
    </div>
  );
}
