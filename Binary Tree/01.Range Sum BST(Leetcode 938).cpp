class Solution {
public:
    int rangeSumBST(TreeNode* root, int low, int high) {
        return traverse(root, low, high);
    }

private:
    int traverse(const TreeNode* root, int low, int high) {
        if (root == nullptr) {
            return 0;
        }

        int sum = 0;

        // If current node's value is within the range, add it to the sum
        if (root->val >= low && root->val <= high) {
            sum += root->val;
        }

        // If current node's value is greater than low, traverse the left subtree
        if (root->val > low) {
            sum += traverse(root->left, low, high);
        }

        // If current node's value is less than high, traverse the right subtree
        if (root->val < high) {
            sum += traverse(root->right, low, high);
        }

        return sum;
    }
};
