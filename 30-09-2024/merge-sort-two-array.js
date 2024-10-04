const mergeSortTwoArray = (arr1, arr2) => {
  // const sortedArr = new Set([...arr1, ...arr2].sort((a, b) => a - b));
  // return sortedArr;

  const sortedArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (sortedArr.indexOf(arr1[i]) === -1) sortedArr.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (sortedArr.indexOf(arr2[i]) === -1) sortedArr.push(arr2[i]);
  }

  return sortedArr.sort((a, b) => a - b);
};

console.log(mergeSortTwoArray([0, 3, 4, 31], [0, 3, 4, 4, 6, 30, 31]));
