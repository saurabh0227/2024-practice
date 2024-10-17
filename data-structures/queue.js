let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(newVal) {
  if (currentSize >= maxSize) {
    console.log('Queue full');
  } else {
    queue[currentSize] = newVal;
    currentSize++;
  }
}

function dequeue(newVal) {
  if (currentSize <= 0) {
    console.log('Queue empty');
  } else {
    for (let i = 0; i < currentSize; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  }
}

enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
enqueue(50);
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();
console.log('queue', queue);
