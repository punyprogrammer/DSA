type Coordinate = readonly [number, number];

class NeighborSum {
    private readonly valueToIndex = new Map<number, Coordinate>();
    private readonly size: number;

    constructor(private readonly grid: number[][]) {
        this.size = grid.length;

        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                this.valueToIndex.set(grid[row][col], [row, col]);
            }
        }
    }

    private getValue(row: number, col: number): number {
        if (
            row < 0 ||
            row >= this.size ||
            col < 0 ||
            col >= this.size
        ) {
            return 0;
        }

        return this.grid[row][col];
    }

    private sumNeighbors(
        value: number,
        directions: readonly Coordinate[]
    ): number {
        const [row, col] = this.valueToIndex.get(value)!;

        return directions.reduce(
            (sum, [dx, dy]) =>
                sum + this.getValue(row + dx, col + dy),
            0
        );
    }

    adjacentSum(value: number): number {
        return this.sumNeighbors(value, [
            [-1, 0], // top
            [1, 0],  // bottom
            [0, -1], // left
            [0, 1],  // right
        ]);
    }

    diagonalSum(value: number): number {
        return this.sumNeighbors(value, [
            [-1, -1], // top left
            [-1, 1],  // top right
            [1, -1],  // bottom left
            [1, 1],   // bottom right
        ]);
    }
}
