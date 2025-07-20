// // Definition for singly-linked list.
// class ListNode {
//     val: number;
//     next: ListNode | null;

//     constructor(val?: number, next?: ListNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }

// Helper to create m x n matrix filled with a default value
function createMatrix(m: number, n: number, fillValue: number = -1): number[][] {
    return Array.from({ length: m }, () => Array(n).fill(fillValue));
}

// Main function to fill matrix in spiral order from linked list
function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
    const matrix: number[][] = createMatrix(m, n, -1);

    let top = 0, bottom = m - 1;
    let left = 0, right = n - 1;
    let currNode: ListNode | null = head;

    // Spiral traversal
    while (top <= bottom && left <= right && currNode) {
        // Top row (left → right)
        for (let x = left; x <= right && currNode; x++) {
            matrix[top][x] = currNode.val;
            currNode = currNode.next;
        }
        top++;

        // Right column (top → bottom)
        for (let y = top; y <= bottom && currNode; y++) {
            matrix[y][right] = currNode.val;
            currNode = currNode.next;
        }
        right--;

        // Bottom row (right → left)
        if (top <= bottom) {
            for (let x = right; x >= left && currNode; x--) {
                matrix[bottom][x] = currNode.val;
                currNode = currNode.next;
            }
        }
        bottom--;

        // Left column (bottom → top)
        if (left <= right) {
            for (let y = bottom; y >= top && currNode; y--) {
                matrix[y][left] = currNode.val; // ✅ FIXED index
                currNode = currNode.next;
            }
        }
        left++;
    }

    return matrix;
}
