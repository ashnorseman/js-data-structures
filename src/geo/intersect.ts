/**
 * Check if 2 lines intersect (cross each other)
 * - NB. 2 lines sharing one endpoint DO NOT intersect
 */

import { IPoint } from './i-point';

export function intersect(lineA: [IPoint, IPoint], lineB: [IPoint, IPoint]): boolean {
  const x1: number = lineA[0].x;
  const y1: number = lineA[0].y;
  const x2: number = lineA[1].x;
  const y2: number = lineA[1].y;
  const x3: number = lineB[0].x;
  const y3: number = lineB[0].y;
  const x4: number = lineB[1].x;
  const y4: number = lineB[1].y;

  // calculate determinants
  const intersectX: number =
    ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) /
    ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
  const intersectY: number =
    ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) /
    ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));

  if (!Number.isFinite(intersectX) || !Number.isFinite(intersectY)) {
    return false;
  }

  // intersect on line
  if (x1 === x2) {
    return intersectY > Math.min(y1, y2) && intersectY < Math.max(y1, y2);
  } else if (y1 === y2) {
    return intersectX > Math.min(x1, x2) && intersectX < Math.max(x1, x2);
  } else if (x3 === x4) {
    return intersectY > Math.min(y3, y4) && intersectY < Math.max(y3, y4);
  } else if (y3 === y4) {
    return intersectX > Math.min(x3, x4) && intersectX < Math.max(x3, x4);
  } else {
    return (
      intersectX > Math.min(x1, x2) &&
      intersectX < Math.max(x1, x2) &&
      intersectX > Math.min(x3, x4) &&
      intersectX < Math.max(x3, x4) &&
      intersectY > Math.min(y1, y2) &&
      intersectY < Math.max(y1, y2) &&
      intersectY > Math.min(y3, y4) &&
      intersectY < Math.max(y3, y4)
    );
  }
}
