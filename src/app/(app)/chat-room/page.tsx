"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { FiSend } from "react-icons/fi";
import { ChatMessage } from "~/components/chatRoom/ChatMessage";

type DummyMessage = {
  id: number;
  sender: {
    id: number;
    username: string;
    avatar_url: string;
  };
  room_id: number;
  body: string;
  created_at: string;
};

const messages: DummyMessage[] = [
  {
    id: 1,
    sender: {
      id: 101,
      username: "StarGazer42",
      avatar_url: "https://robohash.org/1",
    },
    room_id: 1,
    body: "Hello, how are you?",
    created_at: "2023-11-12T12:30:00",
  },
  {
    id: 2,
    sender: {
      id: 102,
      username: "MangoExplorer",
      avatar_url: "https://robohash.org/2",
    },
    room_id: 2,
    body: "I'm doing well, thanks!",
    created_at: "2023-11-12T12:35:00",
  },
  {
    id: 3,
    sender: {
      id: 103,
      username: "MountainDreamer",
      avatar_url: "https://robohash.org/3",
    },
    room_id: 1,
    body: "Anyone up for a hike?",
    created_at: "2023-11-12T12:40:00",
  },
  {
    id: 4,
    sender: {
      id: 104,
      username: "PixelPainter",
      avatar_url: "https://robohash.org/4",
    },
    room_id: 2,
    body: "Just finished a digital masterpiece!",
    created_at: "2023-11-12T12:45:00",
  },
  {
    id: 5,
    sender: {
      id: 104,
      username: "HaylzRandom",
      avatar_url: "https://avatars.githubusercontent.com/u/15155380?v=4",
    },
    room_id: 2,
    body: "This is a message that never ends, it goes on and on my friends!",
    created_at: "2023-11-12T12:45:00",
  },
  // {
  //   id: 5,
  //   sender: {
  //     id: 105,
  //     username: "ZenMaster",
  //     avatar_url: "https://example.com/avatar/zenmaster.jpg",
  //   },
  //   room_id: 1,
  //   body: "Embrace the tranquility.",
  //   created_at: "2023-11-12T12:50:00",
  // },
  // {
  //   id: 6,
  //   sender: {
  //     id: 106,
  //     username: "GalacticTraveler",
  //     avatar_url: "https://example.com/avatar/galactictraveler.jpg",
  //   },
  //   room_id: 2,
  //   body: "Greetings from the cosmos!",
  //   created_at: "2023-11-12T12:55:00",
  // },
  // {
  //   id: 7,
  //   sender: {
  //     id: 107,
  //     username: "CoffeeConnoisseur",
  //     avatar_url: "https://example.com/avatar/coffeeconnoisseur.jpg",
  //   },
  //   room_id: 1,
  //   body: "Sipping on a freshly brewed cup.",
  //   created_at: "2023-11-12T13:00:00",
  // },
  // {
  //   id: 8,
  //   sender: {
  //     id: 108,
  //     username: "AdventureSeeker",
  //     avatar_url: "https://example.com/avatar/adventureseeker.jpg",
  //   },
  //   room_id: 2,
  //   body: "Who's ready for an adventure?",
  //   created_at: "2023-11-12T13:05:00",
  // },
  // {
  //   id: 9,
  //   sender: {
  //     id: 109,
  //     username: "Moonwalker",
  //     avatar_url: "https://example.com/avatar/moonwalker.jpg",
  //   },
  //   room_id: 1,
  //   body: "Exploring the lunar landscape.",
  //   created_at: "2023-11-12T13:10:00",
  // },
  // {
  //   id: 10,
  //   sender: {
  //     id: 110,
  //     username: "TechInnovator",
  //     avatar_url: "https://example.com/avatar/techinnovator.jpg",
  //   },
  //   room_id: 2,
  //   body: "Inventing the future, one line of code at a time.",
  //   created_at: "2023-11-12T13:15:00",
  // },
  // {
  //   id: 11,
  //   sender: {
  //     id: 111,
  //     username: "OceanDreamer",
  //     avatar_url: "https://example.com/avatar/oceandreamer.jpg",
  //   },
  //   room_id: 1,
  //   body: "Listening to the waves.",
  //   created_at: "2023-11-12T13:20:00",
  // },
  // {
  //   id: 12,
  //   sender: {
  //     id: 112,
  //     username: "PixelPioneer",
  //     avatar_url: "https://example.com/avatar/pixelpioneer.jpg",
  //   },
  //   room_id: 2,
  //   body: "Venturing into the digital frontier.",
  //   created_at: "2023-11-12T13:25:00",
  // },
  // {
  //   id: 13,
  //   sender: {
  //     id: 113,
  //     username: "SkyDancer",
  //     avatar_url: "https://example.com/avatar/skydancer.jpg",
  //   },
  //   room_id: 1,
  //   body: "Dancing among the clouds.",
  //   created_at: "2023-11-12T13:30:00",
  // },
  // {
  //   id: 14,
  //   sender: {
  //     id: 114,
  //     username: "CocoaCreator",
  //     avatar_url: "https://example.com/avatar/cocoacreator.jpg",
  //   },
  //   room_id: 2,
  //   body: "Crafting the perfect hot chocolate recipe.",
  //   created_at: "2023-11-12T13:35:00",
  // },
  // {
  //   id: 15,
  //   sender: {
  //     id: 115,
  //     username: "NeonNavigator",
  //     avatar_url: "https://example.com/avatar/neonnavigator.jpg",
  //   },
  //   room_id: 1,
  //   body: "Navigating the neon streets.",
  //   created_at: "2023-11-12T13:40:00",
  // },
  // {
  //   id: 16,
  //   sender: {
  //     id: 116,
  //     username: "AstralExplorer",
  //     avatar_url: "https://example.com/avatar/astralexplorer.jpg",
  //   },
  //   room_id: 2,
  //   body: "Exploring the astral plane.",
  //   created_at: "2023-11-12T13:45:00",
  // },
  // {
  //   id: 17,
  //   sender: {
  //     id: 117,
  //     username: "JungleNomad",
  //     avatar_url: "https://example.com/avatar/junglenomad.jpg",
  //   },
  //   room_id: 1,
  //   body: "Lost in the jungle. Send help!",
  //   created_at: "2023-11-12T13:50:00",
  // },
  // {
  //   id: 18,
  //   sender: {
  //     id: 118,
  //     username: "CeruleanSorcerer",
  //     avatar_url: "https://example.com/avatar/ceruleansorcerer.jpg",
  //   },
  //   room_id: 2,
  //   body: "Casting spells in shades of blue.",
  //   created_at: "2023-11-12T13:55:00",
  // },
];

