type Props = {
  id: string;
  children: React.ReactNode;
};

export const Modal = ({ id, children }: Props) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
};
