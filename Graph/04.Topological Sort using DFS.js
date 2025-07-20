function topologicalSort(graph) {
    const visited = new Array(graph.length).fill(0);
    const order = [];
    
    for (let node = 0; node < graph.length; node++) {
        if (visited[node] === 0) {
            if (dfs(graph, node, visited, order)) {
                return null; // Cycle detected
            }
        }
    }
    return order.reverse(); // Reverse to get topological order
}

function dfs(graph, node, visited, order) {
    visited[node] = 1;
    
    for (const neighbor of graph[node]) {
        if (visited[neighbor] === 1) return true; // Cycle
        if (visited[neighbor] === 0) {
            if (dfs(graph, neighbor, visited, order)) return true;
        }
    }
    
    visited[node] = 2;
    order.push(node);
    return false;
}
