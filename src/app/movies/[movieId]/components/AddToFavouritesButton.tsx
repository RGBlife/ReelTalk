"use client";

export const AddToFavouritesButton = () => {
  const handleClick = () => {
    alert("added to favourites");
  };

  return <button onClick={handleClick}>Add to Favourites</button>;
};
