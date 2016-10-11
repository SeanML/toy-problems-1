// Link: https://challenge.makerpass.com/c/1a3561fb38b3d79dcb48c60ae7b3ea76

// Description:
// Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.

// Test Cases:
// alphaCount("aBc", "aabbccdd" ) => "a:2,b:2,c:2"
// alphaCount("x", "Racer X is my friend :)" ) => "a:2,b:2,c:2"
// alphaCount("123", "o hai"   ) => "no matches"


// Code:
const alphaCount = (alphabet, text, found = false) => {
  alphabet = alphabet.toLowerCase();
  text = text.toLowerCase();
  let result = [];
  for(let i = 0; i < alphabet.length; i++) {
    let tuple = {};
    tuple[alphabet[i]] = 0;
    result.push(tuple)
  }

  for(i = 0; i < text.length; i++) {
    let index = alphabet.indexOf(text[i]);
    if(index >= 0) {
      result[index][text[i]]++;
      found = true;
    }
  }
  
  result = result.map((i) => {
    return i[Object.keys(i)] > 0 ? Object.keys(i) + ':' + i[Object.keys(i)] : null;
  }).filter((item) => {
    return item ? true : false;
  });

  return found ? result.join(',') : 'no matches';
};