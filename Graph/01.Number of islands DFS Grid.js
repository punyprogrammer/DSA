function dfs(grid, visited, x, y, n, m) {
    // Boundary check and skip if water or already visited
    if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === '0' || visited[x][y]) {
        return;
    }
    
    visited[x][y] = 1;
    
    // Visit all 4-directional neighbors
    dfs(grid, visited, x + 1, y, n, m);
    dfs(grid, visited, x - 1, y, n, m);
    dfs(grid, visited, x, y + 1, n, m);
    dfs(grid, visited, x, y - 1, n, m);
}

var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;
    
    const n = grid.length;
    const m = grid[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(0));
    let components = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                components++;
                dfs(grid, visited, i, j, n, m);
            }
        }
    }
    
    return components; // Actually return the count
};
