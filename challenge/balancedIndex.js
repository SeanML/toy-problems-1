// Given an array of numbers, return the index in the array such that the sum of all values to the left is equal to the sum of all values to the right.

// Challenge: Do this in less than O(2n) time.

// Code:
const balancedIndex = (nums) => {
  if(nums.length <= 1) return -1;
  for(let i = 0; i < nums.length; i++) {
    let left = nums.slice(0, i);
    let right = nums.slice(i + 1);
    let leftSum = left.reduce((a,b) => a + b, 0);
    let rightSum = right.reduce((a,b) => a + b);
    if(leftSum === rightSum) return i;
  }
  return -1;
};