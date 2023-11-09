"use client";

type Props = {
  id: number;
};

export const ReviewDeleteButton = ({ id }: Props) => {
  const handleClick = () => {
    alert("review with id of " + id + " deleted");
  };

  return <button onClick={handleClick}>Delete 🗑️</button>;
};
