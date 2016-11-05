// Given a string, remove any characters that are not unique from the string.

// Code:
const onlyUnique = (str) => {
  let result = "";
  str.split('').forEach((ele, i, arr) => {
    if(arr.indexOf(ele) === arr.lastIndexOf(ele)) {
      result += ele;
    }  
  })
  return result;
};