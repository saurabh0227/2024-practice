function mergeUniqueArray(arr1, arr2) {
  const result = [];
  const newArr = [...arr1, ...arr2];
  for (let i = 0; i < newArr.length; i++) {
    if (!result.includes(newArr[i])) {
      result.push(newArr[i]);
    }
  }

  return result.sort((a, b) => a - b);
}

const inArr1 = [2, 3, 6, 3, 7, 2, 9];
const inArr2 = [1, 5, 6, 10, 11, 2, 9];

console.log('mergeUniqueArray', mergeUniqueArray(inArr1, inArr2));
