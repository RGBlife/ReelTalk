import Link from "next/link";
import { type FC } from "react";

import { MdOutlinePersonOutline } from "react-icons/md";

interface ChatRoom {
  id: number;
  name: string;
  users: number;
}

interface ChatRoomProps {
  chatRoom: ChatRoom;
}

export const ChatRoomItem: FC<ChatRoomProps> = ({
  chatRoom,
}: ChatRoomProps) => {
  console.log(chatRoom);
  const { name, users } = chatRoom;
  return (
    <li className="flex flex-col flex-wrap items-end">
      <Link
        href="/chatroom/chatroomid"
        className=" text-justify text-lg text-neutral-800 hover:text-primary hover:underline"
      >
        {name}
      </Link>
      <span
        className="flex items-center justify-end gap-1 text-sm text-black"
        title={`Users subscribed to ${name} chat room`}
      >
        <MdOutlinePersonOutline className="text-primary-focus" /> {users}
      </span>
    </li>
  );
};
