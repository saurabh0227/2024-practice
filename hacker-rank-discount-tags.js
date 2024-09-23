const getMaximumEvenSum = (val) => {
  // let totalSum = 0;
  // let smallestOdd = Infinity;

  // // Calculate the total sum and track the smallest odd number
  // for (let i = 0; i < val.length; i++) {
  //   totalSum += val[i];
  //   if (val[i] % 2 !== 0) {
  //     smallestOdd = Math.min(smallestOdd, Math.abs(val[i]));
  //   }
  // }

  // // If the total sum is even, return it
  // if (totalSum % 2 === 0) {
  //   return totalSum;
  // }

  // // If the total sum is odd, subtract the smallest odd number to make it even
  // return totalSum - smallestOdd;

  let totalSum = 0;
  let smallestPositiveOdd = Infinity;
  let largestNegativeOdd = -Infinity;

  for (let i = 0; i < val.length; i++) {
    totalSum += val[i];

    if (val[i] % 2 !== 0) {
      if (val[i] > 0) {
        smallestPositiveOdd = Math.min(smallestPositiveOdd, val[i]);
      } else {
        largestNegativeOdd = Math.max(largestNegativeOdd, val[i]);
      }
    }
  }

  if (totalSum % 2 === 0) {
    return totalSum;
  }

  let option1 = totalSum - smallestPositiveOdd;
  let option2 = totalSum - largestNegativeOdd;

  if (smallestPositiveOdd === Infinity) return option2;
  if (largestNegativeOdd === -Infinity) return option1;

  return Math.min(option1, option2);

  // let totalSum = 0;
  // let smallestOdd = Infinity;

  // for (let i = 0; i < val.length; i++) {
  //   totalSum += val[i];
  //   if (val[i] % 2 !== 0) {
  //     smallestOdd = Math.min(smallestOdd, Math.abs(val[i]));
  //   }
  // }

  // if (totalSum % 2 === 0) {
  //   return totalSum;
  // }

  // return totalSum - smallestOdd;
};

// const arr = [5, -1, -2, -3, 8, 7];
const arr = [7, 2, 3, 6, -5, 10, 1, 1];
console.log(getMaximumEvenSum(arr));
