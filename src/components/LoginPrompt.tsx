// Reusable whenever the user needs to be logged in to perform a specific action
import Link from "next/link";

type Props = {
  actionText: string;
};

export const LoginPrompt = ({ actionText }: Props) => {
  return (
    <p>
      You must be <Link href="/auth/login">logged in</Link> to {actionText}
    </p>
  );
};
