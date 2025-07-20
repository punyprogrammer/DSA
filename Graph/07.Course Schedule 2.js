/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const indegree = new Array(numCourses).fill(0);
  const topologicalSort = [];
  const queue = [];
  let visited = 0;

  // Build graph and calculate in-degrees in one pass
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    indegree[course]++;
  }

  // Initialize queue with courses having no prerequisites
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  // Process the queue
  while (queue.length) {
    const current = queue.shift();
    topologicalSort.push(current);
    visited++;

    // Optimized neighbor processing
    for (const neighbor of graph[current]) {
      if (--indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return topologicalSort.length === numCourses ? topologicalSort : [];
};
