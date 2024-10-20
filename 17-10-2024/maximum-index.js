/**
 * Maximum Index
Difficulty: MediumAccuracy: 13.46%Submissions: 212K+Points: 4
Given an array arr[] of n non-negative integers. The task is to find the maximum of j - i (i<=j) subjected to the constraint of arr[i] <= arr[j].

Example 1:

Input:
n = 9
arr[] = {34, 8, 10, 3, 2, 80, 30, 33, 1}
Output: 
6
Explanation: 
In the given array arr[1] < arr[7]  satisfying 
the required condition (arr[i] <= arr[j])  thus 
giving the maximum difference of j - i which is
6(7-1).
Example 2:

Input:
N = 2
arr[] = {18, 17}
Output: 
0
Explanation: 
We can either take i and j as 0 and 0 
or we cantake 1 and 1 both give the same result 0.
Your Task:
Complete the function maxIndexDiff() which takes array arr and size n, as input parameters and returns an integer representing the answer. You don't have to print answer or take inputs. 

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N)

Constraints:
1 ≤ N ≤ 106
0 ≤ Arr[i] ≤ 109
 */

class Solution {
  maxIndexDiff(arr, n) {
    // let i = 0;
    // let j = n - 1 - i;
    // if (n < 3) return 0;
    // for (i = 0; i < arr.length; ) {
    //   if (arr[i] >= arr[j]) {
    //     j--;
    //     i++;
    //   } else if (arr[i] < arr[j]) {
    //     return j - i;
    //   }
    // }
    // return 0;

    if (n < 2) return 0;

    // Step 1: Create left min and right max arrays
    const leftMin = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);

    // Fill left min array
    leftMin[0] = arr[0];
    for (let i = 1; i < n; i++) {
      leftMin[i] = Math.min(arr[i], leftMin[i - 1]);
    }

    // Fill right max array
    rightMax[n - 1] = arr[n - 1];
    for (let j = n - 2; j >= 0; j--) {
      rightMax[j] = Math.max(arr[j], rightMax[j + 1]);
    }

    // Step 2: Find the maximum index difference
    let i = 0,
      j = 0,
      maxDiff = 0;
    while (i < n && j < n) {
      if (leftMin[i] <= rightMax[j]) {
        maxDiff = Math.max(maxDiff, j - i);
        j++;
      } else {
        i++;
      }
    }

    return maxDiff;
  }
}

const solution = new Solution();
const arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];
// const arr = [18, 17];
console.log(solution.maxIndexDiff(arr, arr.length));
