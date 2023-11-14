"use client";

export const MovieTrailerButton = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert("Movie Trailer Modal opened");
  };

  return (
    <button
      type="button"
      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-400 px-8 py-3 text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-50"
    >
      Watch Trailer
    </button>
  );
};
