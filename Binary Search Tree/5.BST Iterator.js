/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// The main idea is initially push root and all  left  in the stack null encounter
// Whenever me pop an item we push all the left child of root->right
class BSTIterator {
  constructor(root) {
    this.stack = [];
    this.pushAll(root);
  }
  //   helper to push all left children
  pushAll(root) {
    while (root) {
      this.stack.push(root);
      root = root.left;
    }
  }
  next() {
    // pop the top of the stack and if right child there push all left child
    const currentItem = this.stack[this.stack.length - 1];
    this.stack.pop();
    if (currentItem.right) {
      this.pushAll(currentItem.right);
    }
    return currentItem.val;
  }
  hasNext() {
    return this.stack.length !== 0;
  }
}
