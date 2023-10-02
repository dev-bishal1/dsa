/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * 
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

 */
const canPlaceFlowers = (flowerbed, n) => {
  let flowerPlotted = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    let curr = flowerbed[i];
    const leftPlot = flowerbed[i - 1];
    const rightPlot = flowerbed[i + 1];
    if (leftPlot !== 1 && rightPlot !== 1 && curr !== 1) {
      flowerPlotted += 1;
      flowerbed[i] = 1;
    }
  }
  return n <= flowerPlotted;
};

let flowerbed = [0, 0, 0, 0, 0, 1, 0, 0],
  n = 0;

console.log(canPlaceFlowers(flowerbed, n));

/**
 * 

Here's the time and space complexity analysis for this solution:

1. **Time Complexity**:

   - The code includes a single loop that iterates through each plot in the flowerbed. The loop runs in O(m) time, where "m" is the length of the flowerbed.

   - Inside the loop, the following operations are performed:
     - Accessing elements in an array (e.g., `flowerbed[i - 1]`, `flowerbed[i + 1]`, `flowerbed[i]`) is a constant-time operation.

     - Comparison operations (`leftPlot !== 1`, `rightPlot !== 1`, `curr !== 1`) are also constant-time operations.

     - Incrementing the `flowerPlotted` variable and assigning a value to `flowerbed[i]` are constant-time operations.

   - Overall, the time complexity of the code is O(m), where "m" is the length of the flowerbed.

2. **Space Complexity**:

   - The code uses a constant amount of extra space. It doesn't create any additional data structures that scale with the size of the input.

   - The variables (`flowerPlotted`, `i`, `curr`, `leftPlot`, `rightPlot`) take up a constant amount of space and do not scale with the size of the input.

   Overall, the space complexity of the code is O(1), which means it uses a constant amount of extra space regardless of the size of the input.

In summary, the code efficiently determines if `n` flowers can be planted in the flowerbed by iterating through the plots and making necessary comparisons. The time complexity is O(m) and the space complexity is O(1), where "m" is the length of the flowerbed.

 */
