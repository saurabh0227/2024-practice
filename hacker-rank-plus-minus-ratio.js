const plusMinus = (arr) => {
  const len = arr.length;

  const plus = [];
  const minus = [];
  const zero = [];

  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      zero.push(arr[i]);
    } else if (arr[i] < 0) {
      minus.push(arr[i]);
    } else {
      plus.push(arr[i]);
    }
  }

  console.log((plus.length / len).toFixed(6));
  console.log((minus.length / len).toFixed(6));
  console.log((zero.length / len).toFixed(6));
};

plusMinus([-4, 3, -9, 0, 4, 1]);
