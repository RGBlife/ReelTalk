"use client";

type Props = {
  movieId: number;
};

export const AddToWatchListButton = ({ movieId }: Props) => {
  const handleClick = () => {
    alert(`added movie of id: ${movieId} to watch list`);
  };

  return <button onClick={handleClick}>Add to Watch List</button>;
};
