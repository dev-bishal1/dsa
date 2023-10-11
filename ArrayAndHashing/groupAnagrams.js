/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

 */

const groupAnagrams = (strs) => {
  const hashMap = new Map();

  for (let str of strs) {
    const curr = str.split("").sort().join("");
    if (hashMap.has(curr)) {
      const value = hashMap.get(curr);
      value.push(str);
    } else {
      hashMap.set(curr, [str]);
    }
  }
  return [...hashMap.values()];
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

/**
Here's the time and space complexity analysis for this solution:

1. **Time Complexity**:

   - The code iterates through each string in the `strs` array in a loop. For each string, it performs the following operations:
   
     - Splitting the string into an array of characters takes O(k) time, where "k" is the length of the string.

     - Sorting the characters takes O(k log k) time due to the sorting operation.

     - Joining the sorted characters back into a string takes O(k) time.

     - The overall time complexity for processing one string is O(k + k log k + k), which simplifies to O(k log k), where "k" is the average length of the strings.

   - Since the loop iterates through all strings in `strs`, the time complexity for the entire loop is O(n * k log k), where "n" is the number of strings and "k" is the average length of the strings.

   - The `hashMap.has(curr)` operation, `hashMap.get(curr)`, and `hashMap.set(curr, [str])` are constant-time operations.

   - Overall, the time complexity of the code is O(n * k log k), where "n" is the number of strings and "k" is the average length of the strings.

2. **Space Complexity**:

   - The code uses extra space to store a `hashMap`.

   - The space used by the `hashMap` is proportional to the number of unique anagram patterns. In the worst case, if all strings are unique anagrams, this can be "n".

   - Additionally, the space used to store the output (grouped anagrams) is also included in the space complexity.

   - Therefore, the space complexity of the code is O(n * k), where "n" is the number of strings and "k" is the average length of the strings.

In summary, the code efficiently groups anagrams by converting each string into a sorted pattern. The time complexity is O(n * k log k), and the space complexity is O(n * k), where "n" is the number of strings and "k" is the average length of the strings.

 */
