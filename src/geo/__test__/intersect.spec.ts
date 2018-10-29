import { intersect } from '../intersect';

describe('intersect(lineA: [IPoint, IPoint], lineB: [IPoint, IPoint]): boolean', () => {
  it('should test if two lines intersect', () => {
    expect(intersect([{ x: -1, y: 1 }, { x: 1, y: -1 }], [{ x: 1, y: 1 }, { x: -1, y: -1 }])).toEqual(true);
    expect(intersect([{ x: -1, y: 0 }, { x: 1, y: 0 }], [{ x: 0, y: 1 }, { x: 0, y: -1 }])).toEqual(true);
  });

  it('should test if two lines do not intersect', () => {
    expect(intersect([{ x: -1, y: 1 }, { x: 1, y: 1 }], [{ x: -1, y: -1 }, { x: 1, y: -1 }])).toEqual(false);
    expect(intersect([{ x: -1, y: 1 }, { x: -1, y: -1 }], [{ x: 1, y: 1 }, { x: 1, y: -1 }])).toEqual(false);
  });

  it('two lines do not intersect if they join', () => {
    expect(intersect([{ x: -1, y: 1 }, { x: 1, y: 1 }], [{ x: 1, y: 1 }, { x: 1, y: -1 }])).toEqual(false);
    expect(intersect([{ x: -1, y: 1 }, { x: -1, y: -1 }], [{ x: -1, y: -1 }, { x: 1, y: -1 }])).toEqual(false);
    expect(intersect([{ x: 0, y: 0 }, { x: 1, y: 0 }], [{ x: 0, y: 0 }, { x: -1, y: 0 }])).toEqual(false);
    expect(intersect([{ x: 0, y: 0 }, { x: 0, y: 1 }], [{ x: 0, y: 0 }, { x: 0, y: -1 }])).toEqual(false);
  });
});
