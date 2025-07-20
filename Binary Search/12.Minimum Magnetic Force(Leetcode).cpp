/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
function isValidAns(position, m, val) {
    const n = position.length;
    let noOfBallsPlaced = 1;
    let lastBallCoord = position[0];
    for (let i = 1; i < n; i++) {
        //  if distace between adjacent is greater than min_possible_distnc
        if (position[i] - lastBallCoord >= val) {
            noOfBallsPlaced++;
            lastBallCoord = position[i];
        }
    }
    return noOfBallsPlaced >= m;

}
var maxDistance = function(position, m) {
    position.sort((a, b) => a - b);
    let [l, r] = [1, Math.max(...position)];
    let ans = -1;
    while (l <= r) {
        const mid = Math.floor((l + (r - l) / 2));
        if (isValidAns(position, m, mid)) {
            ans = mid;
            l = mid + 1;

        } else {
            r = mid - 1;
        }
    }
    return ans;
};
