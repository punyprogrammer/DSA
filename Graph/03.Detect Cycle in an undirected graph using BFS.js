function hasCycle(graph) {
    const visited = new Set();
    
    for (const node of Object.keys(graph)) {
        if (!visited.has(node)) {
            if (bfsDetectCycle(graph, node, visited)) {
                return true;
            }
        }
    }
    return false;
}

function bfsDetectCycle(graph, startNode, visited) {
    const queue = [[startNode, null]]; // [currentNode, parentNode]
    visited.add(startNode);

    while (queue.length > 0) {
        const [current, parent] = queue.shift();

        for (const neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, current]);
            } else if (neighbor !== parent) {
                // If the neighbor is visited and not parent, cycle exists
                return true;
            }
        }
    }
    return false;
}

// Example usage:
const undirectedGraph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C', 'E'],
    'E': ['D']
};

console.log(hasCycle(undirectedGraph)); // Output: true (cycle exists)
