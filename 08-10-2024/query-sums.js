function querySums(arr, queries) {
  // Step 1: Sort the array
  arr.sort((a, b) => a - b);

  // Step 2: Create a prefix sum array
  const prefixSum = new Array(arr.length);
  console.log('prefixSum', prefixSum);
  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  console.log('prefixSum--', prefixSum);

  // Step 3: For each query, find the sum of elements <= query using binary search
  const results = [];
  for (const q of queries) {
    let left = 0,
      right = arr.length - 1,
      idx = -1;

    // Binary search to find the rightmost element <= q
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] <= q) {
        idx = mid; // Update index if arr[mid] is <= q
        left = mid + 1; // Move right to find larger values
      } else {
        right = mid - 1; // Move left to search for smaller values
      }
    }

    // Sum up to the found index
    if (idx === -1) {
      results.push(0); // No elements less than or equal to q
    } else {
      results.push(prefixSum[idx]); // Sum of elements <= q
    }
  }

  return results;
}

// Example usage:
const arr = [1, 2, 3, 3, 4, 5, 6, 7, 9, 10];
const queries = [3, 5];
console.log(querySums(arr, queries)); // Output: [9, 18]

function querySumsNew(inputArr, inputQueries) {
  let q1sum = 0;

  for (let i = 0; i < inputArr.length; i++) {
    if (inputQueries[0] >= inputArr[i]) {
      q1sum = q1sum + inputArr[i];
    }
  }

  let q2sum = 0;
  for (let j = 0; j < inputArr.length; j++) {
    if (inputQueries[1] >= inputArr[j]) {
      q2sum = q2sum + inputArr[j];
    }
  }

  return [q1sum, q2sum];
}

console.log('querySumsNew', querySumsNew(arr, queries));
