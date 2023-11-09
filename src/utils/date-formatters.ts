export const getYearFromDateStr = (dateStr: string) => {
  const date = new Date(dateStr);

  return date.getFullYear();
};
