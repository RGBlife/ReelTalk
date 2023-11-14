// Reusable whenever the user needs to be logged in to perform a specific action
import Link from "next/link";

type Props = {
  actionText: string;
};

export const LoginPrompt = ({ actionText }: Props) => {
  return (
    <p className="text-gray-500">
      You must be{" "}
      <Link
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        href="/auth/login"
      >
        logged in
      </Link>{" "}
      to {actionText}
    </p>
  );
};
