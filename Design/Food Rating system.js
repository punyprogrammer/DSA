class FoodRatings {
  constructor(foods, cuisines, ratings) {
    this.foodToCuisine = new Map();
    this.foodToRating = new Map();
    this.cuisineToHeap = new Map(); // Will store max-heaps per cuisine
    
    // Initialize all data structures
    for (let i = 0; i < foods.length; i++) {
      const food = foods[i];
      const cuisine = cuisines[i];
      const rating = ratings[i];
      
      this.foodToCuisine.set(food, cuisine);
      this.foodToRating.set(food, rating);
      
      // Initialize cuisine heap if not exists
      if (!this.cuisineToHeap.has(cuisine)) {
        this.cuisineToHeap.set(cuisine, new MaxHeap());
      }
      
      // Add to the cuisine's max heap
      this.cuisineToHeap.get(cuisine).insert(food, rating);
    }
  }

  changeRating(food, newRating) {
    const cuisine = this.foodToCuisine.get(food);
    this.foodToRating.set(food, newRating);
    
    // Update the heap (lazy approach - just reinsert)
    this.cuisineToHeap.get(cuisine).insert(food, newRating);
  }

  highestRated(cuisine) {
    const heap = this.cuisineToHeap.get(cuisine);
    if (!heap) return "";
    
    // Get the top rated food, checking if rating matches current
    while (heap.size() > 0) {
      const top = heap.peek();
      const currentRating = this.foodToRating.get(top.food);
      
      // If heap rating matches current rating, return it
      if (top.rating === currentRating) {
        return top.food;
      }
      
      // Otherwise remove the stale entry
      heap.extractMax();
    }
    
    return "";
  }
}

// Max Heap implementation
class MaxHeap {
  constructor() {
    this.heap = [];
  }
  
  insert(food, rating) {
    this.heap.push({ food, rating });
    this.heapifyUp(this.heap.length - 1);
  }
  
  peek() {
    return this.heap[0];
  }
  
  extractMax() {
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return max;
  }
  
  size() {
    return this.heap.length;
  }
  
  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parentIndex]) > 0) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  
  heapifyDown(index) {
    const lastIndex = this.heap.length - 1;
    while (true) {
      let largest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      
      if (left <= lastIndex && this.compare(this.heap[left], this.heap[largest]) > 0) {
        largest = left;
      }
      
      if (right <= lastIndex && this.compare(this.heap[right], this.heap[largest]) > 0) {
        largest = right;
      }
      
      if (largest !== index) {
        [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
        index = largest;
      } else {
        break;
      }
    }
  }
  
  compare(a, b) {
    // First by rating (descending), then by food name (ascending)
    if (a.rating !== b.rating) {
      return a.rating - b.rating;
    }
    return b.food.localeCompare(a.food); // Reverse for max heap
  }
}
