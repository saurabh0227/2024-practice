const fibonacciSequence = (n) => {
  const result = [0, 1];
  if (n === 1) {
    return 'Number must be grater that 1';
  } else if (n === 2) {
    return result;
  } else {
    for (let i = 2; i < n; i++) {
      result.push(result[i - 2] + result[i - 1]);
    }
    return result;
  }
};

console.log('fibonacciSequence', fibonacciSequence(7));

const result = [0, 1];
const fibonacciSequenceRecursive = (n) => {
  if (result.length < n) {
    result.push(result[result.length - 2] + result[result.length - 1]);
    fibonacciSequenceRecursive(n);
  }
  return result;
};

console.log('fibonacciSequenceRecursive', fibonacciSequenceRecursive(7));