const chatRooms = ["Room 1", "Room 2", "Room 3"];

const onlineUsers = ["User A", "User B", "User C"];

export default function ChatRoomPage() {
  // const [newMessage, setNewMessage] = useState("");

  // const handleMessageSubmit = (e: React.FormEvent<HTMLInputElement>) => {
  //   e.preventDefault();

  //   alert("submitting message...");
  //   setNewMessage("");
  // };

  // return (
  //   <div className="flex h-screen">
  //     {/* Messages section - 2/3 width */}
  //     <div className="w-2/3 flex-shrink-0 flex-grow overflow-y-auto border-r p-4">
  //       {/* Display messages here */}
  //       {messages.map((message) => (
  //         <div key={message.id} className="mb-2">
  //           <span className="font-bold">{message.sender.username}:</span>{" "}
  //           {message.body}
  //         </div>
  //       ))}
  //     </div>

  //     {/* Sidebar section - 1/3 width */}
  //     <div className="w-1/3 p-4">
  //       {/* Chat rooms section - 1/2 height */}
  //       <div className="mb-4 h-1/2">
  //         <h2 className="mb-2 text-lg font-semibold">Chat Rooms</h2>
  //         <ul>
  //           {chatRooms.map((room, index) => (
  //             <li key={index} className="mb-2">
  //               {room}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>

  //       {/* Online users section - 1/2 height */}
  //       <div className="mb-4 h-1/2">
  //         <h2 className="mb-2 text-lg font-semibold">Online Users</h2>
  //         <ul>
  //           {onlineUsers.map((username, index) => (
  //             <li key={index} className="mb-2">
  //               {username}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>

  //     {/* <div className="w-full">
  //       <form onSubmit={handleMessageSubmit}>
  //         <div className="mb-2">
  //           <label htmlFor="message" className="sr-only">
  //             Message
  //           </label>
  //           <input
  //             type="text"
  //             id="message"
  //             name="message"
  //             value={newMessage}
  //             onChange={(e) => setNewMessage(e.target.value)}
  //             placeholder="Enter your message..."
  //             className="w-full rounded border px-4 py-2"
  //           />
  //         </div>
  //         <button
  //           type="submit"
  //           className="rounded bg-blue-500 px-4 py-2 text-white"
  //         >
  //           Send
  //         </button>
  //       </form>
  //     </div> */}
  //   </div>
  // );

  return (
    <section className="m-5 flex h-3/4 border">
      <div className="flex w-full flex-col justify-between">
        {/* title */}
        <h2 className="border-b-2 bg-primary p-2 text-center text-xl font-semibold">
          Chat Room Title
        </h2>
        {/* Messages */}
        <ul className="flex flex-col items-end">
          {messages.map((message) => {
            return <ChatMessage message={message} key={message.id} />;
          })}
        </ul>

        {/* New Message */}
        <div className="w-full border bg-primary p-3">
          <form action="" className="flex justify-center gap-8">
            <input
              type="text"
              name=""
              id=""
              className="form-input w-2/3 border-none p-1"
              placeholder="Comment goes here..."
            />
            <button className="rounded-full border bg-white p-2 text-sm  hover:text-primary hover:opacity-75">
              <FiSend />
            </button>
          </form>
        </div>
      </div>
      <div className="flex w-1/3 flex-col items-end border-l-2">
        <div className="mb-2 flex w-full flex-col items-end p-2">
          {/* Chat Rooms */}
          <h3 className="text-xl font-semibold">Chat Rooms</h3>
          <ul className="flex flex-col">
            <li>
              <Link href="/chatroom/chatroomid" className="hover:underline">
                Chat Room 1
              </Link>
            </li>
            <li>
              <Link href="/chatroom/chatroomid" className="hover:underline">
                Chat Room 2
              </Link>
            </li>
            <li>
              <Link href="/chatroom/chatroomid" className="hover:underline">
                Chat Room 2
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex w-full flex-col items-end border-t-2 p-2">
          {/* Current Online Users */}
          <h3 className="mt-2 text-xl font-semibold">Current Online Users</h3>
          <ul>
            <li>
              <Link href="/users/profile/user" className="hover:underline">
                User A
              </Link>
            </li>
            <li>
              <Link href="/users/profile/user" className="hover:underline">
                User B
              </Link>
            </li>
            <li>
              <Link href="/users/profile/user" className="hover:underline">
                User C
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
