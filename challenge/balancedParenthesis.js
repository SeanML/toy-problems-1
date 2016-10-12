// Link: https://challenge.makerpass.com/c/10cf0a4f953fc83a977d456bd3abd6b4

// Description:
// Given a string, return true if it contains balanced parenthesis ().

// Test Cases:
// isBalanced("(x + y) - (4)" ) => true
// isBalanced("(((10 ) ()) ((?)(:)))" ) => true
// isBalanced("(50)(" ) => false
// isBalanced("") => true

// Code:
const isBalanced = (string) => {
  let stack = [];
  for(let i = 0; i < string.length; i++) {
    if(string[i] === '(') {
      stack.push(string[i]);
    }

    if(string[i] === ')') {
      if(stack[stack.length - 1] === '(') {
        stack.splice(stack.length - 1, 1);
      } else {
        return false;
      }
    }
  }

  if(stack.length > 0) return false;
  return true;
};