/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
    if(!root) return null;
    // do bfs traversal and connect the nodes 
    const bfsQueue:_Node[] = [];
    // push the first node 
    bfsQueue.push(root);
    while(bfsQueue.length){

        const levelSize:number = bfsQueue.length;
        let newHead:_Node = bfsQueue[0];
        let prevNode:_Node=newHead;
        for(let i = 0 ;i<levelSize;i++){
        //    pop elements 
        const currNode:_Node = bfsQueue.shift();
        console.log(currNode.val);

        if( i!==0){
            prevNode.next = currNode;
            prevNode = currNode;
        }
        if(currNode.left) bfsQueue.push(currNode.left);
        if(currNode.right) bfsQueue.push(currNode.right);
        }



    }
    return root;

};
