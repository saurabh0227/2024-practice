const subArraySum = (arr, n, s) => {
  for (let i = 0; i < n; i++) {
    let sum = arr[i]; // Initialize sum with the current element

    // Try to find a subarray starting from index `i`
    for (let j = i + 1; j <= n; j++) {
      if (sum === s) {
        console.log(i + 1, j); // Return 1-based index
        return [i + 1, j];
      }

      if (sum > s || j === n) break; // Break if the sum exceeds `s` or end of array is reached

      sum += arr[j]; // Add the next element in the subarray
    }
  }

  return -1; // Return -1 if no subarray is found
};

const inputArr = [1, 2, 3, 7, 5];
// const inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(subArraySum(inputArr, inputArr.length, 12));
