/**
 * @param {number[]} height
 * @return {number}
 * 
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

 */

const trap = (height) => {
  let leftMax = height[0];
  let rightMax = height[height.length - 1];
  let trapBlock = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    if (height[left] <= height[right]) {
      trapBlock += Math.max(0, Math.min(leftMax, rightMax) - height[left]);
      left += 1;
      leftMax = Math.max(leftMax, height[left]);
    } else {
      trapBlock += Math.max(0, Math.min(leftMax, rightMax) - height[right]);
      right -= 1;
      rightMax = Math.max(rightMax, height[right]);
    }
  }

  return trapBlock;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trap(height));

/**
 * The provided code aims to calculate the amount of water that can be trapped between the blocks represented by the `height` array. Here's the time and space complexity analysis for this solution:

1. **Time Complexity**:

   - The code uses a two-pointer approach where `left` starts at the beginning of the array and `right` starts at the end. The loop continues until `left` is less than `right`.

   - The operations within the loop (calculations, comparisons, and updates) are all constant-time operations.

   - The loop iterates at most until the midpoint of the array, which takes O(n/2) time in the worst case.

   - Therefore, the time complexity of the code is O(n), where "n" is the length of the input array `height`.

2. **Space Complexity**:

   - The code uses a constant amount of extra space, regardless of the input size. It only uses a few variables (`leftMax`, `rightMax`, `trapBlock`, `left`, and `right`).

   - Therefore, the space complexity of the code is O(1), indicating constant space usage.

In summary, the code efficiently calculates the amount of water that can be trapped between the blocks in the given array using a two-pointer approach. The time complexity is O(n), and the space complexity is O(1), where "n" is the length of the input array `height`. This solution is considered efficient for this problem.
 */
