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
