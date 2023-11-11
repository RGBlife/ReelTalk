"use client";

export const MovieTrailerButton = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert("Movie Trailer Modal opened");
  };

  return <button onClick={handleClick}>Watch Trailer</button>;
};
