class Solution {
public:
    bool isValid(const vector<int>& bloomDay, int m, int k, int val) {
        int totalBouquet = 0;
        int currSize = 0;
        for (int day : bloomDay) {
            currSize = (day <= val) ? currSize + 1 : 0;
            if (currSize == k) {
                totalBouquet++;
                currSize = 0;
                if (totalBouquet >= m) return true;  // Early exit
            }
        }
        return false;
    }

    int minDays(vector<int>& bloomDay, int m, int k) {
        const int n = bloomDay.size();
        if (static_cast<long long>(m) * k > n) return -1;  // Early exit if impossible

        int low = 1;
        int high = *max_element(bloomDay.begin(), bloomDay.end());
        int ans = -1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (isValid(bloomDay, m, k, mid)) {
                ans = mid;
                high = mid - 1;  // Try to find a smaller valid day
            } else {
                low = mid + 1;  // Need more days
            }
        }
        return ans;
    }
};
