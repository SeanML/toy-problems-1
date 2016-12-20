// You are given an array of numbers that each represent the height of an adjoining building. During torrential rain, water collects in the spaces between buildings. What is the maximum amount of water collected by the buildings represented by the array?

// Explanation:
// An input of [3,0,3] can be visualized as such:

//  __    __
// |  |//|  |
// |  |//|  |
// |  |//|  |
// ‾‾‾‾‾‾‾‾‾‾
// The area of water in the above picture (and the result of calling volume([3,0,3])) is 3.

// Challenge: do this in O(n) with < 2 pass-throughs

// Code:

// Naive (O(n^2)):

const volume = (heights) => {
  let vol = 0;
  for(let i = 0; i < heights.length; i++) {
    let leftMax = 0;
    let rightMax = 0;
    for(let j = i - 1; j >= 0; j--) {
      if(heights[j] > leftMax) leftMax = heights[j];
    }
    for(let k = i + 1; k < heights.length; k++) {
      if(heights[k] > rightMax) rightMax = heights[k];
    }
    if(Math.min(leftMax, rightMax) - heights[i] > 0) {
     vol += Math.min(leftMax, rightMax) - heights[i]; 
    }
  }
  return vol;
};


