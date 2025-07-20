function reversePrefix(word, ch) {
    // Find the index of the first occurrence of `ch`
    const index = word.indexOf(ch);

    // If `ch` is not found, return the original word
    if (index === -1) {
        return word;
    }

    // Reverse the prefix up to the index of `ch`
    const prefix = word.slice(0, index + 1);
    const reversedPrefix = prefix.split('').reverse().join('');

    // Combine the reversed prefix with the rest of the string
    return reversedPrefix + word.slice(index + 1);
}

// Example usage
const word = "abcdefd";
const ch = "d";

const result = reversePrefix(word, ch);
console.log(result); // Output: "dcbaefd"
