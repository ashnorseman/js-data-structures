/**
 * Test if child is a child node of parent
 */

export function isChildElement(child: HTMLElement, parent: HTMLElement): boolean {
  if (child === parent) {
    return true;
  }

  while (child.parentElement) {
    if (child.parentElement === parent) {
      return true;
    }
    child = child.parentElement;
  }

  return false;
}
