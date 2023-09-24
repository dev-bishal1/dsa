/**
 * @param {string} s
 * @return {number}
 * 
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

 */

//  Time And Space Complexity of method 1 is O(n)
const lengthOfLastWord = (s) => {
  const words = s.trim().split(" ");
  return words[words.length - 1].length;
};

//  Time Complexity of method 2 is O(n) and Space Complexity is O(1)
const lengthOfLastWord2 = (s) => {
  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (result === 0) continue;
      else break;
    } else {
      result++;
    }
  }

  return result;
};

let s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Time And Space Complexity of method 1 is O(n) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/**
 * The provided code defines a function `lengthOfLastWord` that calculates the length of the last word in a string `s`.

Here's the time and space complexity analysis:

1. **Time Complexity**:

   - `s.trim()`: Trimming whitespace from the beginning and end of `s` takes O(n) time, where "n" is the length of the input string `s`.

   - `s.split(" ")`: Splitting the string into an array of words based on spaces takes O(m) time, where "m" is the number of words in the string. In the worst case, where `s` contains only spaces or no spaces at all, the number of words can be proportional to the length of `s`.

   - Accessing `words[words.length - 1]` takes O(1) time because it involves indexing an array, which is a constant-time operation.

   Overall, the time complexity of the code is O(n + m), where "n" is the length of the input string `s` and "m" is the number of words in `s`.

2. **Space Complexity**:

   - `s.trim()`: This creates a new string (since strings are immutable in JavaScript) with leading and trailing whitespace removed. The space used for this operation is O(n), where "n" is the length of the input string `s`.

   - `s.split(" ")`: This creates an array of words. In the worst case, where `s` contains only spaces or no spaces at all, the number of words can be proportional to the length of `s`. Therefore, the space used for this operation is O(m), where "m" is the number of words.

   - `words`: The array `words` stores the individual words. Its space usage is proportional to the number of words, which can be at most the length of `s`. Therefore, the space used for `words` is O(m) in the worst case.

   Overall, the space complexity of the code is O(n + m), where "n" is the length of the input string `s` and "m" is the number of words.

In summary, the code has a time complexity of O(n + m) and a space complexity of O(n + m), where "n" is the length of the input string `s` and "m" is the number of words in `s`.
 */





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>> Time Complexity of method 2 is O(n) and Space Complexity is O(1) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/**
 * The provided code defines a function `lengthOfLastWord2` that calculates the length of the last word in a string `s`.

Here's the time and space complexity analysis:

1. **Time Complexity**:

   - The loop iterates through the characters of the string `s` once, starting from the end and moving towards the beginning. This loop takes O(n) time, where "n" is the length of the input string `s`.

   - Inside the loop, the operations performed (comparisons, increments, and conditional checks) are all constant-time operations.

   Overall, the time complexity of the code is O(n), where "n" is the length of the input string `s`.

2. **Space Complexity**:

   - The variable `result` is a single integer variable, which takes up a constant amount of space. It does not scale with the size of the input string `s`. Therefore, it contributes O(1) to the space complexity.

   - The loop variable `i` and any loop control variables also take up a constant amount of space.

   Overall, the space complexity of the code is O(1), which means it uses a constant amount of extra space regardless of the size of the input.

In summary, the code has a time complexity of O(n) and a space complexity of O(1), where "n" is the length of the input string `s`. It efficiently determines the length of the last word by iterating through the characters of the string.
 */
