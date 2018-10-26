/**
 * Array polyfills
 */

/* tslint:disable:interface-name */
interface Array<T> {
  first(): T;
  insertAt(item: T, index: number): T[];
  last(): T;
  merge(list: T[]): T[];
  pushItem(item: T): T[];
  removeAt(index: number): T[];
  removeItem(item: T): T[];
  removeItem(key: string, value?: any): T[];
  toggleItem(item: T): T[];
  unshiftItem(item: T): T[];
  updateItem(key: string, data: any): T[];
}
/* tslint:enable */

/**
 * First element in the array
 */
Array.prototype.first = function<T>(): T {
  return this[0];
};

/**
 * Insert an item at an index number
 */
Array.prototype.insertAt = function<T>(item: T, index: number): T[] {
  if (item === undefined || !(index >= 0) || !(index <= this.length) || !Number.isInteger(index)) {
    return this;
  }

  return [...this.slice(0, index), item, ...this.slice(index)];
};

/**
 * Last element in the array
 */
Array.prototype.last = function<T>(): T {
  return this[this.length - 1];
};

/**
 * Merge two arrays into a new array
 */
Array.prototype.merge = function<T>(item: T[]): T[] {
  if (!Array.isArray(item)) {
    return this;
  }

  return [...new Set<T>([...this, ...item]).values()];
};

/**
 * Push & return a new array
 */
Array.prototype.pushItem = function<T>(item: T): T[] {
  return [...this, item];
};

/**
 * Remove an item at the index number
 */
Array.prototype.removeAt = function<T>(index: number): T[] {
  if (!(index >= 0) || !(index < this.length) || !Number.isInteger(index)) {
    return this;
  }

  return [...this.slice(0, index), ...this.slice(index + 1)];
};

/**
 * Remove an item in the array
 * - itself
 * - of given key and value
 */
Array.prototype.removeItem = function<T>(key: string | T, value?: any): T[] {
  if (key === undefined) {
    return this;
  }

  if (arguments.length === 2 && value === undefined) {
    return this;
  }

  let targetIndex: number;

  if (arguments.length === 1) {
    targetIndex = this.indexOf(key);
  } else {
    targetIndex = this.findIndex(item => item[key] === value);
  }

  return this.removeAt(targetIndex);
};

/**
 * Add an item if it is not in the array; remove it if already in the array
 */
Array.prototype.toggleItem = function<T>(item: T): T[] {
  const targetIndex: number = this.indexOf(item);

  if (targetIndex === -1) {
    return this.pushItem(item);
  } else {
    return this.removeAt(targetIndex);
  }
};

/**
 * Unshift & return a new array
 */
Array.prototype.unshiftItem = function<T>(item: T): T[] {
  return [item, ...this];
};

/**
 * Find an item in the array and update data
 */
Array.prototype.updateItem = function<T>(key: string, data: any): T[] {
  const targetIndex: number = this.findIndex(item => item[key] === data[key]);

  if (targetIndex === -1) {
    return this;
  }

  const constructor = this[targetIndex].constructor;

  const updatedItem: T = new constructor({
    ...this[targetIndex],
    ...data,
  });

  return this.removeAt(targetIndex).insertAt(updatedItem, targetIndex);
};
