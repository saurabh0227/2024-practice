function moveZeroToEnd(inputArr) {
  // Separate non-zero and zero elements
  const nonZeroElements = inputArr.filter((element) => element !== 0);
  const zeroElements = inputArr.filter((element) => element === 0);

  // Concatenate non-zero elements followed by all zeros
  return [...nonZeroElements, ...zeroElements];
}

const arr = [0, 1, -2, 3, 4, 0, 5, -27, 9, 0];
console.log('moveZeroToEnd', moveZeroToEnd(arr));
// Output: [1, -2, 3, 4, 5, -27, 9, 0, 0, 0]
