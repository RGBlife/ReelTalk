import { formatDistanceToNowStrict } from "date-fns";

export const getYearFromDateStr = (dateStr: string) => {
  const date = new Date(dateStr);

  return date.getFullYear();
};

export const genRelativeDateStr = (dateStr: string) => {
  const date = new Date(dateStr);

  const relativeDateStr = formatDistanceToNowStrict(date, { addSuffix: true });

  if (relativeDateStr === "0 seconds ago") return "Just now";
  else return relativeDateStr;
};
