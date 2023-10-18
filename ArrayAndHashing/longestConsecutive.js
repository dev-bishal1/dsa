/**
 * @param {number[]} nums
 * @return {number}
 */

const longestConsecutive = (nums) => {
  const numSet = new Set(nums);
  let longestStream = 0;
  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStream = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStream++;
      }
      longestStream = Math.max(currentStream, longestStream);
    }
  }
  return longestStream;
};

// has time complexity of O(n log n)
const longestConsecutive2 = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);

  if (nums.length === 0) return 0;

  let longest = 1;
  let result = 0;
  for (let i = 0; i < sortedNums.length; i++) {
    const diff = (sortedNums[i + 1] || 0) - sortedNums[i];
    if (diff === 0) continue;

    if (diff === 1) {
      longest += 1;
    } else {
      result = Math.max(result, longest);
      longest = 1;
    }
  }
  return result > longest ? result : longest;
};

// const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const nums = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutive2(nums));

/**
1. **Time Complexity**:

   - The code first creates a set (`numSet`) from the input array. Creating a set from an array takes O(n) time, where "n" is the length of the input array `nums`.

   - The loop iterates through each element in the `numSet`. For each element, it performs the following operations:
   
     - Checking whether `numSet` contains `num - 1` is a constant-time operation.

     - The inner `while` loop iterates through a sequence of consecutive numbers, and in the worst case, it runs until the end of the sequence. This loop has a time complexity of O(s), where "s" is the length of the longest consecutive sequence that includes the current element.

   - Therefore, the overall time complexity of the code is O(n + s), where "n" is the length of the input array `nums`, and "s" is the length of the longest consecutive sequence.

2. **Space Complexity**:

   - The code uses extra space to store a set (`numSet`) which contains the unique elements from the input array.

   - The space used by the set is proportional to the number of unique elements in `nums`. In the worst case, if all elements are unique, this can be "n".

   - Therefore, the space complexity of the code is O(n), where "n" is the length of the input array `nums`.

In summary, the code efficiently finds the length of the longest consecutive sequence of numbers by using a set to keep track of unique elements. The time complexity is O(n + s), and the space complexity is O(n), where "n" is the length of the input array `nums`, and "s" is the length of the longest consecutive sequence.
 */
