const minMaxSum = (arr) => {
  const sortedArr = arr.sort();

  let min = 0;
  let max = 0;
  for (let i = 0; i < sortedArr.length - 1; i++) {
    min += sortedArr[i];
  }

  for (let i = 1; i < sortedArr.length; i++) {
    max += sortedArr[i];
  }

  console.log(min + ' ' + max);
};

// minMaxSum([7, 69, 2, 221, 8974]);

const minMaxSumNew = (arr) => {
  let min = Infinity;
  let max = -Infinity;
  let totalSum = 0;

  // Loop through the array once
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  const minSum = totalSum - max; // Max element is excluded for min sum
  const maxSum = totalSum - min; // Min element is excluded for max sum

  console.log(minSum + ' ' + maxSum);
};

minMaxSumNew([7, 69, 2, 221, 8974]);
