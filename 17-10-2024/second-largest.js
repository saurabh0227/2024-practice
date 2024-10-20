/**
 * Second Largest
Difficulty: EasyAccuracy: 26.72%Submissions: 745K+Points: 2
Given an array arr, return the second largest distinct element from an array. If the second largest element doesn't exist then return -1.

Examples:

Input: arr = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.
Input: arr = [10, 10]
Output: -1
Explanation: The largest element of the array is 10 and the second largest element does not exist..
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

Constraints:
2 ≤ arr.size() ≤ 105
1 ≤ arr[i] ≤ 105
 */

class Solution {
  getSecondLargest(arr) {
    let first = -1;
    let second = -1;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > first) {
        second = first;
        first = arr[i];
      } else if (arr[i] > second && arr[i] < first) {
        second = arr[i];
      }
    }

    return second === -1 ? -1 : second;
  }
}

const solution = new Solution();
const arr = [12, 35, 1, 10, 34, 1];
// const arr = [10, 10];
console.log(solution.getSecondLargest(arr));
