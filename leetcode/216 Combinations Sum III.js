// Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

// Example 1:

// Input: k = 3, n = 7

// Output:

// [[1,2,4]]

// Example 2:

// Input: k = 3, n = 9

// Output:

// [[1,2,6], [1,3,5], [2,3,4]]

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 
const combinationSum3 = (k, n) => {
  let result = [];
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const recurse = (sum, arr, index) => {
    let sumArr = null;
    if(sum === n && arr.length === k) {
      result.push(arr);
      return;
    }
    if(sum > n || arr.length > k || index + 1 >= nums.length) {
      return;
    }
    for(let i = index + 1; i < nums.length; i++) {
      sumArr = arr.slice();
      sumArr.push(nums[i]);
      recurse(sum + nums[i], sumArr, i);
    }
  };

  recurse(0, [], -1);
  return result;
};