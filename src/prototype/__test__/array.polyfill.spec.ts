import '../array.polyfill';

describe('Array.prototype', () => {
  it('first(): T', () => {
    expect([1, 2].first()).toEqual(1);
    expect([].first()).toEqual(undefined);
  });

  it('insertAt(item: T, index: number): T[]', () => {
    expect([1, 2].insertAt(0, 0)).toEqual([0, 1, 2]);
    expect([1, 2].insertAt(0, 1)).toEqual([1, 0, 2]);
    expect([1, 2].insertAt(0, 2)).toEqual([1, 2, 0]);
  });

  it('last(): T', () => {
    expect([1, 2].last()).toEqual(2);
    expect([].last()).toEqual(undefined);
  });

  it('merge(list: T[]): T[]', () => {
    expect([1].merge([2, 3])).toEqual([1, 2, 3]);
    expect([2, 1].merge([2, 3])).toEqual([2, 1, 3]);
    expect([].merge([2, 3])).toEqual([2, 3]);
    expect([1].merge(null)).toEqual([1]);
  });

  it('pushItem(item: T): T[]', () => {
    expect([].pushItem(2)).toEqual([2]);
    expect([1].pushItem(2)).toEqual([1, 2]);
  });

  it('removeAt(index: number): T[]', () => {
    expect([].removeAt(0)).toEqual([]);
    expect([1, 2, 3].removeAt(-1)).toEqual([1, 2, 3]);
    expect([1, 2, 3].removeAt(0)).toEqual([2, 3]);
    expect([1, 2, 3].removeAt(1)).toEqual([1, 3]);
    expect([1, 2, 3].removeAt(2)).toEqual([1, 2]);
    expect([1, 2, 3].removeAt(3)).toEqual([1, 2, 3]);
  });

  it('removeItem(key: string | T, value?: any): T[]', () => {
    const arr = [{ key: 1 }, { key: 2 }, { key: 3 }];

    expect(arr.removeItem(undefined).length).toEqual(3);
    expect(arr.removeItem('key', undefined).length).toEqual(3);
    expect(arr.removeItem('key', 1).length).toEqual(2);
    expect(arr.removeItem('key', 1)[0].key).toEqual(2);
    expect(arr.removeItem('key', 1)[1].key).toEqual(3);

    const arr2 = [1, 2, 3];

    expect(arr2.removeItem(2).length).toEqual(2);
    expect(arr2.removeItem(2)[0]).toEqual(1);
    expect(arr2.removeItem(2)[1]).toEqual(3);

    const arr3 = [1, 2, 3];

    expect(arr3.removeItem(4).length).toEqual(3);
  });

  it('toggleItem(item: T): T[]', () => {
    const arr = [1, 2, 3];

    expect(arr.toggleItem(1).length).toEqual(2);
    expect(arr.toggleItem(1)[0]).toEqual(2);
    expect(arr.toggleItem(1)[1]).toEqual(3);

    expect(arr.toggleItem(4).length).toEqual(4);
    expect(arr.toggleItem(4)[3]).toEqual(4);
  });

  it('unshiftItem(item: T): T[]', () => {
    expect([].unshiftItem(2)).toEqual([2]);
    expect([1].unshiftItem(2)).toEqual([2, 1]);
  });

  it('updateItem(key: string, data: any): T[]', () => {
    const arr = [{ key: 1 }, { key: 2 }, { key: 3 }];

    expect(arr.updateItem('key', { key: 1, value: 1 })[0]['value']).toEqual(1);
    expect(arr.updateItem('key', { key: 2, value: 2 })[1]['value']).toEqual(2);
    expect(arr.updateItem('key', { key: 3, value: 3 })[2]['value']).toEqual(3);
    expect(arr.updateItem('key', { key: 3, value: 3 }).length).toEqual(3);

    expect(arr.updateItem('key', { key: 4, value: 1 })[0]['value']).toBeUndefined();
    expect(arr.updateItem('key', { key: 4, value: 2 })[1]['value']).toBeUndefined();
    expect(arr.updateItem('key', { key: 4, value: 3 })[2]['value']).toBeUndefined();
  });
});
