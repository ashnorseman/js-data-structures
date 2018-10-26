import { inPolygon } from '../in-polygon';

describe('inPolygon', () => {
  const list = [{ x: -1, y: 1 }, { x: 1, y: 1 }, { x: 1, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 1 }];

  it('should test in polygon', () => {
    expect(inPolygon({ x: 0, y: 0 }, list)).toEqual(true);
    expect(inPolygon({ x: 0.5, y: 0.8 }, list)).toEqual(true);
    expect(inPolygon({ x: -0.5, y: -0.5 }, list)).toEqual(true);
    expect(inPolygon({ x: -0.5, y: 0.5 }, list)).toEqual(true);
    expect(inPolygon({ x: 0, y: 0.999 }, list)).toEqual(true);
  });

  it('should test outside of polygon', () => {
    expect(inPolygon({ x: 1, y: 2 }, list)).toEqual(false);
    expect(inPolygon({ x: -1, y: 1.1 }, list)).toEqual(false);
    expect(inPolygon({ x: 2, y: 0 }, list)).toEqual(false);
    expect(inPolygon({ x: 0, y: 1.1 }, list)).toEqual(false);
    expect(inPolygon({ x: 0, y: 1 }, list)).toEqual(false);
  });
});
