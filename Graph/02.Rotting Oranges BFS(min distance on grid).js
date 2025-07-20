/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let fresh = 0;
    let minutes = 0;
    
    // Count fresh oranges and initialize queue with rotten oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) fresh++;
            else if (grid[r][c] === 2) queue.push([r, c, 0]); // [row, col, time]
        }
    }
    
    // Directions: up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    // Process the queue
    while (queue.length && fresh > 0) {
        const [r, c, time] = queue.shift();
        
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            
            // Check boundaries and if orange is fresh
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                // Rot the orange
                grid[nr][nc] = 2;
                // Add to queue with updated time
                queue.push([nr, nc, time + 1]);
                // Decrease fresh count and update max time
                fresh--;
                minutes = time + 1;
            }
        }
    }
    
    // Return -1 if fresh oranges remain, else return minutes
    return fresh === 0 ? minutes : -1;
};
