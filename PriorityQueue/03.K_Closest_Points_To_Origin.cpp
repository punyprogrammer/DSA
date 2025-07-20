

class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        // Max-heap to store points by their distance in descending order
        priority_queue<pair<int, vector<int>>> maxHeap;

        for (auto& point : points) {
            int x = point[0], y = point[1];
            int distSq = x * x + y * y;  // Squared distance to avoid sqrt

            maxHeap.push({distSq, point});
            
            // Keep heap size at most k
            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }

        // Collect the result
        vector<vector<int>> result;
        while (!maxHeap.empty()) {
            result.push_back(maxHeap.top().second);
            maxHeap.pop();
        }

        return result;
    }
};
