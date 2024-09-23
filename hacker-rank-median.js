const findMedian = (arr) => {
  arr.sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);

  console.log('mid', mid);
  console.log('arr', arr);

  console.log('---', (arr[mid - 1] + arr[mid]) / 2);

  const median =
    arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;

  console.log(median);
};

findMedian([21, 4, 9, 22, 17, 15]);
