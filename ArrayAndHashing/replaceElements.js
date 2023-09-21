/**
 * @param {number[]} arr
 * @return {number[]}
 
 Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 */
const replaceElements = (arr) => {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let curr = arr[i];
    arr[i] = max;
    max = Math.max(max, curr);
  }
  return arr;
};

let arr = [17, 18, 5, 4, 6, 1];

console.log(replaceElements(arr));

/**
 * 

 >>>>>>>>>>>> Time complexity for this solution is O(n) and space complexity is O(1) <<<<<<<<<<<<<<<<<<<<<<<<,

1. **Time Complexity**:
   - The loop iterates through each element in the `arr` array once. This is a linear operation in terms of the size of the input array `arr`, so the time complexity is O(n), where "n" is the length of the `arr` array.

2. **Space Complexity**:
   - The function uses a constant amount of extra space throughout its execution. It only modifies the existing `arr` in-place and does not create any additional data structures that scale with the size of the input. Therefore, the space complexity is O(1), which means it uses a constant amount of extra space regardless of the size of the input.

In summary, the code has a time complexity of O(n) and a space complexity of O(1).

 */
