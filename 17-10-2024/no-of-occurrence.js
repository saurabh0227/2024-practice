/**
Number of occurrence
Difficulty: MediumAccuracy: 59.34%Submissions: 242K+Points: 4
Given a sorted array Arr of size N and a number X, you need to find the number of occurrences of X in Arr.

Example 1:

Input:
N = 7, X = 2
Arr[] = {1, 1, 2, 2, 2, 2, 3}
Output: 4
Explanation: x = 2 occurs 4 times in the given array so the output is 4.
Example 2:

Input:
N = 7, X = 4
Arr[] = {1, 1, 2, 2, 2, 2, 3}
Output: 0
Explanation: X = 4 is not present in the given array so the output is 0.
Your Task:
You don't need to read input or print anything.
Your task is to complete the function count() which takes the array of integers arr, n, and x as parameters and returns an integer denoting the answer.
If x is not present in the array (arr) then return 0.

Expected Time Complexity: O(logN)
Expected Auxiliary Space: O(1)

Constraints:
1 ≤ N ≤ 105
1 ≤ Arr[i] ≤ 106
1 ≤ X ≤ 106
 */

class Solution {
  count(arr, n, x) {
    let noOfOccurrence = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] === x) noOfOccurrence += 1;
    }

    return noOfOccurrence;
  }
}

const solution = new Solution();
const arr = [1, 1, 2, 2, 2, 2, 3];
const x = 4;
// const arr = [10, 10];
console.log(solution.count(arr, arr.length, x));
