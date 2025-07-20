/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    pair<int, int> traverse(TreeNode* root, int& count) {
        if (root == NULL) {
            return {0, 0};
        }
        // traverse left and right subtree
        auto left = traverse(root->left, count);
        auto right = traverse(root->right, count);
        // get sum
        int sum = root->val + left.first + right.first;
        int numOfNodes = 1 + left.second + right.second;
        int average = sum / numOfNodes;
        if (average == root->val) {
            count++;
        }
        return {sum, numOfNodes};
    }
    int averageOfSubtree(TreeNode* root) {
        int count = 0;
        traverse(root, count);
        return count;
    }
};
