/**
 * Check if the value is an integer
 */

export function isInteger(value: any): boolean {
  if (value === undefined || value === null) {
    return false;
  }

  value = parseFloat(value);

  return Number.isInteger(value);
}
