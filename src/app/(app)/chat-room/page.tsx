import { ChatMessage } from "~/components/chatRoom/ChatMessage";
import { ChatRoomItem } from "~/components/chatRoom/ChatRoomItem";
import { ChatOnlineUser } from "~/components/chatRoom/ChatOnlineUser";
import { ChatNewMessage } from "~/components/chatRoom/ChatNewMessage";

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
      id: 1,
      username: "oceanic",
      avatar_url: "https://robohash.org/1",
    },
    room_id: 1,
    body: "Hello, how are you?",
    created_at: "2023-11-12T12:30:00",
  },
  {
    id: 2,
    sender: {
      id: 2,
      username: "coralreef",
      avatar_url: "https://robohash.org/2",
    },
    room_id: 2,
    body: "I'm doing well, thanks!",
    created_at: "2023-11-12T12:35:00",
  },
  {
    id: 3,
    sender: {
      id: 3,
      username: "starfish",
      avatar_url: "https://robohash.org/3",
    },
    room_id: 1,
    body: "Anyone up for a hike?",
    created_at: "2023-11-12T12:40:00",
  },
  {
    id: 4,
    sender: {
      id: 4,
      username: "marlinblue",
      avatar_url: "https://robohash.org/4",
    },
    room_id: 2,
    body: "Just finished a digital masterpiece!",
    created_at: "2023-11-12T12:45:00",
  },
  {
    id: 5,
    sender: {
      id: 5,
      username: "seaurchin",
      avatar_url: "https://robohash.org/seaurchin",
    },
    room_id: 2,
    body: "This is a message that never ends, it goes on and on my friends!",
    created_at: "2023-11-12T12:45:00",
  },
  {
    id: 6,
    sender: {
      id: 6,
      username: "dolphinwave",
      avatar_url: "https://robohash.org/5",
    },
    room_id: 1,
    body: "Embrace the tranquility.",
    created_at: "2023-11-12T12:50:00",
  },
  {
    id: 7,
    sender: {
      id: 7,
      username: "sharkfin",
      avatar_url: "https://robohash.org/6",
    },
    room_id: 2,
    body: "Greetings from the cosmos!",
    created_at: "2023-11-12T12:55:00",
  },
  {
    id: 8,
    sender: {
      id: 8,
      username: "seahorse",
      avatar_url: "https://robohash.org/7",
    },
    room_id: 1,
    body: "Sipping on a freshly brewed cup.",
    created_at: "2023-11-12T13:00:00",
  },
  {
    id: 9,
    sender: {
      id: 9,
      username: "clownfish",
      avatar_url: "https://robohash.org/8",
    },
    room_id: 2,
    body: "Who's ready for an adventure?",
    created_at: "2023-11-12T13:05:00",
  },
  {
    id: 10,
    sender: {
      id: 10,
      username: "mantaray",
      avatar_url: "https://robohash.org/9",
    },
    room_id: 1,
    body: "Exploring the lunar landscape.",
    created_at: "2023-11-12T13:10:00",
  },
  {
    id: 11,
    sender: {
      id: 11,
      username: "squidink",
      avatar_url: "https://robohash.org/10",
    },
    room_id: 2,
    body: "Inventing the future, one line of code at a time.",
    created_at: "2023-11-12T13:15:00",
  },
  {
    id: 12,
    sender: {
      id: 12,
      username: "anemone",
      avatar_url: "https://robohash.org/11",
    },
    room_id: 1,
    body: "Listening to the waves.",
    created_at: "2023-11-12T13:20:00",
  },
  {
    id: 13,
    sender: {
      id: 13,
      username: "pelicanpoint",
      avatar_url: "https://robohash.org/12",
    },
    room_id: 2,
    body: "Venturing into the digital frontier.",
    created_at: "2023-11-12T13:25:00",
  },
  {
    id: 14,
    sender: {
      id: 14,
      username: "turtlebay",
      avatar_url: "https://robohash.org/13",
    },
    room_id: 1,
    body: "Dancing among the clouds.",
    created_at: "2023-11-12T13:30:00",
  },
  {
    id: 15,
    sender: {
      id: 15,
      username: "jellyfish",
      avatar_url: "https://robohash.org/14",
    },
    room_id: 2,
    body: "Crafting the perfect hot chocolate recipe.",
    created_at: "2023-11-12T13:35:00",
  },
];

