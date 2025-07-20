#include <string>
using namespace std;

class Solution {
public:
    string reversePrefix(string word, char ch) {
        // Find the index of the first occurrence of `ch`
        size_t index = word.find(ch);

        // If `ch` is not found, return the original word
        if (index == string::npos) {
            return word;
        }

        // Reverse the prefix up to the index of `ch`
        reverse(word.begin(), word.begin() + index + 1);

        return word;
    }
};
