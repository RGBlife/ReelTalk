"use client";

export const AddToWatchListButton = () => {
  const handleClick = () => {
    alert("added to watch list");
  };

  return <button onClick={handleClick}>Add to Watch List</button>;
};
