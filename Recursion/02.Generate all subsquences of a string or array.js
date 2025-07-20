// Function to generate all subsquences of a array
function generateSubsquences(arr, index, size, currSubsequence) {
  if (index >= size) {
    console.log(currSubsequence);
    return;
  }
  // At every point there are two options either take the element or dont take
  //   1.Take and explore solutions
  currSubsequence.push(arr[index]);
  generateSubsquences(arr, index + 1, size, currSubsequence);
  //   2.Dont take and explore solutions
  currSubsequence.pop();
  generateSubsquences(arr, index + 1, size, currSubsequence);
}
function printSubsequences(arr) {
  const n = arr.length;
  generateSubsquences(arr, 0, n, []);
}

// pritn subsequence
printSubsequences([3, 1, 2]);
