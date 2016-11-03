// Given an array of numbers, return the sum of those numbers.

// DO NOT use numbers.reduce()

// DO use a for loop.

// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

// Code:

const sum = (numbers) => {
  let result = 0;
  numbers.forEach(num => result += num);
  return result;
}