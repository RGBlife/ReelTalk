type Props = {
  src: string;
};

export const MovieTrailerModal = ({ src }: Props) => {
  return (
    <dialog id="trailer-modal" className="modal">
      <div className="modal-box">
        <iframe width="560" height="315" src={src} allowFullScreen />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
};
