type Props = {
  text: string;
};

export function MovieDetailBadge({ text }: Props) {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
      {text}
    </span>
  );
}
