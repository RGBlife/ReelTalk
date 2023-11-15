"use client";

export const MovieTrailerButton = () => {
  const handleClick = () => {
    const modalElement = document.getElementById(
      "trailer-modal",
    ) as HTMLDialogElement | null;

    if (modalElement) modalElement.showModal();
  };
  return (
    <button
      className="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-300 px-8 py-3 text-base font-medium text-white hover:bg-violet-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-50"
      onClick={handleClick}
    >
      Watch Trailer
    </button>
  );
};
