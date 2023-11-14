export function createClassName(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
