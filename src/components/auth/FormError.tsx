type ErrorProps = {
  message: string | undefined;
};

const FormError = ({ message }: ErrorProps) => {
  return (
    <p
      className=" max-w-sm self-start break-words rounded-md bg-red-500 px-2 py-1 text-sm italic text-black shadow-md shadow-red-600 dark:bg-red-400 dark:shadow-red-500"
      role="alert"
    >
      {message}
    </p>
  );
};
export default FormError;
