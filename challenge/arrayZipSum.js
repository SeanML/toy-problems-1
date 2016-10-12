// Link: https://challenge.makerpass.com/c/31e70994c4e4734a5792a3ff7ba85f8c

// Description:
// Given two arrays of negative/positive integers, return a new array such that each element at index n is the sum of the two elements from the other arrays at their index n’s.

// Test Cases:
// zipSum([ 10, 20, 30 ], [ 1, 2, 3 ] ) => [ 11, 22, 33 ]
// zipSum([ 100, 1 ], [ 50, 5 ] ) => [ 150, 6 ]
// zipSum([ 10, 20, 30 ], [ 1, 2 ]  ) => [ 11, 22 ]
// zipSum([ 10, 20 ], [ 1, 2, 3 ] ) => [ 11, 22 ]

// Code:

// Naive
const zipSum = (xs, ys) => {
  let result = [];
  for(let i = 0; i < Math.min(xs.length, ys.length); i++) {
    result[i] = xs[i] + ys[i];
  }
  return result;
};

// Fancy
const zipSum = (xs, ys) => {
  return xs.slice(0, ys.length).map((num, i) => {
    return num + ys[i];
  });
};