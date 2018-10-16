/**
 * One node in a linked list
 */

export class LinkedListNode<T> {
  constructor(public value: T, public next: LinkedListNode<T> = null) {}
}
