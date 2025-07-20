/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  // Preprocess: Create a map of pattern to words
  const patternMap = {};
  const allWords = [...new Set([...wordList, beginWord])]; // Ensure uniqueness

  // Build pattern map in O(N*L) time
  for (const word of allWords) {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.substring(0, i) + "*" + word.substring(i + 1);
      if (!patternMap[pattern]) patternMap[pattern] = [];
      patternMap[pattern].push(word);
    }
  }

  // BFS initialization
  const visited = new Set([beginWord]);
  const queue = [[beginWord, 1]]; // [word, level]

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift();

    // Generate all possible patterns for current word
    for (let i = 0; i < currentWord.length; i++) {
      const pattern =
        currentWord.substring(0, i) + "*" + currentWord.substring(i + 1);

      // Check all words that share this pattern
      for (const neighbor of patternMap[pattern] || []) {
        if (neighbor === endWord) return level + 1;
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, level + 1]);
        }
      }
    }
  }

  return 0;
};
