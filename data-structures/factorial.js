const factorial = (n) => {
  let result = 1;
  if (n === 0) {
    return result;
  } else if (n < 0) {
    return `Input must me either 0 or +ve number`;
  } else {
    for (let i = 2; i <= n; i++) {
      result = result * i;
    }
    return `Factorial of ${n} is ${result}`;
  }
};

console.log('factorial:', factorial(4));

const factorialRecursive = (n) => {
  if (n === 0) return 1;
  return n * factorialRecursive(n - 1);
};

console.log('factorialRecursive:', factorialRecursive(4));
