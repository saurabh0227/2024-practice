const secondLargestElement = (arr) => {
  const result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i];
      if (arr[i] > arr[j]) {
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log(arr);
};

secondLargestElement([2, 5, 7, 9, 3, 8]);

function secondLargest(arr) {
  if (arr.length < 2) {
    return null; // Return null if there is no second largest
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

// Example
let arr = [10, 5, 20, 8];
console.log(secondLargest(arr)); // Output: 10
