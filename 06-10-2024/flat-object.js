const obj = {
  a: '1',
  b: { c: '2', h: null },
  d: { e: { f: '3' } },
  g: null
};

let result = {};

function flatObject(inputObj, parentKey = '') {
  Object.keys(inputObj).forEach((key) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof inputObj[key] === 'object' && inputObj[key] !== null) {
      flatObject(inputObj[key], newKey);
    } else {
      result[newKey] = inputObj[key];
    }
  });

  return result;
}

console.log('flatObject', flatObject(obj));
