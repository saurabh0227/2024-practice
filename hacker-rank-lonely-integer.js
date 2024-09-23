const lonelyInteger = (a) => {
  const resultMap = new Map();
  for (let i = 0; i < a.length; i++) {
    if (resultMap.has(a[i])) {
      resultMap.set(a[i], resultMap.get(a[i]) + 1);
    } else {
      resultMap.set(a[i], 1);
    }
  }

  for (let [key, value] of resultMap) {
    if (value === 1) {
      return key;
    }
  }
};

console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]));
