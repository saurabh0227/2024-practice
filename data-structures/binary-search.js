const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[mid]) {
      return mid;
    }

    if (target < arr[mid]) {
      rightIndex = mid - 1;
    } else {
      leftIndex = mid + 1;
    }
  }
  return -1;
};

console.log('binarySearch', binarySearch([-5, 2, 4, 6, 10], 10));
console.log('binarySearch', binarySearch([-5, 2, 4, 6, 10], 6));
console.log('binarySearch', binarySearch([-5, 2, 4, 6, 10], 20));

const binarySearchRecursive = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  return search(arr, target, leftIndex, rightIndex);
};

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) return middleIndex;

  if (target < arr[middleIndex])
    return search(arr, target, leftIndex, middleIndex - 1);

  return search(arr, target, middleIndex + 1, rightIndex);
}

console.log(
  'binarySearchRecursive',
  binarySearchRecursive([-5, 2, 4, 6, 10], 10)
);
console.log(
  'binarySearchRecursive',
  binarySearchRecursive([-5, 2, 4, 6, 10], 6)
);
console.log(
  'binarySearchRecursive',
  binarySearchRecursive([-5, 2, 4, 6, 10], 20)
);
