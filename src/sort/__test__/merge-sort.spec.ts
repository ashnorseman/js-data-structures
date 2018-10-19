import { mergeSort } from '../merge-sort';

describe('LinkedList', () => {
  it('sort an empty array', () => {
    const array: number[] = [];

    expect(mergeSort<number>(array)).toEqual([]);
  });

  it('sort an array', () => {
    const array: number[] = [3, 2, 1];

    expect(mergeSort<number>(array)).toEqual([1, 2, 3]);
  });

  it('sort with comparator', () => {
    const array: number[] = [1, 2, 3];

    expect(mergeSort<number>(array, (a, b) => b - a)).toEqual([3, 2, 1]);
  });

  it('sort a large array', () => {
    const array: number[] = [];
    const testSize = 1000;

    let size = testSize;

    while (size--) {
      array.push(Math.random());
    }

    const result: number[] = mergeSort<number>(array);

    expect(result[0]).toBeLessThanOrEqual(result[testSize - 1]);
  });

  xit('sort a super large array', () => {
    const array: number[] = [];
    const testSize = 1000000;

    let size = testSize;

    while (size--) {
      array.push(Math.random());
    }

    const result: number[] = mergeSort<number>(array);

    expect(result[0]).toBeLessThanOrEqual(result[testSize - 1]);
  });
});
