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
    if (source[prop] && Array.isArray(source[prop])) {
      // Merge two arrays
      if (Array.isArray(target[prop])) {
        source[prop] = [...source[prop], ...target[prop]];
      }
    } else if (source[prop] && source[prop].constructor === Object) {
      // Merge two objects
      source[prop] = new source[prop].constructor(deepExtend(source[prop], target[prop]));
    } else {
      source[prop] = target[prop];
    }
  });

  return { ...source };
}
