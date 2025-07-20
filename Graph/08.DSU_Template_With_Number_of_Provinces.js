/**
 * @param {number[][]} isConnected
 * @return {number}
 */
class DSU {
  constructor(n) {
    this.rank = Array(n).fill(0);
    this.parent = [];
    this.initialiseParent(n);
    

  }
  initialiseParent(n){
    for(let i = 0;i<n;i++){
        this.parent[i] = i;
    }
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

var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const dsu = new DSU(n);
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (isConnected[x][y]) {
        dsu.union(x, y);
      }
    }
  }
  //   no of components will be distincts parents
   // Find root parent for each node
  const roots = new Set();
  for (let i = 0; i < n; i++) {
    roots.add(dsu.findParent(i));
  }
  
  return roots.size;
};
