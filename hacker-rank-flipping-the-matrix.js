const flippingTheMatrix = (matrix) => {
  const n = matrix.length / 2;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Compare the element with its three symmetric counterparts and pick the maximum
      const topLeft = matrix[i][j];
      const topRight = matrix[i][2 * n - 1 - j];
      const bottomLeft = matrix[2 * n - 1 - i][j];
      const bottomRight = matrix[2 * n - 1 - i][2 * n - 1 - j];

      // Add the maximum value to the sum
      maxSum += Math.max(topLeft, topRight, bottomLeft, bottomRight);
    }
  }

  return maxSum;
};

console.log(
  flippingTheMatrix([
    [1, 2],
    [3, 4]
  ])
);
