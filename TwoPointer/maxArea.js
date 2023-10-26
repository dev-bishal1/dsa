/**
 * @param {number[]} height
 * @return {number}
 * 
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

 */

const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxVolume = 0;
  while (left < right) {
    const leftVal = height[left];
    const rightVal = height[right];
    const height = Math.min(leftVal, rightVal);
    const width = right - left;
    const volume = height * width;
    maxVolume = Math.max(maxVolume, volume);
    if (leftVal < rightVal) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return maxVolume;
};

// const height = [1, 1];
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));

/**
Here's the time and space complexity analysis for this solution:

1. **Time Complexity**:

   - The code uses a two-pointer approach where `left` starts at the beginning of the array and `right` starts at the end. The loop continues until `left` is less than `right`.

   - The operations within the loop (calculations and comparisons) are all constant-time operations.

   - The loop iterates at most until the midpoint of the array, which takes O(n/2) time in the worst case.

   - Therefore, the time complexity of the code is O(n), where "n" is the length of the input array `height`.

2. **Space Complexity**:

   - The code uses a constant amount of extra space, regardless of the input size. It only uses a few variables (`left`, `right`, `maxVolume`, `leftVal`, `rightVal`, `length`, and `volume`).

   - Therefore, the space complexity of the code is O(1), indicating constant space usage.

In summary, the code efficiently finds the maximum area between two vertical lines in the given array using a two-pointer approach. The time complexity is O(n), and the space complexity is O(1), where "n" is the length of the input array `height`. This solution is considered efficient for this problem.
 */
