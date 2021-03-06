// Link: https://challenge.makerpass.com/c/3261321e9a43452201a25fe4a8ecf785

// Description:

// Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

// Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

// Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number. (You should return all permutations, not only English words.)

// Test Cases:
// telephoneWords("00002") => [ "000A", "000B", "000C" ]
// telephoneWords("1123") => [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ] 

// Code:

const keyPad = ["0", "1", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
const telephoneWords = (str) => {
  str = str.split('');
  let results = [];
  const recurse = (char, combination, index) => {
    if(combination.length === str.length) {
      results.push(combination);
      return;
    }
    
    for(let i = 0; i < keyPad[Number(char)].length; i++) {
      recurse(str[index + 1], combination + keyPad[char][i], index + 1);
    }
  };
  
  recurse(str[0], '', 0);
  return results;
};
