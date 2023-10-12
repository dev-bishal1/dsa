/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

 */

const topKFrequent = (nums, k) => {
  const hashMap = new Map();
  const result = [];

  for (let num of nums) {
    hashMap.set(num, (hashMap.get(num) || 0) + 1);
  }
  const store = [...hashMap.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k && i < store.length; i++) {
    result.push(store[i][0]);
  }

  return result;
};

let nums = [1, 1, 1, 2, 2, 2, 2, 3],
  k = 2;
console.log(topKFrequent(nums, k));

/**
 * 
Here's the time and space complexity analysis for this solution:

1. **Time Complexity**:

   - The first loop iterates through each element in the `nums` array and performs constant-time operations such as map lookup and update. This loop runs in O(n) time, where "n" is the length of the input array `nums`.

   - The step of creating the `store` array involves converting the `hashMap` to an array of entries and then sorting it. Converting the map to an array takes O(n) time, and sorting the array takes O(n log n) time.

   - The second loop iterates up to `k` times or until the end of the `store` array, whichever comes first. This loop runs in O(k) time.

   - Therefore, the overall time complexity of the code is O(n + n + n log n + k), which simplifies to O(n log n), where "n" is the length of the input array `nums`.

2. **Space Complexity**:

   - The code uses extra space to store a `hashMap`, a `store` array, and a `result` array.

   - The space used by the `hashMap` is proportional to the number of unique elements in `nums`. In the worst case, if all elements are unique, this can be "n".

   - The space used by the `store` array is also proportional to the number of unique elements in `nums`, which can be at most "n".

   - The space used by the `result` array is proportional to the value of `k`.

   - Therefore, the space complexity of the code is O(n + n + k), which simplifies to O(n + k), where "n" is the length of the input array `nums` and "k" is the input parameter.

In summary, the code efficiently finds the top k frequent elements using a HashMap to count frequencies and then sorting the entries. The time complexity is O(n log n), and the space complexity is O(n + k), where "n" is the length of the input array `nums` and "k" is the input parameter.

 */
