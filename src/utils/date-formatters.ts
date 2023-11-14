import { formatDistanceToNowStrict } from "date-fns";

export const genRelativeDateStr = (date: Date) => {
  const relativeDateStr = formatDistanceToNowStrict(date, { addSuffix: true });

  if (relativeDateStr === "0 seconds ago") return "Just now";
  else return relativeDateStr;
};

export const convertMinsToHoursStr = (mins: number) => {
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;

  const hoursString = hours > 0 ? `${hours}h ` : "";
  const minutesString = remainingMins > 0 ? `${remainingMins}m` : "";

  return hoursString + minutesString;
};
