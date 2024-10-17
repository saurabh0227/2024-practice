class LinkedList {
  constructor(val) {
    this.head = {
      value: val,
      next: null
    };
    this.tail = this.head;
    this.size = 1;
  }

  appendNode(nodeVal) {
    let newNode = {
      value: nodeVal,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  traverseList() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log('currentNode', currentNode.value);
      currentNode = currentNode.next;
    }
  }

  removeNode(index) {
    if (index < 1 || index > this.size) {
      console.log('Index out of range');
      return;
    }

    if (index === 1) {
      this.head = this.head.next;
      if (this.size === 1) {
        this.tail = null; // If list becomes empty
      }
    } else {
      let counter = 1;
      let leadNode = this.head;
      while (counter < index - 1) {
        leadNode = leadNode.next;
        counter++;
      }
      leadNode.next = leadNode.next.next;

      // If we removed the last node, update the tail
      if (leadNode.next === null) {
        this.tail = leadNode;
      }
    }

    this.size--;
  }

  insertNode(index, value) {
    if (index < 1 || index > this.size + 1) {
      console.log('Index out of range');
      return;
    }

    let newNode = {
      value: value,
      next: null
    };

    if (index === 1) {
      // Insert at the beginning
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let counter = 1;
      let currentNode = this.head;
      while (counter < index - 1) {
        currentNode = currentNode.next;
        counter++;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;

      // If we're inserting at the end, update the tail
      if (newNode.next === null) {
        this.tail = newNode;
      }
    }

    this.size++;
  }

  searchNode(value) {
    // Add search logic later if needed
    let result = undefined;
    let leadNode = this.head;
    let loop = true;
    while (loop) {
      leadNode = leadNode.next;
      loop = !!leadNode;
      if (loop && leadNode.value === value) {
        loop = false;
        result = leadNode;
      }
    }
    console.log('result', result);
  }
}

const linkedList = new LinkedList(100);
linkedList.appendNode(200);
linkedList.appendNode(300);
linkedList.appendNode(400);
linkedList.appendNode(500);
linkedList.appendNode(600);
linkedList.appendNode(700);

// Test removing a node
// linkedList.removeNode(4);

// Test inserting a node
// linkedList.insertNode(2, 1000);

linkedList.searchNode(500);

// linkedList.traverseList();
