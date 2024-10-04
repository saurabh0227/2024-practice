const longestConsecutiveOnes = (arr) => {
  let longestConsecutiveOnesCount = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 && arr[i + 1] === 1) {
      count = count + 2;
    }
    if (count > longestConsecutiveOnesCount) {
      longestConsecutiveOnesCount = count;
      count = 0;
    }
  }

  return longestConsecutiveOnesCount;
};

console.log(longestConsecutiveOnes([1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]));
console.log(longestConsecutiveOnes([0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]));
