/**
 * Merge sort with a customized comparator
 */

import { defaultComparator } from '../utils/default-comparator';

// will cause stack overflow when array is very long
const upperSize = 200000;

export function mergeSort<T>(array: T[], comparator: (a: T, b: T) => number = defaultComparator): T[] {
  if (!Array.isArray(array) || array.length <= 1) {
    return array;
  }

  if (array.length > upperSize) {
    return array.sort(comparator);
  }

  const middle: number = Math.floor(array.length / 2);

  const leftSorted: T[] = mergeSort(array.slice(0, middle), comparator);
  const rightSorted: T[] = mergeSort(array.slice(middle, array.length), comparator);

  return merge<T>(leftSorted, rightSorted, comparator);
}

function merge<T>(leftSorted: T[], rightSorted: T[], comparator: (a: T, b: T) => number): T[] {
  let sortedArray = [];

  while (leftSorted.length && rightSorted.length) {
    let minimumElement = null;

    if (comparator(leftSorted[0], rightSorted[0]) < 0) {
      minimumElement = leftSorted.shift();
    } else {
      minimumElement = rightSorted.shift();
    }

    sortedArray.push(minimumElement);
  }

  if (leftSorted.length) {
    sortedArray = sortedArray.concat(leftSorted);
  }

  if (rightSorted.length) {
    sortedArray = sortedArray.concat(rightSorted);
  }

  return sortedArray;
}
