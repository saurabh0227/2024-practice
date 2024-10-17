function rotateArray(inputArr, inputK) {
  const n = inputArr.length;
  const k = inputK % n;

  console.log(n);
  console.log(k);

  if (k === 0) {
    return inputArr;
  }

  const rotatedArray = inputArr.slice(-k);
  console.log(rotatedArray);
  const remainingARray = inputArr.slice(0, n - k);
  console.log(remainingARray);

  return rotatedArray.concat(remainingARray);
}

const arr = [1, 2, 3, 4, 5];
const k = 3;
console.log('rotateArray', rotateArray(arr, k));
