// Link: https://challenge.makerpass.com/c/53a36a8acc2ec8eff80a071d870462e6

// Description:
// Given two strings, return true if one string is an anagram of another.

// Test Cases:
// isAnagram("silent","listen" ) => true
// isAnagram("torchwood", "doctor who") => true
// isAnagram("why?","why not?") => false

// Code:
const isAnagram = (a, b) => {
  const formatWord = word => {
    return word.replace(' ', '').split('').sort().join('').toLowerCase();
  }
  return formatWord(a) === formatWord(b);
};