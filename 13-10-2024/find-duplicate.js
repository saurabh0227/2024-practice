function findDuplicate(a, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (a[i] === a[j]) {
        result.push(a[i]);
      }
    }
  }

  return result.length > 0 ? result : -1;
}

function findDuplicateMin(a, n) {
  const resultSet = new Set();
  const duplicates = [];

  for (let el of a) {
    if (resultSet.has(el)) {
      duplicates.push(el);
    } else {
      resultSet.add(el);
    }
  }

  return duplicates.length ? duplicates : -1;
}

const arr = [2, 3, 1, 2, 3];
// const arr = [0, 3, 1, 2];
const len = arr.length;
console.log('findDuplicate', findDuplicate(arr, len));
console.log('findDuplicateMin', findDuplicateMin(arr, len));
