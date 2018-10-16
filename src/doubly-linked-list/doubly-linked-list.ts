/**
 * Doubly linked list
 */

import { DoublyLinkedListNode } from './doubly-linked-list-node';

export class DoublyLinkedList<T> implements Iterable<T> {
  private head: DoublyLinkedListNode<T> = null;
  private tail: DoublyLinkedListNode<T> = null;

  constructor(data?: Iterable<T>) {
    if (!data) {
      return this;
    }

    for (const item of data) {
      this.append(item);
    }
  }

  /**
   * First node
   */
  public getHead(): T {
    return this.head.value;
  }

  /**
   * Last node
   */
  public getTail(): T {
    return this.tail.value;
  }

  /**
   * Insert a node at the end of the list
   * @param item
   */
  public append(item: T) {
    const node: DoublyLinkedListNode<T> = new DoublyLinkedListNode(item, this.tail);

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
    const node: DoublyLinkedListNode<T> = new DoublyLinkedListNode(item, null, this.head);

    if (this.head) {
      this.head.prev = node;
    }

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

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === item) {
        if (currentNode.prev) {
          currentNode.prev.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }

        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        } else {
          this.tail = currentNode.prev;
        }
      }

      currentNode = currentNode.next;
    }
  }

  /**
   * Delete a node and nodes after it
   */
  public deleteAfter(item: T) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === item) {
        this.tail = currentNode.prev;

        if (this.tail) {
          this.tail.next = null;
        } else {
          this.head = null;
        }
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

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    return deletedItem;
  }

  /**
   * Delete the last node
   */
  public deleteTail(): T {
    if (!this.tail) {
      return null;
    }

    const deletedItem: T = this.tail.value;

    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    return deletedItem;
  }

  /**
   * Iterate through the list
   */
  public [Symbol.iterator](): Iterator<T> {
    let currentNode: DoublyLinkedListNode<T> = this.head;

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
