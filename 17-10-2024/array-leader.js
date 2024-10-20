/**
 * Array Leaders
Difficulty: EasyAccuracy: 29.94%Submissions: 747K+Points: 2
You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader if it is greater than or equal to all elements to its right. The rightmost element is always a leader.

Examples:

Input: arr = [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]
Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.
Input: arr = [10, 4, 2, 4, 1]
Output: [10, 4, 4, 1]
Explanation: Note that both of the 4s are in output, as to be a leader an equal element is also allowed on the right. side
Input: arr = [5, 10, 20, 40]
Output: [40]
Explanation: When an array is sorted in increasing order, only the rightmost element is leader.
Input: arr = [30, 10, 10, 5]
Output: [30, 10, 10, 5]
Explanation: When an array is sorted in non-increasing order, all elements are leaders.
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(n)

Constraints:
1 <= n <= 106
0 <= arr[i] <= 106
 */

function leader(a) {
  const leaders = [];
  for (let i = 0; i < a.length; i++) {
    let isLeader = true;
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] >= a[j]) {
        isLeader = true;
      } else {
        isLeader = false;
        break;
      }
    }
    if (isLeader) leaders.push(a[i]);
  }
  return leaders;
}

function leaderOptimized(a) {
  const leaders = [];
  let maxFromRight = a[a.length - 1];

  leaders.push(maxFromRight);
  for (let i = a.length - 2; i >= 0; i--) {
    if (a[i] >= maxFromRight) {
      leaders.push(a[i]);
      maxFromRight = a[i];
    }
  }

  return leaders.reverse();
}

const arr = [61, 61, 17];

console.log('leader', leader(arr));
console.log('leaderOptimized', leaderOptimized(arr));
