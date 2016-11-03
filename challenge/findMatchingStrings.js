// Given a length (number) and an array of strings, return all strings that are greater than or equal to the given length.

// DO NOT use .filter() in your solution.

// DO use a for loop.

// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

// Code:

const filterLength = (length, array) => {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i].length >= length) result.push(array[i]);
  }
  return result;
};