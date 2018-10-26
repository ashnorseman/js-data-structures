/**
 * Check a point is in a circle
 */

import { IPoint } from './i-point';

export function pointInCircle({ point, center, radius }: { point: IPoint; center: IPoint; radius: number }): boolean {
  if (!point || !center) {
    return false;
  }

  return Math.hypot(point.x - center.x, point.y - center.y) <= radius;
}
