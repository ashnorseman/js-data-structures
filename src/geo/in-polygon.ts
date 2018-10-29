/**
 * Check if a point is inside of a polygon
 */

import { IPoint } from './i-point';

export function inPolygon(point: IPoint, polygon: IPoint[]): boolean {
  let c = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
    if (
      polygon[i].y > point.y !== polygon[j].y > point.y &&
      point.x <
        ((polygon[j].x - polygon[i].x) * (point.y - polygon[i].y)) / (polygon[j].y - polygon[i].y) + polygon[i].x
    ) {
      c = !c;
    }
  }

  return c;
}
