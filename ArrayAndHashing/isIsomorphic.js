/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

 */

// method 1
const isIsomorphic = (s, t) => {
  for (let i = 0; i < s.length; i++) {
    const sIndex = s.indexOf(s[i], i + 1);
    const tIndex = t.indexOf(t[i], i + 1);
    if (sIndex !== tIndex) return false;
  }
  return true;
};

// method 2
const isIsomorphic2 = (s, t) => {
  if (s.length !== t.length) return false;

  const hashMapT = new Map();
  const hashMapS = new Map();
  for (let i = 0; i < s.length; i++) {
    let currT = t[i];
    let currS = s[i];
    const valS = hashMapS.get(currS);
    if (valS) {
      if (valS !== currT) {
        return false;
      }
    } else {
      const valT = hashMapT.get(currT);
      if (valT) {
        if (valT !== currS) return false;
      }
      hashMapS.set(currS, currT);
      hashMapT.set(currT, currS);
    }
  }

  return true;
};

let s = "paper",
  t = "titte";

console.log(isIsomorphic(s, t));

/**

Here's the time and space complexity analysis for this solution 1:

1. **Time Complexity**:

   - The outer loop iterates through each character of the string `s`. In the worst case scenario, it will iterate through the entire length of `s`, which takes O(n) time, where "n" is the length of the string `s`.

   - Inside the loop, the `indexOf` method is called twice for both `s` and `t`. The `indexOf` method searches for the first occurrence of a character starting from a specified index. In the worst case, where there are no repeated characters, it takes O(n) time. Since it's called within a loop that iterates through `s`, this leads to a worst-case time complexity of O(n^2).

   - The comparison `sIndex !== tIndex` is a constant-time operation.

   - Overall, the time complexity of the code is O(n^2) in the worst case, where "n" is the length of the string `s`.

2. **Space Complexity**:

   - The function uses a constant amount of extra space. It doesn't create any additional data structures that scale with the size of the input.

   - The variables (`i`, `sIndex`, `tIndex`) and loop control variable (`i`) take up a constant amount of space.

   Overall, the space complexity of the code is O(1), which means it uses a constant amount of extra space regardless of the size of the input.

In summary, the code has a time complexity of O(n^2) and a space complexity of O(1), where "n" is the length of the string `s`. The code attempts to determine if `s` and `t` are isomorphic by comparing the positions of characters in both strings. However, this solution is not as efficient as other possible approaches for this task.
 */

/**

Here's the time and space complexity analysis for this solution 2:

1. **Time Complexity**:

   - The code includes a single loop that iterates through the characters of both `s` and `t`. Since the lengths of `s` and `t` are equal (as checked in the beginning), this loop runs in O(n) time, where "n" is the length of either `s` or `t`.

   - Inside the loop, the following operations are performed:
     - The `get` method for a `Map` has an average-case time complexity of O(1). It's used twice for both `hashMapS` and `hashMapT`, so these operations contribute to O(4) = O(1) time complexity.

   - The conditional checks and assignments within the loop are constant-time operations.

   - Overall, the time complexity of the code is O(n), where "n" is the length of either `s` or `t`.

2. **Space Complexity**:

   - The code uses two `Map` data structures, `hashMapS` and `hashMapT`, which can each potentially store up to "n" unique mappings. In the worst case scenario where all characters are unique, these `Map` structures could contain "n" entries each.

   - The space used by these `Map` data structures is proportional to the number of unique characters in `s` and `t`.

   - The variables `hashMapS`, `hashMapT`, `currT`, `currS`, `valS`, and `valT` take up a constant amount of space and do not scale with the size of the input.

   Overall, the space complexity of the code is O(n), where "n" is the length of either `s` or `t`.

In summary, the code has a time complexity of O(n) and a space complexity of O(n), where "n" is the length of either `s` or `t`. The code efficiently checks if `s` and `t` are isomorphic by using two `Map` data structures to track the character mappings.
 */
