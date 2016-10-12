// Link: https://challenge.makerpass.com/c/e827af0e0761955bfd951e4cd01d6bed

// Description:
// Given an array of negative/positive integers, return the element in the center position of the array.

// If the array has an even number of elements, return the average of the two middle elements instead.

// Test Cases:
// middle([ 200, 5, 100 ] ) => 5
// middle([ 10, 20, 30, 40 ] ) => 25

// Code:
const middle = (numbers) => {
  let len = numbers.length;
  return len % 2 !== 0 ? numbers[Math.floor(len / 2)] : (numbers[len / 2] + numbers[len / 2 - 1]) / 2;
};