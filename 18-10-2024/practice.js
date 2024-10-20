class ArrayUtilities {
  // Function to find duplicate elements in the array
  duplicateArrayElement(array) {
    const duplicateElements = [];
    const arrObj = {};

    for (let el of array) {
      if (arrObj[el]) {
        arrObj[el] = arrObj[el] + 1;
      } else {
        arrObj[el] = 1;
      }
    }

    Object.keys(arrObj).map((key) => {
      if (arrObj[key] > 1) duplicateElements.push(parseInt(key));
    });

    return duplicateElements;
  }

  // Function to find duplicate elements using a second array
  duplicateArrayElementOne(array) {
    const duplicateElements = [];
    const nonDuplicateElements = [];

    for (let el of array) {
      if (nonDuplicateElements.includes(el)) {
        duplicateElements.push(el);
      } else {
        nonDuplicateElements.push(el);
      }
    }

    return duplicateElements;
  }

  // Function to find the maximum and minimum values in the array
  maxMinInArray(array) {
    let max = -Infinity;
    let min = Infinity;

    for (let el of array) {
      if (el > max) max = el;
      if (el < min) min = el;
    }

    return [max, min];
  }

  // Function to find the second largest value in the array
  secondLargestValueInArray(array) {
    const findLargestValueIndex = (arr) => {
      let largestValue = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestValue) largestValue = arr[i];
      }
      return arr.indexOf(largestValue);
    };

    let indexOfLargestValue = findLargestValueIndex(array);
    array.splice(indexOfLargestValue, 1);

    let indexOf2ndLargestValue = findLargestValueIndex(array);

    return array[indexOf2ndLargestValue];
  }

  // Function to find the missing number in the array
  findMissingInArray(array) {
    const n = array.length;
    let totalSumOfArrayWithoutMissingValue = 0;

    for (let el of array) {
      totalSumOfArrayWithoutMissingValue += el;
    }

    let sumWithMissingValue = ((n + 1) * (n + 2)) / 2;

    return sumWithMissingValue - totalSumOfArrayWithoutMissingValue;
  }

  // Function to flatten a nested array
  flatArray(array) {
    return array.reduce(
      (prev, curr) =>
        Array.isArray(curr)
          ? prev.concat(this.flatArray(curr))
          : prev.concat(curr),
      []
    );
  }

  // Function to reverse a string word-wise
  reverseStringWordWise(input) {
    const strArr = input.split(' ');
    return strArr.reverse().join(' ');
  }

  // Function to count minimum jumps to react end of array
  minJumps(arr) {
    let length = arr.length;

    if (length <= 1) return 0; // No jumps needed if already at the end
    if (arr[0] === 0) return -1; // Cannot move anywhere if first element is 0

    let jumps = 1; // At least one jump will be needed
    let maxReach = arr[0]; // The farthest index we can reach
    let steps = arr[0]; // Steps we can still take

    for (let i = 1; i < length; i++) {
      if (i === length - 1) return jumps; // If we've reached the end

      maxReach = Math.max(maxReach, i + arr[i]); // Update maxReach with the farthest index reachable
      steps--; // Decrease the steps we have

      if (steps === 0) {
        // If no steps are left
        jumps++; // We must make another jump
        if (i >= maxReach) return -1; // If we can't move forward, return -1
        steps = maxReach - i; // Reset steps to the amount of steps left to reach maxReach
      }
    }

    return -1; // If we reach here, it means we cannot reach the end
  }

  // Function to find majority element is array
  majorityElement(arr) {
    const halfLength = arr.length / 2;
    let maj = {};

    for (let el of arr) {
      if (maj[el] >= 1) {
        maj[el] = maj[el] + 1;
      } else {
        maj[el] = 1;
      }
    }

    let majorityElement = null;

    Object.keys(maj).forEach((key) => {
      if (maj[key] > halfLength) {
        majorityElement = parseInt(key);
      }
    });

    return majorityElement ? majorityElement : -1;
  }

  // Function to find Kth smallest element in array
  kthSmallest(arr, k) {
    const len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
      for (let j = i - 1; j >= 0; j--) {
        if (arr[i] > arr[j]) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    return arr[k];
  }

  // Function to find Kth element in array with counting sort
  kthSmallestWithCountingSort(arr, k) {
    // Find the maximum element in the array
    let maxElement = Math.max(...arr);

    // Step 1: Create a count array to store the frequency of each element
    let count = new Array(maxElement + 1).fill(0);

    // Step 2: Count the occurrences of each element in the input array
    for (let i = 0; i < arr.length; i++) {
      count[arr[i]]++;
    }

    // Step 3: Traverse the count array to find the k-th smallest element
    let total = 0;
    for (let i = 0; i <= maxElement; i++) {
      total += count[i]; // Add the count of current element
      if (total >= k) {
        // When the total count reaches or exceeds k
        return i; // i is the k-th smallest element
      }
    }

    return -1; // Return -1 if k is out of bounds
  }
}

// Example usage:
const utils = new ArrayUtilities();

// Call any function like:
console.log(
  'Duplicate array in array is: ',
  utils.duplicateArrayElement([1, 7, 2, 8, 2, 9, 8])
);
console.log(
  'Duplicate array in array is: ',
  utils.duplicateArrayElementOne([1, 2, 8, 2, 9, 8])
);
console.log(
  'Max and min value in array is: ',
  utils.maxMinInArray([(1, 9, 87, 65, 6, -10)])
);
console.log(
  'Second Largest Value In Array is: ',
  utils.secondLargestValueInArray([1, 9, 87, 65, 6, 10, 10])
);
console.log(
  'Missing value in array is: ',
  utils.findMissingInArray([(1, 2, 3, 5, 6)])
);
console.log(
  'Flattened Array is: ',
  utils.flatArray([([1, 2], [3, 4], 5, 6, [7, [8, [9]]])])
);
console.log(
  'Reversed String is: ',
  utils.reverseStringWordWise('Reverse String Word Wise')
);
console.log(
  'Minimum jumps are: ',
  utils.minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])
);
console.log('Minimum jumps are: ', utils.minJumps([1, 4, 3, 2, 6, 7]));
console.log('Minimum jumps are: ', utils.minJumps([0, 10, 20]));
console.log(
  'Minimum jumps are: ',
  utils.minJumps([9, 10, 1, 2, 3, 4, 8, 0, 0, 0, 0, 0, 0, 0, 1])
);
console.log('Majority element is: ', utils.majorityElement([3, 1, 3, 3, 2]));
console.log('Majority element is: ', utils.majorityElement([2, 13]));
console.log(
  'Majority element is: ',
  utils.majorityElement([5, 6, 5, 6, 5, 6, 5, 6, 5, 5, 5, 5, 5])
);
console.log(
  'Kth smallest element is: ',
  utils.kthSmallest([7, 10, 4, 3, 20, 15], 3)
);
console.log(
  'Kth smallest element with counting sort is: ',
  utils.kthSmallestWithCountingSort([7, 10, 4, 3, 20, 15], 3)
);
