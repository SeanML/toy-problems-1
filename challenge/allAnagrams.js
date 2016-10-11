// Link: https://challenge.makerpass.com/c/df608f8fbcc905b9e6628090028ee02a

// Description:
// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

// Parameters:

// string (required) - a string of characters.

// Test Cases:
// allAnagrams("abc") => [ "abc", "acb", "bac", "bca", "cab", "cba" ]

// Code:
const allAnagrams = (string) => {
  let strArr = string.split('');
  let result = [];

  const permute = (str, sliced) => {
    if(str.length === strArr.length) {
      if(!result.includes(str)) result.push(str);
      return;
    }

    for(let i = 0; i < sliced.length; i++) {
      let temp = sliced[i];
      let copy = sliced.slice();
      copy.splice(i, 1);
      permute(str + temp, copy);
    }
  }

  permute('', strArr);
  return result;
}