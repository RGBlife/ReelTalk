import Link from "next/link";
import { type FC } from "react";

import { MdOutlinePersonOutline } from "react-icons/md";

interface ChatRoom {
  id: number;
  room_name: string;
  owner: string;
  members: number; // This will have to be an array in final product
}

interface ChatRoomProps {
  chatRoom: ChatRoom;
}

export const ChatRoomItem: FC<ChatRoomProps> = ({
  chatRoom,
}: ChatRoomProps) => {
  const { room_name, members } = chatRoom;

  // Shorten chatroom name for display purposes
  const shortName = room_name.split(" ")[0];

  return (
    <li className="flex flex-col flex-wrap items-end ">
      {/* TODO - Update link to chatroom */}
      <Link
        href="#"
        className="text-justify text-sm text-neutral-800 hover:text-primary hover:underline"
      >
        {shortName}
      </Link>
      <span
        className="flex items-center justify-end gap-1 text-sm text-black"
        title={`Users subscribed to ${room_name}`}
      >
        <MdOutlinePersonOutline className="text-primary-focus" />
        {members}
      </span>
    </li>
  );
};
