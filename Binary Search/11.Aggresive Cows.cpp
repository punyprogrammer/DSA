/**
 * Checks if we can place 'k' cows in stalls with minimum distance 'val' between them
 * 
 * @param stalls Vector containing stall positions (must be sorted)
 * @param k Number of cows to place
 * @param val Minimum required distance between cows
 * @return bool True if placement possible, false otherwise
 */
bool isValidPlacement(vector<int>& stalls, int k, int val) {
    int cowsPlaced = 1;  // Always place first cow in first stall
    int lastCowPosition = stalls[0];
    
    for (int i = 1; i < stalls.size(); i++) {
        // Check if current stall is far enough from last placed cow
        if (stalls[i] - lastCowPosition >= val) {
            cowsPlaced++;
            lastCowPosition = stalls[i];
            
            // Early exit if we've placed all cows
            if (cowsPlaced == k) return true;
        }
    }
    
    return cowsPlaced >= k;
}

/**
 * Finds the maximum minimum distance between k cows placed in stalls
 * 
 * @param stalls Vector containing stall positions
 * @param k Number of cows to place
 * @return int Maximum minimum distance between cows
 */
int aggressiveCows(vector<int>& stalls, int k) {
    // Edge case: more cows than stalls
    if (k > stalls.size()) return -1;
    
    // Sort stalls for binary search approach
    sort(stalls.begin(), stalls.end());
    
    int low = 1;  // Minimum possible distance
    int high = stalls.back() - stalls.front();  // Maximum possible distance
    int result = -1;
    
    // Binary search to find maximum minimum distance
    while (low <= high) {
        int mid = low + (high - low) / 2;  // Prevents overflow
        
        if (isValidPlacement(stalls, k, mid)) {
            result = mid;      // Store current best
            low = mid + 1;     // Try for larger distance
        } else {
            high = mid - 1;    // Try smaller distance
        }
    }
    
    return result;
}
