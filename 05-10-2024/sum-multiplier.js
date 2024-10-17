function sumMultiplier(arr) {
  let totalSum = 0;

  for (let el of arr) {
    totalSum += el;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] > totalSum) {
        return true;
      }
    }
  }

  return false;
}
const input = [2, 5, 6, -6, 16, 2, 3, 6, 5, 3];
// const input = [2, 2, 2, 2, 4, 1];

console.log('sumMultiplier', sumMultiplier(input));
