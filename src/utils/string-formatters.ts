<<<<<<< Updated upstream
export function createClassName(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
=======
export const createClassName = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
>>>>>>> Stashed changes
