const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  let pivotElement = arr[arr.length - 1];

  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivotElement) rightArr.push(arr[i]);
    else leftArr.push(arr[i]);
  }

  return [...quickSort(leftArr), pivotElement, ...quickSort(rightArr)];
};

console.log(quickSort([-6, 20, 8, -2, 4]));
