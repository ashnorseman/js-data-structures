import { LinkedListNode } from '../linked-list-node';

describe('LinkedListNode', () => {
  it('constructor', () => {
    const node1: LinkedListNode<number> = new LinkedListNode(10);

    expect(node1.value).toBe(10);
    expect(node1.next).toBe(null);

    const node2: LinkedListNode<number> = new LinkedListNode(20, node1);

    expect(node2.value).toBe(20);
    expect(node2.next).toBe(node1);
  });
});
