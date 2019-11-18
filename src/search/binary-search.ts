/**
 * Returns the index of the specified item in a sorted array.
 */

import { defaultComparator } from '../utils/default-comparator';

export function binarySearch<T>(
  sortedArray: T[],
  target: T,
  comparator: (target: T, arrayItem: T) => number = defaultComparator
): number {
  if (!Array.isArray(sortedArray)) {
    return -1;
  }

  let lo = 0;
  let hi: number = sortedArray.length - 1;

  while (lo <= hi) {
    const mid: number = lo + Math.floor((hi - lo) / 2);
    const compareResult: number = comparator(target, sortedArray[mid]);

    if (compareResult < 0) {
      hi = mid - 1;
    } else if (compareResult > 0) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}
