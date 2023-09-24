/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

 */

const twoSum = (nums, target) => {
  if (nums.length < 2) return [];
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const requiredNum = target - currNum;
    if (hashMap.has(requiredNum)) {
      return [hashMap.get(requiredNum), i];
    }
    hashMap.set(currNum, i);
  }
  return [];
};

let nums = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(nums, target));

/**

Here's the time and space complexity analysis:

1. **Time Complexity**:

   - The function iterates through the `nums` array once, performing constant-time operations inside the loop. This loop takes O(n) time, where "n" is the length of the input array `nums`.

   - Inside the loop, operations like checking if an element is in the `Map`, getting an element from the `Map`, and setting an element in the `Map` are all O(1) operations on average.

   Therefore, the overall time complexity of the code is O(n), where "n" is the length of the input array `nums`.

2. **Space Complexity**:

   - The function uses a `Map` data structure to store elements from the `nums` array along with their indices. In the worst case scenario, the `Map` could potentially store all elements from the `nums` array. This would result in a space usage proportional to the length of the `nums` array. Therefore, the space used for the `Map` is O(n), where "n" is the length of the input array `nums`.

   - The function also uses a constant number of additional variables (`currNum`, `requiredNum`, `i`), which take up a constant amount of space regardless of the size of the input.

   Overall, the space complexity of the code is O(n), where "n" is the length of the input array `nums`.

In summary, the code has a time complexity of O(n) and a space complexity of O(n), where "n" is the length of the input array `nums`. It efficiently finds two numbers that add up to the target value using a `Map` data structure to keep track of elements and their indices.


 */
