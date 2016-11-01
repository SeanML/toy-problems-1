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
  let available = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const combinations = (sum, currArr, index) => {
    let newAvail = null;
    if(sum === n && currArr.length === k) {
      newAvail = currArr.slice();
      result.push(newAvail);
      return;
    }
    if(sum > n || currArr.length > k || index + 1 >= available.length) {
      return;
    }
    for(let i = index + 1; i < available.length; i++) {
      newAvail = currArr.slice();
      newAvail.push(available[i]);
      combinations(sum + available[i], newAvail, i);
    }
  };

  combinations(0, [], -1);
  return result;
};