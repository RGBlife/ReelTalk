"use client";

export const ModalOpenButton = ({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const handleClick = () => {
    const modalElement = document.getElementById(
      id,
    ) as HTMLDialogElement | null;

    if (modalElement) modalElement.showModal();
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};
