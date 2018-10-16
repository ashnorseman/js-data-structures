import { DoublyLinkedListNode } from '../doubly-linked-list-node';

describe('DoublyLinkedListNode', () => {
  it('constructor', () => {
    const node1: DoublyLinkedListNode<number> = new DoublyLinkedListNode(10);

    expect(node1.value).toBe(10);
    expect(node1.prev).toBe(null);
    expect(node1.next).toBe(null);

    const node2: DoublyLinkedListNode<number> = new DoublyLinkedListNode(20, node1, node1);

    expect(node2.value).toBe(20);
    expect(node2.next).toBe(node1);
    expect(node2.prev).toBe(node1);
  });
});
