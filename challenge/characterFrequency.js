// Link: https://challenge.makerpass.com/c/619b43dbf94ddfcea714d2b28c8b6c93

// Description:
// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

// Test Cases:
// characterFrequency("aaabbc") => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// characterFrequency("mississippi") => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// characterFrequency("") => []

// Code:
const characterFrequency = (string) => {
  let result = [];
  let chars = {};
  string.split('').forEach((letter) => {
    chars[letter] ? chars[letter]++ : chars[letter] = 1;
  });

  for(let key in chars) {
    result.push([key, chars[key]]);
  }
  
  return result.sort((a, b) => {
    if(a[1] === b[1]) {
      if(a[0] > b[0]) {
        return 1;
      } else if(a[0] < b[0]) {
        return -1;
      }
      return 0;
    } else if(a[1] > b[1]) {
      return -1;
    }
    return 1;
  });
};