const chatRooms = [
  {
    id: 1,
    room_name: "Trending Movie Discussion",
    members: 86,
    owner: "oceanic",
  },
  {
    id: 2,
    room_name: "Horror Movie Discussion",
    members: 120,
    owner: "oceanic",
  },
  {
    id: 3,
    room_name: "Adventure Movie Discussion",
    members: 20,
    owner: "oceanic",
  },
  {
    id: 4,
    room_name: "Fantasy Movie Discussion",
    members: 75,
    owner: "oceanic",
  },
  {
    id: 5,
    room_name: "Animation Movie Discussion",
    members: 150,
    owner: "oceanic",
  },
  {
    id: 6,
    room_name: "Drama Movie Discussion",
    members: 25,
    owner: "oceanic",
  },
  {
    id: 7,
    room_name: "Action Movie Discussion",
    members: 65,
    owner: "oceanic",
  },
  {
    id: 8,
    room_name: "Comedy Movie Discussion",
    members: 230,
    owner: "oceanic",
  },
  {
    id: 9,
    room_name: "History Movie Discussion",
    members: 350,
    owner: "oceanic",
  },
  {
    id: 10,
    room_name: "Western Movie Discussion",
    members: 60,
    owner: "oceanic",
  },
  {
    id: 11,
    room_name: "Thriller Movie Discussion",
    members: 60,
    owner: "oceanic",
  },
  {
    id: 12,
    room_name: "Crime Movie Discussion",
    members: 60,
    owner: "oceanic",
  },
  {
    id: 13,
    room_name: "Documentary Movie Discussion",
    members: 60,
    owner: "oceanic",
  },
  {
    id: 14,
    room_name: "Sci-Fi Movie Discussion",
    members: 60,
    owner: "oceanic",
  },
  {
    id: 15,
    room_name: "Mystery Movie Discussion",
    members: 60,
    owner: "oceanic",
  },
  {
    id: 16,
    room_name: "Romance Movie Discussion",
    members: 60,
    owner: "oceanic",
  },
  {
    id: 17,
    room_name: "Family Movie Discussion",
    members: 60,
    owner: "oceanic",
  },
  {
    id: 18,
    room_name: "War Movie Discussion",
    members: 60,
    owner: "oceanic",
  },
  {
    id: 19,
    room_name: "TV Movie Movie Discussion",
    members: 60,
    owner: "oceanic",
  },
];

const onlineMembers = [
  {
    id: 1,
    username: "oceanic",
  },
  {
    id: 2,
    username: "coralreef",
  },
  {
    id: 3,
    username: "starfish",
  },
  {
    id: 4,
    username: "seaurchin",
  },
  {
    id: 6,
    username: "dolphinwave",
  },
];

export default function ChatRoomPage() {
  return (
    <section className="container flex h-3/4 border p-1 lg:max-w-[48rem] xl:max-w-[70rem]">
      <div className="container relative flex flex-col">
        {/* title */}
        <h2 className="border-b-2 bg-primary p-2 text-center text-xl font-semibold">
          Trending Movies
        </h2>
        {/* Messages */}
        <ul className="flex h-[70vh] flex-col items-end overflow-y-scroll">
          {messages.map((message) => {
            return <ChatMessage message={message} key={message.id} />;
          })}
        </ul>

        {/* New Message */}
        <ChatNewMessage />
      </div>
      <div className="hidden w-2/5 flex-col border-l-2 lg:visible lg:flex">
        <div className="mb-2 flex h-2/3 max-h-[50rem] w-full flex-col items-end gap-3 p-5">
          {/* Chat Rooms */}
          <h3 className="text-xl font-semibold">Chat Rooms</h3>
          <ul className="grid grid-cols-2 gap-2 xl:grid-cols-3">
            {chatRooms.map((chatRoom) => {
              return <ChatRoomItem key={chatRoom.id} chatRoom={chatRoom} />;
            })}
          </ul>
        </div>

        <div className="flex h-2/5 max-h-[35rem] w-full flex-col items-end gap-5 border-t-2 p-5">
          {/* Current Online Members */}
          <h3 className="text-lg font-semibold">Current Online Members</h3>
          <ul className="grid grid-cols-2 gap-4">
            {onlineMembers.map((user) => {
              return <ChatOnlineUser key={user.id} user={user} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
