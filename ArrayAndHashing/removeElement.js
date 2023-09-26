/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

 */

// Best solution in terms of  time complexity because it has time complexity of O(n)
const removeElement = function (nums, val) {
  let newArr = nums.filter((n) => n != val);

  let i = newArr.length - 1;

  while (i >= 0) {
    nums[i] = newArr[i];
    i--;
  }

  return newArr.length;
};

// Best solution in terms of  space complexity because it has space complexity of O(n)
const removeElement2 = (nums, val) => {
  let currentIndex = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[currentIndex] = nums[i];
      currentIndex++;
    }
  }
  return currentIndex;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;

console.log(removeElement(nums, val));

/**

Here's the time and space complexity analysis for solution 1:

1. **Time Complexity**:

   - The `filter` method is used to create a new array `newArr` that contains all elements not equal to `val`. The `filter` method iterates through the entire `nums` array once, performing the filtering operation. This operation has a time complexity of O(n), where "n" is the length of the `nums` array.

   - The subsequent while loop iterates through `newArr`, which has at most the same length as `nums`. This loop is a constant multiple of the length of `nums`.

   Overall, the time complexity of the code is O(n), where "n" is the length of the `nums` array.

2. **Space Complexity**:

   - The function creates a new array `newArr` using the `filter` method. The space used by `newArr` is proportional to the number of elements in `nums` that are not equal to `val`. In the worst case, this can be equal to the length of `nums`.

   - The variable `i` and the loop control variables take up a constant amount of space.

   Overall, the space complexity of the code is O(n), where "n" is the length of the `nums` array.

In summary, the code has a time complexity of O(n) and a space complexity of O(n), where "n" is the length of the `nums` array. It efficiently removes all occurrences of the specified value `val` by creating a new array and then copying the elements back to the original array.

 */
