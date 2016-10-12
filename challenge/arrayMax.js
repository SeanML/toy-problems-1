// Link: https://challenge.makerpass.com/c/29971f4cd8d65b137daee4c6ff0f212a

// Description:
// Given an array of negative/positive integers, find the largest element. DO NOT use Math.max

// Test Cases:
// max([ 20, 30, 10 ] ) => 30
// max([ 5 ]  ) => 5

// Code:
const max = (numbers) => {
  let maxVal;
  numbers.forEach((num) => {
    if(!maxVal || num > maxVal) {
      maxVal = num;
    }
  });
  return maxVal;
}
