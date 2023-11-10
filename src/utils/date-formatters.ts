export const getYearFromDateStr = (dateStr: string) => {
  const date = new Date(dateStr);

  return date.getFullYear();
};

export const convertMinsToHoursStr = (mins: number) => {
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;

  const hoursString = hours > 0 ? `${hours}h ` : "";
  const minutesString = remainingMins > 0 ? `${remainingMins}m` : "";

  return hoursString + minutesString;
};
