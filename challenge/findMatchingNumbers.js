// Given an array of numbers, return all even numbers from the array.

// DO NOT use .filter() in your solution.

// DO use a for loop.

// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

// Code:

const findEven = (numbers) => {
  let result = [];
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) result.push(numbers[i]);
  }
  return result;
};