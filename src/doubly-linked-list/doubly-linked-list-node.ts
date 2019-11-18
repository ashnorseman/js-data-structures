/**
 * One node in a doubly linked list
 */

export class DoublyLinkedListNode<T> {
  constructor(
    public value: T,
    public prev: DoublyLinkedListNode<T> = null,
    public next: DoublyLinkedListNode<T> = null
  ) {}
}
