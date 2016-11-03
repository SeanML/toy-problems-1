// Given an array of arrays, return those arrays concatenated together.

// DO NOT use arrays.reduce() or Function.prototype.apply

// DO use a for loop.

// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

// Code:

const concatArrays = (arrays) => {
  let result = [];
  arrays.forEach(arr => {
    arr.forEach(ele => result.push(ele));
  });
  return result;
};