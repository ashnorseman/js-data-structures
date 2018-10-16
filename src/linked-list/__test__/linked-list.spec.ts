import { LinkedList } from '../linked-list';

describe('LinkedList', () => {
  let emptyList: LinkedList<number> = null;
  let numberList: LinkedList<number> = null;
  let resultList: number[] = [];

  const numbers = [1, 2, 3];

  beforeEach(() => {
    emptyList = new LinkedList();
    numberList = new LinkedList(numbers);
    resultList = [...numberList];
  });

  it('constructor', () => {
    expect(emptyList).toBeInstanceOf(LinkedList);
    expect(numberList).toBeInstanceOf(LinkedList);
    expect(resultList.length).toBe(3);
    expect(resultList[0]).toBe(1);
    expect(resultList[1]).toBe(2);
    expect(resultList[2]).toBe(3);
  });

  it('append(item: T)', () => {
    emptyList.append(4);
    resultList = [...emptyList];
    expect(resultList.length).toBe(1);
    expect(resultList[0]).toBe(4);

    numberList.append(4);
    resultList = [...numberList];
    expect(resultList.length).toBe(4);
    expect(resultList[3]).toBe(4);
  });

  it('prepend(item: T)', () => {
    emptyList.prepend(0);
    resultList = [...emptyList];
    expect(resultList.length).toBe(1);
    expect(resultList[0]).toBe(0);

    numberList.prepend(0);
    resultList = [...numberList];
    expect(resultList.length).toBe(4);
    expect(resultList[0]).toBe(0);
  });

  it('delete(item: T)', () => {
    emptyList.delete(0);
    resultList = [...emptyList];
    expect(resultList.length).toBe(0);

    numberList.delete(1);
    resultList = [...numberList];
    expect(resultList.length).toBe(2);

    numberList.delete(3);
    resultList = [...numberList];
    expect(resultList.length).toBe(1);

    numberList.delete(2);
    resultList = [...numberList];
    expect(resultList.length).toBe(0);

    numberList.delete(4);
    resultList = [...numberList];
    expect(resultList.length).toBe(0);
  });

  it('deleteHead(): T', () => {
    expect(emptyList.deleteHead()).toBe(null);
    expect(numberList.deleteHead()).toBe(1);
    expect(numberList.deleteHead()).toBe(2);
    expect(numberList.deleteHead()).toBe(3);
    expect(numberList.deleteHead()).toBe(null);
  });

  it('deleteTail(): T', () => {
    expect(emptyList.deleteTail()).toBe(null);
    expect(numberList.deleteTail()).toBe(3);
    expect(numberList.deleteTail()).toBe(2);
    expect(numberList.deleteTail()).toBe(1);
    expect(numberList.deleteTail()).toBe(null);
  });
});
