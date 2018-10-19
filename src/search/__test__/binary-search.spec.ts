import { binarySearch } from '../binary-search';

describe('binarySearch', () => {
  it('search for a value', () => {
    const array: number[] = [1, 2, 3];

    expect(binarySearch<number>(array, 0)).toBe(-1);
    expect(binarySearch<number>(array, 1)).toBe(0);
    expect(binarySearch<number>(array, 2)).toBe(1);
    expect(binarySearch<number>(array, 3)).toBe(2);
    expect(binarySearch<number>(array, 4)).toBe(-1);
  });

  it('search with customised comparator', () => {
    const array: number[] = [3, 2, 1];
    const comparator = (a, b) => b - a;

    expect(binarySearch<number>(array, 0, comparator)).toBe(-1);
    expect(binarySearch<number>(array, 1, comparator)).toBe(2);
    expect(binarySearch<number>(array, 2, comparator)).toBe(1);
    expect(binarySearch<number>(array, 3, comparator)).toBe(0);
    expect(binarySearch<number>(array, 4, comparator)).toBe(-1);
  });
});
