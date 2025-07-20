/**
 * @param {number[]} arr
 */
function merge(arr, low, mid, high) {
  const temp = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) temp.push(arr[left]), left++;
  while (right <= high) temp.push(arr[right]), right++;
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}
function mergeSortArray(arr, low, high) {
  // base case
  if (low >= high) return;
  const mid = Math.floor((low + high) / 2);
  mergeSortArray(arr, low, mid);
  mergeSortArray(arr, mid + 1, high);
  merge(arr, low, mid, high);
}
function mergeSort(arr) {
  // your code here
  const n = arr.length;
  mergeSortArray(arr, 0, n - 1);
}
