import { deepExtend } from '../deep-extend';

describe('deepExtend', () => {
  it('extends objects', () => {
    const src: any = {
      a: 1,
      b: 2,
    };

    const target: any = {
      b: 3,
      c: 4,
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
        e: 4,
      },
      array: [1, 2, 3],
    };

    const target: any = {
      b: 3,
      c: {
        d: 5,
        f: 6,
      },
      array: [4, 5, 6],
    };

    const result: any = deepExtend(src, target);

    expect(result.a).toEqual(1);
    expect(result.b).toEqual(3);
    expect(result.c.d).toEqual(5);
    expect(result.c.e).toEqual(4);
    expect(result.c.f).toEqual(6);
    expect(result.array).toEqual([4, 5, 6]);
  });
});
