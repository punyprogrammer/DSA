function bfsGrid(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  const queue = [];
  const visited = Array.from({length: m}, () => Array(n).fill(false));

  queue.push([0, 0]); // starting cell
  visited[0][0] = true;

  while (queue.length) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;

      if (nr < 0 || nc < 0 || nr >= m || nc >= n) continue;
      if (visited[nr][nc]) continue;
      if (grid[nr][nc] === 0) continue; // optional wall check

      visited[nr][nc] = true;
      queue.push([nr, nc]);
    }
  }
}
