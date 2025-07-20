/**
 * @param {string} s
 * @return {string[]}
 */
/**
* @param {string} s
* @return {string[]}
*/

function isLetter(char) {
    return /[a-zA-Z]/.test(char);
}
var letterCasePermutation = function (s) {
    const result = [];

    function backtrack(index, current) {
        if (index === s.length) {
            result.push(current);
            return;
        }

        const char = s[index];

        if (isLetter(char)) {
            // Branch 1: lowercase
            backtrack(index + 1, current + char.toLowerCase());
            // Branch 2: uppercase
            backtrack(index + 1, current + char.toUpperCase());
        } else {
            // Not a letter, just add it and move on
            backtrack(index + 1, current + char);
        }
    }

    backtrack(0, "");
    return result;
};
