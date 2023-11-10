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
      className="rounded bg-black px-4 py-2 text-white"
      onClick={handleClick}
    >
      Add to Watched List
    </button>
  );
};
