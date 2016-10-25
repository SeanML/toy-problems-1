// Given an input string, reverse the string word by word.

// For example,
// Given s = "the sky is blue",
// return "blue is sky the".

/**
 * @param {string} str
 * @returns {string}
 */
const reverseWords = (str) => {
  return str.split(' ').reverse().filter(word => word !== '').join(' ');
};