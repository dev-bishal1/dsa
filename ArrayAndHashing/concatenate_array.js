/**
 * @param {number[]} nums
 * @return {number[]}

 * 
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

 */

const getConcatenation = (nums) => {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    nums.push(nums[i]);
  }
  return nums;
};

let nums = [1, 2, 1];
console.log(getConcatenation(nums));

/**
 
 >>>>>>>>>>>>> The time complexity of the above `getConcatenation` function is O(n), and the space complexity is O(1).

1. **Loop Iteration:**
   ```javascript
   for (let i = 0; i < length; i++) {
     nums.push(nums[i]);
   }
   ```
   The loop iterates `length` times, where `length` is the initial length of the `nums` array. This means it iterates through the original elements once. Therefore, the time complexity of the loop is O(n), where "n" is the initial length of the `nums` array.

2. **Space Complexity:**
   - `const length = nums.length;`: This line of code creates a single variable `length`, which takes up a constant amount of space. Therefore, it contributes O(1) to the space complexity.

   - The loop does not create any additional data structures that grow with the size of the input. It only modifies the existing `nums` array. Therefore, the space complexity is O(1), which means it uses a constant amount of extra space regardless of the size of the input.

In summary, this code has a time complexity of O(n) due to the loop iterating through the initial elements, and a space complexity of O(1) since it does not use any additional data structures that scale with the input size.
 */
