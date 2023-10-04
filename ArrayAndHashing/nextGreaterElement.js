/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

 */

// The time complexity is O(m + n), and the space complexity is O(m), where "m" is the length of nums2 and "n" is the length of nums1.
const nextGreaterElement = (nums1, nums2) => {
  var hash = {};
  var stack = [];

  nums2.forEach((num) => {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      hash[stack.pop()] = num;
    }
    stack.push(num);
  });

  return nums1.map((num) => hash[num] || -1);
};

// The time complexity is O(m + n), and the space complexity is also O(m + n), where "m" is the length of nums2 and "n" is the length of nums1.
const nextGreaterElement2 = (nums1, nums2) => {
  const hashMap = new Map();
  const result = [];
  for (let i = 0; i < nums2.length; i++) {
    const nextElement = nums2[i + 1] || -1;
    const currElement = nums2[i];
    if (nextElement > currElement) {
      const storeVal = nextElement > currElement ? nextElement : -1;
      hashMap.set(currElement, storeVal);
    } else {
      let greaterElem = -1;
      for (let j = i + 1; j < nums2.length; j++) {
        if (nums2[j] > currElement) {
          greaterElem = nums2[j];
          break;
        }
      }
      hashMap.set(currElement, greaterElem);
    }
  }

  for (let num of nums1) {
    result.push(hashMap.get(num));
  }

  return result;
};

let nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));

/**
 * 
Here's the time and space complexity analysis for first solution:

1. **Time Complexity**:

   - The code includes two loops: one loop iterates through `nums2`, and the other loop iterates through `nums1`.

   - The first loop, iterating through `nums2`, takes O(m) time, where "m" is the length of `nums2`.

   - Inside this loop, the following operations are performed:
     - The while loop that pops elements from the `stack` runs in constant time for each iteration.

   - The second loop, iterating through `nums1`, takes O(n) time, where "n" is the length of `nums1`.

   - The `map` function and the lookup in the `hash` object are both constant-time operations.

   - Overall, the time complexity of the code is O(m + n), where "m" is the length of `nums2` and "n" is the length of `nums1`.

2. **Space Complexity**:

   - The code uses extra space to store a `hash` object and a `stack`.

   - The space used by the `hash` object is proportional to the number of elements in `nums2` that have a greater element to their right. In the worst case, this can be all elements of `nums2`.

   - The space used by the `stack` is proportional to the number of elements in `nums2` that have not yet found their next greater element.

   - Therefore, the space complexity of the code is O(m), where "m" is the length of `nums2`.

In summary, the code efficiently finds the next greater element for each element in `nums1` by iterating through `nums2` and using a stack and a hash map. The time complexity is O(m + n), and the space complexity is O(m), where "m" is the length of `nums2` and "n" is the length of `nums1`.The provided code implements an algorithm to find the next greater element for each element in `nums1` within the array `nums2`. The next greater element for a given element `x` is the first element to the right of `x` in `nums2` that is greater than `x`.

Here's the time and space complexity analysis for this solution:

1. **Time Complexity**:

   - The code includes two loops: one loop iterates through `nums2`, and the other loop iterates through `nums1`.

   - The first loop, iterating through `nums2`, takes O(m) time, where "m" is the length of `nums2`.

   - Inside this loop, the following operations are performed:
     - The while loop that pops elements from the `stack` runs in constant time for each iteration.

   - The second loop, iterating through `nums1`, takes O(n) time, where "n" is the length of `nums1`.

   - The `map` function and the lookup in the `hash` object are both constant-time operations.

   - Overall, the time complexity of the code is O(m + n), where "m" is the length of `nums2` and "n" is the length of `nums1`.

2. **Space Complexity**:

   - The code uses extra space to store a `hash` object and a `stack`.

   - The space used by the `hash` object is proportional to the number of elements in `nums2` that have a greater element to their right. In the worst case, this can be all elements of `nums2`.

   - The space used by the `stack` is proportional to the number of elements in `nums2` that have not yet found their next greater element.

   - Therefore, the space complexity of the code is O(m), where "m" is the length of `nums2`.

In summary, the code efficiently finds the next greater element for each element in `nums1` by iterating through `nums2` and using a stack and a hash map. The time complexity is O(m + n), and the space complexity is O(m), where "m" is the length of `nums2` and "n" is the length of `nums1`.

 */
