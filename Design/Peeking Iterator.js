class PeekingIterator {
    constructor(iterator) {
        this.iterator = iterator;
        this.peekedValue = null;
    }

    /**
     * @return {number}
     */
    peek() {
        if (this.peekedValue === null) {
            this.peekedValue = this.iterator.next();
        }
        return this.peekedValue;
    }

    /**
     * @return {number}
     */
    next() {
        if (this.peekedValue !== null) {
            const value = this.peekedValue;
            this.peekedValue = null;
            return value;
        }
        return this.iterator.next();
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.peekedValue !== null || this.iterator.hasNext();
    }
}
