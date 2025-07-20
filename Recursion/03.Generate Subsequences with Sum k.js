// function to print all subsequences with sum k
function generateSubsequences(arr, index, currSum, size, k, currSubsequence) {
  if (index === size) {
    // if currsum equals k
    if (currSum === k) {
      console.log(currSubsequence);
    }
    return;
  }
  //   either take or not take
  //   1.TAKE IF possible
  if (currSum + arr[index] <= k) {
    currSubsequence.push(arr[index]);
    generateSubsequences(
      arr,
      index + 1,
      currSum + arr[index],
      size,
      k,
      currSubsequence
    );
    currSubsequence.pop();
  }
  //   not take
  generateSubsequences(arr, index + 1, currSum, size, k, currSubsequence);
}

function printSubsequencesWithSumK(arr, k) {
  const n = arr.length;
  let currSum = 0;
  const currSubsequence = [];
  generateSubsequences(arr, 0, currSum, n, k, currSubsequence);
}

const sampleArr = [17, 18, 6, 11, 2, 4];
const targetSum = 6;
printSubsequencesWithSumK(sampleArr, targetSum);
