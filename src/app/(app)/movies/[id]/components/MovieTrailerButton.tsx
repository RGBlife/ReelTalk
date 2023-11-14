"use client";

export const MovieTrailerButton = () => {
  const handleClick = () => {
    const modalElement = document.getElementById(
      "trailer-modal",
    ) as HTMLDialogElement | null;

    if (modalElement) modalElement.showModal();
  };

  return (
    <button className="btn" onClick={handleClick}>
      Watch Trailer
    </button>
  );
};
