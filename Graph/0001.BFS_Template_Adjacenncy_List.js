function bfs(start, graph) {
  const visited = new Set();
  const queue = [];

  queue.push(start);
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift(); // dequeue

    console.log(node); // process node

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
