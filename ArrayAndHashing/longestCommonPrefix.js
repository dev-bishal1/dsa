/**
 * @param {string[]} strs
 * @return {string}
 * 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

 */

const longestCommonPrefix = (strs) => {
  if (!strs[0][0] || !strs.length) return "";
  let longerstCommonPrefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    if (strs.every((str) => str[i] == char)) {
      longerstCommonPrefix += char;
    } else break;
  }
  return longerstCommonPrefix;
};

const longestCommonPrefix2 = (strs) => {
  if (strs.length === 0) {
    return "";
  }

  strs.sort();

  const firstIndex = strs[0];
  const lastIndex = strs[strs.length - 1];

  let i = 0;

  while (
    i < firstIndex.length &&
    i < lastIndex.length &&
    firstIndex[i] === lastIndex[i]
  ) {
    i++;
  }

  return firstIndex.slice(0, i);
};

let strs = ["cir", "car"];
console.log(longestCommonPrefix2(strs));

/**
 * 
Here's the time and space complexity analysis of solution 1:

1. **Time Complexity**:

   - The loop iterates through the characters of the first string in `strs`. This loop takes O(m) time, where "m" is the length of the first string in `strs`.

   - Inside the loop, the `every` method is used to check if all strings in `strs` have the same character at the same position. This operation has a time complexity of O(n), where "n" is the number of strings in `strs`.

   - The overall time complexity of the code is O(m * n), where "m" is the length of the first string and "n" is the number of strings in `strs`.

2. **Space Complexity**:

   - The function uses a few variables (`longestCommonPrefix`, `i`, `char`) that take up a constant amount of space. They do not scale with the size of the input.

   - The function also creates a string `longestCommonPrefix` which can potentially store up to "m" characters in the worst case.

   - Therefore, the space used for the `longestCommonPrefix` string is O(m), where "m" is the length of the longest common prefix.

   Overall, the space complexity of the code is O(m), where "m" is the length of the longest common prefix.

In summary, the code has a time complexity of O(m * n) and a space complexity of O(m), where "m" is the length of the longest common prefix, and "n" is the number of strings in `strs`. It efficiently finds the longest common prefix by iterating through the characters and checking if they are common in all strings.

 */

/**
 
Here's the time and space complexity analysis:

1. **Time Complexity**:

   - Sorting the `strs` array using JavaScript's `.sort()` method takes O(n log n) time, where "n" is the number of strings in `strs`.

   - Finding the first and last strings in the sorted array (`strs[0]` and `strs[strs.length - 1]`) takes O(1) time.

   - The while loop iterates through the characters of the first and last strings. In the worst case, where both strings are identical, it will iterate through the length of the longest string. This loop has a time complexity of O(m), where "m" is the length of the longest string.

   Overall, the time complexity of the code is dominated by the sorting operation and is O(n log n), where "n" is the number of strings in `strs`.

2. **Space Complexity**:

   - The function uses a few variables (`firstIndex`, `lastIndex`, `i`) that take up a constant amount of space. They do not scale with the size of the input.

   - The function also creates a string `firstIndex` which is a copy of the first string in `strs`. It can potentially store up to "m" characters in the worst case.

   - Therefore, the space used for the `firstIndex` string is O(m), where "m" is the length of the longest string.

   Overall, the space complexity of the code is O(m), where "m" is the length of the longest string.

In summary, the code has a time complexity of O(n log n) and a space complexity of O(m), where "n" is the number of strings in `strs` and "m" is the length of the longest string. It efficiently finds the longest common prefix by sorting the strings and comparing characters.
 */
