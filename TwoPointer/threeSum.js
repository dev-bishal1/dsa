/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

 */

const threeSum = (nums) => {
  const newNums = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < newNums.length; i++) {
    if (newNums[i] === newNums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = newNums[i] + newNums[left] + newNums[right];
      if (sum > 0) {
        right -= 1;
      } else if (sum < 0) {
        left += 1;
      } else {
        result.push([newNums[i], newNums[left], newNums[right]]);
        left += 1;
        while (newNums[left] === newNums[left - 1] && left < right) {
          left += 1;
        }
      }
    }
  }

  return result;
};

let nums = [0, 0, 0, 0];

// let nums = [-1, 0, 1, 2, -1, -4];
// [-4,-1,-1,0,1,2]
console.log(threeSum(nums));

/**
 Here's the time and space complexity analysis for this solution:

1. **Time Complexity**:

   - Sorting the `nums` array takes O(n log n) time, where "n" is the length of the input array.

   - The outer loop iterates through each element of the sorted array, which takes O(n) time.

   - Inside the outer loop, the code performs a two-pointer approach. The `left` and `right` pointers start at different ends of the array and move towards each other. This process takes O(n) time in the worst case because both pointers can traverse the entire array.

   - Inside the inner loop, there are constant-time operations (additions, comparisons), except for the part where the result is pushed, which also takes O(1) time.

   - Overall, the time complexity of the code is O(n log n + n^2), which simplifies to O(n^2) because the quadratic term dominates.

2. **Space Complexity**:

   - The code creates a new array `newNums` as a sorted version of the input array `nums`. The length of `newNums` is equal to the length of `nums`.

   - The space used by the array is proportional to the length of the input array. Therefore, the space complexity of the code is O(n).

In summary, the code efficiently finds all unique triplets in the array that sum up to zero using a combination of sorting and a two-pointer approach. The time complexity is O(n^2), and the space complexity is O(n), where "n" is the length of the input array `nums`. This solution is considered efficient for this problem.
 */
