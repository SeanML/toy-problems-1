// You are given an array of numbers and a target value. Return the indices of the first two numbers within the array that add up to the target value as a tuple, and an empty array if no such numbers exist.

// e.g. twoSum([1,2,3,4], 5) should return [1,2] rather than [0,3].

// Challenge: Complete this in O(n) time in one pass through.

// Code:

const twoSum = (array, target) => {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === target) {
        if(result.length === 0 || j < result[1]) result = [i, j];
      }
    }
  }
  return result;
};