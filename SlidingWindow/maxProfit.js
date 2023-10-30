/**
 * @param {number[]} prices
 * @return {number}
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

const maxProfit = (prices) => {
  let stockPrice = prices[0];
  let highestProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - stockPrice;
    highestProfit = Math.max(profit, highestProfit);
    stockPrice = Math.min(stockPrice, prices[i]);
  }

  return highestProfit;
};

const maxProfit2 = (prices) => {
  let curr = 0;
  let next = 1;
  let highestProfit = 0;

  while (next < prices.length) {
    highestProfit = Math.max(highestProfit, prices[next] - prices[curr]);
    if (prices[curr] > prices[next]) {
      curr = next;
    }
    next++;
  }
  return highestProfit;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));

/**

1. **Time Complexity**:

   - The function uses a single loop that iterates through the `prices` array once, starting from the second element (`i = 1`) and continuing until the last element. This loop takes O(n) time, where "n" is the length of the `prices` array.

   - Inside the loop, there are constant-time operations (subtraction, comparison, and assignment) that do not depend on the size of the input. These operations do not contribute to the overall time complexity.

   - Therefore, the dominant factor in the time complexity is the single loop, resulting in a time complexity of O(n).

2. **Space Complexity**:

   - The function uses a constant amount of extra space regardless of the input size. It only creates three variables (`stockPrice`, `highestProfit`, and `i`) to keep track of the minimum stock value, maximum profit, and loop index.

   - As the input size increases, the amount of memory used by the function remains constant.

   - Therefore, the space complexity of the code is O(1), indicating constant space usage.

In summary, the `maxProfit` function efficiently finds the maximum profit that can be obtained from a series of stock prices. It has a time complexity of O(n) and a space complexity of O(1), making it an efficient solution for this problem.
 */
