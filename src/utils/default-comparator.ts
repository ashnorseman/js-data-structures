/**
 * Same as the compareFunction for built-in array sort
 */

export function defaultComparator<T>(a: T, b: T): number {
  return Number(a) - Number(b);
}
