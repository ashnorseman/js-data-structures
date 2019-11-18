import { pointInCircle } from '../point-in-circle';

describe('pointInCircle({ point, center, radius }: { point: IPoint; center: IPoint; radius: number }): boolean', () => {
  it('should test if one point is in a circle', () => {
    expect(
      pointInCircle({
        point: { x: 1, y: 1 },
        center: { x: 0, y: 0 },
        radius: 1
      })
    ).toEqual(false);

    expect(
      pointInCircle({
        point: { x: 1, y: 1 },
        center: { x: 0, y: 0 },
        radius: 2
      })
    ).toEqual(true);

    expect(
      pointInCircle({
        point: { x: 2, y: 2 },
        center: { x: 0, y: 0 },
        radius: 2
      })
    ).toEqual(false);

    expect(
      pointInCircle({
        point: { x: 2, y: 2 },
        center: { x: 0, y: 0 },
        radius: 3
      })
    ).toEqual(true);
  });

  it('should test null conditions', () => {
    expect(
      pointInCircle({
        point: null,
        center: { x: 0, y: 0 },
        radius: 1
      })
    ).toEqual(false);
  });
});
