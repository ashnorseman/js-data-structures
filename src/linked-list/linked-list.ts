/**
 * Linked list
 */

import { LinkedListNode } from './linked-list-node';

export class LinkedList<T> implements Iterable<T> {
  private head: LinkedListNode<T> = null;
  private tail: LinkedListNode<T> = null;

  constructor(data?: Iterable<T>) {
    if (!data) {
      return this;
    }

    for (const item of data) {
      this.append(item);
    }
  }

  /**
   * Insert a node at the end of the list
   * @param item
   */
  public append(item: T) {
    const node: LinkedListNode<T> = new LinkedListNode(item);

    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

    this.tail = node;
  }

  /**
   * Insert a node at the beginning of the list
   * @param item
   */
  public prepend(item: T) {
    const node: LinkedListNode<T> = new LinkedListNode(item, this.head);

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  /**
   * Remove a node
   */
  public delete(item: T) {
    if (!this.head) {
      return;
    }

    if (this.head.value === item) {
      if (!this.head.next) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }

      return;
    }

    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      if (currentNode.next.value === item) {
        if (currentNode.next === this.tail) {
          this.tail = currentNode;
        }

        currentNode.next = currentNode.next.next;
      }

      currentNode = currentNode.next;
    }
  }

  /**
   * Delete the first node
   */
  public deleteHead(): T {
    if (!this.head) {
      return null;
    }

    const deletedItem: T = this.head.value;

    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return deletedItem;
  }

  /**
   * Delete the last node
   */
  public deleteTail(): T {
    if (!this.head) {
      return null;
    }

    const deletedItem: T = this.tail.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedItem;
    }

    let currentNode: LinkedListNode<T> = this.head;

    while (currentNode.next) {
      if (currentNode.next === this.tail) {
        this.tail = currentNode;
        currentNode.next = null;

        return deletedItem;
      }

      currentNode = currentNode.next;
    }
  }

  /**
   * Iterate through the list
   */
  public [Symbol.iterator](): Iterator<T> {
    let currentNode: LinkedListNode<T> = this.head;

    return {
      next() {
        if (currentNode) {
          const result = {
            done: false,
            value: currentNode.value,
          };

          currentNode = currentNode.next;

          return result;
        } else {
          return {
            done: true,
            value: null,
          };
        }
      },
    };
  }
}
