let data = [];
let currentSize = data.length;
let reverseStr = '';

function push(newVal) {
  data[currentSize] = newVal;
  currentSize++;
}

function pop() {
  let lastRemovedItem = data[currentSize - 1];
  currentSize--;
  data.length = currentSize;
  return lastRemovedItem;
}

let str = 'saurabh';
str = str.split('');

for (let char of str) {
  push(char);
}

for (let char of str) {
  reverseStr += pop();
}

console.log('data', data);
console.log('reverseStr', reverseStr);
