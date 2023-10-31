/**
 * @param {string} s
 * @return {number}

Given a string s, find the length of the longest 
substring
 without repeating characters.
 
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
 */

const lengthOfLongestSubstring = (s) => {
  let substring = "";
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    let existing = substring.indexOf(s[i]);
    if (existing !== -1) {
      longest = Math.max(longest, substring.length);
      substring = substring.slice(existing + 1);
    }

    substring += s[i];
  }

  return Math.max(longest, substring.length);
};

const lengthOfLongestSubstring2 = (s) => {
  let visitedStrings = [];
  let longestSubString = 0;

  for (let i = 0; i < s.length; i++) {
    if (visitedStrings.includes(s[i])) {
      longestSubString = Math.max(longestSubString, visitedStrings.length);
      const index = visitedStrings.indexOf(s[i]);
      visitedStrings.splice(0, index + 1);
    }
    visitedStrings.push(s[i]);
  }

  longestSubString = Math.max(longestSubString, visitedStrings.length);
  return longestSubString;
};

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

/**
 * 
1. **Time Complexity**:

   - The function uses a single loop that iterates through the input string `s`. This loop takes O(n) time, where "n" is the length of the input string.

   - Inside the loop, there is an operation to find the index of a character in the `substring` using `indexOf`. In the worst case, this operation can take up to O(m) time, where "m" is the length of the current `substring`.

   - The `substring.slice()` operation also takes O(m) time in the worst case, where "m" is the length of the current `substring`.

   - Overall, the time complexity is dominated by the loop, resulting in a time complexity of O(n^2) in the worst case.

2. **Space Complexity**:

   - The function uses two variables (`substring` and `longest`) to keep track of the current substring and the length of the longest substring found so far.

   - The size of the `substring` variable can grow up to the size of the input string in the worst case, which means it can take up to O(n) space.

   - The `longest` variable is a constant-sized variable, regardless of the input size.

   - Therefore, the space complexity of the code is O(n), indicating linear space usage.

In summary, the `lengthOfLongestSubstring` function finds the length of the longest substring without repeating characters in the input string. It has a time complexity of O(n^2) and a space complexity of O(n) in the worst case. This solution can be optimized further to achieve a more efficient time complexity.

 */
