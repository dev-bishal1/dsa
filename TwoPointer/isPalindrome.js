/**
 * @param {string} s
 * @return {boolean}

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

 */

const isPalindrome = (s) => {
  const newString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (newString.length === 0) return true;

  let left = 0;
  let right = newString.length - 1;

  while (left < right) {
    if (newString[left] !== newString[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
};

const word = "A man, a plan, a canal: Panamaa";

console.log(isPalindrome(word));

/**
 * 
Here's the time and space complexity analysis for this solution:

1. **Time Complexity**:

   - The first operation involves creating a new string (`newString`) by removing non-alphanumeric characters and converting it to lowercase. This operation is performed once and takes O(n) time, where "n" is the length of the input string `s`.

   - The subsequent operations involve two pointers (`left` and `right`) that start at opposite ends of the `newString` and move towards each other. The loop continues until `left` is less than `right`.

     - Each comparison of characters (`newString[left] !== newString[right]`) is a constant-time operation.

     - Moving the pointers (`left += 1` and `right -= 1`) is also a constant-time operation.

   - The loop runs at most until the midpoint of the string, which takes O(n/2) time in the worst case.

   - Overall, the time complexity of the code is O(n), where "n" is the length of the input string `s`.

2. **Space Complexity**:

   - The code creates a new string (`newString`) that is a modified version of the input string `s`. The length of `newString` can be at most equal to the length of `s`.

   - Therefore, the space complexity of the code is O(n), where "n" is the length of the input string `s`.

In summary, the code efficiently checks if a string is a palindrome after removing non-alphanumeric characters and ignoring case. The time complexity is O(n), and the space complexity is also O(n), where "n" is the length of the input string `s`.
 */
