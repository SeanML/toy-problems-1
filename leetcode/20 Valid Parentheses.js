// Description 
  // Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  // The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '{' || s[i] === '[' || s[i] === '(') {
      stack.push(s[i]);
    } else if(s[i] === '}' && stack[stack.length - 1] === '{') {
      stack.splice(stack.length - 1);
    } else if(s[i] === ']' && stack[stack.length - 1] === '[') {
      stack.splice(stack.length - 1);
    } else if(s[i] === ')' && stack[stack.length - 1] === '(') {
      stack.splice(stack.length - 1);
    } else {
      return false;
    }
  }

  return stack.length > 0 ? false: true;
};