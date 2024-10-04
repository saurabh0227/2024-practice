const data = []; // Initially Blank Stack
let currentSize = data.length;
let max = 5;

function push(newVal) {
  if (currentSize >= 5) {
    console.log('Stack is full', newVal);
    return;
  }
  data[currentSize] = newVal;
  currentSize++;
}

function pop() {
  if (currentSize <= 0) {
    console.log('Stack is empty');
    return;
  }
  currentSize--;
  data.length = currentSize;
}

push(1);
push(2);
push(3);
push(4);
push(5);
pop();

console.log('data', data);
