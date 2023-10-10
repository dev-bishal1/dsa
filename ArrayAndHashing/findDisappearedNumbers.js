/**
 * @param {number[]} nums
 * @return {number[]}
 */

// best solution in terms of time complexity because it has time complexity of O(n) where as space complexity of O(n)
const findDisappearedNumbers = (nums) => {
  const hashMap = new Map();
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    hashMap.set(curr, curr);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!hashMap.has(i)) {
      result.push(i);
    }
  }

  return result;
};

// better solution for space complexity than above solution
const findDisappearedNumbers2 = (nums) => {
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      result.push(i);
    }
  }

  return result;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
