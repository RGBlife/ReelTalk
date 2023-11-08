"use client";

export const AddToWatchedListButton = () => {
  const handleClick = () => {
    alert("added to watched list");
  };

  return <button onClick={handleClick}>Add to Watched List</button>;
};
