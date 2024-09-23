const diagonalDifference = (arr) => {
  let leftToRightSum = 0;
  let rightToLeftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftToRightSum += arr[i][i];
    rightToLeftSum += arr[i][arr.length - 1 - i];
  }

  return Math.abs(leftToRightSum - rightToLeftSum);
};

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ])
);
