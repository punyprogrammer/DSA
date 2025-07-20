function topologicalSort(graph) {
    const inDegree = new Array(graph.length).fill(0);
    const queue = [];
    const topoOrder = [];
    
    // 1. Calculate in-degree for each node
    for (const neighbors of graph) {
        for (const neighbor of neighbors) {
            inDegree[neighbor]++;
        }
    }
    
    // 2. Enqueue nodes with zero in-degree
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    
    // 3. Process queue
    let visitedCount = 0;
    while (queue.length) {
        const node = queue.shift();
        topoOrder.push(node);
        visitedCount++;
        
        // Reduce in-degree of neighbors
        for (const neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    // 4. Check for cycle
    if (visitedCount !== graph.length) {
        throw new Error("Graph contains a cycle - no topological order exists");
    }
    
    return topoOrder;
}

// Example Usage
const graph = [
    [1, 2],    // 0 → 1, 0 → 2
    [3],        // 1 → 3
    [3],        // 2 → 3
    [4],        // 3 → 4
    []          // 4 has no outgoing edges
];

console.log(topologicalSort(graph)); // [0, 1, 2, 3, 4] (one possible order)
