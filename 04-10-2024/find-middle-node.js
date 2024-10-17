class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Solution {
  /* Should return data of middle node. If linked list is empty, then -1 */
  getMiddle(node) {
    // If the list is empty, return -1
    if (!node) return -1;

    let slow = node;
    let fast = node;

    // Traverse the list with two pointers
    while (fast !== null && fast.next !== null) {
      slow = slow.next; // Move slow pointer one step
      fast = fast.next.next; // Move fast pointer two steps
    }

    // When fast reaches the end, slow is at the middle
    return slow.data;
  }
}
