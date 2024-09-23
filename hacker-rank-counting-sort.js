// const countingSOrt = (arr) => {
//   // Find the maximum and minimum value in the array
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);

//   // Create a count array to store the frequency of each element
//   const range = max - min + 1; // Range of elements
//   const count = new Array(range).fill(0); // Initialize count array with 0
//   const output = new Array(arr.length); // Output array to store the sorted values

//   // Store the count of each element
//   for (let i = 0; i < arr.length; i++) {
//     count[arr[i] - min]++;
//   }

//   // Modify count array so that each element stores the cumulative count
//   for (let i = 1; i < count.length; i++) {
//     count[i] += count[i - 1];
//   }

//   // Build the output array by placing elements in their correct position
//   for (let i = arr.length - 1; i >= 0; i--) {
//     output[count[arr[i] - min] - 1] = arr[i];
//     count[arr[i] - min]--;
//   }

//   // Copy the sorted elements back into the original array
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = output[i];
//   }

//   return arr;
// };

const countingSort = (arr) => {
  const frequency = new Array(100).fill(0);

  for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]]++;
  }

  return frequency;
};

const str =
  '63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33';
const inputArr = str.split(' ');

console.log(countingSort(inputArr));
