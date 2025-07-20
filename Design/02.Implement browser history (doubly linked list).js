class BrowserHistory {
  /**
   * @param {string} homepage
   */
  constructor(homepage) {
    this.head = {
      value: homepage,
      next: null,
      prev: null,
    };
    this.current = this.head;
  }

  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    // Clear forward history when visiting new URL
    this.current.next = null;
    
    const newNode = {
      value: url,
      prev: this.current,
      next: null,
    };
    
    this.current.next = newNode;
    this.current = newNode;
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    if (steps <= 0) return this.current.value;
    
    let node = this.current;
    let stepsTaken = 0;
    
    while (stepsTaken < steps && node.prev !== null) {
      node = node.prev;
      stepsTaken++;
    }
    
    this.current = node;
    return node.value;
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    if (steps <= 0) return this.current.value;
    
    let node = this.current;
    let stepsTaken = 0;
    
    while (stepsTaken < steps && node.next !== null) {
      node = node.next;
      stepsTaken++;
    }
    
    this.current = node;
    return node.value;
  }
}
