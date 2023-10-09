/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

 */

const pivotIndex = (nums) => {
  let leftSum = 0;
  let rightSum = nums.reduce((acc, curr) => acc + curr, 0);

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === rightSum - nums[i] - leftSum) return i;
    leftSum += nums[i];
  }

  return -1;
};

const nums = [1, 2, 3];

console.log(pivotIndex(nums));

/**

Here's the time and space complexity analysis for this solution:

1. **Time Complexity**:

   - The code includes a single loop that iterates through each element in the `nums` array. The loop runs in O(n) time, where "n" is the length of the input array.

   - Inside the loop, the following operations are performed:
     - Accessing elements in an array (e.g., `nums[i - 1]`) is a constant-time operation.

     - The addition operation for `leftSum` is a constant-time operation.

     - The subtraction operation for `rightSum` is a constant-time operation.

     - The comparison `leftSum === rightSum` is also a constant-time operation.

   - Overall, the time complexity of the code is O(n), where "n" is the length of the input array.

2. **Space Complexity**:

   - The code uses a constant amount of extra space. It doesn't create any additional data structures that scale with the size of the input.

   - The variables (`leftSum`, `rightSum`, `i`) take up a constant amount of space and do not scale with the size of the input.

   Overall, the space complexity of the code is O(1), which means it uses a constant amount of extra space regardless of the size of the input.

In summary, the code efficiently finds the pivot index in the array by iterating through the elements and maintaining two sums (`leftSum` and `rightSum`). The time complexity is O(n) and the space complexity is O(1), where "n" is the length of the input array. This solution effectively identifies the pivot index without using additional data structures.

 */
