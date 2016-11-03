// Given an array of strings, return all strings concatenated together.

// DO NOT use strings.reduce() nor strings.join('')

// DO use a for loop.

// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

// Code:

const concatStrings = (strings) => {
  let result = "";
  strings.forEach(string => result += string);
  return result;
};