class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // key → node
    this.head = new ListNode(0, 0); // dummy head
    this.tail = new ListNode(0, 0); // dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _insertAtHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this._remove(node);           // remove from current position
    this._insertAtHead(node);     // move to front (most recently used)
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this._remove(this.map.get(key)); // remove old
    }
    const newNode = new ListNode(key, value);
    this._insertAtHead(newNode);       // insert new at head
    this.map.set(key, newNode);

    if (this.map.size > this.capacity) {
      // remove least recently used
      const lruNode = this.tail.prev;
      this._remove(lruNode);
      this.map.delete(lruNode.key);
    }
  }
}
