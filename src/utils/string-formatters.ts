export const createClassName = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
