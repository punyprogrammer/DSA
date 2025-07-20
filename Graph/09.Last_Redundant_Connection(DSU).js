/**
 * @param {number[][]} isConnected
 * @return {number}
 */
class DSU {
  constructor(n) {
    this.rank = Array(n + 1).fill(0);
    this.parent = [...Array(n + 1).keys()];
  }
  findParent(node) {
    if (node === this.parent[node]) return node;
    const res = this.findParent(this.parent[node]);
    this.parent[node] = res;
    return res;
  }
  union(nodeA, nodeB) {
    const rootParentA = this.findParent(nodeA);
    const rootParentB = this.findParent(nodeB);
    if (rootParentA === rootParentB) return;
    if (this.rank[rootParentA] < this.rank[rootParentB]) {
      this.parent[rootParentA] = rootParentB;
    } else if (this.rank[rootParentA] > this.rank[rootParentB]) {
      this.parent[rootParentB] = rootParentA;
    } else {
      this.parent[rootParentA] = rootParentB;
      this.rank[rootParentB]++;
    }
  }
  getRanks() {
    return this.rank;
  }
  getParents() {
    return this.parent;
  }
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const n = edges.length;
  const dsu = new DSU(n + 1);
  let lastRedudantEdge = null;
  for (let edge of edges) {
    // if already connected
    if (dsu.findParent(edge[0]) === dsu.findParent(edge[1])) {
      lastRedudantEdge = edge;
    } else {
      dsu.union(edge[0], edge[1]);
    }
  }
  return lastRedudantEdge;
};
