/**
 * @param {number[]} nums
 */

var NumArray = function (nums) {
  this.sum = [];
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    this.sum.push(total);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return left > 0 ? this.sum[right] - this.sum[left - 1] : this.sum[right];
};

// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]

/**
 * 
Here's the time and space complexity analysis for this solution:

1. **Time Complexity**:

   - The constructor of the `NumArray` class runs in O(n) time, where "n" is the length of the input array `nums`. This is because it iterates through `nums` once to calculate the cumulative sum.

   - The `sumRange` method calculates the sum of a range in constant time. It performs two array lookups (`this.sum[right]` and `this.sum[left - 1]`) and a subtraction operation, which are all constant-time operations.

   - Therefore, the time complexity for `sumRange` is O(1).

2. **Space Complexity**:

   - The code uses extra space to store the `this.sum` array. The length of `this.sum` is equal to the length of the input array `nums`.

   - Therefore, the space complexity of the code is O(n), where "n" is the length of the input array `nums`.

In summary, the `NumArray` class efficiently calculates and stores the cumulative sum of elements from the original array `nums`. The time complexity for `sumRange` is O(1), and the space complexity is O(n), where "n" is the length of the input array `nums`.

 */
