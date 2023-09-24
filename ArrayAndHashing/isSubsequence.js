/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

 */

// this is two pointer solution
const isSubsequence = (s, t) => {
  let sPointer = 0;
  let tPointer = 0;

  while (sPointer < s.length && tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }
    tPointer++;
  }

  return sPointer === s.length;
};

const isSubsequence2 = (s, t) => {
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) {
      j++;
    }
  }
  return j === s.length;
};

let s = "ace",
  t = "abcde";

console.log(isSubsequence(s, t));

/**
The provided code defines a function `isSubsequence` that checks if a given string `s` is a subsequence of another string `t`.

Here's the time and space complexity analysis:

1. **Time Complexity**:

   The time complexity of this code is O(min(s, t)), where "s" and "t" are the lengths of the input strings.

   - The `while` loop iterates through both strings at the same time. It continues as long as there are characters to compare in both strings.
   
   - In each iteration, a constant number of operations are performed (comparisons and increments). This results in a linear time complexity relative to the length of the shorter string.

   - The loop terminates when either `sPointer` reaches the end of `s` (indicating that `s` is a subsequence of `t`) or when both pointers reach the end of their respective strings.

   - In the worst case, if `s` is longer than `t`, the time complexity would be O(t), and vice versa.

2. **Space Complexity**:

   The space complexity of this code is O(1).

   - The function uses a constant amount of extra space, regardless of the size of the input strings.

   - It only creates two pointers (`sPointer` and `tPointer`) and a few integer variables. These variables do not scale with the size of the input strings, so they do not contribute significantly to the overall space complexity.

In summary, the code has a time complexity of O(min(s, t)) and a space complexity of O(1). It efficiently determines if `s` is a subsequence of `t` by iterating through both strings concurrently.

 */
