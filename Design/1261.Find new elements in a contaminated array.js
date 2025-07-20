class FindElements {
  constructor(root) {
    this.elementsPresent = new Set();
    this.restoreTree(root, 0);
    this.root = root; // optional, if root access is needed later
  }

  restoreTree(node, val) {
    if (!node) return;

    node.val = val;
    this.elementsPresent.add(val);

    this.restoreTree(node.left, 2 * val + 1);
    this.restoreTree(node.right, 2 * val + 2);
  }

  find(target) {
    return this.elementsPresent.has(target);
  }
}
