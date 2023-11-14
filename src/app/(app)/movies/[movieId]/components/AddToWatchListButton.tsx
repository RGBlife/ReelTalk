"use client";

type Props = {
  movieId: number;
};

export const AddToWatchListButton = ({ movieId }: Props) => {
  const handleClick = () => {
    alert(`added movie of id: ${movieId} to watch list`);
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
    >
      Add to Watch List
    </button>
  );
};
