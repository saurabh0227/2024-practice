// const isPowerOfTwo = (num) => {
//   if (num < 1) return false;

//   while (num > 1) {
//     if (num % 2 !== 0) {
//       return false;
//     }
//     num = num / 2;
//   }
//   return true;
// };

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));

const isPowerOfTwoBitWise = (num) => {
  if (num < 1) return false;
  return (num & (num - 1)) === 0;
};

console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));
