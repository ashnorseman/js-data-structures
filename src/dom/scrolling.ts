/**
 * Scrolling actions
 */

import { getScrollbarWidth } from './get-scrollbar-width';

/**
 * Find all parent elements which has a scrollbar
 */
export function findScrollingParents(el: HTMLElement): HTMLElement[] {
  if (!el) {
    return [];
  }

  const result: HTMLElement[] = [];

  let parent: HTMLElement = el.parentElement;

  while (parent) {
    if (parent.scrollHeight > parent.offsetHeight || parent.scrollWidth > parent.offsetWidth) {
      result.push(parent);
    }

    parent = parent.parentElement;
  }

  return result;
}

/**
 * Make an element un-scrollable
 */
export function stopScrolling(el: HTMLElement) {
  el.style.overflow = 'hidden';

  const scrollbarWidth: number = getScrollbarWidth();

  if (el.scrollHeight > el.offsetHeight) {
    el.style.borderRight = `${scrollbarWidth}px solid transparent`;
  }

  if (el.scrollWidth > el.offsetWidth) {
    el.style.borderBottom = `${scrollbarWidth}px solid transparent`;
  }
}

/**
 * Make an element scrollable again
 */
export function restoreScrolling(el: HTMLElement) {
  el.style.overflow = '';
  el.style.borderRight = '';
  el.style.borderBottom = '';
}
