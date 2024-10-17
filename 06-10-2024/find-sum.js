// function findSum(arr, targetSum) {
//   const pairs = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === targetSum) {
//         pairs.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return pairs;
// }

function findSum(arr, targetSum) {
  const pairs = [];
  const seenNumbers = new Set();

  for (const num of arr) {
    const complement = targetSum - num;

    if (seenNumbers.has(complement)) {
      pairs.push([complement, num]);
    }

    seenNumbers.add(num);
  }

  return pairs;
}

const inputArr = [2, 4, 3, 5, 7, 8, 9];
const tSum = 11;
console.log('findSum', findSum(inputArr, tSum));
