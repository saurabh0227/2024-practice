const minimumMoves = (arr1, arr2) => {
  let totalMoves = 0;

  // Loop through both arrays
  for (let i = 0; i < arr1.length; i++) {
    const num1 = arr1[i].toString();
    const num2 = arr2[i].toString();

    // Compare each digit of the two numbers
    for (let j = 0; j < num1.length; j++) {
      totalMoves += Math.abs(parseInt(num1[j]) - parseInt(num2[j]));
    }
  }

  return totalMoves;
};

console.log(minimumMoves([1234, 4321], [2345, 3214]));
