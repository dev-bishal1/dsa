/**
 * @param {number[]} nums
 * @return {boolean}
 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:

Input: nums = [1,2,3,1]
Output: true

 */

// method 1 using hash map
const containsDuplicate = (nums) => {
  const hashMap = new Map();
  for (let item of nums) {
    if (hashMap.has(item)) return true;
    hashMap.set(item, item);
  }
  return false;
};

// method 2 using indexOf built in method of js
// this method is not efficient for large array because it has a time complexity of O(n)^2
// but this method is best for space complexity becuase it has a constant space complexity which is O(1)
const containsDuplicate2 = (nums) => {
  // this methods works because indexOf method return the index of the first occurence of that element from the array
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) return true;
  }
  return false;
};

const nums = [0, 2, 3, 0];
console.log(containsDuplicate(nums));

// >>>>>>>>>>>>>>>>>>>>>>>>>> Time Complexity for above method 1 is O(n) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/**
 
The time complexity of the method 1 is O(n), where "n" is the number of elements in the `nums` array.

Here's the breakdown of why this is the case:

1. **Iterating through the `nums` array:** The loop `for (let item of nums)` iterates through each element in the array once. This operation takes O(n) time, where "n" is the number of elements in the array.

2. **Map operations:** Inside the loop, there are two operations involving the `Map`:

   - `hashMap.has(item)`: This operation takes O(1) time on average. Checking if a key is present in a `Map` is an efficient operation.

   - `hashMap.set(item, item)`: This operation also takes O(1) time on average. Setting a key-value pair in a `Map` is also an efficient operation.

3. **Overall analysis:** Since the loop iterates through the entire array once, and the operations inside the loop (checking if a key is present and setting a key-value pair in a `Map`) are both O(1), the overall time complexity is O(n).

The `Map` data structure plays a crucial role in achieving this time complexity. It allows for efficient lookup and insertion operations, which keeps the overall time complexity linear in relation to the size of the input array.

 */

// >>>>>>>>>>>>>>>>>>>>>>>> Space Complexity for above method 1 is O(n) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/**
 The space complexity of the method 1 is O(n), where "n" is the number of elements in the `nums` array.

Here's the breakdown of why this is the case:

1. **HashMap (`hashMap`):** In the code, a `Map` data structure is used to keep track of unique elements in the `nums` array. The space occupied by the `Map` is directly proportional to the number of unique elements in the array. In the worst case scenario, where all elements in `nums` are unique, the `Map` will have "n" key-value pairs. Therefore, the space occupied by `hashMap` is O(n).

2. **Additional Variables:** Apart from the `hashMap`, there are a few other variables in the code, but they do not scale with the input size. These include the loop variable `item`, which is a single element from the `nums` array, and any loop control variables. These variables do not contribute significantly to the overall space complexity.

3. **Overall analysis:** Since the primary data structure that consumes space is the `Map`, and its space is directly proportional to the number of unique elements in `nums`, the space complexity is O(n).

It's important to note that space complexity analysis typically focuses on how the memory usage grows relative to the size of the input. In this case, the space used by the `Map` scales with the number of unique elements, which is why the space complexity is O(n).
 */
