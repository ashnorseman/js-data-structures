/**
 * Deep extend
 */

export function deepExtend(source: any, target: any): any {
  if (!target || target.constructor !== Object) {
    return source;
  }

  if (!source) {
    return null;
  }

  Object.getOwnPropertyNames(target).forEach((prop: string) => {
    if (source[prop] && source[prop].constructor === Object) {
      source[prop] = deepExtend(source[prop], target[prop]);
    } else {
      source[prop] = target[prop];
    }
  });

  return source;
}
