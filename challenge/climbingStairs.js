// Link: https://challenge.makerpass.com/c/4e60d87090e1a667f917edfd33c225f4

// Description:
// You are climbing a stair case. It takes n steps to reach to the top. Your solution will need to be optimized to run in O(n) time complexity.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Test Cases:
// climbStairs(0) => 0
// climbStairs(1) => 1
// climbStairs(5) => 8
// climbStairs(10) => 89

// Code:

// Iterative O(n)
const climbStairs = (n) => {
  let a = 1;
  let b = 0;
  while(n >= 0) {
    let temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
};

// Dynamic O(n)
const climbStairs = (n, memoized = {}) => {
  if(n < 3) { return n; }
  if(memoized[n]) return memoized[n];
  return memoized[n] = climbStairs(n - 1, memoized) + climbStairs(n - 2, memoized);
};