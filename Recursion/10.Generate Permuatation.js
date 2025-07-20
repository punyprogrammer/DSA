function solve(nums, index, currPermutation, allPermutations, used) {
    if (index === nums.length) {
        allPermutations.push([...currPermutation]);
        return;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (!used[i]) {
            used[i] = true;
            currPermutation.push(nums[i]);
            solve(nums, index + 1, currPermutation, allPermutations, used);
            currPermutation.pop();
            used[i] = false;
        }
    }
}

var permute = function(nums) {
    const allPermutations = [];
    const used = new Array(nums.length).fill(false);
    solve(nums, 0, [], allPermutations, used);
    return allPermutations;
};
