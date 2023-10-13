/**
 * @param {number[]} nums
 * @return {number[]}
 * 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

 */
const productExceptSelf = (nums) => {
  const result = [];
  let prefix = 1;
  let postfix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for (let j = result.length - 1; j >= 0; j--) {
    result[j] *= postfix;
    postfix *= nums[j];
  }

  return result;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));

/***
 Here's the time and space complexity analysis for this solution:

1. **Time Complexity**:

   - The first loop runs through the `nums` array from left to right. It performs constant-time operations (assignments and multiplications) for each element. Therefore, this loop runs in O(n) time, where "n" is the length of the input array `nums`.

   - The second loop runs through the `result` array from right to left. Again, it performs constant-time operations for each element. Therefore, this loop also runs in O(n) time.

   - Overall, the time complexity of the code is O(n), where "n" is the length of the input array `nums`.

2. **Space Complexity**:

   - The code uses extra space to store a `result` array.

   - The space used by the `result` array is proportional to the length of the input array `nums`. Therefore, the space complexity of the code is O(n), where "n" is the length of the input array `nums`.

In summary, this code efficiently calculates the product of all elements except the current element. The time complexity is O(n), and the space complexity is also O(n), where "n" is the length of the input array `nums`. This solution is very efficient and is known as an optimal solution for this problem.

 */
