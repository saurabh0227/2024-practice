const removeDuplicateFromArray = (arr) => {
  const nonDuplicateArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (nonDuplicateArray.indexOf(arr[i]) === -1) {
      nonDuplicateArray.push(arr[i]);
    }
  }
  return nonDuplicateArray;
};
console.log(
  'removeDuplicateFromArray:',
  removeDuplicateFromArray([5, 10, 5, 15, 7, 9, 10])
);
