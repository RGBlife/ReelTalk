import { FiSend } from "react-icons/fi";

export const ChatNewMessage = () => {
  return (
    <div className="container sticky bottom-0 border bg-primary p-3">
      <form action="" className="flex justify-center gap-8">
        {/* TODO - Implement logic to send a message */}
        <input
          type="text"
          name=""
          id=""
          className="form-input w-2/3 border-none p-1"
          placeholder="Comment goes here..."
        />
        <button className="rounded-full border bg-white p-2 text-sm hover:text-primary hover:shadow hover:shadow-black">
          <FiSend />
        </button>
      </form>
    </div>
  );
};
