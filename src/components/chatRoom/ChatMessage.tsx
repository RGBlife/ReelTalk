import { format, formatISO } from "date-fns";
import Link from "next/link";
import { type FC } from "react";

interface Message {
  body: string;
  sender: {
    username: string;
    avatar_url: string;
  };
  created_at: string;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: FC<ChatMessageProps> = ({
  message,
}: ChatMessageProps) => {
  return (
    <li className="flex gap-x-2 p-2 text-neutral-800">
      <div className="flex flex-col items-end">
        <p className="rounded-full border bg-primary p-2 text-center text-sm text-neutral-800">
          {message.body}
        </p>
        <div className="mt-1 flex items-center justify-between gap-8">
          <Link
            href="/users/profile/username"
            className="text-xs hover:text-primary hover:underline hover:underline-offset-2"
          >
            {message.sender.username}
          </Link>
          <p className="text-xs text-black">
            {format(new Date(message.created_at), "dd/MM/yyyy HH:mm")}
          </p>
        </div>
      </div>
      <img src={message.sender.avatar_url} className="h-10 w-10 rounded-full" />
    </li>
  );
};
