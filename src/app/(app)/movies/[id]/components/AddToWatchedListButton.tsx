"use client";

type Props = {
  movieId: number;
};

export const AddToWatchedListButton = ({ movieId }: Props) => {
  const handleClick = () => {
    alert(`added movie of id: ${movieId} to watched list`);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="flex w-full items-center justify-center rounded-md border border-transparent bg-violet-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
    >
      Add to Seen
    </button>
  );
};
