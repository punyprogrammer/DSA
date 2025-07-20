
using namespace std;

// Custom comparator as a class
class Compare {
public:
    bool operator()(const pair<string, int>& a, const pair<string, int>& b) {
        // If frequencies are equal, sort by lexicographically *greater* string
        if (a.second == b.second)
            return a.first < b.first; // min-heap, so keep "larger" lex word on top
        return a.second > b.second;   // lower frequency should come out first
    }
};

class Solution {
public:
    vector<string> topKFrequent(vector<string>& words, int k) {
        unordered_map<string, int> freqMap;
        for (const string& word : words)
            freqMap[word]++;

        // Priority queue (min-heap) with class-based comparator
        priority_queue<pair<string, int>, vector<pair<string, int>>, Compare> minHeap;

        for (const auto& entry : freqMap) {
            minHeap.push({entry.first, entry.second});
            if (minHeap.size() > k)
                minHeap.pop();
        }

        // Extract elements into a vector (in reverse order)
        vector<string> result;
        while (!minHeap.empty()) {
            result.push_back(minHeap.top().first);
            minHeap.pop();
        }
        reverse(result.begin(), result.end());
        return result;
    }
};
