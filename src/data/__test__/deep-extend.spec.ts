import { deepExtend } from '../deep-extend';

describe('deepExtend(source: any, target: any): any', () => {
  it('extends objects', () => {
    const src: any = {
      a: 1,
      b: 2
    };

    const target: any = {
      b: 3,
      c: 4
    };

    const result: any = deepExtend(src, target);

    expect(result.a).toEqual(1);
    expect(result.b).toEqual(3);
    expect(result.c).toEqual(4);
  });

  it('extends objects recursively', () => {
    const src: any = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4
      },
      array: [1, 2, 3]
    };

    const target: any = {
      b: 3,
      c: {
        d: 5,
        f: 6
      },
      array: [4, 5, 6]
    };

    const result: any = deepExtend(src, target);

    expect(result.a).toEqual(1);
    expect(result.b).toEqual(3);
    expect(result.c.d).toEqual(5);
    expect(result.c.e).toEqual(4);
    expect(result.c.f).toEqual(6);
    expect(result.array).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should not modify source object', () => {
    const src: any = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4
      }
    };

    const target: any = {
      b: 3,
      c: {
        d: 5,
        f: 6
      }
    };

    const result: any = deepExtend(src, target);

    expect(result.a).toEqual(1);
    expect(result.b).toEqual(3);
    expect(result.c.d).toEqual(5);
    expect(result.c.e).toEqual(4);
    expect(result.c.f).toEqual(6);
    expect(result).not.toBe(src);

    const target2: any = {
      b: 30,
      c: {
        d: 50,
        f: 60
      }
    };

    const result2: any = deepExtend(src, target2);

    expect(result2.a).toEqual(1);
    expect(result2.b).toEqual(30);
    expect(result2.c.d).toEqual(50);
    expect(result2.c.e).toEqual(4);
    expect(result2.c.f).toEqual(60);
    expect(result2).not.toBe(src);
    expect(result).not.toBe(src);
  });
});
