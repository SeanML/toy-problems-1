// Link: https://challenge.makerpass.com/c/2b7ef4cf4f23dcf9585d075a4844826d

// Description:
// Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

// Test Cases:
// isBalanced("(x + y) - (4)" ) => true
// isBalanced("(x + y) - (4)" ) => true
// isBalanced("(((10 ) ()) ((?)(:)))" ) => true
// isBalanced("(50)(") => false
// isBalanced("[{]}") => false

// Code:

const isBalanced = (str) => {
  let stack = [];
  const bracks = { '{' : '}', '[' : ']', '(' : ')' };
  const closedBracks = { '}' : '{', ']':'[', ')': '(' };

  for(let i = 0; i < str.length; i++) {
    if(bracks.hasOwnProperty(str[i])) {
      stack.push(str[i]);
    }

    if(closedBracks.hasOwnProperty(str[i])) {
      if(stack[stack.length - 1] === closedBracks[str[i]]) {
        stack.splice(stack.length - 1, 1);
      } else {
        return false;
      }
    }
  }

  if(stack.length > 0) return false;
  return true;
};

