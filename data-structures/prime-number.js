const isPrime = (num) => {
  if (num < 2) {
    return `Number ${num} is not a prime number`;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `Number ${num} is not a prime number`;
    }
  }

  return `Number ${num} is prime number`;
};

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(13));
