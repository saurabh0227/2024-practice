function missingInArray(arr) {
  const n = arr.length;
  const total = ((n + 1) * (n + 2)) / 2;
  let arrTotal = 0;

  for (let el of arr) {
    arrTotal += el;
  }

  return total - arrTotal;
}

const inputArr = [1, 2, 3, 5];
console.log('missingInArray', missingInArray(inputArr));
