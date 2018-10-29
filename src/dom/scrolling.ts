/**
 * Scrolling actions
 */

/**
 * Calculate the width of scrollbar
 */
export function getScrollbarWidth(): number {
  const div: HTMLDivElement = document.createElement('div');
  const offsetWidth = 100;

  div.style.height = `${offsetWidth}px`;
  div.style.width = `${offsetWidth}px`;
  div.style.overflow = 'scroll';

  document.body.appendChild(div);

  const scrollbarWidth: number = div.offsetWidth - div.clientWidth;

  document.body.removeChild(div);

  return scrollbarWidth;
}

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
    if (parent.scrollHeight > parent.offsetHeight) {
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
}

/**
 * Make an element scrollable again
 */
export function restoreScrolling(el: HTMLElement) {
  el.style.overflow = '';
  el.style.borderRight = '';
}
