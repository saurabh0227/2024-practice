class Stack {
  data = [];
  currentSIze;
  maxSize;
  constructor(size) {
    this.maxSize = size;
    this.currentSIze = this.data.length;
  }
  push(newVal) {
    if (this.currentSIze >= this.maxSize) {
      console.log('Stack is full');
    } else {
      this.data[this.currentSIze] = newVal;
      this.currentSIze++;
    }
  }

  pop() {
    if (this.currentSIze <= 0) {
      console.log('Stack is empty');
    } else {
      this.currentSIze--;
      this.data.length = this.currentSIze;
    }
  }

  display() {
    console.log('data', this.data);
  }
}

const stack = new Stack(5);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
stack.display();
