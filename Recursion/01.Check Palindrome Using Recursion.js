/**
 * Removes all non-alphanumeric characters from a string
 * @param {string} str - Input string to be sanitized
 * @return {string} String containing only letters and numbers
 */
function sanitizeAlphanumeric(str) {
  // Remove all characters that are not letters (a-z, A-Z) or numbers (0-9)
  return str.replace(/[^a-zA-Z0-9]/g, '');
}

/**
 * Recursively checks if a string is a valid palindrome
 * @param {string} str - String to check (should be pre-sanitized)
 * @param {number} left - Left index pointer
 * @param {number} right - Right index pointer
 * @return {boolean} True if the string is a palindrome, false otherwise
 */
function isPalindromeRecursive(str, left, right) {
  // Base case: pointers have met or crossed
  if (left >= right) return true;

  // Case-insensitive comparison of characters at current pointers
  if (str[left].toLowerCase() !== str[right].toLowerCase()) {
    return false;
  }

  // Recurse with pointers moved toward the center
  return isPalindromeRecursive(str, left + 1, right - 1);
}

/**
 * Determines if a string is a valid palindrome after sanitization
 * (A palindrome reads the same forward and backward, ignoring case and non-alphanumeric chars)
 * @param {string} s - Input string to check
 * @return {boolean} True if the string is a valid palindrome
 */
var isPalindrome = function(s) {
  // First, sanitize the string to only alphanumeric characters
  const sanitizedStr = sanitizeAlphanumeric(s);
  const length = sanitizedStr.length;

  // Edge case: empty string is considered a palindrome
  if (length === 0) return true;

  // Start recursive check with initial pointers
  return isPalindromeRecursive(sanitizedStr, 0, length - 1);
};
