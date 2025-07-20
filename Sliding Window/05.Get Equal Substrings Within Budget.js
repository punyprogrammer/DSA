/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
// parrallely run the window on s and t
var equalSubstring = function (a, b, maxCost) {
  const getAsciiDiff = (a, b) => Math.abs(a.charCodeAt(0) - b.charCodeAt(0));
  const n = a.length;
  let l = 0,
    r = 0;
  let maxLen = 0;
  let currCost = 0;
  while (r < n) {
    currCost += getAsciiDiff(a[r], b[r]);
    // validate current window
    while (currCost > maxCost) {
      currCost -= getAsciiDiff(a[l], b[l]);
      l++;
    }
    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }
  return maxLen;
};
