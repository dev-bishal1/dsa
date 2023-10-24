/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

 */

const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return [-1, -1];
};

let numbers = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(numbers, target));

/**
 Here's the time and space complexity analysis for this solution:

1. **Time Complexity**:

   - The code uses a two-pointer approach where `left` starts at the beginning of the array and `right` starts at the end. The loop continues until `left` is less than `right`.

   - The operations within the loop (sum calculation and comparisons) are all constant-time operations.

   - The loop iterates at most until the midpoint of the array, which takes O(n/2) time in the worst case.

   - Therefore, the time complexity of the code is O(n), where "n" is the length of the input array `numbers`.

2. **Space Complexity**:

   - The code uses a constant amount of extra space, regardless of the input size. It only uses a few variables (`left`, `right`, `sum`, and the return array).

   - Therefore, the space complexity of the code is O(1), indicating constant space usage.

In summary, the code efficiently finds a pair of numbers in a sorted array that add up to the target value. The time complexity is O(n), and the space complexity is O(1), where "n" is the length of the input array `numbers`. This solution is optimal for the problem.
 */
