export function firstLetterUpperAndRestLowerCase(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
