class HistoryNode {
    url: string;
    next: HistoryNode | null;
    prev: HistoryNode | null;
    constructor(url: string) {
        this.url = url;
        this.prev = null;
        this.next = null;
    }

}
class BrowserHistory {
    // track the current node 
    private head: HistoryNode | null;
    private currentNode: HistoryNode | null;

    constructor(homepage: string) {
        // initialise the head of the list
        this.currentNode = new HistoryNode(homepage);
        this.head = this.currentNode;

    }

    visit(url: string): void {
        if (!this.currentNode) return;
        const newNode = new HistoryNode(url);
        this.currentNode.next = newNode;
        newNode.prev = this.currentNode;
        this.currentNode = newNode;

    }

    back(steps: number): string {
        let stepCount = 0;
        while (this.currentNode?.prev !== null && stepCount < steps) {
            this.currentNode = this.currentNode!.prev;
            stepCount++;
        }
        return this.currentNode!.url;
    }


    forward(steps: number): string {
        let stepCount = 0;
        while (this.currentNode?.next !== null && stepCount < steps) {
            this.currentNode = this.currentNode!.next;
            stepCount++;
        }
        return this.currentNode!.url;

    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
