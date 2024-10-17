let result = [];
function flatArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const inputARrr = [2, 4, [5], 6, [7, [8, [9, 10]]], 11];
console.log('flatArray', flatArray(inputARrr));
