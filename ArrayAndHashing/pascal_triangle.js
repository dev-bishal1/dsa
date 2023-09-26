/**
 * @param {number} numRows
 * @return {number[][]}
 * Given an integer numRows, return the first numRows of Pascal's triangle.

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

 */

// Solution 1
const generate = (numRows) => {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    result[i] = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j] + result[i - 1][j - 1];
    }
  }
  return result;
};

// Solution 2
const generate3 = (numRows) => {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  const intialVal = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    let storeValue = [];
    for (let j = 0; j <= i; j++) {
      let currVal = (intialVal[i - 1][j - 1] || 0) + (intialVal[i - 1][j] || 0);
      storeValue.push(currVal);
    }
    intialVal.push(storeValue);
  }

  return intialVal;
};

let numRows = 5;
console.log(generate(numRows));

/**
Here's the time and space complexity analysis:

1. **Time Complexity**:

   - The outer loop iterates `numRows` times. This loop takes O(numRows) time.

   - The inner loop iterates up to `i` times, where `i` is the current row number. In each iteration, a constant-time operation (addition) is performed. The total number of iterations in all inner loops is approximately 1 + 2 + 3 + ... + `numRows`, which is approximately O(numRows^2) in terms of the number of elements in the result.

   Therefore, the overall time complexity of the code is O(numRows^2), where "numRows" is the input.

2. **Space Complexity**:

   - The `result` array stores all the rows of Pascal's triangle. In the worst case, it will have numRows arrays, each containing up to numRows elements. This results in a space complexity of O(numRows^2).

   - Within each row, a new array is created using `new Array(i + 1)`, which takes up O(i) space. Since this is done for each row, the space used for all these arrays is O(numRows^2).

   - The variables `i`, `j`, and `result` take up a constant amount of space and do not scale with the size of the input.

   Overall, the space complexity of the code is O(numRows^2), where "numRows" is the number of rows to generate in Pascal's triangle.

In summary, the code has a time complexity of O(numRows^2) and a space complexity of O(numRows^2), where "numRows" is the number of rows to generate in Pascal's triangle. The code efficiently generates the triangle using dynamic programming by populating each entry based on the entries in the previous row.


 */
