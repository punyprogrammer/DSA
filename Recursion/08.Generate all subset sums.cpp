#include <vector>
#include <algorithm>

using namespace std;

void solve(const vector<int>& num, int currIdx, int currSum, vector<int>& ans) {
    ans.push_back(currSum);
    for (int i = currIdx; i < num.size(); i++) {
        solve(num, i + 1, currSum + num[i], ans);
    }
}

vector<int> subsetSum(vector<int>& num) {
    vector<int> ans;
    ans.reserve(1 << num.size()); // Preallocate memory
    solve(num, 0, 0, ans);
    sort(ans.begin(), ans.end());   // sort results
    return ans; // Results are already in order
}
