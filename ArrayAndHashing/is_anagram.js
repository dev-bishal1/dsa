/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

 */

// method 1
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  t = t.toLowerCase();
  s = s.toLowerCase();

  let resT = Array(26).fill(0);
  let resS = Array(26).fill(0);

  for (let i = 0; i < t.length; i++) resT[t.charCodeAt(i) - 97] += 1;

  for (let i = 0; i < t.length; i++) resS[s.charCodeAt(i) - 97] += 1;

  return JSON.stringify(resT) === JSON.stringify(resS);
};


// the time complexity for this method is O(n) and the space complexity is O(n);
const isAnagram2 = (s, t) => {
  if (s.length !== t.length) return false;

  const hashMap = new Map();
  for (let item of s) {
    hashMap.set(item, (hashMap.get(item) || 0) + 1);
  }

  for (let item of t) {
    const found = hashMap.get(item);
    switch (found) {
      case undefined:
      case 0:
        return false;
      default:
        hashMap.set(item, found - 1);
    }
  }
};

let s = "anagram",
  t = "nagaram";

console.log(isAnagram(s, t));

/**
>>>>>>>>>>>> Time complexity of the above `isAnagram` function is O(n), and the space complexity is O(1). <<<<<<

Here's the breakdown of why this is the case:

1. **Length Check:**
   ```javascript
   if (s.length !== t.length) return false;
   ```
   This step has a time complexity of O(1). It's a constant-time operation because it involves only a single comparison of the lengths of `s` and `t`.

2. **Convert strings to lowercase:**
   ```javascript
   t = t.toLowerCase();
   s = s.toLowerCase();
   ```
   These operations iterate through the characters of `s` and `t` once. Therefore, both of these have a time complexity of O(n), where "n" is the length of the longer of the two strings.

3. **Initialize result arrays:**
   ```javascript
   let resT = Array(26).fill(0);
   let resS = Array(26).fill(0);
   ```
   These operations have a time complexity of O(1) because they create fixed-size arrays (with size 26) and fill them with zeroes.

4. **Count character frequencies in `t` and `s`:**
   ```javascript
   for (let i = 0; i < t.length; i++) resT[t.charCodeAt(i) - 97] += 1;
   for (let i = 0; i < t.length; i++) resS[s.charCodeAt(i) - 97] += 1;
   ```
   Both of these loops iterate through the characters of their respective strings once. Therefore, both loops have a time complexity of O(n), where "n" is the length of the strings.

5. **Comparison and return:**
   ```javascript
   return JSON.stringify(resT) === JSON.stringify(resS);
   ```
   The `JSON.stringify` operation iterates through the elements of the arrays once, but since the arrays are of fixed size (26), this operation is considered to have a constant time complexity.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Regarding space complexity <<<<<<<<<<<<<<<<<<<<<<<,

1. **Additional Variables:**
   Apart from the input strings `s` and `t`, there are a few other variables in the code (e.g., `resT`, `resS`, `i`). These variables do not scale with the input size and remain constant regardless of the length of the strings. Therefore, the space complexity is O(1), which means it uses a constant amount of extra space regardless of the size of the input.

In summary, this code has a time complexity of O(n) due to the linear iterations through the strings and a space complexity of O(1) since it does not use any additional data structures that scale with the input size.

 */
