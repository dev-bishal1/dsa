/**
 * @param {number[]} nums
 * @return {number}
 * 
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

 */

// This method has a time complexity of O(n) and space complexity of O(1)
const majorityElement = (nums) => {
  // Initialize sol and count to store the solution and its frequency for respective iterations...
  let majority = 0,
    count = 0;
  // For every element i in the array...
  for (let i = 0; i < nums.length; i++) {
    // If count is equal to zero, update sol as sol = i
    if (count == 0) {
      majority = nums[i];
      count = 1;
    }
    // If i is equal to candidate, increment count...
    else if (majority == nums[i]) {
      count++;
    }
    // Otherwise, decrement count...
    else {
      count--;
    }
  }
  // Return & print the solution...
  return majority;
};

// This method has a time complexity of O(n) and space complexity of O(n)
const majorityElement2 = (nums) => {
  const hashMap = new Map();
  let max = 0;
  let majority = 0;
  for (let item of nums) {
    const val = hashMap.get(item) || 0;
    const sum = val + 1;
    if (sum > max) {
      majority = item;
      max = sum;
    }
    hashMap.set(item, sum);
  }

  return majority;
};

let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));

/**

Here's the time and space complexity analysis for this solution:

1. **Time Complexity**:

   - The code includes a single loop that iterates through each element in the `nums` array. The loop runs in O(n) time, where "n" is the length of the input array.

   - Inside the loop, the following operations are performed:
     - Comparison operations (`count == 0`, `majority == nums[i]`) are constant-time operations.

     - Incrementing and decrementing `count` are also constant-time operations.

   - Overall, the time complexity of the code is O(n), where "n" is the length of the input array.

2. **Space Complexity**:

   - The code uses a constant amount of extra space. It doesn't create any additional data structures that scale with the size of the input.

   - The variables (`majority`, `count`, `i`) take up a constant amount of space and do not scale with the size of the input.

   Overall, the space complexity of the code is O(1), which means it uses a constant amount of extra space regardless of the size of the input.

In summary, the code efficiently finds the majority element in the array by iterating through the elements and maintaining a count. The time complexity is O(n) and the space complexity is O(1), where "n" is the length of the input array. This solution is known as the Boyer-Moore Majority Vote algorithm.
 */
