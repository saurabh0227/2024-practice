const inputArray = [1, 2, 3, [4, 5], [6, [7, [8, [9, 10, [11, 12]]]]]]; //output [1,2,3,4,5,6,7,8]

function flatArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flatArray(val)) : acc.concat(val),
    []
  );
}

const flatArray = (arr) => {
  const resultArr = [];

  const openArray = (arrayInput) => {
    for (let i = 0; i < arrayInput.length; i++) {
      if (Array.isArray(arrayInput[i])) {
        openArray(arrayInput[i]);
      } else {
        resultArr.push(arrayInput[i]);
      }
    }
  };

  openArray(arr);

  return resultArr;
};

console.log(flatArray(inputArray));
